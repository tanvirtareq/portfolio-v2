import { Code2, GraduationCap, Sparkles, Trophy } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const FACTS = [
  {
    icon: Code2,
    label: "Currently building",
    value: `${portfolio.experience[0]?.title} @ ${portfolio.experience[0]?.company.replace(" Ltd.", "")}`,
  },
  {
    icon: GraduationCap,
    label: "Education",
    value: "B.Sc. in CSE, SUST",
  },
  {
    icon: Trophy,
    label: "Competitive Programming",
    value: "Candidate Master · 5★ CodeChef",
  },
  {
    icon: Sparkles,
    label: "Exploring",
    value: "Agentic AI & Reinforcement Learning",
  },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
      <SectionHeading eyebrow="About Me" title="The person behind the code" />

      <div className="mt-12 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <Reveal delay={0.05}>
          <div
            className="prose-about text-[1.05rem] leading-8 text-text-muted [&_strong]:font-semibold [&_strong]:text-text [&_br]:content-['']"
            dangerouslySetInnerHTML={{ __html: portfolio.aboutMe }}
          />
        </Reveal>

        <Reveal delay={0.15}>
          <div className="glass-card gradient-border relative rounded-2xl p-6">
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-accent-2">
              At a glance
            </div>
            <ul className="mt-5 flex flex-col gap-5">
              {FACTS.map((fact) => (
                <li key={fact.label} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border bg-surface text-accent-2">
                    <fact.icon size={16} />
                  </span>
                  <div>
                    <div className="text-xs text-text-faint">{fact.label}</div>
                    <div className="text-sm font-medium text-text">{fact.value}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
