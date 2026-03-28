# Prompt: Build Project Detail Template

## Goal

Build a reusable project detail page template for portfolio projects.

## Read these first

- `01-planning/06-project-detail-template.md`
- `01-planning/09-design-system.md`
- `01-planning/10-content-schema.md`
- `02-content/projects/`

## Task

Create a dynamic or reusable project detail structure that can support multiple project pages.

## Create or update

- dynamic project route or equivalent under:
  - `src/app/projects/[slug]/page.tsx`
- helper/data layer as needed for local content-driven rendering
- reusable components for:
  - hero
  - metadata
  - sections
  - gallery blocks
  - tech stack tags

## Required sections

- title
- one-line summary
- problem
- solution
- architecture summary
- key features
- tech stack
- visuals / gallery area
- outcome / impact
- challenges or design decisions
- links area for demo/repo/video

## Constraints

- keep implementation clean and maintainable
- do not over-engineer data loading
- prefer a simple local content model
- do not add backend logic

## Acceptance criteria

- project detail route works
- content structure matches planning docs
- layout is readable and professional
- page template is reusable for multiple projects
