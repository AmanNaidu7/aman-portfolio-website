import { loadContent } from "@/lib/content";
import { navigation as fallbackNavigation, socialLinks as fallbackSocialLinks, site as fallbackSite } from "@/lib/site-data";

export type SiteShellContent = {
  site: {
    name: string;
    title: string;
    description: string;
    email: string;
    location: string;
    resume: string;
  };
  navigation: {
    label: string;
    href: string;
  }[];
  socialLinks: {
    label: string;
    href: string;
  }[];
  primaryCTA: {
    label: string;
    href: string;
  };
  secondaryCTA: {
    label: string;
    href: string;
  };
  footerBlurb: string;
};

function findLink(
  links: { label: string; href: string }[],
  label: string,
  fallbackHref: string,
) {
  return links.find((link) => link.label.toLowerCase() === label.toLowerCase()) ?? {
    label,
    href: fallbackHref,
  };
}

function getFallbackShellContent(): SiteShellContent {
  return {
    site: {
      name: fallbackSite.name,
      title: fallbackSite.title,
      description: fallbackSite.description,
      email: fallbackSite.email,
      location: fallbackSite.location,
      resume: fallbackSite.resume,
    },
    navigation: fallbackNavigation,
    socialLinks: fallbackSocialLinks,
    primaryCTA: { label: "Contact Me", href: "/contact" },
    secondaryCTA: { label: "View Projects", href: "/projects" },
    footerBlurb:
      "Senior AI, data, automation, and analytics work presented with clarity, structure, and a focus on practical delivery.",
  };
}

export const getSiteShellContent = async (): Promise<SiteShellContent> => {
  try {
    const content = await loadContent();
    const resumeLink = findLink(content.socials.links, "Resume", fallbackSite.resume);
    const linkedinLink = findLink(
      content.socials.links,
      "LinkedIn",
      fallbackSite.linkedin,
    );
    const githubLink = findLink(content.socials.links, "GitHub", fallbackSite.github);

    return {
      site: {
        name: content.site.siteName,
        title: content.site.siteTagline,
        description: content.site.siteDescription,
        email: content.site.email,
        location: content.site.location,
        resume: resumeLink.href,
      },
      navigation: content.navigation.links.length > 0 ? content.navigation.links : fallbackNavigation,
      socialLinks:
        content.socials.links.length > 0
          ? content.socials.links
          : [resumeLink, linkedinLink, githubLink],
      primaryCTA: content.site.primaryCTA,
      secondaryCTA: content.site.secondaryCTA,
      footerBlurb: content.site.footerBlurb,
    };
  } catch {
    return getFallbackShellContent();
  }
};
