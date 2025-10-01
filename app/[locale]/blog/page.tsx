import { client } from "@/sanity/lib/client";
import { postsListQuery } from "@/sanity/lib/queries";
import Link from "next/link";

type Props = {
  params: Promise<{ locale: string }>;
};

async function getPosts() {
  try {
    return await client.fetch(postsListQuery, {}, { cache: "no-store" });
  } catch (error) {
    console.error("Error fetching posts:", error);
    return null;
  }
}

export default async function BlogPage({ params }: Props) {
  const { locale } = await params;
  const posts = await getPosts();

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm text-gray-600">
        <a href={`/${locale}`} className="hover:text-blue-600">
          {locale === "bg" ? "Начало" : "Home"}
        </a>
        {" / "}
        <span>{locale === "bg" ? "Блог" : "Blog"}</span>
      </nav>

      <div className="mb-8 rounded-lg bg-white p-8 shadow-md">
        <h1 className="mb-4 text-4xl font-bold text-blue-600">
          {locale === "bg" ? "Блог" : "Blog"}
        </h1>
        <p className="mb-6 text-lg text-gray-600">
          {locale === "bg"
            ? "Тестова страница за публикации"
            : "Test page for blog posts"}
        </p>

        {/* Current Locale */}
        <div className="mb-6">
          <span className="text-sm text-gray-600">Locale: </span>
          <span className="font-semibold">{locale}</span>
        </div>

        {/* Document Count */}
        <div className="mb-8 inline-block rounded-lg bg-yellow-50 p-4 text-center">
          <div className="text-3xl font-bold text-yellow-600">
            {posts?.length || 0}
          </div>
          <div className="text-sm text-gray-600">
            {locale === "bg" ? "Публикации" : "Posts"}
          </div>
        </div>

        {/* Blog Posts */}
        {posts && posts.length > 0 ? (
          <div>
            <h2 className="mb-4 text-2xl font-semibold">
              {locale === "bg" ? "Публикации" : "Posts"}
            </h2>
            <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post: any) => (
                <a
                  key={post._id}
                  href={`/${locale}/blog/${post.slug}`}
                  className="block rounded-lg border border-gray-200 p-4 transition hover:border-blue-500 hover:shadow-md"
                >
                  {post.mainImage && (
                    <div className="mb-4 aspect-video overflow-hidden rounded-lg bg-gray-200">
                      <img
                        src={post.mainImage}
                        alt={post.title[locale] || post.title.bg}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  )}
                  <h3 className="mb-2 text-lg font-semibold">
                    {post.title[locale] || post.title.bg}
                  </h3>
                  {post.excerpt && (
                    <p className="mb-2 line-clamp-3 text-sm text-gray-600">
                      {post.excerpt[locale] || post.excerpt.bg}
                    </p>
                  )}
                  <div className="text-xs text-gray-500">
                    {post.publishedAt && (
                      <time dateTime={post.publishedAt}>
                        {new Date(post.publishedAt).toLocaleDateString(
                          locale === "bg" ? "bg-BG" : "en-US",
                          { year: "numeric", month: "long", day: "numeric" },
                        )}
                      </time>
                    )}
                    {post.author && <span> • {post.author.name}</span>}
                  </div>
                </a>
              ))}
            </div>
            <div className="rounded-lg bg-gray-50 p-6">
              <h3 className="mb-4 text-xl font-semibold">
                {locale === "bg" ? "Данни от публикации" : "Posts Data"}
              </h3>
              <pre className="overflow-x-auto rounded border bg-white p-4 text-sm">
                {JSON.stringify(posts, null, 2)}
              </pre>
            </div>
          </div>
        ) : (
          <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-4">
            <p className="text-yellow-800">
              {locale === "bg"
                ? "Няма налични публикации."
                : "No posts available."}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
