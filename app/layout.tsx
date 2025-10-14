import type { Metadata } from "next";
import { Comfortaa, DM_Sans } from "next/font/google";
import { Layout } from "@/components/craft";
import HeaderSection from "@/components/HeaderSection";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import MobileBookingButton from "@/components/MobileBookingButton";
import { Toaster } from "sonner";

import "./globals.css";

import { cn } from "@/lib/utils";
import Head from "next/head";

const comfortaa = Comfortaa({
  subsets: ["latin"],
  variable: "--font-comfortaa",
  // weight: [""400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Mint Clinic – Dental Clinic in Sofia",
  description:
    "Немска дентална клиника в центъра на София. Персонализирана грижа, модерно зъболечение с висококвалифициран екип.",
  keywords: [
    "дентална клиника София",
    "зъболечение",
    "импланти",
    "естетична стоматология",
    "Digital Smile Design",
    "фасети",
    "избелване на зъби",
    "зъболекар София",
    "дентални услуги",
  ],
  authors: [{ name: "Mint Clinic" }],
  creator: "Mint Clinic",
  publisher: "Mint Clinic",
  metadataBase: new URL("https://mintclinic.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Mint Clinic – Dental Clinic in Sofia",
    description:
      "Немска дентална клиника в центъра на София. Персонализирана грижа, модерно зъболечение с висококвалифициран екип.",
    url: "https://mintclinic.com",
    siteName: "Mint Clinic",
    locale: "bg_BG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mint Clinic – Dental Clinic in Sofia",
    description:
      "Немска дентална клиника в центъра на София. Персонализирана грижа, модерно зъболечение с висококвалифициран екип.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layout>
      <Head>
        <meta name="apple-mobile-web-app-title" content="MintClinic" />
      </Head>
      <body
        className={cn(
          "min-h-screen w-full bg-background antialiased",
          comfortaa.variable,
          dmSans.variable,
          comfortaa.className,
        )}
      >
        <HeaderSection />
        {children}
        <Footer />
        <MobileBookingButton />
        <ScrollToTopButton />
        <Toaster position="top-center" richColors />
      </body>
    </Layout>
  );
}
