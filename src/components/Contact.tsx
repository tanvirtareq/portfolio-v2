"use client";

import { Check, Copy, Mail, Phone } from "lucide-react";
import { useState } from "react";
import { portfolio } from "@/data/portfolio";
import { GithubIcon, LinkedinIcon } from "./icons/BrandIcons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const CHANNELS = [
  {
    key: "email",
    icon: Mail,
    label: "Email",
    value: portfolio.contact.email,
    href: `mailto:${portfolio.contact.email}`,
    copyable: true,
  },
  {
    key: "phone",
    icon: Phone,
    label: "Phone",
    value: portfolio.contact.phone,
    href: `tel:${portfolio.contact.phone}`,
    copyable: true,
  },
  {
    key: "linkedin",
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "in/tanvirtareq",
    href: portfolio.contact.linkedin,
    copyable: false,
  },
  {
    key: "github",
    icon: GithubIcon,
    label: "GitHub",
    value: "@tanvirtareq",
    href: portfolio.contact.github,
    copyable: false,
  },
];

export default function Contact() {
  const [copied, setCopied] = useState<string | null>(null);

  async function copy(key: string, value: string) {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(key);
      setTimeout(() => setCopied(null), 1800);
    } catch {
      // clipboard unavailable, ignore
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
      <div className="glass-card gradient-border relative overflow-hidden rounded-3xl px-6 py-16 text-center sm:px-12">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/25 blur-[110px]"
        />
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something great together"
          description="Whether it's a role, a collaboration, or just talking shop about competitive programming — my inbox is open."
          align="center"
        />

        <Reveal delay={0.1}>
          <div className="mx-auto mt-10 grid max-w-2xl gap-3 sm:grid-cols-2">
            {CHANNELS.map((c) => (
              <div
                key={c.key}
                className="glass-card flex items-center justify-between gap-3 rounded-xl px-4 py-3.5 text-left"
              >
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noreferrer noopener" : undefined}
                  className="flex min-w-0 items-center gap-3"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border bg-surface text-accent-2">
                    <c.icon size={16} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs text-text-faint">{c.label}</span>
                    <span className="block truncate text-sm font-medium text-text">
                      {c.value}
                    </span>
                  </span>
                </a>
                {c.copyable ? (
                  <button
                    type="button"
                    aria-label={`Copy ${c.label}`}
                    onClick={() => copy(c.key, c.value)}
                    className="shrink-0 rounded-lg p-2 text-text-faint transition-colors hover:bg-surface-hover hover:text-text cursor-pointer"
                  >
                    {copied === c.key ? (
                      <Check size={15} className="text-emerald-400" />
                    ) : (
                      <Copy size={15} />
                    )}
                  </button>
                ) : null}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.18}>
          <a
            href={`mailto:${portfolio.contact.email}`}
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-105"
          >
            <Mail size={16} />
            Say Hello
          </a>
        </Reveal>
      </div>
    </section>
  );
}
