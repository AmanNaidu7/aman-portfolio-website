from pathlib import Path

BASE_PATH = Path(r"C:\Python\Projects\Upwork Portfolio\Website")
PROMPTS_PATH = BASE_PATH / "05-prompts"

files = {
    "00-how-to-execute.md": """# How to Execute Prompt Files with Codex

## Purpose

This folder contains reusable execution prompts for Codex or another AI coding assistant.

The goal is to avoid repeatedly typing long prompts in chat.

## Standard execution pattern

Use a short instruction like:

Read `05-prompts/01-build-ui-shell.md` and execute it.

Or:

Use `05-prompts/02-build-homepage.md` as the execution instructions.
Also use `01-planning` and `02-content` as the source of truth.
Implement changes in `03-app/portfolio-site`.

## Recommended short command

Use this pattern:

Read `05-prompts/<prompt-file>.md`.
Use it as the execution instructions.
Also use:
- `01-planning/*`
- `02-content/*`
Implement changes in:
- `03-app/portfolio-site`

## General rules for Codex

Codex should:
- read the referenced prompt file first
- read the relevant planning/content files before coding
- treat planning docs as source of truth
- keep the code modular and readable
- avoid unnecessary complexity
- avoid making unrelated changes

## Suggested workflow

1. Choose one prompt file.
2. Tell Codex to read and execute it.
3. Review the changes.
4. Run the local app.
5. Commit working changes.
6. Move to the next prompt file.

## Important note

Do not try to implement the whole website in one giant step.
Run one focused prompt file at a time.
""",

    "01-build-ui-shell.md": """# Prompt: Build UI Shell

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
""",

    "02-build-homepage.md": """# Prompt: Build Homepage

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
""",

    "03-build-projects-page.md": """# Prompt: Build Projects Page

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
""",

    "04-build-project-detail-template.md": """# Prompt: Build Project Detail Template

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
""",

    "05-refine-visual-design.md": """# Prompt: Refine Visual Design

## Goal

Polish the portfolio UI so it feels more premium, cohesive, and visually professional.

## Read these first

- `01-planning/09-design-system.md`
- `01-planning/04-home-page-spec.md`
- `01-planning/05-projects-page-spec.md`
- current implementation in `03-app/portfolio-site`

## Task

Improve the visual quality of the existing UI without changing the core information architecture.

## Focus areas

- spacing consistency
- typography hierarchy
- button styling
- card polish
- navbar/footer polish
- alignment
- section rhythm
- subtle hover states
- responsive balance

## Requirements

- keep design modern and restrained
- avoid flashy colors or gimmicks
- use neutral palette
- improve perceived quality through spacing and hierarchy
- keep Tailwind usage clean

## Constraints

- do not redesign the whole site from scratch
- do not add random libraries
- do not introduce heavy animation
- do not add unnecessary complexity

## Acceptance criteria

- site feels cleaner and more premium
- layout consistency improves noticeably
- UI remains readable and maintainable
""",

    "06-sync-content-into-ui.md": """# Prompt: Sync Content into UI

## Goal

Replace placeholder text in the portfolio UI with structured content from the content folder.

## Read these first

- all relevant files in `02-content/`
- relevant planning docs in `01-planning/`
- current app implementation in `03-app/portfolio-site`

## Task

Update the UI so homepage, projects, about, and contact sections reflect the real content files.

## Requirements

- use content files as the source of truth
- preserve the existing design system
- update placeholders only where real content exists
- keep the code modular

## Constraints

- do not invent conflicting content
- do not break routes
- do not make unrelated styling changes unless needed for content fit

## Acceptance criteria

- visible site content matches content files
- placeholders are removed where real content is available
- implementation remains clean and maintainable
""",
}


def create_prompt_pack(base_path: Path, file_map: dict[str, str]) -> None:
    base_path.mkdir(parents=True, exist_ok=True)

    for filename, content in file_map.items():
        file_path = base_path / filename
        file_path.write_text(content, encoding="utf-8")

    print("✅ Prompt pack created successfully.")
    print(f"📁 Location: {base_path}")
    print("\nCreated files:")
    for filename in file_map:
        print(f"  - {file_path.parent / filename}")


if __name__ == "__main__":
    create_prompt_pack(PROMPTS_PATH, files)