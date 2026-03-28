# Content Schema

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
