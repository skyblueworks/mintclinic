"use client";

import React, { useEffect, useState } from "react";
import { MDXProvider } from "@mdx-js/react";
import { mdxComponents } from "./mdx/index";
import { evaluate } from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";
import * as devRuntime from "react/jsx-dev-runtime";

interface MDXRendererProps {
  mdxContent: {
    code: {
      code: string;
    };
  };
  className?: string;
}

export function MDXRenderer({ mdxContent, className = "" }: MDXRendererProps) {
  const [Component, setComponent] = useState<React.ComponentType | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function compileMDX() {
      if (!mdxContent?.code?.code) {
        setComponent(null);
        return;
      }

      try {
        // Use evaluate to compile and return the component directly
        const { default: MDXComponent } = await evaluate(mdxContent.code.code, {
          ...((process.env.NODE_ENV === "development"
            ? devRuntime
            : runtime) as any),
          useMDXComponents: () => mdxComponents,
          development: process.env.NODE_ENV === "development",
        });

        setComponent(() => MDXComponent);
        setError(null);
      } catch (err) {
        console.error("MDX compilation error:", err);
        setError(err instanceof Error ? err.message : "Compilation failed");
        setComponent(null);
      }
    }

    compileMDX();
  }, [mdxContent]);

  if (error) {
    return (
      <div
        className={`bg-red-50 border border-red-200 rounded-lg p-4 my-4 ${className}`}
      >
        <p className="text-red-800 font-medium">Error rendering content</p>
        {process.env.NODE_ENV === "development" && (
          <pre className="mt-2 text-xs text-red-600 overflow-auto whitespace-pre-wrap">
            {error}
          </pre>
        )}
      </div>
    );
  }

  if (!Component) {
    return (
      <div className={`text-gray-500 italic ${className}`}>
        No content available
      </div>
    );
  }

  return (
    <div className={`prose prose-lg max-w-none ${className}`}>
      <MDXProvider components={mdxComponents}>
        <Component />
      </MDXProvider>
    </div>
  );
}
