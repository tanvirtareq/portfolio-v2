import { Gavel, PenLine, ExternalLink, School } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Community() {
  return (
    <section id="community" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
      <SectionHeading
        eyebrow="Community & Mentorship"
        title="Giving back beyond the day job"
        description="Judging contests, teaching algorithms, and writing about the craft."
      />

      <div className="mt-14 grid gap-5 lg:grid-cols-3">
        <Reveal delay={0}>
          <div className="glass-card flex h-full flex-col rounded-2xl p-6">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface text-accent">
              <Gavel size={18} />
            </span>
            <h3 className="mt-4 text-base font-semibold text-text">Judging & Problem Setting</h3>
            <div className="mt-5 flex flex-col gap-5">
              {portfolio.judgingExperience.map((j) => (
                <div key={j.event}>
                  <div className="text-sm font-medium text-text">{j.role}</div>
                  <div className="text-xs text-text-faint">{j.event}</div>
                  <ul className="mt-2 flex flex-col gap-1.5">
                    {j.responsibilities.map((r) => (
                      <li key={r} className="flex gap-2 text-xs leading-relaxed text-text-muted">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="glass-card flex h-full flex-col rounded-2xl p-6">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface text-accent">
              <School size={18} />
            </span>
            <h3 className="mt-4 text-base font-semibold text-text">Teaching Experience</h3>
            {portfolio.teachingExperience.map((t) => (
              <div key={t.institution} className="mt-5">
                <div className="text-sm font-medium text-text">{t.institution}</div>
                <ul className="mt-2 flex flex-col gap-1.5">
                  {t.responsibilities.map((r) => (
                    <li key={r} className="flex gap-2 text-xs leading-relaxed text-text-muted">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.16}>
          <div className="glass-card flex h-full flex-col rounded-2xl p-6">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface text-accent">
              <PenLine size={18} />
            </span>
            <h3 className="mt-4 text-base font-semibold text-text">Technical Writing</h3>
            {portfolio.technicalWritingExperience.map((w) => (
              <div key={w.company} className="mt-5">
                {w.companyWebsite ? (
                  <a
                    href={w.companyWebsite}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1 text-sm font-medium text-accent-2 hover:underline"
                  >
                    {w.company}
                    <ExternalLink size={12} />
                  </a>
                ) : (
                  <div className="text-sm font-medium text-text">{w.company}</div>
                )}
                <ul className="mt-2 flex flex-col gap-1.5">
                  {w.responsibilities.map((r) => (
                    <li key={r} className="flex gap-2 text-xs leading-relaxed text-text-muted">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
