from pathlib import Path

BASE_PATH = Path(r"C:\Python\Projects\Upwork Portfolio\Website")

folders = [
    "01-planning",
    "02-content",
    "03-app",
    "04-assets",
    "04-assets/profile",
    "04-assets/project-images",
    "04-assets/diagrams",
    "04-assets/logos",
    "05-prompts",
    "06-notes",
]

files = {
    "01-planning/00-README.md": """# Portfolio Website Planning Pack

This folder contains the design-first planning documents for the portfolio website.

## Purpose

These files define the website before implementation begins. They are intended to be used by:
- the project owner for decision-making
- Codex or other AI coding tools for implementation
- future contributors who need clear design intent

## How to use this folder

Read the files in order.

Recommended reading sequence:
1. Product vision
2. Audience and goals
3. Site map
4. Page specifications
5. Design system
6. Content schema
7. Demo strategy
8. Implementation roadmap
9. Codex build brief

## Implementation philosophy

This project should be:
- professional
- modular
- easy to extend
- suitable for local development first
- deployable to Vercel later

## Notes

This is the planning layer only.
Actual code should live in the `03-app` folder.
""",

    "01-planning/01-product-vision.md": """# Product Vision

## Objective

Build a professional portfolio website that presents Aman Naidu as a senior AI, data, automation, and analytics professional who can design, build, and communicate high-value technical systems.

## Core purpose

The website should:
- present a strong first impression
- communicate credibility quickly
- showcase projects and demos clearly
- support consulting, job applications, and professional branding
- provide a scalable foundation for future additions

## Positioning

This should not feel like a generic developer portfolio.

It should feel like the digital presence of a senior consultant / technical leader who can:
- solve business problems with AI and data
- design end-to-end systems
- communicate clearly with both technical and non-technical stakeholders
- deliver modern, practical solutions

## Primary outcomes

A visitor should leave the site understanding:
- who Aman is
- what he does
- what kinds of systems he builds
- why he is credible
- how to contact him

## Version 1 focus

Version 1 should prioritise:
- a strong homepage
- an about page
- a projects page
- reusable project detail pages
- a clean contact page
- a structure that supports future demos

## Design principle

Clarity over flash.
Credibility over gimmicks.
Structure over clutter.
""",

    "01-planning/02-audience-and-goals.md": """# Audience and Goals

## Primary audience

The primary audience includes:
- hiring managers
- consulting clients
- founders and business stakeholders
- technical leads
- recruiters reviewing senior technical candidates

## Secondary audience

Secondary audience may include:
- peers in AI and data
- collaborators
- potential students or mentees
- people reviewing project work casually

## What the audience cares about

### Hiring managers
They want to know:
- what Aman has built
- whether he can solve real business problems
- whether he communicates well
- whether he looks senior and reliable

### Clients
They want to know:
- whether Aman understands business use cases
- whether he can deliver practical systems
- whether the work looks modern and professional
- whether he is someone they can trust

### Technical leads
They want to know:
- how deeply Aman understands architecture
- whether his projects reflect good engineering judgement
- whether he can work across AI, data, automation, and deployment

## Website goals

The website should:
1. establish trust quickly
2. communicate positioning clearly
3. direct people toward selected projects
4. provide proof of capability
5. support outreach and conversion to conversations

## User actions the site should encourage

The main user actions should be:
- view projects
- read project details
- view demos where appropriate
- read the about page
- contact Aman
- view resume / LinkedIn / GitHub

## Success criteria

The site is successful if visitors can answer these questions within a short time:
- What does Aman do?
- Is he credible?
- Has he built relevant things?
- Can I see examples?
- How do I contact him?
""",

    "01-planning/03-site-map.md": """# Site Map

## Top-level pages

### 1. Home
Purpose:
- introduce Aman quickly
- establish positioning
- show credibility
- guide visitors to projects and contact options

### 2. Projects
Purpose:
- provide a browsable list of projects
- group projects by category
- help users find relevant proof of work

### 3. Project Detail
Purpose:
- explain individual projects in depth
- show problem, solution, architecture, stack, outcomes, and visuals

### 4. About
Purpose:
- provide professional background
- explain strengths, industries, and working style

### 5. Contact
Purpose:
- give clear ways to reach Aman
- support direct outreach

## Optional future pages

### 6. Demos
Interactive or semi-interactive showcases.

### 7. Resume
A dedicated page or downloadable file.

### 8. Insights / Blog
For articles, case studies, opinions, or technical breakdowns.

## Navigation recommendation

Primary nav:
- Home
- Projects
- About
- Contact

Secondary links:
- Resume
- LinkedIn
- GitHub

## Footer recommendation

Footer should include:
- short identity statement
- navigation links
- contact links
- LinkedIn
- GitHub
- copyright
""",

    "01-planning/04-home-page-spec.md": """# Home Page Specification

## Purpose

The home page is the most important page on the site.
It should communicate value quickly and direct users toward projects and contact.

## Recommended sections

### 1. Hero section
Content:
- name
- title / positioning line
- short summary paragraph
- professional image
- primary call to action
- secondary call to action

Suggested CTA buttons:
- View Projects
- Contact Me

### 2. Credibility strip
Possible items:
- years of experience
- industries worked in
- delivery focus
- AI / data / automation strengths

### 3. Featured projects
Display 3 to 6 featured projects.
Each card should include:
- title
- one-line summary
- category
- stack tags
- link to detail page

### 4. Capabilities section
Suggested categories:
- AI Systems
- Automation
- Data Engineering
- Analytics & Dashboards
- MLOps / Deployment

Each capability should have:
- short label
- brief explanation
- optional icon

### 5. Professional summary section
A short section about Aman:
- background
- problem-solving style
- business + technical strength

This should link to the full About page.

### 6. Process / working style section
Suggested steps:
- Discover
- Design
- Build
- Deploy

This helps position Aman as someone who thinks end-to-end.

### 7. Final CTA section
Should encourage:
- getting in touch
- viewing projects
- reviewing resume

## Design notes

The homepage should feel:
- clean
- senior
- modern
- confident
- practical

It should not feel:
- cluttered
- overly flashy
- like a junior portfolio template
- too academic

## Copy direction

Tone should be:
- clear
- direct
- professional
- business-aware
- technically credible
""",

    "01-planning/05-projects-page-spec.md": """# Projects Page Specification

## Purpose

The Projects page should act as the main library of proof-of-work on the site.

## Core requirements

It should:
- display projects clearly
- support scanning
- show categories and stack information
- link to detailed project pages

## Recommended layout

### Page header
Include:
- title
- short introductory text
- optional filter controls

### Project grid
Each project card should include:
- project title
- short problem statement
- category
- technology tags
- optional featured badge
- short outcome line
- link to project detail page

## Suggested categories

Recommended categories:
- AI / LLM Systems
- Automation
- Data Engineering
- Analytics / Dashboards
- MLOps / Deployment
- Experimental / Labs

## Filter options for later
Optional future enhancements:
- filter by category
- filter by technology
- sort by featured / newest / category

## UX notes

The page should support:
- fast scanning
- quick credibility signals
- smooth movement to project detail pages

## Content notes

Project descriptions should focus on:
- problem
- solution
- practical impact
- stack
- implementation quality

Avoid vague portfolio descriptions.
""",

    "01-planning/06-project-detail-template.md": """# Project Detail Template

## Purpose

Every project page should use a consistent structure so the portfolio feels professional and scalable.

## Required sections

### 1. Project title
Clear and direct.

### 2. One-line summary
A brief explanation of what the project is.

### 3. Problem
Explain:
- what problem existed
- who it affected
- why it mattered

### 4. Solution
Explain:
- what was built
- how it addressed the problem
- what made the solution practical or effective

### 5. Architecture summary
Explain the high-level system design.
This can include:
- frontend
- backend
- AI components
- data flow
- integrations
- deployment notes

### 6. Key features
List the major capabilities.

### 7. Tech stack
Show the main technologies used.

### 8. Visuals
Possible content:
- screenshots
- architecture diagrams
- workflow diagrams
- UI images

### 9. Outcome / impact
Explain:
- business value
- operational improvement
- learning outcome
- technical strength demonstrated

### 10. Challenges / design decisions
Optional but valuable.
Discuss important trade-offs.

### 11. Demo / repo / external links
Show links where appropriate.

## Writing guidance

Each project should answer:
- What was the problem?
- What did Aman build?
- How did it work?
- Why does it matter?

## Tone guidance

The tone should be:
- concrete
- practical
- credible
- not overhyped
""",

    "01-planning/07-about-page-spec.md": """# About Page Specification

## Purpose

The About page should give visitors a stronger sense of who Aman is professionally.

## Main goals

The page should:
- explain background and experience
- communicate strengths and working style
- reinforce credibility
- stay concise and readable

## Recommended sections

### 1. Intro
A short summary covering:
- current positioning
- years of experience
- major domain strengths

### 2. Professional background
Include:
- industries worked in
- kinds of roles held
- broad technical exposure

### 3. Core strengths
Possible strengths:
- AI and data systems
- business problem solving
- stakeholder communication
- end-to-end delivery
- architecture thinking
- production-minded implementation

### 4. How Aman works
Describe:
- structured thinking
- practical delivery
- ability to bridge technical and business needs
- focus on useful outcomes

### 5. Current focus
Possible items:
- AI systems
- automation
- modern data workflows
- consulting
- portfolio projects

### 6. Personal professional statement
A short closing section that makes the page feel human and grounded.

## Tone notes

The page should feel:
- senior
- approachable
- thoughtful
- reliable

It should not feel:
- overly self-promotional
- too long
- too generic
""",

    "01-planning/08-contact-page-spec.md": """# Contact Page Specification

## Purpose

The Contact page should make it easy for people to reach Aman.

## Core principle

No friction.
No clutter.
No confusion.

## Recommended content

### 1. Intro text
Short, simple wording inviting contact.

### 2. Main contact methods
Include:
- email
- LinkedIn
- GitHub

### 3. Optional contact form
For version 1 this can be simple.
Possible fields:
- name
- email
- message

### 4. Optional professional links
Possible additions:
- resume
- portfolio PDF
- Calendly later if needed

## UX notes

This page should:
- feel clean
- look trustworthy
- provide clear next steps

## Content notes

Copy should be simple and direct.
Avoid overcomplicated wording.
""",

    "01-planning/09-design-system.md": """# Design System

## Design direction

The website should feel:
- modern
- clean
- professional
- technical without being cold
- premium without being flashy

## Style keywords

Recommended style keywords:
- minimal
- structured
- confident
- readable
- high trust

## Visual recommendations

### Colour direction
Use a neutral or dark modern palette.
Possible direction:
- deep charcoal / near-black background
- soft white or off-white text
- muted grey surfaces
- one restrained accent colour

The accent colour should be used sparingly.

### Typography
Typography should feel modern and clean.
Use:
- strong headings
- readable body text
- clear hierarchy
- generous spacing

### Layout
Use:
- grid-based layout
- card components
- strong section separation
- consistent spacing
- generous whitespace

### Motion
Use subtle motion only.
Possible uses:
- hover states
- card transitions
- small fade or slide reveals

Avoid excessive animation.

## Component ideas

Suggested reusable components:
- navbar
- hero block
- section header
- project card
- capability card
- CTA block
- footer
- tag / badge
- project image block

## Design principles

1. Clarity first
2. Strong hierarchy
3. Consistency across pages
4. Mobile-friendly structure
5. Professional polish over novelty
""",

    "01-planning/10-content-schema.md": '''# Content Schema

## Purpose

Project and demo content should follow a structured format so the site can scale cleanly.

## Project schema

Each project should include the following fields:

- slug
- title
- summary
- category
- featured
- tech_stack
- hero_image
- problem
- solution
- architecture
- key_features
- outcome
- challenges
- links
- gallery

## Example structure

```json
{
  "slug": "ai-ticket-triage",
  "title": "AI Ticket Triage System",
  "summary": "A workflow automation system that classifies and routes support tickets using AI.",
  "category": "Automation",
  "featured": true,
  "tech_stack": ["Python", "OpenAI", "FastAPI", "Next.js"],
  "hero_image": "/project-images/ai-ticket-triage/hero.png",
  "problem": "Support tickets were being triaged manually, creating delays and inconsistency.",
  "solution": "Built an AI-assisted workflow to classify, prioritise, and route tickets automatically.",
  "architecture": "Frontend for review, backend API for orchestration, LLM layer for classification, storage for logs and outcomes.",
  "key_features": [
    "Ticket classification",
    "Priority scoring",
    "Routing suggestions",
    "Human review support"
  ],
  "outcome": "Improved triage speed and created a more consistent intake process.",
  "challenges": [
    "Balancing automation with review",
    "Prompt consistency",
    "Operational logging"
  ],
  "links": {
    "demo": "",
    "repo": "",
    "video": ""
  },
  "gallery": [
    "/project-images/ai-ticket-triage/1.png",
    "/project-images/ai-ticket-triage/2.png"
  ]
}
```

## Notes

This structure can later be represented in JSON, YAML, MDX frontmatter, or TypeScript objects depending on the app architecture.
''',

    "01-planning/11-demo-strategy.md": '''# Demo Strategy

## Purpose

Not every project needs a live demo, but selected projects should include one where it adds clear value.

## Goals of demos

Demos should:
- make projects feel tangible
- help visitors understand product behaviour quickly
- reinforce implementation quality
- create stronger engagement than static screenshots alone

## Recommended demo types

### 1. Live interactive demo
Best for:
- UI-based tools
- dashboards
- workflow systems
- lightweight AI apps

### 2. Guided video walkthrough
Best for:
- projects with private data
- complex systems
- internal tools
- workflows that are hard to host publicly

### 3. Screenshot-based guided tour
Best for:
- early portfolio versions
- projects without deployment
- systems where a visual explanation is enough

## Demo selection criteria

Choose demos for projects that have:
- strong visual output
- clear user flow
- practical business relevance
- safe content for public viewing

## Important constraints

Avoid demos that:
- expose secrets or internal data
- are unreliable
- feel unfinished
- create maintenance burden without portfolio value

## Version 1 recommendation

For version 1:
- include visual previews for all featured projects
- add live demos only for the strongest suitable projects
- use video or screenshots where live hosting is unnecessary

## UX guidance

When a demo exists, the project page can include:
- a clear Demo button
- a short note about what the demo shows
- fallback screenshots below

## Summary

Use demos selectively.
Quality matters more than quantity.
''',

    "01-planning/12-high-level-implementation-roadmap.md": '''# High-Level Implementation Roadmap

## Phase 1: Planning complete

Outputs:
- product vision
- page specifications
- design direction
- content schema
- implementation brief

## Phase 2: App foundation

Set up:
- Next.js app
- TypeScript
- Tailwind or chosen styling system
- app routing structure
- basic layout shell

## Phase 3: Core content model

Implement:
- project data structure
- reusable content source
- image and asset conventions
- featured project support

## Phase 4: Shared UI components

Build reusable components such as:
- navbar
- footer
- section wrapper
- section heading
- project card
- tag badges
- CTA block

## Phase 5: Main pages

Implement in order:
1. Home
2. Projects
3. Project detail template
4. About
5. Contact

## Phase 6: Content population

Add:
- real project entries
- professional biography
- contact details
- visuals and diagrams

## Phase 7: Polish

Refine:
- spacing
- responsiveness
- motion
- accessibility
- metadata
- SEO basics

## Phase 8: Deployment

Prepare for:
- Vercel deployment
- domain connection later
- production environment settings if needed

## Guiding principle

Build the site in a way that is:
- modular
- clean
- reusable
- easy to expand
''',

    "01-planning/13-codex-build-brief.md": '''# Codex Build Brief

## Objective

Build version 1 of a professional portfolio website for Aman Naidu using the planning documents in this folder as the source of truth.

## Primary goals

The implementation should:
- look professional and senior
- be easy to maintain
- use reusable components
- support future expansion
- be suitable for local development first

## Required pages

Build these pages:
- Home
- Projects
- Project detail page template
- About
- Contact

## Core implementation requirements

The app should include:
- clean routing structure
- reusable layout and section components
- reusable project card component
- structured project content model
- responsive design
- accessible semantic HTML

## Design direction

The visual style should feel:
- modern
- clean
- premium
- structured
- credible

Avoid making it feel like a generic junior developer template.

## Content handling

Project data should be structured so additional projects can be added easily later.

Prefer a maintainable format such as:
- TypeScript data objects
- JSON
- MDX later if needed

## Priority order

1. Foundation and layout
2. Homepage
3. Projects listing
4. Project detail template
5. About page
6. Contact page
7. Visual polish

## Notes for implementation

Use clean code, clear component boundaries, and scalable file organisation.
Optimise for clarity and maintainability over unnecessary complexity.
''',
}

for folder in folders:
    (BASE_PATH / folder).mkdir(parents=True, exist_ok=True)

for relative_path, content in files.items():
    target_path = BASE_PATH / relative_path
    target_path.parent.mkdir(parents=True, exist_ok=True)
    target_path.write_text(content, encoding="utf-8")

print("Portfolio documentation created successfully.")
