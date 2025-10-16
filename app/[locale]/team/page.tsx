import { getValidLocale, type Locale } from "@/lib/locale";
import { client } from "@/sanity/lib/client";
import { teamMembersListQuery } from "@/sanity/lib/queries";

type Props = {
  params: Promise<{ locale: string }>;
};

async function getTeamMembers() {
  try {
    const data = await client.fetch(
      teamMembersListQuery,
      {},
      { cache: "no-store" },
    );
    return data;
  } catch (error) {
    console.error("Error fetching team members:", error);
    return null;
  }
}

export default async function TeamPage({ params }: Props) {
  const { locale: localeParam } = await params;
  const locale: Locale = getValidLocale(localeParam);
  const teamMembers = await getTeamMembers();

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm text-gray-600">
        <a href={`/${locale}`} className="hover:text-blue-600">
          {locale === "bg" ? "Начало" : "Home"}
        </a>
        {" / "}
        <span>{locale === "bg" ? "Екип" : "Team"}</span>
      </nav>

      <div className="mb-8 rounded-lg bg-white p-8 shadow-md">
        <h1 className="mb-4 text-4xl font-bold text-blue-600">
          {locale === "bg" ? "Нашият екип" : "Our Team"}
        </h1>
        <p className="mb-6 text-lg text-gray-600">
          {locale === "bg"
            ? "Тестова страница за членове на екипа"
            : "Test page for team members"}
        </p>

        {/* Current Locale */}
        <div className="mb-6">
          <span className="text-sm text-gray-600">Locale: </span>
          <span className="font-semibold">{locale}</span>
        </div>

        {/* Document Count */}
        <div className="mb-8 inline-block rounded-lg bg-purple-50 p-4 text-center">
          <div className="text-3xl font-bold text-purple-600">
            {teamMembers?.length || 0}
          </div>
          <div className="text-sm text-gray-600">
            {locale === "bg" ? "Членове на екипа" : "Team Members"}
          </div>
        </div>

        {/* Team Members */}
        {teamMembers && teamMembers.length > 0 ? (
          <div>
            <h2 className="mb-4 text-2xl font-semibold">
              {locale === "bg" ? "Членове на екипа" : "Team Members"}
            </h2>
            <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {teamMembers.map((member: any) => {
                // Safely extract name - handle both string and i18n object
                const memberName =
                  typeof member.name === "string"
                    ? member.name
                    : member.name && typeof member.name === "object"
                      ? member.name[locale] || member.name.bg || "Unnamed"
                      : "Unnamed";

                const roleName =
                  member.role && typeof member.role === "object"
                    ? member.role[locale] || member.role.bg || ""
                    : typeof member.role === "string"
                      ? member.role
                      : "";

                const bioText =
                  member.bio && typeof member.bio === "object"
                    ? member.bio[locale] || member.bio.bg || ""
                    : typeof member.bio === "string"
                      ? member.bio
                      : "";

                return (
                  <a
                    key={member._id}
                    href={`/${locale}/team/${member.slug}`}
                    className="block rounded-lg border border-gray-200 p-4 text-center transition hover:border-blue-500 hover:shadow-md"
                  >
                    {member.photo && (
                      <div className="mb-4 aspect-square overflow-hidden rounded-lg bg-gray-200">
                        <img
                          src={member.photo}
                          alt={memberName}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    )}
                    <h3 className="mb-1 text-lg font-semibold">{memberName}</h3>
                    {roleName && (
                      <p className="mb-2 text-sm text-blue-600">{roleName}</p>
                    )}
                    {bioText && (
                      <p className="line-clamp-3 text-sm text-gray-600">
                        {bioText}
                      </p>
                    )}
                  </a>
                );
              })}
            </div>
            <div className="rounded-lg bg-gray-50 p-6">
              <h3 className="mb-4 text-xl font-semibold">
                {locale === "bg" ? "Данни от екип" : "Team Data"}
              </h3>
              <pre className="overflow-x-auto rounded border bg-white p-4 text-sm">
                {JSON.stringify(teamMembers, null, 2)}
              </pre>
            </div>
          </div>
        ) : (
          <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-4">
            <p className="text-yellow-800">
              {locale === "bg"
                ? "Няма налични членове на екипа."
                : "No team members available."}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
