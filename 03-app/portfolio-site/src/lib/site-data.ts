export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  category: string;
  featured: boolean;
  techStack: string[];
  heroImage: string;
  problem: string;
  solution: string;
  architecture: string;
  keyFeatures: string[];
  outcome: string;
  challenges: string[];
  links: {
    demo?: string;
    repo?: string;
    video?: string;
  };
};

export const site = {
  name: "Aman Naidu",
  title: "Senior AI, Data, Automation & Analytics Professional",
  description:
    "A professional portfolio showcasing AI systems, data engineering, automation, and practical analytics delivery.",
  email: "aman@example.com",
  linkedin: "https://www.linkedin.com/in/aman-naidu/",
  github: "https://github.com/aman-naidu",
  resume: "/resume",
  location: "Brisbane, Australia",
};

export const navigation: ProjectLink[] = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const socialLinks: ProjectLink[] = [
  { label: "Resume", href: site.resume },
  { label: "LinkedIn", href: site.linkedin },
  { label: "GitHub", href: site.github },
];

export const homeStats = [
  {
    label: "Primary focus",
    value: "AI + data systems",
    description: "Designed for practical business use, not novelty.",
  },
  {
    label: "Delivery style",
    value: "Structured",
    description: "Clear scope, strong architecture, maintainable code.",
  },
  {
    label: "Audience",
    value: "Hiring + clients",
    description: "Built to earn trust quickly with technical depth.",
  },
  {
    label: "Outcome",
    value: "Useful proof",
    description: "Shows how ideas become reliable systems.",
  },
];

export const credibilityPoints = [
  {
    label: "Business aware",
    description:
      "Projects are framed around value, workflow, and practical decision-making.",
  },
  {
    label: "Production minded",
    description:
      "Architecture, deployment, and maintainability are treated as first-class concerns.",
  },
  {
    label: "Communication",
    description:
      "The content is written so technical and non-technical readers can follow it.",
  },
  {
    label: "End-to-end",
    description:
      "From discovery to delivery, the portfolio highlights full-system thinking.",
  },
];

export const capabilities = [
  {
    title: "AI Systems",
    description:
      "LLM-enabled workflows, intelligent classification, retrieval, and decision support.",
  },
  {
    title: "Automation",
    description:
      "Repeatable processes, orchestration, and workflow improvements that save time.",
  },
  {
    title: "Data Engineering",
    description:
      "Pipelines, transforms, reliability checks, and data shaping for downstream use.",
  },
  {
    title: "Analytics & Dashboards",
    description:
      "Decision-ready interfaces that turn raw data into a clearer operating picture.",
  },
  {
    title: "MLOps / Deployment",
    description:
      "Practical delivery patterns that make AI systems easier to run and extend.",
  },
];

export const processSteps = [
  {
    title: "Discover",
    description:
      "Clarify the problem, constraints, stakeholders, and success criteria.",
  },
  {
    title: "Design",
    description:
      "Choose a system shape that is sensible, readable, and maintainable.",
  },
  {
    title: "Build",
    description:
      "Implement the core experience with reusable parts and clean data flow.",
  },
  {
    title: "Deploy",
    description:
      "Package the solution so it can be used, reviewed, and extended later.",
  },
];

export const projects: Project[] = [
  {
    slug: "ai-ticket-triage",
    title: "AI Ticket Triage System",
    summary:
      "An AI-assisted workflow that classifies support requests and routes them with less manual effort.",
    category: "AI / LLM Systems",
    featured: true,
    techStack: ["Python", "OpenAI", "FastAPI", "Next.js", "PostgreSQL"],
    heroImage: "/project-images/ai-ticket-triage/hero.png",
    problem:
      "Support teams were spending too much time manually reading, classifying, and prioritising incoming tickets.",
    solution:
      "Built a triage workflow that scores requests, suggests the next action, and keeps a human review step where it matters.",
    architecture:
      "A web interface captures the request, a backend orchestration layer handles rules and prompts, an LLM classifies intent, and structured logs store outcomes for review.",
    keyFeatures: [
      "Intent classification",
      "Priority scoring",
      "Human review checkpoint",
      "Audit-friendly logs",
    ],
    outcome:
      "Reduced friction in the intake flow and created a more consistent support process.",
    challenges: [
      "Balancing automation with review",
      "Keeping prompts consistent",
      "Designing for traceability",
    ],
    links: {
      demo: "",
      repo: "",
      video: "",
    },
  },
  {
    slug: "executive-analytics-console",
    title: "Executive Analytics Console",
    summary:
      "A decision-support dashboard that surfaces business performance, trends, and exceptions in one place.",
    category: "Analytics / Dashboards",
    featured: true,
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Charting", "REST API"],
    heroImage: "/project-images/executive-analytics-console/hero.png",
    problem:
      "Stakeholders were switching between reports and spreadsheets to answer simple operational questions.",
    solution:
      "Created a polished dashboard experience with summary metrics, trend views, and detail drill-downs that make the data easier to read.",
    architecture:
      "Frontend presentation layer, API-backed metric queries, reusable chart components, and presentation-focused state management for fast scanning.",
    keyFeatures: [
      "KPI summary cards",
      "Trend and variance views",
      "Exception highlighting",
      "Responsive data layouts",
    ],
    outcome:
      "Made reporting feel more immediate and gave leadership a clearer view of performance signals.",
    challenges: [
      "Prioritising clarity over chart density",
      "Representing multiple audiences in one UI",
      "Keeping the interface readable on mobile",
    ],
    links: {
      demo: "",
      repo: "",
      video: "",
    },
  },
  {
    slug: "data-quality-monitoring-pipeline",
    title: "Data Quality Monitoring Pipeline",
    summary:
      "A monitoring workflow that detects data issues early and makes pipeline health easier to understand.",
    category: "Data Engineering",
    featured: true,
    techStack: ["Python", "SQL", "dbt", "Airflow", "Observability"],
    heroImage: "/project-images/data-quality-monitoring-pipeline/hero.png",
    problem:
      "Downstream reports were being affected by stale, incomplete, or inconsistent source data.",
    solution:
      "Built checks and alerts around critical tables so issues are visible before they become business problems.",
    architecture:
      "Scheduled ingestion and transformation jobs feed quality checks, which then emit alerts and create a simple status trail for operators.",
    keyFeatures: [
      "Schema validation",
      "Freshness checks",
      "Alerting hooks",
      "Operational status views",
    ],
    outcome:
      "Improved confidence in the data layer and reduced the time spent discovering issues manually.",
    challenges: [
      "Selecting checks that matter",
      "Avoiding noisy alerts",
      "Keeping the monitoring overhead low",
    ],
    links: {
      demo: "",
      repo: "",
      video: "",
    },
  },
  {
    slug: "forecast-ops-deployment",
    title: "Forecast Ops Deployment",
    summary:
      "A production-oriented forecasting solution that helps teams inspect predictions and operational assumptions.",
    category: "MLOps / Deployment",
    featured: false,
    techStack: ["Python", "MLflow", "Docker", "FastAPI", "Next.js"],
    heroImage: "/project-images/forecast-ops-deployment/hero.png",
    problem:
      "Forecasting work was trapped in notebooks, making it hard to validate, share, or reuse the logic.",
    solution:
      "Packaged the model workflow behind an API and a simple UI so forecasts can be reviewed like a product, not a one-off script.",
    architecture:
      "Model training and tracking feed a serving API, while the frontend shows forecast summaries, confidence notes, and scenario outputs.",
    keyFeatures: [
      "Scenario comparison",
      "Prediction summaries",
      "Model tracking",
      "Deployment-ready workflow",
    ],
    outcome:
      "Turned ad hoc analysis into a reusable system that is easier to explain and maintain.",
    challenges: [
      "Making model outputs understandable",
      "Keeping the serving path lightweight",
      "Separating experiment code from production flow",
    ],
    links: {
      demo: "",
      repo: "",
      video: "",
    },
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getProjectCategories() {
  return Array.from(new Set(projects.map((project) => project.category)));
}
