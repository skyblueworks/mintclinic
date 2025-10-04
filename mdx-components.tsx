import type { MDXComponents } from "mdx/types";
import { Code } from "@/components/mdx/code";
import {
  TwoColumn,
  ThreeColumn,
  Column,
  Card,
  Grid,
  Process,
  Video,
} from "@/components/mdx/layouts";
import React from "react";

// Default components for MDX files
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Override the default components with our custom ones
    pre: ({ children }) => children as React.ReactElement,
    code: ({ children, className }) => {
      // Only use Code component for code blocks (not inline code)
      const isInlineCode = !className;
      if (isInlineCode) {
        return (
          <code className="rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
            {children}
          </code>
        );
      }

      // Extract language from className (format: language-*)
      const language = className?.replace("language-", "");
      return <Code language={language}>{children as string}</Code>;
    },

    // Override paragraph component to prevent invalid nesting
    p: ({ children }) => {
      // Check if children is a single element that should not be wrapped in p
      if (
        React.Children.toArray(children).some(
          (child) =>
            React.isValidElement(child) &&
            /^(pre|div|table)$/.test(
              (child.type as any)?.name || child.type || "",
            ),
        )
      ) {
        return <>{children}</>;
      }
      return <p className="leading-7 [&:not(:first-child)]:mt-6">{children}</p>;
    },
    // Add heading styling with primary color
    h1: ({ children }) => (
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight text-primary lg:text-5xl">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="mt-10 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight text-primary first:mt-0">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight text-primary">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="mt-6 scroll-m-20 text-xl font-semibold tracking-tight text-primary">
        {children}
      </h4>
    ),
    // Add list styling with green bullets
    ul: ({ children }) => (
      <ul className="my-6 ml-6 list-none space-y-2 [&>li]:relative [&>li]:pl-6 [&>li]:before:absolute [&>li]:before:left-0 [&>li]:before:top-[0.6em] [&>li]:before:h-2 [&>li]:before:w-2 [&>li]:before:rounded-full [&>li]:before:bg-primary">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="my-6 ml-6 list-decimal [&>li]:mt-2">{children}</ol>
    ),
    // Add blockquote styling
    blockquote: ({ children }) => (
      <blockquote className="mt-6 border-l-2 pl-6 italic">
        {children}
      </blockquote>
    ),
    // Layout components
    TwoColumn,
    ThreeColumn,
    Column,
    Card,
    Grid,
    // Service page components
    Process,
    Video,
    // Inherit any custom components passed in
    ...components,
  };
}
