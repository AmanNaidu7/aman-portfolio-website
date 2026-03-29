import { loadHomePage } from "@/lib/content";
import { getProjectListContent } from "@/lib/project-list-shell";
import { projects as fallbackProjects, site as fallbackSite } from "@/lib/site-data";

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
  featuredWork: {
    eyebrow: string;
    title: string;
    description: string;
  };
  howIWork: {
    eyebrow: string;
    title: string;
    description: string;
    bullets: string[];
  };
  finalCta: {
    eyebrow: string;
    title: string;
    description: string;
    primaryCTA: {
      label: string;
      href: string;
    };
    secondaryCTA: {
      label: string;
      href: string;
    };
    tertiaryCTA: {
      label: string;
      href: string;
    };
  };
  featuredProjects: Awaited<ReturnType<typeof getProjectListContent>>["projects"];
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

    if (collecting) {
      collected.push(line);
    }
  }

  return collected.join("\n").trim();
}

function extractParagraph(section: string) {
  const paragraph = section
    .split(/\n\s*\n/)
    .map((part) => normalizeText(part))
    .find(Boolean);

  return paragraph ?? "";
}

function extractBullets(section: string) {
  const bullets: string[] = [];

  for (const line of section.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed) continue;

    const match = trimmed.match(/^[-*]\s+(.*)$/) ?? trimmed.match(/^\d+\.\s+(.*)$/);
    if (match) {
      const bullet = normalizeText(match[1]);
      if (bullet) bullets.push(bullet);
    }
  }

  return bullets;
}

function fallbackHomeContent(): HomeShellContent {
  const featuredProjects = fallbackProjects.filter((project) => project.featured);

  return {
    eyebrow: "Senior AI, Data & Automation Systems",
    heroTitle:
      "I design and deliver production-ready AI and data systems that solve real business problems.",
    heroSummary:
      `${fallbackSite.name} is a senior AI, data, automation, and analytics professional focused on clear architecture, production-minded delivery, and credible outcomes for business teams.`,
    heroPrimaryCTA: { label: "View Projects", href: "/projects" },
    heroSecondaryCTA: { label: "Contact Me", href: "/contact" },
    heroTertiaryCTA: { label: "About", href: "/about" },
    featuredWork: {
      eyebrow: "Featured work",
      title: "Selected projects with practical depth.",
      description:
        "The featured set is tuned for quick credibility: business problem, implementation choices, and a practical outcome.",
    },
    howIWork: {
      eyebrow: "Working style",
      title: "How I Work",
      description:
        "I design systems that are structured, practical, and built for real operating environments.",
      bullets: [
        "Understand the real problem",
        "Design for practical use",
        "Build with clarity",
        "Deliver for production",
      ],
    },
    finalCta: {
      eyebrow: "Final call to action",
      title:
        "If you want to review the work, compare notes, or start a conversation, the next step is straightforward.",
      description:
        "Browse the projects, read the background, or reach out directly through the contact page. The content is intentionally simple so a visitor can move quickly from interest to action.",
      primaryCTA: { label: "Contact Me", href: "/contact" },
      secondaryCTA: { label: "View Projects", href: "/projects" },
      tertiaryCTA: { label: "About", href: "/about" },
    },
    featuredProjects,
  };
}

export const getHomeShellContent = async (): Promise<HomeShellContent> => {
  try {
    const [content, projectList] = await Promise.all([
      loadHomePage(),
      getProjectListContent(),
    ]);

    const howIWorkSection = extractSection(content.body, "How I Work");
    const bullets = extractBullets(howIWorkSection);
    const summary = extractParagraph(howIWorkSection);
    const fallback = fallbackHomeContent();

    return {
      eyebrow: content.eyebrow,
      heroTitle: content.heroTitle,
      heroSummary: content.heroSummary,
      heroPrimaryCTA: content.heroPrimaryCTA,
      heroSecondaryCTA: content.heroSecondaryCTA,
      heroTertiaryCTA: content.heroTertiaryCTA,
      featuredWork: {
        eyebrow: content.featuredWorkEyebrow || fallback.featuredWork.eyebrow,
        title: content.featuredWorkTitle || fallback.featuredWork.title,
        description:
          content.featuredWorkDescription || fallback.featuredWork.description,
      },
      howIWork: {
        eyebrow: content.workingStyleEyebrow || fallback.howIWork.eyebrow,
        title: content.workingStyleTitle || fallback.howIWork.title,
        description: summary || fallback.howIWork.description,
        bullets: bullets.length > 0 ? bullets : fallback.howIWork.bullets,
      },
      finalCta: {
        eyebrow: content.finalCtaEyebrow || fallback.finalCta.eyebrow,
        title: content.finalCtaTitle || fallback.finalCta.title,
        description:
          content.finalCtaDescription || fallback.finalCta.description,
        primaryCTA: content.finalCtaPrimaryCTA ?? fallback.finalCta.primaryCTA,
        secondaryCTA:
          content.finalCtaSecondaryCTA ?? fallback.finalCta.secondaryCTA,
        tertiaryCTA: content.finalCtaTertiaryCTA ?? fallback.finalCta.tertiaryCTA,
      },
      featuredProjects:
        projectList.projects.length > 0
          ? projectList.projects.filter((project) => project.featured)
          : fallback.featuredProjects,
    };
  } catch {
    return fallbackHomeContent();
  }
};
