import type { Metadata } from "next";
import Image from "next/image";
import LocalizedLink from "@/components/LocalizedLink";
import TitleSection from "@/components/TitleSection";
import { client } from "@/sanity/lib/client";
import { postsListQuery } from "@/sanity/lib/queries";
import { getTranslation, TK, type Locale } from "@/lib/i18n";
import { getLocalizedString } from "@/lib/getLocalized";

type Props = {
  params: Promise<{ locale: string }>;
};

interface BlogPost {
  _id: string;
  slug: string;
  title: { bg: string; en: string };
  excerpt: { bg: string; en: string };
  publishedAt: string;
  mainImage?: {
    url: string;
    alt?: string;
  };
}

async function getPosts(): Promise<BlogPost[]> {
  try {
    return await client.fetch(postsListQuery, {}, { cache: "no-store" });
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const title = getTranslation(locale as Locale, TK.BLOG_PAGE_TITLE);
  const description = getTranslation(
    locale as Locale,
    TK.BLOG_PAGE_META_DESCRIPTION,
  );

  return {
    title: `${title} – Mint Clinic`,
    description,
  };
}

export default async function BlogPage({ params }: Props) {
  const { locale } = await params;
  const posts = await getPosts();

  const title = getTranslation(locale as Locale, TK.BLOG_PAGE_TITLE);
  const description = getTranslation(
    locale as Locale,
    TK.BLOG_PAGE_DESCRIPTION,
  );

  return (
    <>
      <TitleSection title={title} description={description} />
      <section className="bg-white pb-16 md:pb-24">
        <div className="mx-auto max-w-7xl px-6">
          {/* Blog Posts Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => {
              const postTitle = getLocalizedString(post.title, locale);
              const postExcerpt = getLocalizedString(post.excerpt, locale);
              const formattedDate = new Date(
                post.publishedAt,
              ).toLocaleDateString(locale === "bg" ? "bg-BG" : "en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              });

              return (
                <LocalizedLink
                  key={post._id}
                  href={`/blog/${post.slug}`}
                  className="group"
                >
                  <article className="flex h-full flex-col rounded-2xl rounded-bl-none rounded-tr-none border border-primary/20 bg-white transition-all duration-300 hover:shadow-xl hover:shadow-primary/5">
                    {/* Image */}
                    <div className="relative aspect-video overflow-hidden rounded-t-2xl rounded-tr-none bg-gradient-to-br from-primary/10 to-primary/5">
                      {post.mainImage?.url ? (
                        <img
                          src={post.mainImage.url}
                          alt={post.mainImage.alt || postTitle}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center">
                          <Image
                            src="https://cdn.sanity.io/images/ne3mflgj/production/642cd8639e33bc30bcdaeaed0595cbe8917dcbc0-1175x891.svg"
                            alt="Mint Clinic"
                            width={80}
                            height={80}
                            className="opacity-20"
                          />
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex flex-1 flex-col p-6">
                      {/* Title */}
                      <h2 className="mb-3 text-xl font-bold text-primary transition-colors group-hover:text-primary/80">
                        {postTitle}
                      </h2>

                      {/* Description */}
                      <p className="mb-4 flex-1 font-dm-sans leading-relaxed text-foreground/80">
                        {postExcerpt}
                      </p>

                      {/* Meta */}
                      <div className="flex items-center gap-2 border-t border-primary/10 pt-4 text-sm text-primary/60">
                        <time>{formattedDate}</time>
                      </div>
                    </div>
                  </article>
                </LocalizedLink>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
