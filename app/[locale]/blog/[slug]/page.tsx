import { client } from "@/sanity/lib/client";
import { postBySlugQuery } from "@/sanity/lib/queries";
import { MDXRenderer } from "@/components/MDXRenderer";
import { notFound } from "next/navigation";
import { getLocalizedMDX } from "@/lib/getLocalized";
import { Container } from "@/components/craft";
import { SUPPORTED_LOCALES } from "@/lib/locale";

type Props = {
  params: Promise<{ locale: "bg" | "en"; slug: string }>;
};

export async function generateStaticParams() {
  try {
    const posts = await client.fetch(
      `*[_type == "post"]{ "slug": slug.current }`,
    );

    return SUPPORTED_LOCALES.flatMap((locale) =>
      posts.map((post: { slug: string }) => ({
        locale,
        slug: post.slug,
      })),
    );
  } catch (error) {
    console.error("Error generating static params for blog:", error);
    return [];
  }
}

async function getPost(slug: string) {
  try {
    return await client.fetch(postBySlugQuery, { slug }, { cache: "no-store" });
  } catch (error) {
    console.error("Error fetching post:", error);
    return null;
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { locale, slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  const content = getLocalizedMDX(post.content, locale);

  return (
    <Container className="max-w-4xl">
      <article className="prose prose-lg prose-slate mx-auto max-w-none px-4 py-8 dark:prose-invert">
        {/* MDX Content */}
        {content && <MDXRenderer mdxContent={content} />}
      </article>

      {/* Debug info in development */}
      {process.env.NODE_ENV === "development" && (
        <details className="mt-8 rounded-lg border border-gray-200 bg-gray-50 p-4">
          <summary className="cursor-pointer font-semibold text-gray-700">
            Debug: Post Data
          </summary>
          <pre className="mt-4 overflow-x-auto rounded border bg-white p-4 text-xs">
            {JSON.stringify(post, null, 2)}
          </pre>
        </details>
      )}
    </Container>
  );
}
