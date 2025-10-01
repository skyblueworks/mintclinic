import { client } from "@/sanity/lib/client";
import { teamMembersListQuery } from "@/sanity/lib/queries";
import Link from "next/link";

type Props = {
  params: Promise<{ locale: string }>;
};

async function getTeamMembers() {
  try {
    const data = await client.fetch(teamMembersListQuery, {}, { cache: "no-store" });
    console.log('Team members data:', JSON.stringify(data, null, 2));
    return data;
  } catch (error) {
    console.error("Error fetching team members:", error);
    return null;
  }
}

export default async function TeamPage({ params }: Props) {
  const { locale } = await params;
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

      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h1 className="text-4xl font-bold mb-4 text-blue-600">
          {locale === "bg" ? "Нашият екип" : "Our Team"}
        </h1>
        <p className="text-lg text-gray-600 mb-6">
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
        <div className="bg-purple-50 p-4 rounded-lg text-center mb-8 inline-block">
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
            <h2 className="text-2xl font-semibold mb-4">
              {locale === "bg" ? "Членове на екипа" : "Team Members"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              {teamMembers.map((member: any) => {
                // Safely extract name - handle both string and i18n object
                const memberName = typeof member.name === 'string'
                  ? member.name
                  : (member.name && typeof member.name === 'object'
                      ? (member.name[locale as 'bg' | 'en'] || member.name.bg || 'Unnamed')
                      : 'Unnamed');

                const roleName = member.role && typeof member.role === 'object'
                  ? (member.role[locale as 'bg' | 'en'] || member.role.bg || '')
                  : (typeof member.role === 'string' ? member.role : '');

                const bioText = member.bio && typeof member.bio === 'object'
                  ? (member.bio[locale as 'bg' | 'en'] || member.bio.bg || '')
                  : (typeof member.bio === 'string' ? member.bio : '');

                return (
                  <a
                    key={member._id}
                    href={`/${locale}/team/${member.slug}`}
                    className="block p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition text-center"
                  >
                    {member.photo && (
                      <div className="mb-4 aspect-square rounded-lg overflow-hidden bg-gray-200">
                        <img
                          src={member.photo}
                          alt={memberName}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <h3 className="font-semibold text-lg mb-1">{memberName}</h3>
                    {roleName && (
                      <p className="text-blue-600 text-sm mb-2">
                        {roleName}
                      </p>
                    )}
                    {bioText && (
                      <p className="text-gray-600 text-sm line-clamp-3">
                        {bioText}
                      </p>
                    )}
                  </a>
                );
              })}
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">
                {locale === "bg" ? "Данни от екип" : "Team Data"}
              </h3>
              <pre className="bg-white p-4 rounded border overflow-x-auto text-sm">
                {JSON.stringify(teamMembers, null, 2)}
              </pre>
            </div>
          </div>
        ) : (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
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