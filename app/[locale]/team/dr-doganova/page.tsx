import { client } from "@/sanity/lib/client";
import { teamMemberBySlugQuery } from "@/sanity/lib/queries";
import { DrDoganovaContent } from "@/components/DrDoganovaContent";
import { getValidLocale, type Locale } from "@/lib/locale";
import { notFound } from "next/navigation";
import type { SanityTeamMember } from "@/lib/types/sanity";

type Props = {
  params: Promise<{ locale: "bg" | "en" }>;
};

async function getTeamMember(slug: string): Promise<SanityTeamMember | null> {
  try {
    const teamMember = await client.fetch<SanityTeamMember>(
      teamMemberBySlugQuery,
      { slug },
      {
        next: { revalidate: 60 }, // Revalidate every minute
      },
    );
    return teamMember;
  } catch (error) {
    console.error("Error fetching team member:", error);
    return null;
  }
}

export default async function DrDoganovaPage({ params }: Props) {
  const { locale: localeParam } = await params;
  const locale: Locale = getValidLocale(localeParam);
  const member = await getTeamMember("dr-doganova");

  if (!member || !member.certificates) {
    notFound();
  }

  return (
    <DrDoganovaContent certificates={member.certificates} locale={locale} />
  );
}
