import { Badge, ButtonLink, PageShell, SectionHeading } from "@/components/site";
import { getAboutPageContent } from "@/lib/about-shell";

export const metadata = {
  title: "About",
  description:
    "Professional background, strengths, and working style for Aman Naidu.",
};

export default async function AboutPage() {
  const content = await getAboutPageContent();
  const sections = [
    content.overview,
    content.experience,
    content.strengths,
    content.howIWork,
    content.focusAreas,
    content.statement,
  ];

  return (
    <PageShell className="space-y-20 py-10 sm:py-14 lg:py-16">
      <section className="max-w-4xl space-y-6">
        <Badge>{content.badge}</Badge>
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl lg:text-6xl">
          {content.heroTitle}
        </h1>
        <p className="max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
          {content.heroSummary}
        </p>
      </section>

      {sections.map((section) => {
        const hasContent =
          section.paragraphs.length > 0 ||
          section.bullets.length > 0 ||
          section.numbered.length > 0;

        if (!hasContent) {
          return null;
        }

        return (
          <section key={section.title} className="max-w-4xl space-y-5">
            <SectionHeading title={section.title} />

            {section.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="text-sm leading-7 text-slate-300 sm:text-base"
              >
                {paragraph}
              </p>
            ))}

            {section.bullets.length > 0 ? (
              <ul className="space-y-3 pl-5 text-sm leading-7 text-slate-300 sm:text-base">
                {section.bullets.map((item) => (
                  <li key={item} className="list-disc">
                    {item}
                  </li>
                ))}
              </ul>
            ) : null}

            {section.numbered.length > 0 ? (
              <ol className="space-y-3 pl-5 text-sm leading-7 text-slate-300 sm:text-base">
                {section.numbered.map((item) => (
                  <li key={item} className="list-decimal">
                    {item}
                  </li>
                ))}
              </ol>
            ) : null}
          </section>
        );
      })}

      <section className="max-w-4xl">
        <ButtonLink href={content.cta.href} variant="secondary">
          {content.cta.label}
        </ButtonLink>
      </section>
    </PageShell>
  );
}
