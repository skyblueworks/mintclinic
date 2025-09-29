# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Build the application for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint for code quality checks

## Project Architecture

This is a Next.js 15 MDX starter template built for creating content websites with React and Markdown.

### Tech Stack
- **Next.js 15** with App Router and React Server Components
- **MDX** for writing content with embedded React components
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Shadcn/UI** components for UI elements
- **Prism React Renderer** for syntax highlighting

### Directory Structure

```
app/
├── (markdown)/        # MDX content routes (route group)
│   ├── layout.tsx     # Layout for MDX pages
│   └── example/       # Example MDX content
├── layout.tsx         # Root layout
├── page.tsx           # Landing page
└── globals.css        # Global styles

components/
├── mdx/               # MDX-specific components
│   ├── code.tsx       # Code block with syntax highlighting
│   └── meta.tsx       # Metadata display component
├── ui/                # Shadcn/UI components
└── craft.tsx          # Design system components
```

### Key Components

**Craft Design System** (`components/craft.tsx`):
- Provides Layout, Main, Section, Container, Article, Prose, and Box components
- Built-in responsive typography styles and spacing
- Handles all markdown content styling through CSS-in-JS classes

**MDX Configuration** (`mdx-components.tsx`):
- Custom code block component with copy-to-clipboard functionality
- Prevents invalid HTML nesting in markdown
- Custom paragraph and blockquote styling

### MDX Content

- Place `.mdx` files in `app/(markdown)/` directory
- Each file becomes a route automatically
- Use the `Meta` component for frontmatter-style metadata
- Code blocks include automatic syntax highlighting and copy functionality

### Styling Approach

- Tailwind CSS with utility classes
- Typography styles applied through Craft design system
- Responsive design patterns throughout

### Development Notes

- Uses pnpm as the package manager
- Turbopack enabled for faster development builds
- TypeScript strict mode enabled
- ESLint with Next.js core web vitals configuration