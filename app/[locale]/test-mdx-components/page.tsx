"use client";

import { useState, useEffect } from "react";
import { MDXRenderer } from "@/components/MDXRenderer";
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
        <div className="mx-auto max-w-6xl px-4">
          <div className="rounded-lg bg-white p-8 shadow-lg">
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
      <div className="mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="mb-8">
          <div className="mb-6 flex items-center justify-between">
            <div className="flex gap-2">
              <button
                onClick={() => setLanguage("bg")}
                className={`rounded px-3 py-1 ${language === "bg" ? "bg-primary text-white" : "bg-gray-200"}`}
              >
                BG
              </button>
              <button
                onClick={() => setLanguage("en")}
                className={`rounded px-3 py-1 ${language === "en" ? "bg-primary text-white" : "bg-gray-200"}`}
              >
                EN
              </button>
            </div>
          </div>

          <div className="text-center">
            <h1 className="mb-4 text-4xl font-bold text-gray-900">
              MDX Components & Error Testing
            </h1>
            <p className="text-gray-600">
              Comprehensive testing of MDX rendering, components, and error
              handling
            </p>
          </div>
        </div>

        {/* Test Type Selector */}
        <div className="mb-8 rounded-lg bg-white p-6 shadow-lg">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            Select Test Type
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => setSelectedTest("components")}
              className={`rounded-lg border-2 p-4 text-left transition-colors ${
                selectedTest === "components"
                  ? "border-blue-500 bg-blue-50 text-blue-900"
                  : "border-gray-200 text-gray-700 hover:border-gray-300"
              }`}
            >
              <div className="font-medium">MDX Components</div>
              <div className="mt-1 text-sm opacity-75">
                Gallery, FAQ, CTA, etc.
              </div>
            </button>

            <button
              onClick={() => setSelectedTest("service")}
              className={`rounded-lg border-2 p-4 text-left transition-colors ${
                selectedTest === "service"
                  ? "border-blue-500 bg-blue-50 text-blue-900"
                  : "border-gray-200 text-gray-700 hover:border-gray-300"
              }`}
            >
              <div className="font-medium">Service Schema</div>
              <div className="mt-1 text-sm opacity-75">Real service data</div>
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="overflow-hidden rounded-lg bg-white shadow-lg">
          {/* Components Test */}
          {selectedTest === "components" && currentTestPage && (
            <div className="p-8">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-3xl font-bold text-gray-900">
                  {currentTestPage.title?.[language] || "MDX Components Test"}
                </h2>
                <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
                  Sanity Content: {language.toUpperCase()}
                </span>
              </div>

              <div className="mb-6 rounded-lg bg-blue-50 p-4">
                <h3 className="mb-2 font-bold text-blue-900">Testing:</h3>
                <ul className="space-y-1 text-sm text-blue-800">
                  <li>
                    • Gallery, FAQ, CTA, Testimonial, BeforeAfter components
                  </li>
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
              <div className="bg-blue-600 p-8 text-white">
                <div className="mb-2 flex items-center justify-between">
                  <h2 className="text-3xl font-bold">
                    {currentService.title?.[language]}
                  </h2>
                  <span className="rounded-full bg-blue-500 px-3 py-1 text-sm font-medium">
                    {language.toUpperCase()}
                  </span>
                </div>
                <p className="text-blue-100">
                  Category: {currentService.category}
                </p>
              </div>

              <div className="relative flex h-64 w-full items-center justify-center bg-gray-200">
                <div className="text-center">
                  <div className="mb-2 text-gray-500">📸</div>
                  <p className="text-sm text-gray-600">
                    Service Image Placeholder
                  </p>
                  <p className="mt-1 text-xs text-gray-500">
                    Real images would use urlFor(mainImage)
                  </p>
                </div>
              </div>

              <div className="p-8">
                <div className="mb-6 rounded-lg bg-green-50 p-4">
                  <h3 className="mb-2 font-bold text-green-900">Testing:</h3>
                  <ul className="space-y-1 text-sm text-green-800">
                    <li>• Service schema structure from Sanity</li>
                    <li>• Image URL generation (placeholder demo)</li>
                    <li>• i18n content switching (Sanity content only)</li>
                    <li>• Rich MDX content with embedded components</li>
                  </ul>
                </div>

                <p className="mb-6 text-gray-600">
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
