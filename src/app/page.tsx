import {
  Badge,
  ButtonLink,
  PageShell,
  ProjectCard,
  SectionHeading,
  TextLink,
} from "@/components/site";
import Image from "next/image";
import { getHomeShellContent } from "@/lib/home-shell";
import { getSiteShellContent } from "@/lib/site-shell";

export async function generateMetadata() {
  const [shell, content] = await Promise.all([
    getSiteShellContent(),
    getHomeShellContent(),
  ]);

  return {
    title: `${shell.site.name} | Portfolio`,
    description: content.heroSummary,
  };
}

export default async function Home() {
  const [content, shell] = await Promise.all([
    getHomeShellContent(),
    getSiteShellContent(),
  ]);
  const featuredProjects = content.featuredProjects;

  return (
    <PageShell className="space-y-20 py-10 sm:py-14 lg:py-16">
      <section className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div className="space-y-8">
          <Badge>{content.eyebrow}</Badge>
          <div className="space-y-5">
            <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl lg:text-6xl">
              {content.heroTitle}
            </h1>
            <p className="max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
              {content.heroSummary}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <ButtonLink href={content.heroPrimaryCTA.href}>
              {content.heroPrimaryCTA.label}
            </ButtonLink>
            <ButtonLink href={content.heroSecondaryCTA.href} variant="secondary">
              {content.heroSecondaryCTA.label}
            </ButtonLink>
            <ButtonLink href={content.heroTertiaryCTA.href} variant="ghost">
              {content.heroTertiaryCTA.label}
            </ButtonLink>
          </div>
        </div>

        <div className="w-full max-w-lg mx-auto lg:justify-self-end">
          <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-white/10 bg-slate-900">
            <Image
              src={shell.site.profileImage}
              alt={shell.site.profileImageAlt}
              fill
              className="object-cover object-center"
              priority
              sizes="(min-width: 1024px) 360px, 100vw"
            />
          </div>
        </div>
      </section>

      <div className="w-full space-y-20">
        <section className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div className="w-full space-y-5">
            <SectionHeading
              eyebrow={content.howIWork.eyebrow}
              title={content.howIWork.title}
              description={content.howIWork.description}
            />
            <ul className="space-y-3 pl-5 text-sm leading-7 text-slate-300 sm:text-base">
              {content.howIWork.bullets.map((step) => (
                <li key={step} className="list-disc">
                  {step}
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full space-y-5">
            <SectionHeading
              eyebrow="Next step"
              title="If the work is relevant, the next step is simple."
              description="Browse the projects, read the background, or reach out directly through the contact page."
            />
          </div>
        </section>

        <section className="w-full space-y-6">
          <SectionHeading
            eyebrow={content.featuredWork.eyebrow}
            title={content.featuredWork.title}
            action={<TextLink href="/projects">See all projects</TextLink>}
          />
          <div className="grid gap-5 xl:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>
      </div>
    </PageShell>
  );
}
