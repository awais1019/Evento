# GitHub Copilot Instructions for Evento Next.js Project

<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

## Project Overview

This is a Next.js 15 project built with TypeScript, using the App Router architecture. These instructions help Copilot provide better code completion and suggestions while you write code.

**Purpose**: Enhance autocomplete suggestions, not generate full code blocks. Focus on intelligent code completion as you type.

## Technology Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Linting**: ESLint with Next.js configuration
- **Package Manager**: npm

## Code Style and Conventions

### File Naming

- Use kebab-case for file and folder names: `user-profile.tsx`
- Use PascalCase for React components: `UserProfile`
- Use camelCase for variables and functions: `getUserData`

### Component Structure

```typescript
// Prefer this structure for components
import { ComponentProps } from "react";

interface ComponentNameProps {
  // Define props here
}

export default function ComponentName({ ...props }: ComponentNameProps) {
  // Component logic here

  return <div>{/* JSX here */}</div>;
}
```

### TypeScript Guidelines

- Always use TypeScript for all files
- Define proper interfaces for props and data structures
- Use type imports when importing types: `import type { User } from './types'`
- Prefer `interface` over `type` for object shapes
- Use strict typing, avoid `any`

### Next.js App Router Patterns

- Use Server Components by default
- Add `'use client'` directive only when necessary (interactivity, hooks, browser APIs)
- Follow the file-based routing conventions
- Use proper metadata API for SEO

### Styling Guidelines

- Use Tailwind CSS utility classes
- Follow mobile-first responsive design
- Use semantic HTML elements
- Implement proper accessibility attributes

### Error Handling

- Use error boundaries for client components
- Implement proper error.tsx pages for route segments
- Handle loading states with loading.tsx files
- Use try-catch blocks for async operations

### Performance Best Practices

- Optimize images using Next.js Image component
- Implement proper caching strategies
- Use dynamic imports for code splitting
- Follow Core Web Vitals optimization

### Testing Preferences

- Write unit tests for utility functions
- Use React Testing Library for component tests
- Implement integration tests for critical user flows
- Test error states and edge cases

## Folder Structure

```
src/
├── app/                 # App Router pages and layouts
│   ├── (routes)/       # Route groups
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/         # Reusable UI components
│   ├── ui/            # Base UI components
│   └── features/      # Feature-specific components
├── lib/               # Utility functions and configurations
├── hooks/             # Custom React hooks
├── types/             # TypeScript type definitions
└── constants/         # Application constants
```

## Naming Conventions for Suggestions

- Pages: `page.tsx`, `layout.tsx`, `loading.tsx`, `error.tsx`, `not-found.tsx`
- Components: PascalCase with descriptive names
- Hooks: Start with `use` prefix
- Utils: camelCase descriptive names
- Types: PascalCase interfaces/types

## Code Generation Preferences

1. **Components**: Generate with proper TypeScript interfaces
2. **API Routes**: Use proper HTTP methods and error handling
3. **Hooks**: Include proper dependency arrays and cleanup
4. **Forms**: Use controlled components with proper validation
5. **State Management**: Prefer built-in React state, suggest external libraries when complex

## Common Patterns to Suggest

- Server/Client component separation
- Proper data fetching patterns (fetch, SWR, React Query)
- Form handling with validation
- Error boundary implementation
- Loading state management
- SEO optimization with metadata
- Responsive design patterns

## Accessibility Requirements

- Include proper ARIA labels
- Ensure keyboard navigation
- Use semantic HTML
- Implement proper color contrast
- Add alt text for images
- Support screen readers

## Security Considerations

- Sanitize user inputs
- Use environment variables for sensitive data
- Implement proper CORS settings
- Follow secure authentication patterns
- Validate data on both client and server

## Dependencies to Prefer

- **UI**: Headless UI, Radix UI, shadcn/ui
- **Forms**: React Hook Form, Zod
- **Data Fetching**: SWR, TanStack Query
- **Authentication**: NextAuth.js, Clerk
- **Database**: Prisma, Drizzle ORM
- **Styling**: Tailwind CSS, CSS Modules

## Code Comments Style

- Use JSDoc for functions and components
- Add inline comments for complex logic
- Document API endpoints thoroughly
- Include examples in complex utility functions

Remember to suggest modern, performant, and accessible solutions that align with Next.js and React best practices.