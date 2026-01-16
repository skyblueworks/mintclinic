/**
 * TypeScript types for Sanity CMS data structures
 */

export interface SanityImageAsset {
  _id: string;
  url: string;
}

export interface SanityImage {
  _type: "image";
  asset: SanityImageAsset;
}

export interface BilingualText {
  bg: string;
  en: string;
}

export interface SanityCertificate {
  _key: string;
  image: SanityImage;
  title: BilingualText;
  lecturer?: BilingualText;
  location: BilingualText;
  date: string;
}

export interface SanityTeamMember {
  _id: string;
  slug: string;
  name: string;
  role?: BilingualText;
  bio?: BilingualText;
  photo?: SanityImage;
  content?: BilingualText;
  specialization?: BilingualText;
  certificates?: SanityCertificate[];
}
