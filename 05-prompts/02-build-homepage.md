# Prompt: Build Homepage

## Goal

Build the real homepage structure for the portfolio site using the existing UI shell.

## Read these first

- `01-planning/01-product-vision.md`
- `01-planning/02-audience-and-goals.md`
- `01-planning/04-home-page-spec.md`
- `01-planning/09-design-system.md`
- `02-content/homepage-copy.md`
- `02-content/featured-projects.md`
- `02-content/about-copy.md`

## Task

Transform the placeholder homepage into a more realistic homepage layout.

## Create or update

- `src/app/page.tsx`
- any supporting homepage section components under:
  - `src/components/sections/`

## Homepage sections

Implement these sections:

### 1. Hero
Should include:
- name
- role / positioning line
- short intro paragraph
- primary CTA
- secondary CTA

### 2. Credibility / capabilities strip
Short horizontal section highlighting:
- AI systems
- automation
- data engineering
- analytics / dashboards
- MLOps / deployment

### 3. Featured projects
Display featured project cards using the content file as source.

### 4. About summary
A concise professional summary with a link to the about page.

### 5. Contact CTA
A strong, simple closing section encouraging contact.

## Requirements

- use existing layout primitives where possible
- keep the page scannable and clean
- design should feel senior and credible
- avoid excessive animation
- use reusable section components where helpful

## Constraints

- do not add backend logic
- do not invent random content if source files exist
- if source files are missing, keep placeholders clearly structured for later replacement

## Acceptance criteria

- homepage feels like a real portfolio homepage
- visual hierarchy is strong
- sections are reusable and cleanly organized
- featured work is presented clearly
