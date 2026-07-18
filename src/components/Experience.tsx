import { Briefcase, ExternalLink } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
      <SectionHeading
        eyebrow="Experience"
        title="Where I've made an impact"
        description="Building and shipping product features that move real business metrics."
      />

      <div className="relative mt-14 border-l border-border pl-8 sm:pl-10">
        {portfolio.experience.map((job, i) => (
          <Reveal key={job.company} delay={i * 0.1} className="relative pb-14 last:pb-0">
            <span className="absolute -left-[42px] top-1 flex h-8 w-8 items-center justify-center rounded-full border border-border-strong bg-bg-soft text-accent sm:-left-[50px]">
              <Briefcase size={15} />
            </span>

            <div className="glass-card gradient-border rounded-2xl p-6 sm:p-8">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="text-xl font-semibold text-text">{job.title}</h3>
                  <div className="mt-1 flex items-center gap-2 text-sm text-text-muted">
                    {job.companyWebsite ? (
                      <a
                        href={job.companyWebsite}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center gap-1 font-medium text-accent-2 hover:underline"
                      >
                        {job.company}
                        <ExternalLink size={12} />
                      </a>
                    ) : (
                      <span className="font-medium text-text">{job.company}</span>
                    )}
                  </div>
                </div>
                <span className="chip font-mono">{job.period}</span>
              </div>

              <ul className="mt-5 flex flex-col gap-2.5">
                {job.responsibilities.map((r) => (
                  <li key={r} className="flex gap-3 text-sm leading-relaxed text-text-muted">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {job.technologies.map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
