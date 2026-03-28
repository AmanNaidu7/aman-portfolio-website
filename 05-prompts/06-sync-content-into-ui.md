# Prompt: Sync Content into UI

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
