"use client";

import { ArrowDown, Mail } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { portfolio } from "@/data/portfolio";
import { GithubIcon, LinkedinIcon } from "./icons/BrandIcons";

const ROLES = [
  "Software Engineer",
  "Competitive Programmer",
  "AI Tinkerer",
  "Candidate Master @ Codeforces",
];

function useTypewriter(words: string[]) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    const speed = deleting ? 35 : 65;
    const pause = 1400;

    if (!deleting && text === current) {
      const t = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(t);
    }
    if (deleting && text === "") {
      const t = setTimeout(() => {
        setDeleting(false);
        setWordIndex((i) => i + 1);
      }, 300);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setText((prev) =>
        deleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1)
      );
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, wordIndex, words]);

  return text;
}

const STATS = [
  { value: `${portfolio.yearsOfExperience}+`, label: "Years Experience" },
  { value: "CM", label: "Codeforces (Top 0.03%)" },
  { value: "5★", label: "CodeChef (Top 1%)" },
  { value: "2283", label: "LeetCode Rating" },
  { value: "4×", label: "Meta Hacker Cup T-Shirts" },
];

export default function Hero() {
  const typed = useTypewriter(ROLES);

  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 grid-bg" />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 -z-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-accent/25 blur-[120px] animate-blob"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-40 right-[8%] -z-10 h-72 w-72 rounded-full bg-accent-2/20 blur-[100px] animate-blob"
        style={{ animationDelay: "-6s" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-[6%] -z-10 h-64 w-64 rounded-full bg-accent-3/20 blur-[100px] animate-blob"
        style={{ animationDelay: "-11s" }}
      />

      <div className="mx-auto max-w-6xl px-6">
        <div className="lg:grid lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-14">
          <div>
            <div className="animate-fade-up">
              <span className="chip">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                </span>
                Open to interesting engineering problems
              </span>
            </div>

            <h1
              className="mt-8 animate-fade-up text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
              style={{ animationDelay: "80ms" }}
            >
              Hi, I&apos;m{" "}
              <span className="gradient-text">{portfolio.name}</span>
            </h1>

            <div
              className="mt-5 animate-fade-up font-mono text-xl text-text-muted sm:text-2xl"
              style={{ animationDelay: "160ms" }}
            >
              <span className="text-text">{"> "}</span>
              {typed}
              <span className="ml-0.5 inline-block h-[1.1em] w-[2px] translate-y-[3px] bg-accent-2 animate-pulse" />
            </div>

            <p
              className="mt-6 max-w-2xl animate-fade-up text-lg leading-relaxed text-text-muted"
              style={{ animationDelay: "240ms" }}
            >
              I build scalable, high-performance software at{" "}
              <span className="text-text">Therap Services</span>, and spend my free time
              racing the clock on competitive programming judges and shipping AI-powered
              side projects.
            </p>

            <div
              className="mt-9 flex animate-fade-up flex-wrap items-center gap-4"
              style={{ animationDelay: "320ms" }}
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-105"
              >
                View My Work
                <ArrowDown size={15} className="transition-transform group-hover:translate-y-0.5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-border-strong px-6 py-3 text-sm font-semibold text-text transition-colors hover:bg-surface-hover"
              >
                Get In Touch
              </a>

              <div className="ml-1 flex items-center gap-2">
                <a
                  href={portfolio.contact.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="GitHub"
                  className="chip !rounded-full !p-3"
                >
                  <GithubIcon size={17} />
                </a>
                <a
                  href={portfolio.contact.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="LinkedIn"
                  className="chip !rounded-full !p-3"
                >
                  <LinkedinIcon size={17} />
                </a>
                <a
                  href={`mailto:${portfolio.contact.email}`}
                  aria-label="Email"
                  className="chip !rounded-full !p-3"
                >
                  <Mail size={17} />
                </a>
              </div>
            </div>
          </div>

          <div
            className="relative mx-auto mt-14 w-full max-w-xs animate-fade-up lg:mt-0 lg:max-w-none"
            style={{ animationDelay: "160ms" }}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-accent/40 via-accent-2/30 to-accent-3/30 blur-2xl animate-float"
            />
            <div className="gradient-border relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-border-strong bg-surface shadow-2xl">
              <Image
                src="/images/profile.jpg"
                alt={`${portfolio.name}, ${portfolio.title}`}
                fill
                priority
                sizes="(min-width: 1024px) 380px, 320px"
                className="object-cover object-[center_18%]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/40 via-transparent to-transparent" />
            </div>
            <div className="glass-card absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full px-4 py-2 text-xs font-medium text-text shadow-xl lg:-right-6 lg:left-auto lg:translate-x-0">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              Software Engineer @ Therap
            </div>
          </div>
        </div>

        <div
          className="mt-16 grid animate-fade-up grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-5"
          style={{ animationDelay: "400ms" }}
        >
          {STATS.map((s) => (
            <div
              key={s.label}
              className="glass-card !rounded-none flex flex-col items-center justify-center gap-1 px-4 py-6 text-center"
            >
              <div className="text-2xl font-bold gradient-text sm:text-3xl">{s.value}</div>
              <div className="text-xs text-text-faint">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
