import { loadProjects } from "@/lib/content";
import {
  getProjectBySlug as getFallbackProjectBySlug,
  projects as fallbackProjects,
} from "@/lib/site-data";

type MarkdownProject = Awaited<ReturnType<typeof loadProjects>>[number];

export type ProjectDetailContent = {
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
  whyItMatters: string;
  links: {
    demo?: string;
    repo?: string;
    video?: string;
  };
  body: string;
};

const slugAliases: Record<string, string> = {
  "ai-ticket-triage": "ai-ticket-triage-system",
  "ai-ticket-triage-system": "ai-ticket-triage-system",
  "executive-analytics-console": "executive-analytics-console",
  "data-quality-monitoring-pipeline": "data-quality-monitoring-pipeline",
  "forecast-ops-deployment": "forecast-ops-deployment",
};

const fallbackAliases: Record<string, string> = {
  "ai-ticket-triage-system": "ai-ticket-triage",
  "executive-analytics-console": "executive-analytics-console",
  "data-quality-monitoring-pipeline": "data-quality-monitoring-pipeline",
  "forecast-ops-deployment": "forecast-ops-deployment",
};

function normalizeText(value: string) {
  return value.replace(/\s+/g, " ").trim();
}

function extractSection(body: string, heading: string) {
  const lines = body.split(/\r?\n/);
  const targetHeading = heading.trim().toLowerCase();
  const collected: string[] = [];
  let collecting = false;

  for (const line of lines) {
    const trimmed = line.trim();

    if (trimmed.startsWith("## ")) {
      const currentHeading = trimmed.slice(3).trim().toLowerCase();
      if (collecting) {
        break;
      }
      collecting = currentHeading === targetHeading;
      continue;
    }

    if (collecting) {
      collected.push(line);
    }
  }

  return collected.join("\n").trim();
}

function extractFirstParagraph(section: string) {
  const paragraphs = section
    .split(/\n\s*\n/)
    .map((paragraph) => normalizeText(paragraph))
    .filter(Boolean);

  return paragraphs[0] ?? "";
}

function getFallbackProject(slug: string) {
  const fallbackSlug = fallbackAliases[slug] ?? slug;
  return getFallbackProjectBySlug(fallbackSlug);
}

function resolveMarkdownSlug(slug: string) {
  return slugAliases[slug] ?? slug;
}

export function resolveProjectContentSlug(slug: string) {
  return resolveMarkdownSlug(slug);
}

export function getFallbackProjectForProjectSlug(slug: string) {
  return getFallbackProject(slug);
}

function buildFallbackDetail(slug: string) {
  const project = getFallbackProject(slug);

  if (!project) {
    return null;
  }

  return {
    slug: project.slug,
    title: project.title,
    summary: project.summary,
    category: project.category,
    featured: project.featured,
    techStack: project.techStack,
    heroImage: project.heroImage,
    problem: project.problem,
    solution: project.solution,
    architecture: project.architecture,
    keyFeatures: project.keyFeatures,
    outcome: project.outcome,
    challenges: project.challenges,
    whyItMatters: project.architecture,
    links: project.links,
    body: "",
  } satisfies ProjectDetailContent;
}

function buildMarkdownDetail(
  project: MarkdownProject,
): ProjectDetailContent {
  const fallbackProject = getFallbackProject(project.slug);
  const overview = extractFirstParagraph(extractSection(project.body, "Overview"));
  const notes = extractFirstParagraph(extractSection(project.body, "Notes"));

  return {
    slug: project.slug,
    title: project.title,
    summary: project.summary,
    category: project.category,
    featured: project.featured,
    techStack: project.tech,
    heroImage:
      fallbackProject?.heroImage ??
      `/project-images/${project.slug}/hero.png`,
    problem: project.problem,
    solution: project.whatIDid,
    architecture: normalizeText(
      [
        project.whatIDid,
        overview ? `Overview: ${overview}` : "",
        project.whyItMatters ? `Why it matters: ${project.whyItMatters}` : "",
      ]
        .filter(Boolean)
        .join(" "),
    ),
    keyFeatures: fallbackProject?.keyFeatures ?? [
      project.whatIDid,
      project.whyItMatters,
      `Core stack: ${project.tech.join(", ")}`,
    ].filter(Boolean),
    outcome: project.outcome,
    challenges: fallbackProject?.challenges ?? [
      project.whyItMatters,
      notes ? `Notes: ${notes}` : "Additional detail can be added later.",
    ].filter(Boolean),
    whyItMatters: project.whyItMatters,
    links: fallbackProject?.links ?? {},
    body: project.body,
  };
}

export async function getProjectRouteParams() {
  try {
    const markdownProjects = await loadProjects();
    const markdownSlugs = markdownProjects.map((project) => project.slug);
    const fallbackSlugs = fallbackProjects.map((project) => project.slug);

    return Array.from(new Set([...markdownSlugs, ...fallbackSlugs])).map(
      (slug) => ({ slug }),
    );
  } catch {
    return fallbackProjects.map((project) => ({ slug: project.slug }));
  }
}

export async function getProjectDetailContentBySlug(
  slug: string,
): Promise<ProjectDetailContent | null> {
  const markdownSlug = resolveMarkdownSlug(slug);

  try {
    const markdownProjects = await loadProjects();
    const markdownProject = markdownProjects.find(
      (project) => project.slug === markdownSlug,
    );

    if (markdownProject) {
      return buildMarkdownDetail(markdownProject);
    }
  } catch {
    // Fall through to the legacy data source.
  }

  const fallbackProject = getFallbackProject(slug);
  if (fallbackProject) {
    return buildFallbackDetail(slug);
  }

  return null;
}
