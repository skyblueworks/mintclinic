import type { Metadata } from "next";
import { Comfortaa, DM_Sans } from "next/font/google";
import { Layout } from "@/components/craft";

import "./globals.css";

import { cn } from "@/lib/utils";

const comfortaa = Comfortaa({
  subsets: ["latin"],
  variable: "--font-comfortaa",
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "MDX Starter Template for Building Websites",
  description:
    "MDX and Next.js Starter made by Bridger Tower at 9d8 and WIP / AC",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layout>
      <body
        className={cn(
          "min-h-screen bg-background antialiased w-screen",
          comfortaa.variable,
          dmSans.variable,
          comfortaa.className
        )}
      >
        {children}
      </body>
    </Layout>
  );
}
