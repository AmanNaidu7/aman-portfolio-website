import { cache } from "react";
import { loadAboutPage } from "@/lib/content";
import { site as fallbackSite } from "@/lib/site-data";

type MarkdownAboutContent = Awaited<ReturnType<typeof loadAboutPage>>;

type AboutSection = {
  title: string;
  paragraphs: string[];
  bullets: string[];
  numbered: string[];
};

export type AboutPageContent = {
  badge: string;
  heroTitle: string;
  heroSummary: string;
  overview: AboutSection;
  experience: AboutSection;
  strengths: AboutSection;
  howIWork: AboutSection;
  focusAreas: AboutSection;
  statement: AboutSection;
  cta: {
    label: string;
    href: string;
  };
};

function normalizeText(text: string) {
  return text.replace(/\s+/g, " ").trim();
}

function extractSection(body: string, heading: string) {
  const lines = body.split(/\r?\n/);
  const target = heading.trim().toLowerCase();
  const collected: string[] = [];
  let collecting = false;

  for (const line of lines) {
    const trimmed = line.trim();

    if (trimmed.startsWith("## ")) {
      const current = trimmed.slice(3).trim().toLowerCase();
      if (collecting) {
        break;
      }
      collecting = current === target;
      continue;
    }

    if (collecting && trimmed !== "---") {
      collected.push(line);
    }
  }

  return collected.join("\n").trim();
}

function extractParagraphs(section: string) {
  return section
    .split(/\n\s*\n/)
    .map((part) => part.trim())
    .filter(Boolean)
    .filter((part) => !/^[-*]\s+/.test(part))
    .filter((part) => !/^\d+\.\s+/.test(part))
    .map(normalizeText);
}

function extractBullets(section: string) {
  return section
    .split(/\r?\n/)
    .map((line) => line.trim())
    .map((line) => line.match(/^[-*]\s+(.*)$/)?.[1] ?? "")
    .map(normalizeText)
    .filter(Boolean);
}

function extractNumbered(section: string) {
  return section
    .split(/\r?\n/)
    .map((line) => line.trim())
    .map((line) => line.match(/^\d+\.\s+(.*)$/)?.[1] ?? "")
    .map(normalizeText)
    .filter(Boolean);
}

function buildSection(sectionTitle: string, raw: string): AboutSection {
  return {
    title: sectionTitle,
    paragraphs: extractParagraphs(raw),
    bullets: extractBullets(raw),
    numbered: extractNumbered(raw),
  };
}

function hasSectionContent(section: AboutSection) {
  return (
    section.paragraphs.length > 0 ||
    section.bullets.length > 0 ||
    section.numbered.length > 0
  );
}

function buildFallbackAboutContent(): AboutPageContent {
  const fallbackOverview = {
    title: "Overview",
    paragraphs: [fallbackSite.description],
    bullets: [],
    numbered: [],
  } satisfies AboutSection;

  return {
    badge: "About",
    heroTitle: "About",
    heroSummary:
      "Senior AI, data, and automation work focused on practical systems and reliable delivery.",
    overview: fallbackOverview,
    experience: {
      title: "Experience Context",
      paragraphs: [],
      bullets: [],
      numbered: [],
    },
    strengths: {
      title: "Core Strengths",
      paragraphs: [],
      bullets: [],
      numbered: [],
    },
    howIWork: {
      title: "How I Work",
      paragraphs: [],
      bullets: [],
      numbered: [],
    },
    focusAreas: {
      title: "Focus Areas",
      paragraphs: [],
      bullets: [],
      numbered: [],
    },
    statement: {
      title: "Personal Statement",
      paragraphs: [
        "If you are working on an AI, data, or automation problem and need a practical solution, feel free to get in touch.",
      ],
      bullets: [],
      numbered: [],
    },
    cta: {
      label: "Contact Me",
      href: "/contact",
    },
  };
}

function buildMarkdownAboutContent(content: MarkdownAboutContent): AboutPageContent {
  const overview = buildSection(
    "Overview",
    extractSection(content.body, "Overview"),
  );
  const experience = buildSection(
    "Experience Context",
    extractSection(content.body, "Experience Context"),
  );
  const strengths = buildSection(
    "Core Strengths",
    extractSection(content.body, "Core Strengths"),
  );
  const howIWork = buildSection(
    "How I Work",
    extractSection(content.body, "How I Work"),
  );
  const focusAreas = buildSection(
    "Focus Areas",
    extractSection(content.body, "Focus Areas"),
  );
  const statement = buildSection(
    "Personal Statement",
    extractSection(content.body, "Personal Statement"),
  );

  return {
    badge: "About",
    heroTitle: content.title || "About",
    heroSummary: content.intro,
    overview: hasSectionContent(overview)
      ? overview
      : {
          title: "Overview",
          paragraphs: [content.intro],
          bullets: [],
          numbered: [],
        },
    experience,
    strengths: hasSectionContent(strengths)
      ? strengths
      : {
          title: "Core Strengths",
          paragraphs: [],
          bullets: content.highlights,
          numbered: [],
        },
    howIWork,
    focusAreas,
    statement: hasSectionContent(statement)
      ? statement
      : {
          title: "Personal Statement",
          paragraphs: [fallbackSite.description],
          bullets: [],
          numbered: [],
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
