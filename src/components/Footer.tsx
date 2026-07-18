import { Mail } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { GithubIcon, LinkedinIcon } from "./icons/BrandIcons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <div className="font-mono text-sm text-text-faint">
          <span className="text-text">{portfolio.name}</span> © {year}
        </div>
        <div className="flex items-center gap-2">
          <a href={portfolio.contact.github} target="_blank" rel="noreferrer noopener" aria-label="GitHub" className="chip !rounded-full !p-2.5">
            <GithubIcon size={15} />
          </a>
          <a href={portfolio.contact.linkedin} target="_blank" rel="noreferrer noopener" aria-label="LinkedIn" className="chip !rounded-full !p-2.5">
            <LinkedinIcon size={15} />
          </a>
          <a href={`mailto:${portfolio.contact.email}`} aria-label="Email" className="chip !rounded-full !p-2.5">
            <Mail size={15} />
          </a>
        </div>
        <div className="text-xs text-text-faint">Built with Next.js &amp; Tailwind CSS</div>
      </div>
    </footer>
  );
}
