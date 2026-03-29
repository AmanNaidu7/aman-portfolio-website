import { cache } from "react";
import { loadContactPage } from "@/lib/content";
import { socialLinks as fallbackSocialLinks, site as fallbackSite } from "@/lib/site-data";

type MarkdownContactContent = Awaited<ReturnType<typeof loadContactPage>>;

export type ContactMethod = {
  label: string;
  value: string;
  href: string;
  note: string;
};

export type ContactPageContent = {
  badge: string;
  heroTitle: string;
  heroSummary: string;
  email: string;
  contactMethods: ContactMethod[];
  formTitle: string;
  formIntro: string;
  usefulLinks: {
    label: string;
    href: string;
  }[];
};

function buildFallbackContactContent(): ContactPageContent {
  return {
    badge: "Contact",
    heroTitle:
      "Reach out directly if you want to discuss a project, opportunity, or collaboration.",
    heroSummary:
      "The page is intentionally low-friction: clear contact methods, predictable expectations, and an optional message form that opens a new email.",
    email: fallbackSite.email,
    contactMethods: [
      {
        label: "Email",
        value: fallbackSite.email,
        href: `mailto:${fallbackSite.email}`,
        note: "Best for project inquiries, introductions, and short briefs.",
      },
      {
        label: "LinkedIn",
        value: "LinkedIn profile",
        href: fallbackSite.linkedin,
        note: "Good for professional networking and background checks.",
      },
      {
        label: "GitHub",
        value: "GitHub profile",
        href: fallbackSite.github,
        note: "Useful if you want to inspect code and project activity.",
      },
    ],
    formTitle: "Optional message form",
    formIntro:
      "This version uses a simple mailto form so there is no backend dependency. Submitting it opens the user's email client with the details filled in.",
    usefulLinks: fallbackSocialLinks,
  };
}

function buildMarkdownContactContent(
  content: MarkdownContactContent,
  email: string,
): ContactPageContent {
  return {
    badge: "Contact",
    heroTitle:
      "Reach out directly if you want to discuss a project, opportunity, or collaboration.",
    heroSummary: content.intro,
    email,
    contactMethods: [
      {
        label: content.emailLabel,
        value: email,
        href: `mailto:${email}`,
        note: "Best for project inquiries, introductions, and short briefs.",
      },
      {
        label: content.linkedinLabel,
        value: "LinkedIn profile",
        href: fallbackSite.linkedin,
        note: "Good for professional networking and background checks.",
      },
      {
        label: content.githubLabel,
        value: "GitHub profile",
        href: fallbackSite.github,
        note: "Useful if you want to inspect code and project activity.",
      },
    ],
    formTitle: "Optional message form",
    formIntro: content.formIntro,
    usefulLinks: fallbackSocialLinks,
  };
}

export const getContactPageContent = cache(async (): Promise<ContactPageContent> => {
  try {
    const content = await loadContactPage();
    return buildMarkdownContactContent(content, fallbackSite.email);
  } catch {
    return buildFallbackContactContent();
  }
});
