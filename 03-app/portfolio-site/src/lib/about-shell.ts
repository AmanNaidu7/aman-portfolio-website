import { cache } from "react";
import { loadAboutPage } from "@/lib/content";
import {
  capabilities as fallbackCapabilities,
  credibilityPoints as fallbackCredibilityPoints,
  processSteps as fallbackProcessSteps,
  site as fallbackSite,
} from "@/lib/site-data";

type MarkdownAboutContent = Awaited<ReturnType<typeof loadAboutPage>>;

export type AboutPageContent = {
  badge: string;
  heroTitle: string;
  heroSummary: string;
  background: {
    eyebrow: string;
    title: string;
    description: string;
    points: string[];
  };
  strengths: string[];
  strengthsSummary: string;
  workingStyle: {
    eyebrow: string;
    title: string;
    body: string;
  };
  focusAreas: string[];
  focusSummary: string;
  statement: {
    eyebrow: string;
    title: string;
    body: string;
  };
  cta: {
    label: string;
    href: string;
  };
};

const fallbackStrengths = [
  ...fallbackCredibilityPoints.map((point) => point.label),
  ...fallbackCapabilities.map((capability) => capability.title),
].slice(0, 6);

const fallbackFocusAreas = [
  ...fallbackCapabilities.map((capability) => capability.title),
];

const fallbackBackgroundPoints = [
  fallbackCredibilityPoints[0]?.description ??
    "Experience across technology, data, and operational workflows.",
  fallbackCredibilityPoints[1]?.description ??
    "Comfortable working with both technical and non-technical teams.",
  fallbackCredibilityPoints[2]?.description ??
    "Focused on systems that improve clarity, speed, and reliability.",
];

const fallbackWorkingStyle =
  fallbackProcessSteps
    .map((step) => `${step.title}: ${step.description}`)
    .join(" ");

const fallbackStatementTitle = "The goal is simple: make complex work easy to trust.";

const fallbackStatementBody =
  fallbackSite.description;

function uniqueStrings(values: string[]) {
  return Array.from(new Set(values.map((value) => value.trim()).filter(Boolean)));
}

function buildFallbackAboutContent(): AboutPageContent {
  return {
    badge: "About Aman",
    heroTitle:
      "A senior technical profile with a strong bias toward clarity, useful systems, and trustworthy delivery.",
    heroSummary:
      fallbackSite.description,
    background: {
      eyebrow: "Background",
      title: "Professional background",
      description:
        "The structure is intentionally concise: enough detail to establish credibility without turning into a long biography.",
      points: [...fallbackBackgroundPoints],
    },
    strengths: [...fallbackStrengths],
    strengthsSummary:
      "These strengths are represented in the portfolio through real project structure, not vague claims.",
    workingStyle: {
      eyebrow: "How Aman works",
      title: "Working style",
      body: fallbackWorkingStyle,
    },
    focusAreas: [...fallbackFocusAreas],
    focusSummary:
      fallbackSite.description,
    statement: {
      eyebrow: "Personal statement",
      title: fallbackStatementTitle,
      body: fallbackStatementBody,
    },
    cta: {
      label: "Contact Me",
      href: "/contact",
    },
  };
}

function buildMarkdownAboutContent(
  content: MarkdownAboutContent,
): AboutPageContent {
  const backgroundPoints = content.paragraphs.length
    ? content.paragraphs.slice(0, 3)
    : fallbackBackgroundPoints;
  const strengths = uniqueStrings([
    ...content.highlights,
    ...fallbackStrengths,
  ]).slice(0, 6);
  const focusAreas = uniqueStrings(
    fallbackCapabilities.map((capability) => capability.title),
  );

  return {
    badge: "About Aman",
    heroTitle:
      "A senior technical profile with a strong bias toward clarity, useful systems, and trustworthy delivery.",
    heroSummary: content.intro,
    background: {
      eyebrow: "Background",
      title: content.title === "About" ? "Professional background" : content.title,
      description: content.description,
      points: backgroundPoints,
    },
    strengths,
    strengthsSummary:
      "These strengths are represented in the portfolio through real project structure, not vague claims.",
    workingStyle: {
      eyebrow: "How Aman works",
      title: "Working style",
      body: content.paragraphs[1] ?? fallbackWorkingStyle,
    },
    focusAreas: focusAreas.length > 0 ? focusAreas : fallbackFocusAreas,
    focusSummary: content.paragraphs[2] ?? fallbackStatementBody,
    statement: {
      eyebrow: "Personal statement",
      title: fallbackStatementTitle,
      body: content.paragraphs[2] ?? fallbackStatementBody,
    },
    cta: {
      label: "Contact Me",
      href: "/contact",
    },
  };
}

export const getAboutPageContent = cache(async (): Promise<AboutPageContent> => {
  try {
    const content = await loadAboutPage();
    return buildMarkdownAboutContent(content);
  } catch {
    return buildFallbackAboutContent();
  }
});
