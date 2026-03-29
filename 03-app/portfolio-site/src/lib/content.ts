import path from "node:path";
import { readFile, readdir } from "node:fs/promises";
import matter from "gray-matter";
import { cache } from "react";

const CONTENT_ROOT = path.resolve(process.cwd(), "content");
const PROJECTS_DIR = path.join(CONTENT_ROOT, "projects");

type RecordLike = Record<string, unknown>;

export type MarkdownDocument<TFrontmatter extends RecordLike> = {
  filePath: string;
  frontmatter: TFrontmatter;
  body: string;
};

export type ContentLink = {
  label: string;
  href: string;
};

export type SiteConfigContent = {
  siteName: string;
  siteTagline: string;
  siteDescription: string;
  siteUrl: string;
  brandName: string;
  email: string;
  location: string;
  profileImage: string;
  profileImageAlt: string;
  primaryCTA: ContentLink;
  secondaryCTA: ContentLink;
  footerBlurb: string;
};

export type NavigationContent = {
  links: ContentLink[];
};

export type SocialLinksContent = {
  links: ContentLink[];
};

export type HomeContent = {
  eyebrow: string;
  heroTitle: string;
  heroSummary: string;
  heroPrimaryCTA: ContentLink;
  heroSecondaryCTA: ContentLink;
  heroTertiaryCTA: ContentLink;
  featuredWorkEyebrow: string;
  featuredWorkTitle: string;
  featuredWorkDescription: string;
  workingStyleEyebrow: string;
  workingStyleTitle: string;
  finalCtaEyebrow: string;
  finalCtaTitle: string;
  finalCtaDescription: string;
  finalCtaPrimaryCTA: ContentLink;
  finalCtaSecondaryCTA: ContentLink;
  finalCtaTertiaryCTA: ContentLink;
};

export type AboutContent = {
  title: string;
  description: string;
  intro: string;
  highlights: string[];
  body: string;
};

export type ContactContent = {
  title: string;
  description: string;
  intro: string;
  emailLabel: string;
  linkedinLabel: string;
  githubLabel: string;
  formIntro: string;
  body: string;
};

export type ProjectContent = {
  title: string;
  slug: string;
  category: string;
  featured: boolean;
  summary: string;
  problem: string;
  whatIDid: string;
  tech: string[];
  outcome: string;
  whyItMatters: string;
  order: number;
};

function isRecord(value: unknown): value is RecordLike {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

function requireString(value: unknown, fieldName: string): string {
  if (typeof value !== "string" || value.trim().length === 0) {
    throw new Error(`Expected a non-empty string for ${fieldName}.`);
  }
  return value.trim();
}

function requireBoolean(value: unknown, fieldName: string): boolean {
  if (typeof value !== "boolean") {
    throw new Error(`Expected a boolean for ${fieldName}.`);
  }
  return value;
}

function requireNumber(value: unknown, fieldName: string): number {
  if (typeof value !== "number" || Number.isNaN(value)) {
    throw new Error(`Expected a number for ${fieldName}.`);
  }
  return value;
}

function requireStringArray(value: unknown, fieldName: string): string[] {
  if (!Array.isArray(value) || value.some((item) => typeof item !== "string")) {
    throw new Error(`Expected a string array for ${fieldName}.`);
  }
  return value.map((item) => item.trim()).filter(Boolean);
}

function requireLink(value: unknown, fieldName: string): ContentLink {
  if (!isRecord(value)) {
    throw new Error(`Expected an object for ${fieldName}.`);
  }

  return {
    label: requireString(value.label, `${fieldName}.label`),
    href: requireString(value.href, `${fieldName}.href`),
  };
}

function requireLinkArray(value: unknown, fieldName: string): ContentLink[] {
  if (!Array.isArray(value)) {
    throw new Error(`Expected an array for ${fieldName}.`);
  }

  return value.map((item, index) => requireLink(item, `${fieldName}[${index}]`));
}

function optionalStringArray(value: unknown) {
  if (!Array.isArray(value)) {
    return [];
  }

  return value
    .map((item) => (typeof item === "string" ? item.trim() : ""))
    .filter(Boolean);
}

function splitParagraphs(body: string) {
  return body
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.replace(/\s+/g, " ").trim())
    .filter(Boolean);
}

async function readMarkdownFile<TFrontmatter extends RecordLike>(
  absolutePath: string,
): Promise<MarkdownDocument<TFrontmatter>> {
  const raw = await readFile(absolutePath, "utf8");
  const parsed = matter(raw);

  return {
    filePath: absolutePath,
    frontmatter: parsed.data as TFrontmatter,
    body: parsed.content.trim(),
  };
}

function resolveContentPath(...segments: string[]) {
  return path.join(CONTENT_ROOT, ...segments);
}

function parseSiteConfig(doc: MarkdownDocument<RecordLike>): SiteConfigContent {
  return {
    siteName: requireString(doc.frontmatter.siteName, "siteName"),
    siteTagline: requireString(doc.frontmatter.siteTagline, "siteTagline"),
    siteDescription: requireString(
      doc.frontmatter.siteDescription,
      "siteDescription",
    ),
    siteUrl: requireString(doc.frontmatter.siteUrl, "siteUrl"),
    brandName: requireString(doc.frontmatter.brandName, "brandName"),
    email: requireString(doc.frontmatter.email, "email"),
    location: requireString(doc.frontmatter.location, "location"),
    profileImage: requireString(doc.frontmatter.profileImage, "profileImage"),
    profileImageAlt: requireString(
      doc.frontmatter.profileImageAlt,
      "profileImageAlt",
    ),
    primaryCTA: requireLink(doc.frontmatter.primaryCTA, "primaryCTA"),
    secondaryCTA: requireLink(doc.frontmatter.secondaryCTA, "secondaryCTA"),
    footerBlurb: requireString(doc.frontmatter.footerBlurb, "footerBlurb"),
  };
}

function parseNavigation(doc: MarkdownDocument<RecordLike>): NavigationContent {
  return {
    links: requireLinkArray(doc.frontmatter.links, "links"),
  };
}

function parseSocials(doc: MarkdownDocument<RecordLike>): SocialLinksContent {
  return {
    links: requireLinkArray(doc.frontmatter.links, "links"),
  };
}

function parseHomeContent(doc: MarkdownDocument<RecordLike>): HomeContent {
  return {
    eyebrow: requireString(doc.frontmatter.eyebrow, "eyebrow"),
    heroTitle: requireString(doc.frontmatter.heroTitle, "heroTitle"),
    heroSummary: requireString(doc.frontmatter.heroSummary, "heroSummary"),
    heroPrimaryCTA: requireLink(doc.frontmatter.heroPrimaryCTA, "heroPrimaryCTA"),
    heroSecondaryCTA: requireLink(
      doc.frontmatter.heroSecondaryCTA,
      "heroSecondaryCTA",
    ),
    heroTertiaryCTA: requireLink(
      doc.frontmatter.heroTertiaryCTA,
      "heroTertiaryCTA",
    ),
    featuredWorkEyebrow: requireString(
      doc.frontmatter.featuredWorkEyebrow,
      "featuredWorkEyebrow",
    ),
    featuredWorkTitle: requireString(
      doc.frontmatter.featuredWorkTitle,
      "featuredWorkTitle",
    ),
    featuredWorkDescription: requireString(
      doc.frontmatter.featuredWorkDescription,
      "featuredWorkDescription",
    ),
    workingStyleEyebrow: requireString(
      doc.frontmatter.workingStyleEyebrow,
      "workingStyleEyebrow",
    ),
    workingStyleTitle: requireString(
      doc.frontmatter.workingStyleTitle,
      "workingStyleTitle",
    ),
    finalCtaEyebrow: requireString(
      doc.frontmatter.finalCtaEyebrow,
      "finalCtaEyebrow",
    ),
    finalCtaTitle: requireString(doc.frontmatter.finalCtaTitle, "finalCtaTitle"),
    finalCtaDescription: requireString(
      doc.frontmatter.finalCtaDescription,
      "finalCtaDescription",
    ),
    finalCtaPrimaryCTA: requireLink(
      doc.frontmatter.finalCtaPrimaryCTA,
      "finalCtaPrimaryCTA",
    ),
    finalCtaSecondaryCTA: requireLink(
      doc.frontmatter.finalCtaSecondaryCTA,
      "finalCtaSecondaryCTA",
    ),
    finalCtaTertiaryCTA: requireLink(
      doc.frontmatter.finalCtaTertiaryCTA,
      "finalCtaTertiaryCTA",
    ),
  };
}

function parseAboutContent(doc: MarkdownDocument<RecordLike>): AboutContent {
  return {
    title: requireString(doc.frontmatter.title, "title"),
    description: requireString(doc.frontmatter.description, "description"),
    intro: requireString(doc.frontmatter.intro, "intro"),
    highlights: optionalStringArray(doc.frontmatter.highlights),
    body: doc.body,
  };
}

function parseContactContent(doc: MarkdownDocument<RecordLike>): ContactContent {
  return {
    title: requireString(doc.frontmatter.title, "title"),
    description: requireString(doc.frontmatter.description, "description"),
    intro: requireString(doc.frontmatter.intro, "intro"),
    emailLabel: requireString(doc.frontmatter.emailLabel, "emailLabel"),
    linkedinLabel: requireString(doc.frontmatter.linkedinLabel, "linkedinLabel"),
    githubLabel: requireString(doc.frontmatter.githubLabel, "githubLabel"),
    formIntro: requireString(doc.frontmatter.formIntro, "formIntro"),
    body: doc.body,
  };
}

function parseProjectContent(
  doc: MarkdownDocument<RecordLike>,
): ProjectContent {
  return {
    title: requireString(doc.frontmatter.title, "title"),
    slug: requireString(doc.frontmatter.slug, "slug"),
    category: requireString(doc.frontmatter.category, "category"),
    featured: requireBoolean(doc.frontmatter.featured, "featured"),
    summary: requireString(doc.frontmatter.summary, "summary"),
    problem: requireString(doc.frontmatter.problem, "problem"),
    whatIDid: requireString(doc.frontmatter.whatIDid, "whatIDid"),
    tech: requireStringArray(doc.frontmatter.tech, "tech"),
    outcome: requireString(doc.frontmatter.outcome, "outcome"),
    whyItMatters: requireString(doc.frontmatter.whyItMatters, "whyItMatters"),
    order: requireNumber(doc.frontmatter.order, "order"),
  };
}

export const loadSiteConfig = cache(async () => {
  const doc = await readMarkdownFile<RecordLike>(resolveContentPath("site", "config.md"));
  return {
    ...parseSiteConfig(doc),
    body: doc.body,
  };
});

export const loadNavigation = cache(async () => {
  const doc = await readMarkdownFile<RecordLike>(
    resolveContentPath("site", "navigation.md"),
  );
  return {
    ...parseNavigation(doc),
    body: doc.body,
  };
});

export const loadSocials = cache(async () => {
  const doc = await readMarkdownFile<RecordLike>(
    resolveContentPath("site", "socials.md"),
  );
  return {
    ...parseSocials(doc),
    body: doc.body,
  };
});

export const loadHomePage = cache(async () => {
  const doc = await readMarkdownFile<RecordLike>(resolveContentPath("pages", "home.md"));
  return {
    ...parseHomeContent(doc),
    body: doc.body,
  };
});

export const loadAboutPage = cache(async () => {
  const doc = await readMarkdownFile<RecordLike>(resolveContentPath("pages", "about.md"));
  const parsed = parseAboutContent(doc);

  return {
    ...parsed,
    paragraphs: splitParagraphs(parsed.body),
  };
});

export const loadContactPage = cache(async () => {
  const doc = await readMarkdownFile<RecordLike>(resolveContentPath("pages", "contact.md"));
  const parsed = parseContactContent(doc);

  return {
    ...parsed,
    paragraphs: splitParagraphs(parsed.body),
  };
});

export const loadProjects = cache(async () => {
  const fileNames = await readdir(PROJECTS_DIR);
  const markdownFiles = fileNames
    .filter((fileName) => fileName.toLowerCase().endsWith(".md"))
    .sort((left, right) => left.localeCompare(right));

  const projects = await Promise.allSettled(
    markdownFiles.map(async (fileName) => {
      const doc = await readMarkdownFile<RecordLike>(
        resolveContentPath("projects", fileName),
      );
      return {
        ...parseProjectContent(doc),
        body: doc.body,
      };
    }),
  );

  return projects
    .flatMap((result) => (result.status === "fulfilled" ? [result.value] : []))
    .sort((left, right) => left.order - right.order);
});

export const loadContent = cache(async () => {
  const [site, navigation, socials, home, projects] = await Promise.all([
    loadSiteConfig(),
    loadNavigation(),
    loadSocials(),
    loadHomePage(),
    loadProjects(),
  ]);

  return {
    site,
    navigation,
    socials,
    home,
    projects,
  };
});

export function getContentRoot() {
  return CONTENT_ROOT;
}
