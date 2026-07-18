import { GraduationCap } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
      <SectionHeading eyebrow="Education" title="Academic background" />

      <div className="mt-14 grid gap-5 lg:grid-cols-3">
        {portfolio.education.map((edu, i) => (
          <Reveal key={edu.degree} delay={i * 0.08}>
            <div className="glass-card flex h-full flex-col rounded-2xl p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface text-accent">
                <GraduationCap size={18} />
              </span>
              <h3 className="mt-4 text-base font-semibold leading-snug text-text">
                {edu.degree}
              </h3>
              <div className="mt-1 text-sm text-text-muted">{edu.institution}</div>
              <div className="mt-2 font-mono text-xs text-text-faint">{edu.period}</div>

              {edu.result ? (
                <div className="mt-3 chip w-fit">{edu.result}</div>
              ) : null}

              {edu.research ? (
                <p className="mt-4 text-sm leading-relaxed text-text-muted">
                  <span className="font-medium text-text">Research: </span>
                  {edu.research}
                </p>
              ) : null}

              {edu.achievements ? (
                <ul className="mt-4 flex flex-col gap-1.5">
                  {edu.achievements.map((a) => (
                    <li key={a} className="flex gap-2 text-sm text-text-muted">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {a}
                    </li>
                  ))}
                </ul>
              ) : null}

              {edu.notableCourses ? (
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {edu.notableCourses.map((c) => (
                    <span key={c} className="chip !text-[0.68rem]">
                      {c}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
