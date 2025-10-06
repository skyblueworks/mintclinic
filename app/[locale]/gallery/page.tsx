import TitleSection from "@/components/TitleSection";
import { GalleryGrid } from "@/components/GalleryGrid";

type Props = {
  params: Promise<{ locale: string }>;
};

// Placeholder gallery images
const galleryImages = [
  {
    src: "/images/alajner-snimka-1024x735_bba15d59.webp",
    alt: "Dental procedure example 1",
  },
  {
    src: "/images/alajner-glavna-1024x768_2650ef51.webp",
    alt: "Dental procedure example 2",
  },
  // Placeholder entries - replace with actual images later
  {
    src: "https://placehold.co/600x600/f3f4f6/6b7280?text=Gallery+3",
    alt: "Gallery image 3",
  },
  {
    src: "https://placehold.co/600x600/f3f4f6/6b7280?text=Gallery+4",
    alt: "Gallery image 4",
  },
  {
    src: "https://placehold.co/600x600/f3f4f6/6b7280?text=Gallery+5",
    alt: "Gallery image 5",
  },
  {
    src: "https://placehold.co/600x600/f3f4f6/6b7280?text=Gallery+6",
    alt: "Gallery image 6",
  },
  {
    src: "https://placehold.co/600x600/f3f4f6/6b7280?text=Gallery+7",
    alt: "Gallery image 7",
  },
  {
    src: "https://placehold.co/600x600/f3f4f6/6b7280?text=Gallery+8",
    alt: "Gallery image 8",
  },
];

export default async function GalleryPage({ params }: Props) {
  const { locale } = await params;

  return (
    <>
      <TitleSection title={locale === "bg" ? "Галерия" : "Gallery"} />

      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <GalleryGrid images={galleryImages} />
      </div>
    </>
  );
}
