from __future__ import annotations

import argparse
from pathlib import Path
from typing import Dict


REPO_ROOT = Path(__file__).resolve().parent.parent
CONTENT_ROOT = REPO_ROOT / "02-content"


FILES: Dict[str, str] = {
    "site/config.md": """---
siteName: "Aman Naidu"
siteTagline: "AI, Data, Automation & Analytics Professional"
siteDescription: "Senior AI, data, automation, and analytics professional focused on practical systems, clear architecture, and reliable business outcomes."
siteUrl: "https://xcomsys.com"
brandName: "XCOMSYS"
email: "your-email@example.com"
location: "Brisbane, Australia"
primaryCTA:
  label: "Contact Me"
  href: "/contact"
secondaryCTA:
  label: "View Projects"
  href: "/projects"
footerBlurb: "Senior AI, data, automation, and analytics work presented with clarity, structure, and a focus on practical delivery."
---
""",
    "site/navigation.md": """---
links:
  - label: "Home"
    href: "/"
  - label: "Projects"
    href: "/projects"
  - label: "About"
    href: "/about"
  - label: "Contact"
    href: "/contact"
  - label: "Resume"
    href: "/resume"
---
""",
    "site/socials.md": """---
links:
  - label: "LinkedIn"
    href: "https://linkedin.com/in/your-profile"
  - label: "GitHub"
    href: "https://github.com/your-profile"
  - label: "Resume"
    href: "/resume"
---
""",
    "pages/home.md": """---
eyebrow: "Senior portfolio for AI, data, and automation work"
heroTitle: "I build practical systems that turn complex data and AI into reliable business tools."
heroSummary: "Aman Naidu is a senior AI, data, automation, and analytics professional focused on clear architecture, production-minded delivery, and credible outcomes for business teams."
heroPrimaryCTA:
  label: "View Projects"
  href: "/projects"
heroSecondaryCTA:
  label: "Contact Me"
  href: "/contact"
heroTertiaryCTA:
  label: "About"
  href: "/about"

credibilityStrip:
  - "15+ years"
  - "Enterprise AI"
  - "Production systems"
  - "Mining, energy, and government"

capabilities:
  - title: "AI Systems"
    description: "LLM-enabled workflows, intelligent classification, retrieval, and decision support."
  - title: "Automation"
    description: "Repeatable processes, orchestration, and workflow improvements that save time."
  - title: "Data Engineering"
    description: "Pipelines, transforms, reliability checks, and data shaping for downstream use."
  - title: "Analytics & Dashboards"
    description: "Decision-ready interfaces that turn raw data into a clearer operating picture."
  - title: "MLOps / Deployment"
    description: "Practical delivery patterns that make AI systems easier to run and extend."
---
## Operating Style

Structured, calm, and commercially useful.

## Professional Summary

I focus on systems that can be understood, maintained, and trusted in real operating environments. My work sits at the intersection of technical depth, delivery discipline, and practical business value.

## Working Style

1. Discover  
   Clarify the problem, constraints, stakeholders, and success criteria.

2. Design  
   Choose a system shape that is sensible, maintainable, and readable.

3. Build  
   Implement the core experience with usable parts and clean data flow.

4. Deploy  
   Package the solution so it can be reviewed, used, and extended later.
""",
    "pages/about.md": """---
title: "About"
description: "About Aman Naidu and XCOMSYS."
intro: "I design and build production-grade AI, data, and automation systems through XCOMSYS."
highlights:
  - "Enterprise delivery experience across mining, energy, and government."
  - "Strong focus on practical architecture, deployment, and stakeholder usability."
  - "Bridges technical implementation with business outcomes."
---
I am a senior AI, data, and analytics professional with experience across enterprise environments where reliability, clarity, and operational value matter.

My work has included machine learning systems, analytics platforms, automation workflows, and data products designed for real-world use rather than demo value alone.

XCOMSYS is the brand I use to package that work in a way that can grow over time into consulting, delivery, and productised services.
""",
    "pages/contact.md": """---
title: "Contact"
description: "Simple ways to contact Aman Naidu."
intro: "Reach out directly if you want to discuss a project, opportunity, or collaboration."
emailLabel: "Email"
linkedinLabel: "LinkedIn"
githubLabel: "GitHub"
formIntro: "This version uses a simple contact flow and can later be upgraded to a proper form backend."
---
The page is intentionally low-friction: clear contact methods, predictable expectations, and a direct path to conversation.
""",
    "pages/resume.md": """---
title: "Resume"
description: "Experience, capabilities, and professional background."
intro: "A concise overview of experience across AI, machine learning, analytics, automation, and data leadership."
resumeFile: "/resume.pdf"
---
This page should summarise roles, industries, technical strengths, and leadership capability, while also linking to a downloadable resume.
""",
    "projects/ai-ticket-triage.md": """---
title: "AI Ticket Triage System"
slug: "ai-ticket-triage-system"
category: "AI / LLM Systems"
featured: true
summary: "An AI-assisted workflow that classifies support requests and routes them with less manual effort."
problem: "Support teams were spending too much time manually reading, classifying, and prioritising incoming tickets."
whatIDid: "Designed the workflow shape, classification logic, routing flow, and implementation approach for a practical triage assistant."
tech:
  - "Python"
  - "OpenAI"
  - "FastAPI"
  - "Next.js"
outcome: "Reduced friction in the intake flow and created a more consistent support process."
whyItMatters: "This kind of workflow shows how language models can be used in a bounded, useful way inside business operations."
order: 1
---
## Overview

This project demonstrates how AI can assist operational teams without requiring a full autonomous agent. The design focuses on classification, routing, and human-readable outputs.

## Notes

Add screenshots, diagrams, or implementation details here later.
""",
    "projects/executive-analytics-console.md": """---
title: "Executive Analytics Console"
slug: "executive-analytics-console"
category: "Analytics / Dashboards"
featured: true
summary: "A decision-support dashboard that surfaces business performance, trends, and exceptions in one place."
problem: "Stakeholders were switching between reports and spreadsheets to answer simple operational questions."
whatIDid: "Structured the dashboard around the questions leaders actually needed answered and simplified the reporting experience."
tech:
  - "Next.js"
  - "TypeScript"
  - "Tailwind CSS"
  - "Charting"
outcome: "Made reporting faster and improved visibility of performance signals."
whyItMatters: "The value of analytics is not just visualisation; it is reducing time to understanding."
order: 2
---
## Overview

This project focuses on decision support rather than dashboard decoration.
""",
    "projects/data-quality-monitoring-pipeline.md": """---
title: "Data Quality Monitoring Pipeline"
slug: "data-quality-monitoring-pipeline"
category: "Data Engineering"
featured: true
summary: "A monitoring workflow that detects data issues early and makes pipeline health easier to understand."
problem: "Downstream reports were being affected by stale, incomplete, or inconsistent source data."
whatIDid: "Designed a monitoring pattern that checks pipeline health, surfaces failures early, and improves visibility."
tech:
  - "Python"
  - "SQL"
  - "dbt"
  - "Airflow"
outcome: "Improved confidence in the data layer and reduced time spent discovering issues manually."
whyItMatters: "Reliable AI and analytics systems depend on trustworthy data foundations."
order: 3
---
## Overview

This project highlights data reliability as a core business capability.
""",
}


def write_file(path: Path, content: str, force: bool) -> str:
    path.parent.mkdir(parents=True, exist_ok=True)

    if path.exists() and not force:
        return f"SKIPPED  {path.relative_to(REPO_ROOT)}"

    path.write_text(content, encoding="utf-8", newline="\n")
    return f"WRITTEN  {path.relative_to(REPO_ROOT)}"


def build_content_structure(force: bool = False) -> None:
    CONTENT_ROOT.mkdir(parents=True, exist_ok=True)

    print(f"Repository root : {REPO_ROOT}")
    print(f"Content root    : {CONTENT_ROOT}")
    print(f"Overwrite mode  : {'ON' if force else 'OFF'}")
    print("-" * 72)

    for relative_path, content in FILES.items():
        full_path = CONTENT_ROOT / relative_path
        status = write_file(full_path, content, force=force)
        print(status)

    print("-" * 72)
    print("Done.")


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Create or refresh the markdown content structure for the portfolio site."
    )
    parser.add_argument(
        "--force",
        action="store_true",
        help="Overwrite existing files.",
    )
    return parser.parse_args()


def main() -> None:
    args = parse_args()
    build_content_structure(force=args.force)


if __name__ == "__main__":
    main()