import { client } from "@/sanity/lib/client";
import { postBySlugQuery } from "@/sanity/lib/queries";
import { getLocalizedMDX } from "@/lib/mdx";
import { MDXRenderer } from "@/components/MDXRenderer";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

async function getPost(slug: string) {
  try {
    return await client.fetch(postBySlugQuery, { slug }, { cache: "no-store" });
  } catch (error) {
    console.error("Error fetching post:", error);
    return null;
  }
}

export async function generateStaticParams() {
  const posts = await client.fetch(
    `*[_type == "post" && defined(slug.current)]{ "slug": slug.current }`,
    {},
    { cache: "no-store" }
  );

  const locales = ["bg", "en"];
  const params: { locale: string; slug: string }[] = [];

  for (const post of posts) {
    if (post.slug && typeof post.slug === 'string') {
      for (const locale of locales) {
        params.push({ locale, slug: post.slug });
      }
    }
  }

  return params;
}

export default async function BlogPostPage({ params }: Props) {
  const { locale, slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  const content = getLocalizedMDX(post.content, locale);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm text-gray-600">
        <a href={`/${locale}`} className="hover:text-blue-600">
          {locale === "bg" ? "Начало" : "Home"}
        </a>
        {" / "}
        <a href={`/${locale}/blog`} className="hover:text-blue-600">
          {locale === "bg" ? "Блог" : "Blog"}
        </a>
        {" / "}
        <span>{post.title[locale] || post.title.bg}</span>
      </nav>

      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h1 className="text-4xl font-bold mb-4 text-blue-600">
          {post.title[locale] || post.title.bg}
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          {locale === "bg"
            ? "Тестова страница за публикация"
            : "Test page for blog post"}
        </p>

        {/* Current Locale */}
        <div className="mb-6">
          <span className="text-sm text-gray-600">Locale: </span>
          <span className="font-semibold">{locale}</span>
        </div>

        {/* Post Data */}
        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            {locale === "bg" ? "Данни от публикация" : "Post Data"}
          </h2>
          <pre className="bg-white p-4 rounded border overflow-x-auto text-sm">
            {JSON.stringify(post, null, 2)}
          </pre>
        </div>

        {/* Visual Preview */}
        <article className="max-w-4xl">
          {/* Post Header */}
          <header className="mb-8">
            {/* Meta Info */}
            <div className="flex items-center gap-4 text-gray-600 mb-6">
              {post.author && (
                <div className="flex items-center gap-2">
                  {post.author.photo && (
                    <img
                      src={post.author.photo}
                      alt={post.author.name}
                      className="w-10 h-10 rounded-full"
                    />
                  )}
                  <span>{post.author.name}</span>
                </div>
              )}
              {post.publishedAt && (
                <time dateTime={post.publishedAt}>
                  {new Date(post.publishedAt).toLocaleDateString(
                    locale === "bg" ? "bg-BG" : "en-US",
                    { year: "numeric", month: "long", day: "numeric" }
                  )}
                </time>
              )}
            </div>

            {post.excerpt && (
              <p className="text-lg text-gray-600 mb-6">
                {post.excerpt[locale] || post.excerpt.bg}
              </p>
            )}

            {/* Featured Image */}
            {post.mainImage && (
              <div className="aspect-video rounded-lg overflow-hidden mb-6 bg-gray-200">
                <img
                  src={post.mainImage}
                  alt={post.title[locale] || post.title.bg}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </header>

          {/* Post Content */}
          {content && (
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                {locale === "bg" ? "Съдържание (MDX)" : "Content (MDX)"}
              </h2>
              <div className="prose prose-lg max-w-none">
                <MDXRenderer mdxContent={content} />
              </div>
            </div>
          )}

          {/* Categories */}
          {post.categories && post.categories.length > 0 && (
            <div className="mt-8 pt-8 border-t">
              <h3 className="text-sm font-semibold text-gray-600 mb-2">
                {locale === "bg" ? "Категории:" : "Categories:"}
              </h3>
              <div className="flex gap-2">
                {post.categories.map((category: any, idx: number) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                  >
                    {category.title[locale] || category.title.bg}
                  </span>
                ))}
              </div>
            </div>
          )}
        </article>
      </div>
    </div>
  );
}