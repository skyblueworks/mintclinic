import { client } from "@/sanity/lib/client";
import { teamMemberBySlugQuery } from "@/sanity/lib/queries";
import { MDXRenderer } from "@/components/MDXRenderer";
import { notFound } from "next/navigation";
import { getLocalizedMDX } from "@/lib/getLocalized";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

async function getTeamMember(slug: string) {
  try {
    const teamMember = await client.fetch(
      teamMemberBySlugQuery,
      { slug },
      { cache: "no-store" }
    );
    console.log("getTeamMember", teamMember);
    return teamMember;
  } catch (error) {
    console.error("Error fetching team member:", error);
    return null;
  }
}

export async function generateStaticParams() {
  const members = await client.fetch(
    `*[_type == "teamMember" && defined(slug.current)]{ "slug": slug.current }`,
    {},
    { cache: "no-store" }
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

  return params;
}

export default async function TeamMemberPage({ params }) {
  const { locale, slug } = params;
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

      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h1 className="text-4xl font-bold mb-4 text-blue-600">{member.name}</h1>
        <p className="text-lg text-gray-600 mb-6">
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
        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            {locale === "bg" ? "Данни от член на екипа" : "Team Member Data"}
          </h2>
          <pre className="bg-white p-4 rounded border overflow-x-auto text-sm">
            {JSON.stringify(member, null, 2)}
          </pre>
        </div>

        {/* Visual Preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Sidebar */}
          <div className="md:col-span-1">
            {member.photo && (
              <div className="aspect-square rounded-lg overflow-hidden mb-4 bg-gray-200">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            {member.name && (
              <h3 className="text-2xl font-bold mb-2">
                {typeof member.name === "string"
                  ? member.name
                  : member.name[locale as "bg" | "en"] || member.name.bg}
              </h3>
            )}
            {member.role && typeof member.role === "object" && (
              <p className="text-lg text-blue-600 mb-4">
                {member.role[locale as "bg" | "en"] || member.role.bg}
              </p>
            )}
            {member.bio && typeof member.bio === "object" && (
              <p className="text-gray-600 mb-6">
                {member.bio[locale as "bg" | "en"] || member.bio.bg}
              </p>
            )}

            {/* Specializations */}
            {member.specializations && member.specializations.length > 0 && (
              <div className="mb-6">
                <h4 className="font-semibold mb-2">
                  {locale === "bg" ? "Специализации" : "Specializations"}
                </h4>
                <ul className="list-disc list-inside text-gray-600">
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
                <h4 className="text-xl font-bold mb-4">
                  {locale === "bg" ? "Образование" : "Education"}
                </h4>
                <div className="prose max-w-none">
                  <p>
                    {member.education[locale as "bg" | "en"] ||
                      member.education.bg}
                  </p>
                </div>
              </section>
            )}

            {/* Experience */}
            {member.experience && typeof member.experience === "object" && (
              <section className="mb-8">
                <h4 className="text-xl font-bold mb-4">
                  {locale === "bg" ? "Опит" : "Experience"}
                </h4>
                <div className="prose max-w-none">
                  <p>
                    {member.experience[locale as "bg" | "en"] ||
                      member.experience.bg}
                  </p>
                </div>
              </section>
            )}

            {/* Additional Content */}
            {content && (
              <section>
                <h4 className="text-xl font-bold mb-4">
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
