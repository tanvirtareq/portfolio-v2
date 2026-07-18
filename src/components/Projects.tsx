import { ExternalLink, Folder } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { GithubIcon } from "./icons/BrandIcons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
      <SectionHeading
        eyebrow="Projects"
        title="Things I've built"
        description="A mix of production work and personal experiments spanning full-stack apps, AI, and computer vision."
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-2">
        {portfolio.projects.map((project, i) => {
          const featured = i === 0;
          return (
            <Reveal
              key={project.name}
              delay={(i % 2) * 0.08}
              className={featured ? "sm:col-span-2" : ""}
            >
              <article
                className={`glass-card gradient-border group flex h-full flex-col rounded-2xl p-6 sm:p-7 ${
                  featured ? "sm:flex-row sm:gap-8" : ""
                }`}
              >
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface text-accent">
                      <Folder size={18} />
                    </span>
                    <div className="flex items-center gap-1.5">
                      {project.githubLink ? (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noreferrer noopener"
                          aria-label={`${project.name} source code`}
                          className="chip !rounded-full !p-2.5"
                        >
                          <GithubIcon size={15} />
                        </a>
                      ) : null}
                      {project.liveAppLink ? (
                        <a
                          href={project.liveAppLink}
                          target="_blank"
                          rel="noreferrer noopener"
                          aria-label={`${project.name} live app`}
                          className="chip !rounded-full !p-2.5"
                        >
                          <ExternalLink size={15} />
                        </a>
                      ) : null}
                    </div>
                  </div>

                  <h3 className="mt-4 text-lg font-semibold text-text transition-colors group-hover:text-accent-2">
                    {project.name}
                  </h3>

                  <ul className="mt-3 flex flex-col gap-2">
                    {project.description.map((line) => (
                      <li key={line} className="flex gap-2.5 text-sm leading-relaxed text-text-muted">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-text-faint" />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.map((t) => (
                      <span key={t} className="chip">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
