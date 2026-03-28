# Prompt: Build UI Shell

## Goal

Build the reusable UI shell for the portfolio website inside `03-app/portfolio-site`.

## Read these first

- `01-planning/01-product-vision.md`
- `01-planning/03-site-map.md`
- `01-planning/04-home-page-spec.md`
- `01-planning/09-design-system.md`
- `01-planning/13-codex-build-brief.md`

## Task

Implement the base layout and reusable components for the website.

## Create or update

- `src/components/layout/Navbar.tsx`
- `src/components/layout/Footer.tsx`
- `src/components/ui/Container.tsx`
- `src/components/ui/Section.tsx`
- `src/app/layout.tsx`
- `src/app/page.tsx`

## Requirements

### Navbar
- left side: `Aman Naidu`
- right side: links for `Home`, `Projects`, `About`, `Contact`
- clean, modern, minimal
- sticky at top
- subtle border or separation
- responsive enough for initial version

### Footer
- simple and professional
- include:
  - name
  - short tagline: `AI • Data • Automation`
  - links placeholders for GitHub and LinkedIn

### Container
- centered layout
- max width around `max-w-6xl` or similar
- horizontal padding

### Section
- reusable wrapper for vertical spacing
- support optional title prop if useful

### App layout
- consistent page structure
- navbar at top
- footer at bottom
- proper spacing and readable layout

### Homepage
Create a structured placeholder homepage with:
- hero section
- featured projects placeholder section
- capabilities placeholder section
- contact CTA placeholder section

## Constraints

- Use Next.js App Router
- Use TypeScript
- Use Tailwind CSS only
- Keep design clean and professional
- Do not introduce extra libraries unless necessary
- Do not add backend logic
- Do not overcomplicate the layout

## Acceptance criteria

- `npm run dev` works
- homepage has a clear reusable structure
- navbar and footer exist
- components are modular and readable
- visual style feels modern, minimal, and professional
