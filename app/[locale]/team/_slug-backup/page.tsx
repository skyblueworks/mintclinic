import { client } from "@/sanity/lib/client";
import { teamMemberBySlugQuery } from "@/sanity/lib/queries";
import { MDXRenderer } from "@/components/MDXRenderer";
import { notFound } from "next/navigation";
import { getLocalizedMDX } from "@/lib/getLocalized";
import { getValidLocale, type Locale } from "@/lib/locale";

type Props = {
  params: Promise<{ locale: "bg" | "en"; slug: string }>;
};

export const dynamicParams = false;

async function getTeamMember(slug: string) {
  try {
    const teamMember = await client.fetch(
      teamMemberBySlugQuery,
      { slug },
      { cache: "no-store" },
    );
    return teamMember;
  } catch (error) {
    console.error("Error fetching team member:", error);
    return null;
  }
}

export async function generateStaticParams() {
  try {
    const members = await client.fetch(
      `*[_type == "teamMember" && defined(slug.current)]{ "slug": slug.current }`,
      {},
      { cache: "no-store" },
    );

    const locales = ["bg", "en"];
    const params: { locale: string; slug: string }[] = [];

    for (const member of members) {
      if (member.slug && typeof member.slug === "string") {
        for (const locale of locales) {
          params.push({ locale, slug: member.slug });
        }
      }
    }

    // Return empty array if no members found - Next.js will skip generating these pages
    return params;
  } catch (error) {
    console.error("Error generating static params for team members:", error);
    // Return empty array on error
    return [];
  }
}

export default async function TeamMemberPage({ params }: Props) {
  const { locale: localeParam, slug } = await params;
  const locale: Locale = getValidLocale(localeParam);
  const member = await getTeamMember(slug);

  if (!member) {
    notFound();
  }

  const content = getLocalizedMDX(member.content, locale);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm text-gray-600">
        <a href={`/${locale}`} className="hover:text-blue-600">
          {locale === "bg" ? "Начало" : "Home"}
        </a>
        {" / "}
        <a href={`/${locale}/team`} className="hover:text-blue-600">
          {locale === "bg" ? "Екип" : "Team"}
        </a>
        {" / "}
        <span>{member.name}</span>
      </nav>

      <div className="mb-8 rounded-lg bg-white p-8 shadow-md">
        <h1 className="mb-4 text-4xl font-bold text-blue-600">{member.name}</h1>
        <p className="mb-6 text-lg text-gray-600">
          {locale === "bg"
            ? "Тестова страница за член на екипа"
            : "Test page for team member"}
        </p>

        {/* Current Locale */}
        <div className="mb-6">
          <span className="text-sm text-gray-600">Locale: </span>
          <span className="font-semibold">{locale}</span>
        </div>

        {/* Team Member Data */}
        <div className="mb-8 rounded-lg bg-gray-50 p-6">
          <h2 className="mb-4 text-2xl font-semibold">
            {locale === "bg" ? "Данни от член на екипа" : "Team Member Data"}
          </h2>
          <pre className="overflow-x-auto rounded border bg-white p-4 text-sm">
            {JSON.stringify(member, null, 2)}
          </pre>
        </div>

        {/* Visual Preview */}
        <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Sidebar */}
          <div className="md:col-span-1">
            {member.photo && (
              <div className="mb-4 aspect-square overflow-hidden rounded-lg bg-gray-200">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="h-full w-full object-cover"
                />
              </div>
            )}
            {member.name && (
              <h3 className="mb-2 text-2xl font-bold">
                {typeof member.name === "string"
                  ? member.name
                  : member.name[locale] || member.name.bg}
              </h3>
            )}
            {member.role && typeof member.role === "object" && (
              <p className="mb-4 text-lg text-blue-600">
                {member.role[locale] || member.role.bg}
              </p>
            )}
            {member.bio && typeof member.bio === "object" && (
              <p className="mb-6 text-gray-600">
                {member.bio[locale] || member.bio.bg}
              </p>
            )}

            {/* Specializations */}
            {member.specializations && member.specializations.length > 0 && (
              <div className="mb-6">
                <h4 className="mb-2 font-semibold">
                  {locale === "bg" ? "Специализации" : "Specializations"}
                </h4>
                <ul className="list-inside list-disc text-gray-600">
                  {member.specializations.map((spec: any, idx: number) => (
                    <li key={idx}>{spec[locale] || spec.bg}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Main Content */}
          <div className="md:col-span-2">
            {/* Education */}
            {member.education && typeof member.education === "object" && (
              <section className="mb-8">
                <h4 className="mb-4 text-xl font-bold">
                  {locale === "bg" ? "Образование" : "Education"}
                </h4>
                <div className="prose max-w-none">
                  <p>{member.education[locale] || member.education.bg}</p>
                </div>
              </section>
            )}

            {/* Experience */}
            {member.experience && typeof member.experience === "object" && (
              <section className="mb-8">
                <h4 className="mb-4 text-xl font-bold">
                  {locale === "bg" ? "Опит" : "Experience"}
                </h4>
                <div className="prose max-w-none">
                  <p>{member.experience[locale] || member.experience.bg}</p>
                </div>
              </section>
            )}

            {/* Additional Content */}
            {content && (
              <section>
                <h4 className="mb-4 text-xl font-bold">
                  {locale === "bg"
                    ? "Допълнително съдържание (MDX)"
                    : "Additional Content (MDX)"}
                </h4>
                <article className="prose max-w-none">
                  <MDXRenderer mdxContent={content} />
                </article>
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
