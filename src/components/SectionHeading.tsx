import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal className={align === "center" ? "text-center" : "text-left"}>
      <div
        className={`flex items-center gap-3 text-xs font-mono uppercase tracking-[0.25em] text-accent-2 ${
          align === "center" ? "justify-center" : ""
        }`}
      >
        <span className="h-px w-8 bg-accent-2/60" />
        {eyebrow}
      </div>
      <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-text">
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-4 max-w-2xl text-text-muted leading-relaxed ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
