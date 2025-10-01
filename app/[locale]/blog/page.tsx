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

      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h1 className="text-4xl font-bold mb-4 text-blue-600">
          {locale === "bg" ? "Блог" : "Blog"}
        </h1>
        <p className="text-lg text-gray-600 mb-6">
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
        <div className="bg-yellow-50 p-4 rounded-lg text-center mb-8 inline-block">
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
            <h2 className="text-2xl font-semibold mb-4">
              {locale === "bg" ? "Публикации" : "Posts"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              {posts.map((post: any) => (
                <a
                  key={post._id}
                  href={`/${locale}/blog/${post.slug}`}
                  className="block p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition"
                >
                  {post.mainImage && (
                    <div className="aspect-video rounded-lg overflow-hidden mb-4 bg-gray-200">
                      <img
                        src={post.mainImage}
                        alt={post.title[locale] || post.title.bg}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <h3 className="font-semibold text-lg mb-2">
                    {post.title[locale] || post.title.bg}
                  </h3>
                  {post.excerpt && (
                    <p className="text-gray-600 text-sm mb-2 line-clamp-3">
                      {post.excerpt[locale] || post.excerpt.bg}
                    </p>
                  )}
                  <div className="text-xs text-gray-500">
                    {post.publishedAt && (
                      <time dateTime={post.publishedAt}>
                        {new Date(post.publishedAt).toLocaleDateString(
                          locale === "bg" ? "bg-BG" : "en-US",
                          { year: "numeric", month: "long", day: "numeric" }
                        )}
                      </time>
                    )}
                    {post.author && <span> • {post.author.name}</span>}
                  </div>
                </a>
              ))}
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">
                {locale === "bg" ? "Данни от публикации" : "Posts Data"}
              </h3>
              <pre className="bg-white p-4 rounded border overflow-x-auto text-sm">
                {JSON.stringify(posts, null, 2)}
              </pre>
            </div>
          </div>
        ) : (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
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