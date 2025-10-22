import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  experimental: {
    mdxRs: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
      {
        protocol: "https",
        hostname: "mintclinic.com",
      },
    ],
  },
  // Enable static optimization and ISR for Vercel
  // This ensures pages are statically generated at build time when possible
  // and use ISR (Incremental Static Regeneration) for dynamic content
};

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
