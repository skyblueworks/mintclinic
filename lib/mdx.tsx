import { compile } from "@mdx-js/mdx";
import { mdxComponents } from "@/components/mdx";
import { MDXProvider } from "@mdx-js/react";
import { ReactElement } from "react";

export interface MDXContent {
  code: {
    code: string;
  };
}

/**
 * Render MDX content from Sanity
 */
export async function renderMDX(
  mdxContent: MDXContent
): Promise<ReactElement | null> {
  if (!mdxContent?.code?.code) {
    return null;
  }

  try {
    // Compile MDX string to JavaScript
    const compiled = await compile(mdxContent.code.code, {
      outputFormat: "function-body",
      development: process.env.NODE_ENV === "development",
    });

    // Create a function from the compiled code
    const Component = new Function(
      "React",
      "jsx",
      "jsxs",
      "Fragment",
      String(compiled)
    );

    // Return the component wrapped in MDX provider
    return (
      <MDXProvider components={mdxComponents}>
        <Component />
      </MDXProvider>
    );
  } catch (error) {
    console.error("MDX compilation error:", error);

    // Return fallback content on error
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-4 my-4">
        <p className="text-red-800">
          Error rendering content. Please check the MDX syntax.
        </p>
        {process.env.NODE_ENV === "development" && (
          <pre className="mt-2 text-xs text-red-600 overflow-auto">
            {error instanceof Error ? error.message : "Unknown error"}
          </pre>
        )}
      </div>
    );
  }
}

/**
 * Extract plain text from MDX for SEO/previews
 */
export function extractTextFromMDX(mdxContent: MDXContent): string {
  if (!mdxContent?.code?.code) {
    return "";
  }

  // Simple regex to remove MDX/HTML tags and get plain text
  const plainText = mdxContent.code.code
    .replace(/<[^>]*>/g, "") // Remove HTML tags
    .replace(/import.*?from.*?['"].*?['"];?\s*/g, "") // Remove imports
    .replace(/export.*?{.*?};?\s*/g, "") // Remove exports
    .replace(/#{1,6}\s+/g, "") // Remove markdown headers
    .replace(/\*{1,2}(.*?)\*{1,2}/g, "$1") // Remove bold/italic
    .replace(/`{1,3}(.*?)`{1,3}/g, "$1") // Remove code blocks
    .replace(/\[(.*?)\]\(.*?\)/g, "$1") // Remove links, keep text
    .replace(/\n\s*\n/g, "\n") // Collapse multiple newlines
    .trim();

  return plainText;
}

/**
 * Get language-specific MDX content
 */
export function getLocalizedMDX(
  content: { bg?: MDXContent; en?: MDXContent },
  locale: string = "bg"
): MDXContent | null {
  return content[locale as "bg" | "en"] || content.bg || content.en || null;
}
