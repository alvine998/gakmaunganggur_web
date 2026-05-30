# AGENTS.md

## Project Overview

This project is built with:

* Next.js 14.2 (Pages Router)
* TypeScript
* Tailwind CSS
* React Hook Form
* React Query / TanStack Query
* Axios
* Lucide-Reacts
* Zod
* React Hot Toast

---

## Development Principles

Before implementing any feature:

1. Understand business requirements.
2. Analyze existing components.
3. Reuse existing UI components whenever possible.
4. Avoid duplicate logic.
5. Prioritize maintainability and readability.

---

## Folder Structure

Follow existing project structure.

Example:

src/
├── pages/
├── components/
├── hooks/
├── fonts/
├── types/
├── utils/
├── api/
└── lib/

Do not create new folders unless necessary.

---

## TypeScript Rules

### Required

* Use strict typing.
* Create interfaces/types for API responses.
* Prefer `type` for simple objects.
* Prefer `interface` for extensible structures.

### Forbidden

* Avoid `any`.
* Avoid `@ts-ignore`.
* Avoid unnecessary type assertions.

Bad:

const data: any = response.data;

Good:

const data: UserResponse = response.data;

---

## React Rules

### Required

* Use functional components.
* Use hooks.
* Extract reusable logic into custom hooks.
* Keep components focused on a single responsibility.

### Forbidden

* Class components.
* Massive components (>300 lines).
* Business logic directly in JSX.

---

## Next.js Rules

### Use App Router

Required:

* index.tsx

## API Layer

All API calls must go through:

src/api/

Example:

api/user.api.ts

Do not call axios directly inside components.

Bad:

useEffect(() => {
axios.get("/api/users");
}, []);

Good:

userService.getUsers();

---

## Form Handling

Use:

* React Hook Form

Validation:

* Zod

Avoid uncontrolled forms.

---

## Styling Rules

Use:

* Tailwind CSS

Avoid:

* Inline styles
* Hardcoded colors
* Random spacing values

Prefer design tokens.

Bad:

style={{ marginTop: 17 }}

Good:

mt-4

---

## State Management

Local State:

* useState

Server State:

* React Query

Global State:

* Existing store implementation only

Do not introduce new state libraries.

---

## Performance Rules

### Required

* Dynamic imports for heavy components.
* Memoize expensive calculations.
* Use pagination for large datasets.
* Always create reusable components.

### Avoid

* Unnecessary re-renders.
* Fetching entire datasets.
* Large client bundles.
* Hydration

---

## Tables

For data tables:

* Server-side pagination.
* Server-side filtering.
* Server-side sorting.

Never load thousands of records at once.

---

## Error Handling

All API calls must:

* Handle loading state.
* Handle error state.
* Show user-friendly messages.

Do not expose raw backend errors.

---

## Security

Never:

* Store secrets in frontend.
* Expose private API keys.
* Hardcode credentials.

Use environment variables only.

---

## Naming Convention

Components:

:page/component.tsx

Hooks:

useUsers.ts

API:

user.api.ts

Types:

user.types.ts

Constants:

user.constants.ts

---

## Before Completing Any Task

Verify:

* TypeScript passes.
* ESLint passes.
* Build succeeds.
* No console.log left in production code.
* No unused imports.
* No any types.

## Parallel Coding Instructions

When working on multiple files or features, the agent must work in parallel where possible.

### Rules

* Analyze the full feature scope first.
* Split work into independent tasks.
* Implement reusable components, hooks, types, and API functions separately.
* Avoid editing the same file from multiple task paths at the same time.
* Finish shared types, constants, and API helpers before connecting them to pages.
* Keep each change small and focused.
* Do not duplicate logic between pages or components.

### Parallel Work Strategy

For every feature, divide work into:

1. API Layer

   * Create or update files in `src/api/`
   * Define request and response typing
   * Handle axios calls here only

2. Types

   * Create or update files in `src/types/`
   * Define DTOs, response types, filter types, and form types

3. Components

   * Create reusable UI components
   * Keep page-specific components inside the related page folder
   * Avoid components larger than 300 lines

4. Hooks

   * Create custom hooks for fetching, mutations, filters, pagination, and form logic
   * Use React Query for server state

5. Pages

   * Connect API, hooks, and components
   * Keep page files clean and readable
   * Avoid business logic directly inside JSX

### Recommended Implementation Order

1. Define types
2. Create API functions
3. Create hooks
4. Create reusable components
5. Connect everything to page
6. Add loading, empty, and error states
7. Run lint, type-check, and build

### Agent Behavior

The agent should:

* Work on independent files in parallel.
* Reuse existing project patterns.
* Prefer composition over large components.
* Avoid unnecessary refactors.
* Avoid changing unrelated files.
* Explain what files were changed and why after completion.

### Forbidden

* Do not create duplicate API calls inside components.
* Do not create new state management libraries.
* Do not introduce unnecessary folder structures.
* Do not rewrite existing working code without reason.
* Do not mix unrelated features in one implementation.
