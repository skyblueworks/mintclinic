import TitleSection from "@/components/TitleSection";
import { GalleryGrid } from "@/components/GalleryGrid";
import image00054 from "@/assets/images/gallery/image00054.webp";
import image00053 from "@/assets/images/gallery/image00053.webp";
import image00052 from "@/assets/images/gallery/image00052.webp";
import image00051 from "@/assets/images/gallery/image00051.webp";
import image00050 from "@/assets/images/gallery/image00050.webp";
import image00049 from "@/assets/images/gallery/image00049.webp";
import image00048 from "@/assets/images/gallery/image00048.webp";
import image00047 from "@/assets/images/gallery/image00047.webp";
import image00046 from "@/assets/images/gallery/image00046.webp";
import image00045 from "@/assets/images/gallery/image00045.webp";
import image00044 from "@/assets/images/gallery/image00044.webp";
import image00043 from "@/assets/images/gallery/image00043.webp";
import image00006 from "@/assets/images/gallery/image00006.webp";
import image00005 from "@/assets/images/gallery/image00005.webp";
import image00004 from "@/assets/images/gallery/image00004.webp";
import image00003 from "@/assets/images/gallery/image00003.webp";
import image00002 from "@/assets/images/gallery/image00002.webp";

type Props = {
  params: Promise<{ locale: string }>;
};

const galleryImages = [
  { src: image00054.src, alt: "Mint Clinic Interior 1" },
  { src: image00053.src, alt: "Mint Clinic Interior 2" },
  { src: image00052.src, alt: "Mint Clinic Interior 3" },
  { src: image00051.src, alt: "Mint Clinic Interior 4" },
  { src: image00050.src, alt: "Mint Clinic Interior 5" },
  { src: image00049.src, alt: "Mint Clinic Interior 6" },
  { src: image00048.src, alt: "Mint Clinic Interior 7" },
  { src: image00047.src, alt: "Mint Clinic Interior 8" },
  { src: image00046.src, alt: "Mint Clinic Interior 9" },
  { src: image00045.src, alt: "Mint Clinic Interior 10" },
  { src: image00044.src, alt: "Mint Clinic Interior 11" },
  { src: image00043.src, alt: "Mint Clinic Interior 12" },
  { src: image00006.src, alt: "Mint Clinic Interior 13" },
  { src: image00005.src, alt: "Mint Clinic Interior 14" },
  { src: image00004.src, alt: "Mint Clinic Interior 15" },
  { src: image00003.src, alt: "Mint Clinic Interior 16" },
  { src: image00002.src, alt: "Mint Clinic Interior 17" },
];

export default async function GalleryPage({ params }: Props) {
  const { locale } = await params;

  return (
    <>
      <TitleSection title={locale === "bg" ? "Галерия" : "Gallery"} />
      <div className="mx-auto max-w-7xl px-6 pb-16 md:pb-24">
        <GalleryGrid images={galleryImages} />
      </div>
    </>
  );
}
