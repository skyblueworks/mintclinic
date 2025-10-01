"use client";

import { useState } from "react";
import Link from "next/link";

export default function TestDashboard() {
  const [language, setLanguage] = useState<"en" | "bg">("en");

  const testPages = [
    {
      id: "components",
      title: "MDX Components & Error Testing",
      description: "Comprehensive testing of MDX components, service schema, and error handling scenarios",
      url: "/test-mdx-components",
      status: "✅",
      features: [
        "MDX components (Gallery, FAQ, CTA, etc.)",
        "Service schema with image handling", 
        "Error boundary testing",
        "Real-time language switching"
      ]
    },
    {
      id: "structured",
      title: "Structured Content & i18n",
      description: "Testing homepage sections, PortableText blocks, and comprehensive internationalization features",
      url: "/test-structured-content",
      status: "✅",
      features: [
        "Homepage sections (Hero, About, BeforeAfter)",
        "PortableText with components",
        "i18n comparison views",
        "Structured content management"
      ]
    }
  ];

  const stats = {
    total: testPages.length,
    working: testPages.filter(p => p.status === "✅").length,
    pending: testPages.filter(p => p.status === "⚠️").length
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <h1 className="text-5xl font-bold text-gray-900 mr-6">
              MDX-in-Sanity Test Dashboard
            </h1>
            
            {/* Language Switcher */}
            <div className="flex bg-white rounded-full shadow-lg p-1">
              <button
                onClick={() => setLanguage("en")}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  language === "en"
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                English
              </button>
              <button
                onClick={() => setLanguage("bg")}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  language === "bg"
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Български
              </button>
            </div>
          </div>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Clean, comprehensive testing suite for MDX components, Sanity CMS integration, and internationalization
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-6 mb-12 max-w-md mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">{stats.total}</div>
            <div className="text-gray-600">Test Pages</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">{stats.working}</div>
            <div className="text-gray-600">Working</div>
          </div>
        </div>

        {/* Test Pages Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {testPages.map((page) => (
            <div
              key={page.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              {/* Card Header */}
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold">{page.title}</h3>
                  <span className="text-2xl">{page.status}</span>
                </div>
                <p className="text-blue-100 text-sm">{page.description}</p>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Features:</h4>
                  <ul className="space-y-1">
                    {page.features.map((feature, index) => (
                      <li key={index} className="text-gray-600 text-sm flex items-center">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={page.url}
                  className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-3 px-4 rounded-lg font-medium transition-colors"
                >
                  Open Test →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Setup Instructions */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Setup & Image Information
          </h2>
          
          <div className="prose prose-gray max-w-none">
            <div>
              <h3 className="text-lg font-semibold mb-3">Quick Start:</h3>
              <ol className="text-gray-700 mb-6">
                <li>Development server running: <code className="bg-gray-100 px-2 py-1 rounded">pnpm dev</code> ✅</li>
                <li>Sample data imported to Sanity Studio ✅</li>
                <li>All test pages functional ✅</li>
              </ol>
              
              <h3 className="text-lg font-semibold mb-3">About Images:</h3>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <p className="text-amber-800 mb-2">
                  <strong>📸 Image Placeholders:</strong> The test pages show image placeholders instead of real images.
                </p>
                <p className="text-amber-700 text-sm">
                  To use real images: Upload assets in Sanity Studio → Reference them in documents → Use <code>urlFor()</code> to generate URLs
                </p>
              </div>
              
              <h3 className="text-lg font-semibold mb-3 mt-6">Language Testing:</h3>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-blue-800 mb-2">
                  <strong>🌐 Language Switcher:</strong> Only affects Sanity content, not UI text.
                </p>
                <p className="text-blue-700 text-sm">
                  This demonstrates proper separation between interface language and content language.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}