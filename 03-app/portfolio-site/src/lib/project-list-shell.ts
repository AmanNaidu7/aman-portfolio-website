import { cache } from "react";
import { loadProjects } from "@/lib/content";
import {
  getFallbackProjectForProjectSlug,
  resolveProjectContentSlug,
} from "@/lib/project-shell";
import { projects as fallbackProjects, type Project } from "@/lib/site-data";

type MarkdownProject = Awaited<ReturnType<typeof loadProjects>>[number];

export type ProjectListContent = {
  projects: Project[];
  categories: string[];
};

function normalizeText(value: string) {
  return value.replace(/\s+/g, " ").trim();
}

function compact(values: Array<string | undefined | null>) {
  return values
    .map((value) => (typeof value === "string" ? normalizeText(value) : ""))
    .filter(Boolean);
}

function buildFallbackLinks(project?: Project): Project["links"] {
  if (!project) {
    return {};
  }

  return {
    demo: project.links.demo,
    repo: project.links.repo,
    video: project.links.video,
  };
}

function buildMarkdownProject(project: MarkdownProject): Project {
  const fallbackProject = getFallbackProjectForProjectSlug(project.slug);

  return {
    slug: project.slug,
    title: project.title,
    summary: project.summary,
    category: project.category,
    featured: project.featured,
    techStack: fallbackProject?.techStack ?? project.tech,
    heroImage:
      fallbackProject?.heroImage ?? `/project-images/${project.slug}/hero.png`,
    problem: project.problem,
    solution: fallbackProject?.solution ?? project.whatIDid,
    architecture:
      fallbackProject?.architecture ??
      normalizeText(
        compact([
          project.whatIDid,
          project.whyItMatters,
          project.outcome,
        ]).join(" "),
      ),
    keyFeatures:
      fallbackProject?.keyFeatures ??
      compact([
        project.whatIDid,
        project.whyItMatters,
        `Core stack: ${project.tech.join(", ")}`,
      ]),
    outcome: project.outcome,
    challenges:
      fallbackProject?.challenges ??
      compact([project.whyItMatters, project.problem]),
    links: buildFallbackLinks(fallbackProject),
  };
}

function buildFallbackProject(project: Project): Project {
  return {
    ...project,
    slug: project.slug,
    links: buildFallbackLinks(project),
  };
}

function mergeProjects(
  markdownProjects: MarkdownProject[],
): ProjectListContent {
  const markdownByCanonicalSlug = new Map(
    markdownProjects.map((project) => [project.slug, project]),
  );

  const projects = markdownProjects.map((project) => buildMarkdownProject(project));

  for (const project of fallbackProjects) {
    const canonicalSlug = resolveProjectContentSlug(project.slug);

    if (markdownByCanonicalSlug.has(canonicalSlug)) {
      continue;
    }

    projects.push(buildFallbackProject(project));
  }

  const categories: string[] = [];
  for (const project of projects) {
    if (!categories.includes(project.category)) {
      categories.push(project.category);
    }
  }

  return { projects, categories };
}

export const getProjectListContent = cache(async (): Promise<ProjectListContent> => {
  try {
    const markdownProjects = await loadProjects();
    return mergeProjects(markdownProjects);
  } catch {
    const projects = fallbackProjects.map((project) => buildFallbackProject(project));
    const categories = Array.from(new Set(projects.map((project) => project.category)));

    return { projects, categories };
  }
});
