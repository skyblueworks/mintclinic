"use client";

import { useState, useEffect } from "react";
import { MDXRenderer } from "@/components/MDXRenderer";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { ImageDemo } from "@/components/ImageDemo";
import { client } from "@/sanity/lib/client";

interface TestData {
  testPage: {
    _id: string;
    title: { bg: string; en: string };
    content: { bg: any; en: any };
  } | null;
  service: {
    _id: string;
    title: { bg: string; en: string };
    category: string;
    mainImage: any;
    content: { bg: any; en: any };
    metaDescription: { bg: string; en: string };
  } | null;
}

export default function TestMDXComponentsPage() {
  const [language, setLanguage] = useState<"en" | "bg">("en");
  const [data, setData] = useState<TestData>({ testPage: null, service: null });
  const [loading, setLoading] = useState(true);
  const [selectedTest, setSelectedTest] = useState<
    "components" | "service" | "errors"
  >("components");

  useEffect(() => {
    async function fetchData() {
      try {
        const [testPageData, serviceData] = await Promise.all([
          client.fetch(`*[_type == "page" && _id == "test-page"][0] {
            _id, title, content
          }`),
          client.fetch(`*[_type == "service" && _id == "dental-implants"][0] {
            _id, title, category, mainImage, content, metaDescription
          }`),
        ]);

        setData({
          testPage: testPageData,
          service: serviceData,
        });
      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

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

  const currentTestPage = data.testPage;
  const currentService = data.service;

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
              MDX Components & Error Testing
            </h1>
            <p className="text-gray-600">
              Comprehensive testing of MDX rendering, components, and error handling
            </p>
          </div>
        </div>

        {/* Test Type Selector */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Select Test Type
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => setSelectedTest("components")}
              className={`p-4 rounded-lg border-2 text-left transition-colors ${
                selectedTest === "components"
                  ? "border-blue-500 bg-blue-50 text-blue-900"
                  : "border-gray-200 hover:border-gray-300 text-gray-700"
              }`}
            >
              <div className="font-medium">
                MDX Components
              </div>
              <div className="text-sm opacity-75 mt-1">
                Gallery, FAQ, CTA, etc.
              </div>
            </button>

            <button
              onClick={() => setSelectedTest("service")}
              className={`p-4 rounded-lg border-2 text-left transition-colors ${
                selectedTest === "service"
                  ? "border-blue-500 bg-blue-50 text-blue-900"
                  : "border-gray-200 hover:border-gray-300 text-gray-700"
              }`}
            >
              <div className="font-medium">
                Service Schema
              </div>
              <div className="text-sm opacity-75 mt-1">
                Real service data
              </div>
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Components Test */}
          {selectedTest === "components" && currentTestPage && (
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold text-gray-900">
                  {currentTestPage.title?.[language] || "MDX Components Test"}
                </h2>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  Sanity Content: {language.toUpperCase()}
                </span>
              </div>

              <div className="mb-6 p-4 bg-blue-50 rounded-lg">
                <h3 className="font-bold text-blue-900 mb-2">
                  Testing:
                </h3>
                <ul className="text-blue-800 space-y-1 text-sm">
                  <li>• Gallery, FAQ, CTA, Testimonial, BeforeAfter components</li>
                  <li>• MDX compilation from Sanity CMS</li>
                  <li>• Component prop handling and validation</li>
                  <li>• Language switching affects only Sanity content</li>
                </ul>
              </div>

              <MDXRenderer
                mdxContent={currentTestPage.content?.[language]}
                className="prose-headings:text-gray-900 prose-p:text-gray-700"
              />
            </div>
          )}

          {/* Service Test */}
          {selectedTest === "service" && currentService && (
            <div>
              <div className="bg-blue-600 text-white p-8">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-3xl font-bold">
                    {currentService.title?.[language]}
                  </h2>
                  <span className="bg-blue-500 px-3 py-1 rounded-full text-sm font-medium">
                    {language.toUpperCase()}
                  </span>
                </div>
                <p className="text-blue-100">
                  Category: {currentService.category}
                </p>
              </div>

              <div className="relative h-64 w-full bg-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-gray-500 mb-2">📸</div>
                  <p className="text-gray-600 text-sm">
                    Service Image Placeholder
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Real images would use urlFor(mainImage)
                  </p>
                </div>
              </div>

              <div className="p-8">
                <div className="mb-6 p-4 bg-green-50 rounded-lg">
                  <h3 className="font-bold text-green-900 mb-2">
                    Testing:
                  </h3>
                  <ul className="text-green-800 space-y-1 text-sm">
                    <li>• Service schema structure from Sanity</li>
                    <li>• Image URL generation (placeholder demo)</li>
                    <li>• i18n content switching (Sanity content only)</li>
                    <li>• Rich MDX content with embedded components</li>
                  </ul>
                </div>

                <p className="text-gray-600 mb-6">
                  {currentService.metaDescription?.[language]}
                </p>

                <MDXRenderer
                  mdxContent={currentService.content?.[language]}
                  className="prose-headings:text-gray-900 prose-p:text-gray-700"
                />

                <div className="mt-8">
                  <ImageDemo />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
