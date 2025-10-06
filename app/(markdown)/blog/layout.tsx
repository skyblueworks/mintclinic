import { Container } from "@/components/craft";

/**
 * Layout for blog posts in the (markdown) folder
 * Wraps blog content with Tailwind prose styling
 */
export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Container className="max-w-4xl">
      <article className="prose prose-lg prose-slate mx-auto max-w-none py-8 dark:prose-invert">
        {children}
      </article>
    </Container>
  );
}
