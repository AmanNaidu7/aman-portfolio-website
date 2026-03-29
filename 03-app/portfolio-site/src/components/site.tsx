import type { ReactNode } from "react";
import Link from "next/link";
import { projects } from "@/lib/site-data";
import type { SiteShellContent } from "@/lib/site-shell";
import { getSiteShellContent } from "@/lib/site-shell";

type TextLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

type ButtonLinkProps = TextLinkProps & {
  variant?: "primary" | "secondary" | "ghost";
};

type ProjectCardProps = {
  project: (typeof projects)[number];
};

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: ReactNode;
};

export function PageShell({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-7xl px-5 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}

export function Badge({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-emerald-200">
      <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
      {children}
    </div>
  );
}

export function ButtonLink({
  href,
  children,
  className = "",
  variant = "primary",
}: ButtonLinkProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300";
  const styles = {
    primary:
      "bg-emerald-300 text-slate-950 hover:bg-emerald-200 shadow-[0_0_0_1px_rgba(167,243,208,0.18)]",
    secondary:
      "border border-white/10 bg-white/5 text-white hover:bg-white/10",
    ghost: "text-slate-300 hover:text-white hover:bg-white/5",
  }[variant];

  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {children}
    </Link>
  );
}

export function TextLink({ href, children, className = "" }: TextLinkProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 text-sm font-medium text-emerald-200 transition hover:text-emerald-100 ${className}`}
    >
      {children}
      <span aria-hidden="true">{"->"}</span>
    </Link>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  action,
}: SectionHeadingProps) {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div className="max-w-3xl space-y-3">
        {eyebrow ? (
          <p className="text-sm uppercase tracking-[0.24em] text-slate-400">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          {title}
        </h2>
        {description ? (
          <p className="max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
            {description}
          </p>
        ) : null}
      </div>
      {action ? <div>{action}</div> : null}
    </div>
  );
}

function categoryTone(category: string) {
  if (category.includes("AI")) {
    return {
      border: "border-cyan-400/20",
      badge: "bg-cyan-400/10 text-cyan-200",
      accent: "from-cyan-400/25 via-cyan-400/5 to-transparent",
    };
  }
  if (category.includes("Data")) {
    return {
      border: "border-blue-400/20",
      badge: "bg-blue-400/10 text-blue-200",
      accent: "from-blue-400/25 via-blue-400/5 to-transparent",
    };
  }
  if (category.includes("Analytics")) {
    return {
      border: "border-violet-400/20",
      badge: "bg-violet-400/10 text-violet-200",
      accent: "from-violet-400/25 via-violet-400/5 to-transparent",
    };
  }
  return {
    border: "border-emerald-400/20",
    badge: "bg-emerald-400/10 text-emerald-200",
    accent: "from-emerald-400/25 via-emerald-400/5 to-transparent",
  };
}

export function ProjectCard({ project }: ProjectCardProps) {
  const tone = categoryTone(project.category);

  return (
    <article
      className={`group relative overflow-hidden rounded-[1.75rem] border ${tone.border} bg-slate-950/70 p-5 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-slate-950`}
    >
      <div
        className={`pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-br ${tone.accent} opacity-70`}
        aria-hidden="true"
      />
      <div className="relative space-y-5">
        <div className="flex flex-wrap items-center gap-2">
          <span className={`rounded-full px-3 py-1 text-xs font-medium ${tone.badge}`}>
            {project.category}
          </span>
          {project.featured ? (
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-200">
              Featured
            </span>
          ) : null}
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-white">{project.title}</h3>
          <p className="text-sm leading-7 text-slate-300">{project.summary}</p>
        </div>

        <div className="grid gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 sm:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
              Problem
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-200">
              {project.problem}
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
              Outcome
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-200">
              {project.outcome}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.techStack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-end gap-3 pt-1">
          <TextLink href={`/projects/${project.slug}`}>Read case study</TextLink>
        </div>
      </div>
    </article>
  );
}

export async function SiteHeader({
  content,
}: {
  content?: SiteShellContent;
}) {
  const shell = content ?? (await getSiteShellContent());

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/75 backdrop-blur-xl">
      <PageShell className="flex items-center justify-between gap-6 py-4">
        <Link href="/" className="group flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-400/10 text-sm font-semibold text-emerald-200">
            AN
          </div>
          <div>
            <p className="text-sm font-medium text-white transition group-hover:text-emerald-200">
              {shell.site.name}
            </p>
            <p className="text-xs text-slate-400">{shell.site.title}</p>
          </div>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {shell.navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <ButtonLink href={shell.secondaryCTA.href} variant="secondary">
            {shell.secondaryCTA.label}
          </ButtonLink>
          <ButtonLink href={shell.primaryCTA.href}>{shell.primaryCTA.label}</ButtonLink>
        </div>
      </PageShell>
    </header>
  );
}

export async function SiteFooter({
  content,
}: {
  content?: SiteShellContent;
}) {
  const shell = content ?? (await getSiteShellContent());

  return (
    <footer className="border-t border-white/10 bg-slate-950/80">
      <PageShell className="grid gap-8 py-12 lg:grid-cols-[1.3fr_0.7fr_0.7fr]">
        <div className="space-y-4">
          <p className="text-lg font-semibold text-white">{shell.site.name}</p>
          <p className="max-w-lg text-sm leading-7 text-slate-300">
            {shell.footerBlurb}
          </p>
        </div>

        <div className="space-y-3">
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-slate-400">
            Navigation
          </p>
          <div className="flex flex-col gap-2">
            {shell.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-slate-300 transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-slate-400">
            Links
          </p>
          <div className="flex flex-col gap-2">
            {shell.socialLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-slate-300 transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={`mailto:${shell.site.email}`}
              className="text-sm text-slate-300 transition hover:text-white"
            >
              {shell.site.email}
            </Link>
          </div>
        </div>
      </PageShell>
      <div className="border-t border-white/10">
        <PageShell className="flex flex-col gap-2 py-4 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>(c) {new Date().getFullYear()} {shell.site.name}. All rights reserved.</p>
          <p>{shell.site.location}</p>
        </PageShell>
      </div>
    </footer>
  );
}
