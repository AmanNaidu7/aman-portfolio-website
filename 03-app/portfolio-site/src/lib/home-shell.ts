import { loadHomePage } from "@/lib/content";
import {
  capabilities as fallbackCapabilities,
  credibilityPoints as fallbackCredibilityPoints,
  homeStats as fallbackHomeStats,
  processSteps as fallbackProcessSteps,
  projects,
  site as fallbackSite,
} from "@/lib/site-data";

export type HomeShellContent = {
  eyebrow: string;
  heroTitle: string;
  heroSummary: string;
  heroPrimaryCTA: {
    label: string;
    href: string;
  };
  heroSecondaryCTA: {
    label: string;
    href: string;
  };
  heroTertiaryCTA: {
    label: string;
    href: string;
  };
  credibilityStrip: string[];
  capabilities: {
    title: string;
    description: string;
  }[];
  operatingStyle: string;
  professionalSummary: string;
  workingStyleTitle: string;
  workingStyleSteps: {
    title: string;
    description: string;
  }[];
  siteName: string;
};

function normalizeParagraph(text: string) {
  return text.replace(/\s+/g, " ").trim();
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
    .map((paragraph) => normalizeParagraph(paragraph))
    .filter(Boolean);

  return paragraphs[0] ?? "";
}

function extractNumberedSteps(section: string) {
  const lines = section.split(/\r?\n/);
  const steps: { title: string; description: string }[] = [];
  let currentStep: { title: string; description: string } | null = null;

  for (const line of lines) {
    const trimmed = line.trim();

    if (!trimmed) {
      continue;
    }

    const numberedMatch = trimmed.match(/^(\d+)\.\s*(.*)$/);
    if (numberedMatch) {
      if (currentStep) {
        steps.push(currentStep);
      }

      currentStep = {
        title: numberedMatch[2].trim(),
        description: "",
      };
      continue;
    }

    if (currentStep && line.startsWith("   ")) {
      currentStep.description = currentStep.description
        ? `${currentStep.description} ${trimmed}`
        : trimmed;
    }
  }

  if (currentStep) {
    steps.push(currentStep);
  }

  return steps.filter((step) => step.title.length > 0);
}

function fallbackHomeContent(): HomeShellContent {
  return {
    eyebrow: "Senior portfolio for AI, data, and automation work",
    heroTitle:
      "I build practical systems that turn complex data and AI into reliable business tools.",
    heroSummary: `${fallbackSite.name} is a senior AI, data, automation, and analytics professional focused on clear architecture, production-minded delivery, and credible outcomes for business teams.`,
    heroPrimaryCTA: { label: "View Projects", href: "/projects" },
    heroSecondaryCTA: { label: "Contact Me", href: "/contact" },
    heroTertiaryCTA: { label: "About", href: "/about" },
    credibilityStrip: ["15+ years", "Enterprise AI", "Production systems", "Mining, energy, and government"],
    capabilities: fallbackCapabilities,
    operatingStyle: "Structured, calm, and commercially useful.",
    professionalSummary:
      "I focus on systems that can be understood, maintained, and trusted in real operating environments. My work sits at the intersection of technical depth, delivery discipline, and practical business value.",
    workingStyleTitle: "How I approach projects",
    workingStyleSteps: fallbackProcessSteps,
    siteName: fallbackSite.name,
  };
}

export const getHomeShellContent = async (): Promise<HomeShellContent> => {
  try {
    const content = await loadHomePage();
    const operatingStyle = normalizeParagraph(
      extractFirstParagraph(extractSection(content.body, "Operating Style")),
    );
    const professionalSummary = normalizeParagraph(
      extractFirstParagraph(extractSection(content.body, "Professional Summary")),
    );
    const workingStyleSteps = extractNumberedSteps(
      extractSection(content.body, "Working Style"),
    );

    return {
      eyebrow: content.eyebrow,
      heroTitle: content.heroTitle,
      heroSummary: content.heroSummary,
      heroPrimaryCTA: content.heroPrimaryCTA,
      heroSecondaryCTA: content.heroSecondaryCTA,
      heroTertiaryCTA: content.heroTertiaryCTA,
      credibilityStrip:
        content.credibilityStrip.length > 0
          ? content.credibilityStrip
          : fallbackHomeContent().credibilityStrip,
      capabilities:
        content.capabilities.length > 0
          ? content.capabilities
          : fallbackCapabilities,
      operatingStyle: operatingStyle || fallbackHomeContent().operatingStyle,
      professionalSummary:
        professionalSummary || fallbackHomeContent().professionalSummary,
      workingStyleTitle: "How I approach projects",
      workingStyleSteps:
        workingStyleSteps.length > 0
          ? workingStyleSteps
          : fallbackHomeContent().workingStyleSteps,
      siteName: fallbackSite.name,
    };
  } catch {
    return fallbackHomeContent();
  }
};

export function getFeaturedProjects() {
  return projects.filter((project) => project.featured);
}

export function getHomeStats() {
  return fallbackHomeStats;
}

export function getCredibilityPoints() {
  return fallbackCredibilityPoints;
}
