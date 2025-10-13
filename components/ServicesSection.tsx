import { client } from "@/sanity/lib/client";
import {
  servicesByCategoryQuery,
  categoryBySlugQuery,
} from "@/sanity/lib/queries";
import ServicesSectionClient from "./ServicesSectionClient";
import { cn } from "@/lib/utils";

interface Service {
  _id: string;
  slug: string;
  title: {
    bg: string;
    en: string;
  };
  excerpt?: {
    bg?: string;
    en?: string;
  };
}

interface Category {
  _id: string;
  slug: string;
  title: {
    bg: string;
    en: string;
  };
}

interface ServicesSectionProps {
  locale?: string;
  category?: string;
  currentSlug?: string;
  className?: string;
}

/**
 * Server component that fetches services data from Sanity
 * Passes data to client component for rendering with animations
 *
 * This separation allows:
 * - Server-side data fetching (fast, no client-side waterfalls)
 * - Client-side animations (motion, carousel)
 * - No infinite re-fetch loops
 */
export default async function ServicesSection({
  locale = "bg",
  category,
  currentSlug,
  className,
}: ServicesSectionProps) {
  // If no category is provided, don't render the section
  if (!category) {
    return null;
  }

  try {
    // Fetch services and category data on the server
    const [services, categoryData] = await Promise.all([
      client.fetch<Service[]>(
        servicesByCategoryQuery,
        { categorySlug: category },
        { cache: "no-store" },
      ),
      client.fetch<Category>(
        categoryBySlugQuery,
        { slug: category },
        { cache: "no-store" },
      ),
    ]);

    // Handle missing data
    if (!services || !categoryData) {
      console.warn(`ServicesSection: Missing data for category ${category}`);

      if (process.env.NODE_ENV === "development") {
        return (
          <section className={cn("bg-white py-16", className)}>
            <div className="mx-auto max-w-7xl px-6">
              <div className="rounded-lg border-2 border-dashed border-gray-300 p-8 text-center">
                <p className="text-gray-500">
                  ServicesSection: No services found in Sanity for category "
                  {category}".
                  <br />
                  Please import services using the import script.
                </p>
              </div>
            </div>
          </section>
        );
      }
      return null;
    }

    // Filter out the current service
    const filteredServices = services.filter(
      (service) => service.slug !== currentSlug,
    );

    // Don't render if there are no other services in this category
    if (filteredServices.length === 0) {
      if (process.env.NODE_ENV === "development") {
        return (
          <section className={cn("bg-white py-16", className)}>
            <div className="mx-auto max-w-7xl px-6">
              <div className="rounded-lg border-2 border-dashed border-yellow-300 bg-yellow-50 p-8 text-center">
                <p className="text-gray-700">
                  <strong>ServicesSection:</strong> No other services found in
                  category "{category}" besides "{currentSlug}".
                  <br />
                  <span className="text-sm">
                    Total services in category: {services.length}
                    <br />
                    Please import more services to this category in Sanity.
                  </span>
                </p>
              </div>
            </div>
          </section>
        );
      }
      return null;
    }

    const categoryTitle =
      categoryData?.title?.[locale as "bg" | "en"] ||
      categoryData?.title?.bg ||
      "";

    // Pass data to client component for rendering
    return (
      <ServicesSectionClient
        services={filteredServices}
        categoryTitle={categoryTitle}
        categorySlug={category}
        locale={locale}
        className={className}
      />
    );
  } catch (error) {
    console.error("ServicesSection: Error fetching data", error);
    return null;
  }
}
