import Image from "next/image";
import LocalizedLink from "@/components/LocalizedLink";
import TitleSection from "@/components/TitleSection";

interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  tags?: string[];
  image?: string;
}

// Define your blog posts here
// In the future, this could be automated by reading from a CMS or file system
const blogPosts: BlogPost[] = [
  {
    slug: "my-first-post/",
    title: "My First Blog Post",
    description:
      "An example blog post showcasing MDX features with Tailwind prose",
    date: "2025-01-09",
    author: "Jane Doe",
    tags: ["blogging", "mdx", "nextjs"],
    image: "https://placehold.co/800x400/EEE/31343C?font=lato&text=Blog+Post",
  },
  {
    slug: "my-first-post//",
    title: "My First Blog Post",
    description:
      "An example blog post showcasing MDX features with Tailwind prose",
    date: "2025-01-09",
    author: "Jane Doe",
    tags: ["blogging", "mdx", "nextjs"],
    image: "https://placehold.co/800x400/EEE/31343C?font=lato&text=Blog+Post",
  },
  {
    slug: "my-first-post",
    title: "My First Blog Post",
    description:
      "An example blog post showcasing MDX features with Tailwind prose",
    date: "2025-01-09",
    author: "Jane Doe",
    tags: ["blogging", "mdx", "nextjs"],
    image: "https://placehold.co/800x400/EEE/31343C?font=lato&text=Blog+Post",
  },
  // Add more blog posts here as you create them
];

export default function BlogPage() {
  return (
    <>
      <TitleSection
        title="Нашият блог"
        description="Открийте последните новини, съвети и статии за дентална грижа и здраве."
      />
      <section className="bg-white pb-16 md:pb-24">
        <div className="mx-auto max-w-7xl px-6">
          {/* Blog Posts Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <LocalizedLink
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group"
              >
                <article className="flex h-full flex-col rounded-2xl rounded-bl-none rounded-tr-none border border-primary/20 bg-white transition-all duration-300 hover:shadow-xl hover:shadow-primary/5">
                  {/* Image */}
                  <div className="relative aspect-video overflow-hidden rounded-t-2xl rounded-tr-none bg-gradient-to-br from-primary/10 to-primary/5">
                    {post.image ? (
                      <img
                        src={post.image}
                        alt={post.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center">
                        <Image
                          src="/mint-colored.svg"
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
                    {/* Tags */}
                    {post.tags && post.tags.length > 0 && (
                      <div className="mb-3 flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Title */}
                    <h2 className="mb-3 text-xl font-bold text-primary transition-colors group-hover:text-primary/80">
                      {post.title}
                    </h2>

                    {/* Description */}
                    <p className="mb-4 flex-1 font-dm-sans leading-relaxed text-foreground/80">
                      {post.description}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center gap-2 border-t border-primary/10 pt-4 text-sm text-primary/60">
                      <span className="font-medium">{post.author}</span>
                      <span>•</span>
                      <time>{post.date}</time>
                    </div>
                  </div>
                </article>
              </LocalizedLink>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
