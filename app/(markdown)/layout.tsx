import ServiceLayout from "@/components/layouts/ServiceLayout";

/**
 * Layout for local MDX development routes
 * ServiceLayout provides consistent structure matching production
 * Title is extracted from MDX frontmatter/first heading
 */
export default function MarkdownLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // For development, we'll wrap in ServiceLayout but without title
  // Individual pages will handle their own titles via TitleSection
  return <>{children}</>;
}
