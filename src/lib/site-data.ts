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
  problem: string;
  solution: string;
  keyFeatures: string[];
  outcome: string;
  challenges: string[];
};

export const site = {
  name: "Aman Naidu",
  title: "Senior AI, Data, Automation & Analytics Professional",
  description:
    "A professional portfolio showcasing AI systems, data engineering, automation, and practical analytics delivery.",
  email: "aman@xcomsys.com",
  linkedin: "https://www.linkedin.com/in/aman-naidu/",
  github: "https://github.com/AmanNaidu7",
  location: "Brisbane, Australia",
  profileImage: "/profile/aman-naidu.jpg",
  profileImageAlt: "Portrait of Aman Naidu",
};

export const navigation: ProjectLink[] = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const socialLinks: ProjectLink[] = [
  { label: "LinkedIn", href: site.linkedin },
  { label: "GitHub", href: site.github },
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
    problem:
      "Support teams were spending too much time manually reading, classifying, and prioritising incoming tickets.",
    solution:
      "Built a triage workflow that scores requests, suggests the next action, and keeps a human review step where it matters.",
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
  },
  {
    slug: "executive-analytics-console",
    title: "Executive Analytics Console",
    summary:
      "A decision-support dashboard that surfaces business performance, trends, and exceptions in one place.",
    category: "Analytics / Dashboards",
    featured: true,
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Charting", "REST API"],
    problem:
      "Stakeholders were switching between reports and spreadsheets to answer simple operational questions.",
    solution:
      "Created a polished dashboard experience with summary metrics, trend views, and detail drill-downs that make the data easier to read.",
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
  },
  {
    slug: "data-quality-monitoring-pipeline",
    title: "Data Quality Monitoring Pipeline",
    summary:
      "A monitoring workflow that detects data issues early and makes pipeline health easier to understand.",
    category: "Data Engineering",
    featured: true,
    techStack: ["Python", "SQL", "dbt", "Airflow", "Observability"],
    problem:
      "Downstream reports were being affected by stale, incomplete, or inconsistent source data.",
    solution:
      "Built checks and alerts around critical tables so issues are visible before they become business problems.",
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
  },
  {
    slug: "forecast-ops-deployment",
    title: "Forecast Ops Deployment",
    summary:
      "A production-oriented forecasting solution that helps teams inspect predictions and operational assumptions.",
    category: "MLOps / Deployment",
    featured: false,
    techStack: ["Python", "MLflow", "Docker", "FastAPI", "Next.js"],
    problem:
      "Forecasting work was trapped in notebooks, making it hard to validate, share, or reuse the logic.",
    solution:
      "Packaged the model workflow behind an API and a simple UI so forecasts can be reviewed like a product, not a one-off script.",
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
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
