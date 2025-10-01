"use client";

import { useState } from "react";
import Link from "next/link";

export default function TestDashboard() {
  const [language, setLanguage] = useState<"en" | "bg">("en");

  const testPages = [
    {
      id: "components",
      title: "MDX Components & Error Testing",
      description:
        "Comprehensive testing of MDX components, service schema, and error handling scenarios",
      url: "/test-mdx-components",
      status: "✅",
      features: [
        "MDX components (Gallery, FAQ, CTA, etc.)",
        "Service schema with image handling",
        "Error boundary testing",
        "Real-time language switching",
      ],
    },
    {
      id: "structured",
      title: "Structured Content & i18n",
      description:
        "Testing homepage sections, PortableText blocks, and comprehensive internationalization features",
      url: "/test-structured-content",
      status: "✅",
      features: [
        "Homepage sections (Hero, About, BeforeAfter)",
        "PortableText with components",
        "i18n comparison views",
        "Structured content management",
      ],
    },
  ];

  const stats = {
    total: testPages.length,
    working: testPages.filter((p) => p.status === "✅").length,
    pending: testPages.filter((p) => p.status === "⚠️").length,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-6 flex items-center justify-center">
            <h1 className="mr-6 text-5xl font-bold text-gray-900">
              MDX-in-Sanity Test Dashboard
            </h1>

            {/* Language Switcher */}
            <div className="flex rounded-full bg-white p-1 shadow-lg">
              <button
                onClick={() => setLanguage("en")}
                className={`rounded-full px-6 py-3 font-medium transition-all ${
                  language === "en"
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                English
              </button>
              <button
                onClick={() => setLanguage("bg")}
                className={`rounded-full px-6 py-3 font-medium transition-all ${
                  language === "bg"
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Български
              </button>
            </div>
          </div>

          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            Clean, comprehensive testing suite for MDX components, Sanity CMS
            integration, and internationalization
          </p>
        </div>

        {/* Stats */}
        <div className="mx-auto mb-12 grid max-w-md grid-cols-2 gap-6">
          <div className="rounded-xl bg-white p-6 text-center shadow-lg">
            <div className="mb-2 text-3xl font-bold text-blue-600">
              {stats.total}
            </div>
            <div className="text-gray-600">Test Pages</div>
          </div>
          <div className="rounded-xl bg-white p-6 text-center shadow-lg">
            <div className="mb-2 text-3xl font-bold text-green-600">
              {stats.working}
            </div>
            <div className="text-gray-600">Working</div>
          </div>
        </div>

        {/* Test Pages Grid */}
        <div className="mb-12 grid gap-8 lg:grid-cols-2">
          {testPages.map((page) => (
            <div
              key={page.id}
              className="overflow-hidden rounded-xl bg-white shadow-lg transition-shadow hover:shadow-xl"
            >
              {/* Card Header */}
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="text-xl font-bold">{page.title}</h3>
                  <span className="text-2xl">{page.status}</span>
                </div>
                <p className="text-sm text-blue-100">{page.description}</p>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <div className="mb-4">
                  <h4 className="mb-2 font-semibold text-gray-900">
                    Features:
                  </h4>
                  <ul className="space-y-1">
                    {page.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <span className="mr-2 h-1.5 w-1.5 rounded-full bg-blue-500"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={page.url}
                  className="block w-full rounded-lg bg-blue-600 px-4 py-3 text-center font-medium text-white transition-colors hover:bg-blue-700"
                >
                  Open Test →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Setup Instructions */}
        <div className="rounded-xl bg-white p-8 shadow-lg">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            Setup & Image Information
          </h2>

          <div className="prose prose-gray max-w-none">
            <div>
              <h3 className="mb-3 text-lg font-semibold">Quick Start:</h3>
              <ol className="mb-6 text-gray-700">
                <li>
                  Development server running:{" "}
                  <code className="rounded bg-gray-100 px-2 py-1">
                    pnpm dev
                  </code>{" "}
                  ✅
                </li>
                <li>Sample data imported to Sanity Studio ✅</li>
                <li>All test pages functional ✅</li>
              </ol>

              <h3 className="mb-3 text-lg font-semibold">About Images:</h3>
              <div className="rounded-lg border border-amber-200 bg-amber-50 p-4">
                <p className="mb-2 text-amber-800">
                  <strong>📸 Image Placeholders:</strong> The test pages show
                  image placeholders instead of real images.
                </p>
                <p className="text-sm text-amber-700">
                  To use real images: Upload assets in Sanity Studio → Reference
                  them in documents → Use <code>urlFor()</code> to generate URLs
                </p>
              </div>

              <h3 className="mb-3 mt-6 text-lg font-semibold">
                Language Testing:
              </h3>
              <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
                <p className="mb-2 text-blue-800">
                  <strong>🌐 Language Switcher:</strong> Only affects Sanity
                  content, not UI text.
                </p>
                <p className="text-sm text-blue-700">
                  This demonstrates proper separation between interface language
                  and content language.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
