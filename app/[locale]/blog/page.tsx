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
// TODO: In the future, this will be loaded from Sanity CMS
const blogPosts: BlogPost[] = [
  {
    slug: "kak-raboti-mint",
    title: "Как работи Минт",
    description:
      "Радваме се, че избирате да ни се доверите и да започнете с консултации и лечение при нас. Изключително много уважаваме всички наши пациенти, дентални лекари.",
    date: "2024-10-01",
    author: "Mint Clinic",
  },
  {
    slug: "kakvo-bihme-vi-kazali-v-mint-za-silanizacziyata",
    title: "Какво бихме Ви казали в Минт за силанизацията",
    description:
      "Силанизацията е една много интересна тема в профилактиката на детското дентално здраве.",
    date: "2024-10-01",
    author: "Mint Clinic",
  },
  {
    slug: "kakvo-da-e-hubavo-da-znaem-ako-ni-predstoi-hirurgichna-intervencziya",
    title: "Какво да е хубаво да знаем, ако ни предстои хирургична интервенция",
    description:
      "Какво и как се случва, когато се налага хирургична интервенция – екстракция на зъб, имплантация, синус лифт, съединителнотъканна присадка.",
    date: "2024-10-01",
    author: "Mint Clinic",
  },
  {
    slug: "konsultacziya-za-zabni-implanti-kak-da-sme-sigurni-che-sresthata-ni-s-dentalniya-lekar-e-bila-palnoczenna",
    title:
      "Консултация за зъбни импланти. Как да сме сигурни, че срещата ни с денталния лекар е била пълноценна.",
    description:
      "Ако по някаква причина смятате, че имате нужда от поставяне на зъбни импланти и ви предстои консултация с дентален лекар – ето какво най-общо трябва да очаквате",
    date: "2024-10-01",
    author: "Mint Clinic",
  },
  {
    slug: "loshiyat-dah-sas-strashno-ime-halitoza",
    title: "Лошият дъх със страшно име ХАЛИТОЗА",
    description:
      "Как да кажем на някой до себе си, че има лош дъх. Без да обидим човека. И така, че да ни разбере правилно и да се погрижи за себе си.",
    date: "2024-10-01",
    author: "Mint Clinic",
  },
  {
    slug: "okluziya-i-balans-na-zahapkata",
    title: "Оклузия и баланс на захапката",
    description:
      "Оклузия е научният термин, в който се съдържа идеята затова как се пресрещат повърхностите на нашите зъби, когато затваряме уста, отхапваме, дъвчем.",
    date: "2024-10-01",
    author: "Mint Clinic",
  },
  {
    slug: "profilaktika-i-grizha-za-prosledyavane",
    title: "Профилактика и грижа за проследяване",
    description:
      "Без колебание можем да заявим, че профилактиката е една от най-важните страни на грижата за денталното здраве. Естествено това е фокус и на нашите услия.",
    date: "2024-10-01",
    author: "Mint Clinic",
  },
  {
    slug: "za-implantite-remonta-na-pokrivi-i-yadeneto-na-kotleti",
    title: "За имплантите, ремонта на покриви и яденето на котлети",
    description:
      "Липсват ми доста зъби, а тези, които са ми останали, май хич не стават. През годините постоянно ходех на зъболекар и не знам как се стигна до това положение.",
    date: "2024-10-01",
    author: "Mint Clinic",
  },
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
