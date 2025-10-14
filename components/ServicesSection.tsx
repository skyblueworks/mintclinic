import { client } from "@/sanity/lib/client";
import {
  servicesByCategoryQuery,
  servicesListQuery,
  categoryBySlugQuery,
} from "@/sanity/lib/queries";
import ServicesSectionClient from "./ServicesSectionClient";
import { cn } from "@/lib/utils";
import type { Service, Category } from "@/types/service";

interface ServicesSectionProps {
  locale?: string;
  category?: string;
  variant?: "carousel" | "grid";
  currentSlug?: string;
  className?: string;
}

/**
 * Server component that fetches services data from Sanity
 * Passes data to unified client component for rendering
 *
 * This separation allows:
 * - Server-side data fetching (fast, no client-side waterfalls)
 * - Client-side animations (motion, carousel)
 * - No infinite re-fetch loops
 */
export default async function ServicesSection({
  locale = "bg",
  variant = "grid",
  category,
  currentSlug,
  className,
}: ServicesSectionProps) {
  try {
    // Fetch services and category data based on whether category is provided
    let services: Service[];
    let categoryData: Category | null = null;

    if (category) {
      // Fetch services for specific category
      [services, categoryData] = await Promise.all([
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
    } else {
      // Fetch all services
      services = await client.fetch<Service[]>(
        servicesListQuery,
        {},
        { cache: "no-store" },
      );
    }

    // Handle missing data
    if (!services || (category && !categoryData)) {
      console.warn(
        `ServicesSection: Missing data${category ? ` for category ${category}` : ""}`,
      );

      if (process.env.NODE_ENV === "development") {
        return (
          <section className={cn("bg-white py-16", className)}>
            <div className="mx-auto max-w-7xl px-6">
              <div className="rounded-lg border-2 border-dashed border-gray-300 p-8 text-center">
                <p className="text-gray-500">
                  ServicesSection: No services found in Sanity
                  {category && <> for category &quot;{category}&quot;</>}
                  .
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

    // Don't render if there are no other services
    if (filteredServices.length === 0) {
      if (process.env.NODE_ENV === "development") {
        return (
          <section className={cn("bg-white py-16", className)}>
            <div className="mx-auto max-w-7xl px-6">
              <div className="rounded-lg border-2 border-dashed border-yellow-300 bg-yellow-50 p-8 text-center">
                <p className="text-gray-700">
                  <strong>ServicesSection:</strong> No other services found
                  {category && (
                    <>
                      {" "}
                      in category &quot;{category}&quot; besides &quot;
                      {currentSlug}&quot;
                    </>
                  )}
                  .
                  <br />
                  <span className="text-sm">
                    Total services{category && " in category"}:{" "}
                    {services.length}
                    <br />
                    Please import more services to
                    {category && " this category in"} Sanity.
                  </span>
                </p>
              </div>
            </div>
          </section>
        );
      }
      return null;
    }

    const categoryTitle = categoryData
      ? categoryData.title?.[locale as "bg" | "en"] ||
        categoryData.title?.bg ||
        ""
      : undefined;

    // Pass data to unified client component
    return (
      <ServicesSectionClient
        services={filteredServices}
        categoryTitle={categoryTitle}
        categorySlug={category}
        locale={locale}
        className={className}
        variant={variant}
      />
    );
  } catch (error) {
    console.error("ServicesSection: Error fetching data", error);
    return null;
  }
}
