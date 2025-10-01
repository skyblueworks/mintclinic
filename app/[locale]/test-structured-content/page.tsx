"use client";

import { useState, useEffect } from "react";
import { MDXRenderer } from "@/components/MDXRenderer";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { BeforeAfter } from "@/components/mdx/BeforeAfter";
import { CTA } from "@/components/mdx/CTA";
import { Testimonial } from "@/components/mdx/Testimonial";
import { client } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";

interface StructuredData {
  homepage: {
    _id: string;
    title: { bg: string; en: string };
    hero: {
      title: { bg: string; en: string };
      subtitle: { bg: string; en: string };
      ctaButton: {
        text: { bg: string; en: string };
        url: string;
      };
    };
    aboutSection: {
      title: { bg: string; en: string };
      content: { bg: any; en: any };
    };
    beforeAfterSection: {
      title: { bg: string; en: string };
      beforeAfterItems: Array<{
        description: { bg: string; en: string };
      }>;
    };
  } | null;
  blockContentPage: {
    _id: string;
    title: { bg: string; en: string };
    content: { bg: any[]; en: any[] };
  } | null;
}

export default function TestStructuredContentPage() {
  const [language, setLanguage] = useState<"en" | "bg">("en");
  const [data, setData] = useState<StructuredData>({
    homepage: null,
    blockContentPage: null,
  });
  const [loading, setLoading] = useState(true);
  const [selectedTest, setSelectedTest] = useState<
    "homepage" | "blockcontent" | "i18n"
  >("homepage");

  useEffect(() => {
    async function fetchData() {
      try {
        const [homepageData, blockContentData] = await Promise.all([
          client.fetch(`*[_type == "homePage"][0] {
            _id, title, hero, aboutSection, beforeAfterSection
          }`),
          client.fetch(`*[_type == "page" && _id == "test-blockcontent"][0] {
            _id, title, content
          }`),
        ]);

        setData({
          homepage: homepageData,
          blockContentPage: blockContentData,
        });
      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  // PortableText components for BlockContent
  const portableTextComponents = {
    types: {
      callToAction: ({ value }: any) => (
        <CTA
          title={value.title}
          description={value.description}
          buttonText={value.buttonText}
          buttonUrl={value.buttonUrl}
          variant={value.backgroundColor === "green" ? "secondary" : "primary"}
        />
      ),
      testimonial: ({ value }: any) => (
        <Testimonial
          quote={value.quote}
          author={value.author}
          treatment={value.treatment}
          rating={5}
        />
      ),
      beforeAfter: ({ value }: any) => (
        <BeforeAfter
          beforeImage="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400"
          afterImage="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400"
          description={value.description}
        />
      ),
    },
    block: {
      h1: ({ children }: any) => (
        <h1 className="mb-6 text-4xl font-bold text-gray-900">{children}</h1>
      ),
      h2: ({ children }: any) => (
        <h2 className="mb-4 mt-8 text-3xl font-bold text-gray-900">
          {children}
        </h2>
      ),
      normal: ({ children }: any) => (
        <p className="mb-4 leading-relaxed text-gray-700">{children}</p>
      ),
    },
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="mx-auto max-w-6xl px-4">
          <div className="rounded-lg bg-white p-8 shadow-lg">
            <p className="text-gray-600">Loading...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="mb-8">
          <div className="mb-6 flex items-center justify-between">
            <LanguageSwitcher
              currentLanguage={language}
              onLanguageChange={setLanguage}
            />
          </div>

          <div className="text-center">
            <h1 className="mb-4 text-4xl font-bold text-gray-900">
              Structured Content & i18n Testing
            </h1>
            <p className="text-gray-600">
              Testing homepage sections, PortableText blocks, and
              internationalization
            </p>
          </div>
        </div>

        {/* Test Type Selector */}
        <div className="mb-8 rounded-lg bg-white p-6 shadow-lg">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            Select Content Type
          </h2>
          <div className="grid grid-cols-3 gap-4">
            <button
              onClick={() => setSelectedTest("homepage")}
              className={`rounded-lg border-2 p-4 text-left transition-colors ${
                selectedTest === "homepage"
                  ? "border-blue-500 bg-blue-50 text-blue-900"
                  : "border-gray-200 text-gray-700 hover:border-gray-300"
              }`}
            >
              <div className="font-medium">Homepage Sections</div>
              <div className="mt-1 text-sm opacity-75">
                Hero, About, BeforeAfter
              </div>
            </button>

            <button
              onClick={() => setSelectedTest("blockcontent")}
              className={`rounded-lg border-2 p-4 text-left transition-colors ${
                selectedTest === "blockcontent"
                  ? "border-blue-500 bg-blue-50 text-blue-900"
                  : "border-gray-200 text-gray-700 hover:border-gray-300"
              }`}
            >
              <div className="font-medium">PortableText Blocks</div>
              <div className="mt-1 text-sm opacity-75">
                Rich text + components
              </div>
            </button>

            <button
              onClick={() => setSelectedTest("i18n")}
              className={`rounded-lg border-2 p-4 text-left transition-colors ${
                selectedTest === "i18n"
                  ? "border-blue-500 bg-blue-50 text-blue-900"
                  : "border-gray-200 text-gray-700 hover:border-gray-300"
              }`}
            >
              <div className="font-medium">i18n Comparison</div>
              <div className="mt-1 text-sm opacity-75">
                Side-by-side languages
              </div>
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="overflow-hidden rounded-lg bg-white shadow-lg">
          {/* Homepage Sections Test */}
          {selectedTest === "homepage" && data.homepage && (
            <div className="space-y-8">
              {/* Hero Section */}
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white">
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-3xl font-bold">
                    {data.homepage.hero?.title?.[language]}
                  </h2>
                  <span className="rounded-full bg-white bg-opacity-20 px-3 py-1 text-sm">
                    Hero Section
                  </span>
                </div>
                <p className="mb-6 text-blue-100">
                  {data.homepage.hero?.subtitle?.[language]}
                </p>
                {data.homepage.hero?.ctaButton && (
                  <button className="rounded-lg bg-white px-6 py-3 font-medium text-blue-600 transition-colors hover:bg-gray-100">
                    {data.homepage.hero.ctaButton.text?.[language]}
                  </button>
                )}
              </div>

              {/* About Section */}
              {data.homepage.aboutSection && (
                <div className="p-8">
                  <div className="mb-6 flex items-center justify-between">
                    <h2 className="text-3xl font-bold text-gray-900">
                      {data.homepage.aboutSection.title?.[language]}
                    </h2>
                    <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-800">
                      MDX Section
                    </span>
                  </div>

                  <div className="mb-4 rounded-lg bg-green-50 p-4">
                    <p className="text-sm text-green-800">
                      This section uses MDX content stored in Sanity, allowing
                      rich formatting and components.
                    </p>
                  </div>

                  <MDXRenderer
                    mdxContent={data.homepage.aboutSection.content?.[language]}
                    className="prose-headings:text-gray-900 prose-p:text-gray-700"
                  />
                </div>
              )}

              {/* BeforeAfter Section */}
              {data.homepage.beforeAfterSection && (
                <div className="bg-gray-50 p-8">
                  <div className="mb-6 flex items-center justify-between">
                    <h2 className="text-3xl font-bold text-gray-900">
                      {data.homepage.beforeAfterSection.title?.[language] ||
                        "Treatment Results"}
                    </h2>
                    <span className="rounded-full bg-purple-100 px-3 py-1 text-sm text-purple-800">
                      BeforeAfter Gallery
                    </span>
                  </div>

                  <div className="space-y-8">
                    {data.homepage.beforeAfterSection.beforeAfterItems?.map(
                      (item, index) => (
                        <BeforeAfter
                          key={index}
                          beforeImage="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600"
                          afterImage="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600"
                          description={
                            item.description?.[language] ||
                            `Treatment result ${index + 1}`
                          }
                        />
                      ),
                    )}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* BlockContent Test */}
          {selectedTest === "blockcontent" && data.blockContentPage && (
            <div className="p-8">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-3xl font-bold text-gray-900">
                  {data.blockContentPage.title?.[language]}
                </h2>
                <span className="rounded-full bg-orange-100 px-3 py-1 text-sm text-orange-800">
                  PortableText
                </span>
              </div>

              <div className="mb-6 rounded-lg bg-orange-50 p-4">
                <h3 className="mb-2 font-bold text-orange-900">
                  PortableText Features:
                </h3>
                <ul className="space-y-1 text-sm text-orange-800">
                  <li>• Rich text with custom components</li>
                  <li>• Structured content blocks</li>
                  <li>• CTA, Testimonial, BeforeAfter blocks</li>
                  <li>• Editor-friendly interface</li>
                </ul>
              </div>

              {data.blockContentPage.content?.[language] && (
                <PortableText
                  value={data.blockContentPage.content[language]}
                  components={portableTextComponents}
                />
              )}
            </div>
          )}

          {/* i18n Comparison Test */}
          {selectedTest === "i18n" &&
            (data.homepage || data.blockContentPage) && (
              <div className="p-8">
                <h2 className="mb-6 text-3xl font-bold text-gray-900">
                  Internationalization Comparison
                </h2>

                <div className="space-y-8">
                  {/* Homepage i18n */}
                  {data.homepage && (
                    <div className="rounded-lg border border-gray-200 p-6">
                      <h3 className="mb-4 text-xl font-bold text-gray-900">
                        Homepage Content
                      </h3>
                      <div className="grid gap-6 md:grid-cols-2">
                        <div>
                          <h4 className="mb-3 flex items-center font-medium text-gray-900">
                            <span className="mr-2 rounded bg-blue-100 px-2 py-1 text-sm text-blue-800">
                              EN
                            </span>
                            English Version
                          </h4>
                          <div className="space-y-2 text-sm">
                            <p>
                              <strong>Hero:</strong>{" "}
                              {data.homepage.hero?.title?.en}
                            </p>
                            <p>
                              <strong>About:</strong>{" "}
                              {data.homepage.aboutSection?.title?.en}
                            </p>
                            <p>
                              <strong>CTA:</strong>{" "}
                              {data.homepage.hero?.ctaButton?.text?.en}
                            </p>
                          </div>
                        </div>

                        <div>
                          <h4 className="mb-3 flex items-center font-medium text-gray-900">
                            <span className="mr-2 rounded bg-green-100 px-2 py-1 text-sm text-green-800">
                              БГ
                            </span>
                            Bulgarian Version
                          </h4>
                          <div className="space-y-2 text-sm">
                            <p>
                              <strong>Hero:</strong>{" "}
                              {data.homepage.hero?.title?.bg}
                            </p>
                            <p>
                              <strong>About:</strong>{" "}
                              {data.homepage.aboutSection?.title?.bg}
                            </p>
                            <p>
                              <strong>CTA:</strong>{" "}
                              {data.homepage.hero?.ctaButton?.text?.bg}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Implementation Notes */}
                  <div className="rounded-lg bg-gray-50 p-6">
                    <h3 className="mb-4 text-xl font-bold text-gray-900">
                      i18n Implementation Notes
                    </h3>
                    <div className="grid gap-6 text-sm md:grid-cols-2">
                      <div>
                        <h4 className="mb-2 font-medium text-gray-900">
                          Schema Structure:
                        </h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• Object fields with bg/en keys</li>
                          <li>• Consistent naming convention</li>
                          <li>• Separate MDX content per language</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="mb-2 font-medium text-gray-900">
                          Frontend Handling:
                        </h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• Client-side language switching</li>
                          <li>• Real-time content updates</li>
                          <li>• Fallback to default language</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
        </div>
      </div>
    </div>
  );
}
