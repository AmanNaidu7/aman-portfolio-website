# Prompt: Build Projects Page

## Goal

Build the projects listing page for the portfolio website.

## Read these first

- `01-planning/03-site-map.md`
- `01-planning/05-projects-page-spec.md`
- `01-planning/09-design-system.md`
- `01-planning/10-content-schema.md`
- `02-content/featured-projects.md`
- `02-content/projects/`

## Task

Create a projects page that presents portfolio projects in a clean, browsable format.

## Create or update

- `src/app/projects/page.tsx`
- reusable project card component if needed
- optional supporting components under:
  - `src/components/sections/`
  - `src/components/ui/`

## Requirements

### Page header
- title
- short intro text

### Project grid
Each project card should support:
- title
- summary
- category
- stack tags
- optional featured badge
- link to project detail page

### Styling
- clean card layout
- strong spacing
- readable tags
- modern and professional look

## Constraints

- use structured reusable components
- keep layout simple and effective
- do not add unnecessary filtering logic yet unless trivial
- do not add backend logic

## Acceptance criteria

- `/projects` route exists
- projects are shown in a clean grid/list
- cards are reusable
- page feels consistent with homepage style
