import { Badge, ButtonLink, PageShell, SectionHeading } from "@/components/site";

export const metadata = {
  title: "Contact",
  description: "Simple ways to contact Aman Naidu.",
};

import { getContactPageContent } from "@/lib/contact-shell";

export default async function ContactPage() {
  const content = await getContactPageContent();

  return (
    <PageShell className="space-y-12 py-10 sm:py-14 lg:py-16">
      <section className="max-w-3xl space-y-6">
        <Badge>{content.badge}</Badge>
        <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          {content.heroTitle}
        </h1>
        <p className="text-base leading-7 text-slate-300 sm:text-lg">
          {content.heroSummary}
        </p>
      </section>

      <section className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
        <article className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
          <SectionHeading
            eyebrow="Main contact methods"
            title="Fast ways to connect"
            description="Choose the channel that suits the conversation best."
          />
          <div className="mt-6 space-y-4">
            {content.contactMethods.map((method) => (
              <a
                key={method.label}
                href={method.href}
                className="block rounded-2xl border border-white/10 bg-slate-950/60 p-4 transition hover:border-white/20 hover:bg-slate-950"
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
                      {method.label}
                    </p>
                    <p className="mt-2 text-lg font-medium text-white">
                      {method.value}
                    </p>
                  </div>
                  <span aria-hidden="true" className="text-slate-400">
                    -&gt;
                  </span>
                </div>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {method.note}
                </p>
              </a>
            ))}
          </div>
        </article>

        <article className="rounded-[1.75rem] border border-white/10 bg-slate-950/70 p-6">
          <p className="text-sm uppercase tracking-[0.22em] text-slate-400">
            {content.formTitle}
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-300">
            {content.formIntro}
          </p>

          <form
            className="mt-6 grid gap-4"
            action={`mailto:${content.email}`}
            method="post"
            encType="text/plain"
          >
            <label className="grid gap-2">
              <span className="text-sm text-slate-200">Name</span>
              <input
                name="name"
                required
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-emerald-300/40 focus:bg-white/7"
                placeholder="Your name"
              />
            </label>
            <label className="grid gap-2">
              <span className="text-sm text-slate-200">Email</span>
              <input
                name="email"
                type="email"
                required
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-emerald-300/40 focus:bg-white/7"
                placeholder="you@company.com"
              />
            </label>
            <label className="grid gap-2">
              <span className="text-sm text-slate-200">Message</span>
              <textarea
                name="message"
                required
                rows={6}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-emerald-300/40 focus:bg-white/7"
                placeholder="Tell me what you're building or what kind of help you need."
              />
            </label>
            <div className="flex flex-wrap gap-3 pt-1">
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-emerald-300 px-5 py-3 text-sm font-medium text-slate-950 transition hover:bg-emerald-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300"
              >
                Send Email
              </button>
              <ButtonLink href="/projects" variant="secondary">
                View Projects
              </ButtonLink>
            </div>
          </form>

          <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm uppercase tracking-[0.22em] text-slate-400">
              Useful links
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {content.usefulLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-full border border-white/10 bg-slate-950/60 px-4 py-2 text-sm text-slate-200 transition hover:bg-slate-950"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </article>
      </section>
    </PageShell>
  );
}
