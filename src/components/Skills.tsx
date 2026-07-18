import {
  Blocks,
  Boxes,
  Database,
  Layers,
  MonitorSmartphone,
  Server,
  Users,
} from "lucide-react";
import { portfolio } from "@/data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const CATEGORY_ICON: Record<string, typeof Blocks> = {
  "Programming Languages": Blocks,
  Frontend: MonitorSmartphone,
  Backend: Server,
  Databases: Database,
  DevOps: Boxes,
  "Data Structures & Algorithms": Layers,
  "Soft Skills": Users,
};

export default function Skills() {
  const categories = Object.entries(portfolio.skills);

  return (
    <section id="skills" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
      <SectionHeading
        eyebrow="Skills"
        title="Tools of the trade"
        description="Technologies I reach for day to day, from backend systems to modern frontends."
      />

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map(([category, items], i) => {
          const Icon = CATEGORY_ICON[category] ?? Blocks;
          return (
            <Reveal key={category} delay={(i % 3) * 0.08}>
              <div className="glass-card rounded-2xl p-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface text-accent">
                    <Icon size={16} />
                  </span>
                  <h3 className="text-sm font-semibold text-text">{category}</h3>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span key={item} className="chip">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
