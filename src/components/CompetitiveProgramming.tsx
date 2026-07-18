import { ExternalLink, Medal, Trophy } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const PLATFORM_STYLE: Record<string, { ring: string; glow: string }> = {
  Codeforces: { ring: "border-l-[#7c5cff]", glow: "bg-[#7c5cff]/15 text-[#a78bfa]" },
  CodeChef: { ring: "border-l-[#f472b6]", glow: "bg-[#f472b6]/15 text-[#f9a8d4]" },
  LeetCode: { ring: "border-l-[#22d3ee]", glow: "bg-[#22d3ee]/15 text-[#67e8f9]" },
};

export default function CompetitiveProgramming() {
  return (
    <section id="competitive-programming" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
      <SectionHeading
        eyebrow="Competitive Programming"
        title="Racing the clock, one judge at a time"
        description="A lifelong obsession with algorithms, translated into consistent top-tier results across the major judges."
      />

      <div className="mt-14 grid gap-5 sm:grid-cols-3">
        {portfolio.competitiveProgramming.map((entry, i) => {
          const style = PLATFORM_STYLE[entry.platform] ?? PLATFORM_STYLE.Codeforces;
          return (
            <Reveal key={entry.platform} delay={i * 0.08}>
              <a
                href={entry.profileLink}
                target="_blank"
                rel="noreferrer noopener"
                className={`glass-card group flex h-full flex-col rounded-2xl border-l-4 p-6 ${style.ring}`}
              >
                <div className="flex items-start justify-between">
                  <span className={`flex h-10 w-10 items-center justify-center rounded-lg ${style.glow}`}>
                    <Trophy size={18} />
                  </span>
                  <ExternalLink
                    size={15}
                    className="mt-1 text-text-faint transition-colors group-hover:text-text"
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-text">{entry.platform}</h3>
                <div className="font-mono text-xs text-text-faint">@{entry.id}</div>
                <ul className="mt-4 flex flex-col gap-2">
                  {entry.achievements.map((a) => (
                    <li key={a} className="flex gap-2 text-sm text-text-muted">
                      <Medal size={14} className="mt-0.5 shrink-0 text-accent-2" />
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
              </a>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={0.15}>
        <div className="mt-14">
          <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-text-faint">
            Contest Highlights
          </h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {portfolio.programmingContestExperience.map((c) => (
              <div key={c.event} className="glass-card rounded-xl p-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h4 className="text-sm font-semibold text-text">{c.event}</h4>
                  {c.team ? (
                    <span className="chip">{c.team}</span>
                  ) : c.id ? (
                    <span className="chip font-mono">{c.id}</span>
                  ) : null}
                </div>
                <ul className="mt-3 flex flex-col gap-1.5">
                  {c.achievements.map((a) => (
                    <li key={a} className="flex gap-2 text-xs leading-relaxed text-text-muted">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
