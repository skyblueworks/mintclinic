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
        <h1 className="text-4xl font-bold text-gray-900 mb-6">{children}</h1>
      ),
      h2: ({ children }: any) => (
        <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
          {children}
        </h2>
      ),
      normal: ({ children }: any) => (
        <p className="text-gray-700 mb-4 leading-relaxed">{children}</p>
      ),
    },
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-gray-600">Loading...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <LanguageSwitcher
              currentLanguage={language}
              onLanguageChange={setLanguage}
            />
          </div>

          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Structured Content & i18n Testing
            </h1>
            <p className="text-gray-600">
              Testing homepage sections, PortableText blocks, and internationalization
            </p>
          </div>
        </div>

        {/* Test Type Selector */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Select Content Type
          </h2>
          <div className="grid grid-cols-3 gap-4">
            <button
              onClick={() => setSelectedTest("homepage")}
              className={`p-4 rounded-lg border-2 text-left transition-colors ${
                selectedTest === "homepage"
                  ? "border-blue-500 bg-blue-50 text-blue-900"
                  : "border-gray-200 hover:border-gray-300 text-gray-700"
              }`}
            >
              <div className="font-medium">
                Homepage Sections
              </div>
              <div className="text-sm opacity-75 mt-1">
                Hero, About, BeforeAfter
              </div>
            </button>

            <button
              onClick={() => setSelectedTest("blockcontent")}
              className={`p-4 rounded-lg border-2 text-left transition-colors ${
                selectedTest === "blockcontent"
                  ? "border-blue-500 bg-blue-50 text-blue-900"
                  : "border-gray-200 hover:border-gray-300 text-gray-700"
              }`}
            >
              <div className="font-medium">
                PortableText Blocks
              </div>
              <div className="text-sm opacity-75 mt-1">
                Rich text + components
              </div>
            </button>

            <button
              onClick={() => setSelectedTest("i18n")}
              className={`p-4 rounded-lg border-2 text-left transition-colors ${
                selectedTest === "i18n"
                  ? "border-blue-500 bg-blue-50 text-blue-900"
                  : "border-gray-200 hover:border-gray-300 text-gray-700"
              }`}
            >
              <div className="font-medium">
                i18n Comparison
              </div>
              <div className="text-sm opacity-75 mt-1">
                Side-by-side languages
              </div>
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Homepage Sections Test */}
          {selectedTest === "homepage" && data.homepage && (
            <div className="space-y-8">
              {/* Hero Section */}
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-3xl font-bold">
                    {data.homepage.hero?.title?.[language]}
                  </h2>
                  <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">
                    Hero Section
                  </span>
                </div>
                <p className="text-blue-100 mb-6">
                  {data.homepage.hero?.subtitle?.[language]}
                </p>
                {data.homepage.hero?.ctaButton && (
                  <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                    {data.homepage.hero.ctaButton.text?.[language]}
                  </button>
                )}
              </div>

              {/* About Section */}
              {data.homepage.aboutSection && (
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-3xl font-bold text-gray-900">
                      {data.homepage.aboutSection.title?.[language]}
                    </h2>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                      MDX Section
                    </span>
                  </div>

                  <div className="mb-4 p-4 bg-green-50 rounded-lg">
                    <p className="text-green-800 text-sm">
                      This section uses MDX content stored in Sanity, allowing rich formatting and components.
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
                <div className="p-8 bg-gray-50">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-3xl font-bold text-gray-900">
                      {data.homepage.beforeAfterSection.title?.[language] || "Treatment Results"}
                    </h2>
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
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
                      )
                    )}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* BlockContent Test */}
          {selectedTest === "blockcontent" && data.blockContentPage && (
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold text-gray-900">
                  {data.blockContentPage.title?.[language]}
                </h2>
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">
                  PortableText
                </span>
              </div>

              <div className="mb-6 p-4 bg-orange-50 rounded-lg">
                <h3 className="font-bold text-orange-900 mb-2">
                  PortableText Features:
                </h3>
                <ul className="text-orange-800 space-y-1 text-sm">
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Internationalization Comparison
                </h2>

                <div className="space-y-8">
                  {/* Homepage i18n */}
                  {data.homepage && (
                    <div className="border border-gray-200 rounded-lg p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">
                        Homepage Content
                      </h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-medium text-gray-900 mb-3 flex items-center">
                            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm mr-2">
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
                          <h4 className="font-medium text-gray-900 mb-3 flex items-center">
                            <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm mr-2">
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
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      i18n Implementation Notes
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6 text-sm">
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">
                          Schema Structure:
                        </h4>
                        <ul className="text-gray-700 space-y-1">
                          <li>• Object fields with bg/en keys</li>
                          <li>• Consistent naming convention</li>
                          <li>• Separate MDX content per language</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">
                          Frontend Handling:
                        </h4>
                        <ul className="text-gray-700 space-y-1">
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
