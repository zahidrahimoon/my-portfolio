import type { ReactNode } from "react";

/** Eyebrow + serif title + optional body. Centered or left-aligned. */
export function SectionHeading({
  eyebrow,
  title,
  body,
  align = "center",
  className = "",
  titleClassName = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  body?: string;
  align?: "center" | "left";
  className?: string;
  titleClassName?: string;
}) {
  const alignment =
    align === "center"
      ? "items-center text-center mx-auto"
      : "items-start text-left";

  return (
    <div className={`flex max-w-3xl flex-col ${alignment} ${className}`}>
      {eyebrow ? <span className="eyebrow mb-5">{eyebrow}</span> : null}
      <h2
        className={`display text-4xl font-bold text-ink sm:text-5xl ${titleClassName}`}
      >
        {title}
      </h2>
      {body ? (
        <p
          className={`mt-5 text-lg leading-relaxed text-muted ${
            align === "center" ? "max-w-2xl" : ""
          }`}
        >
          {body}
        </p>
      ) : null}
    </div>
  );
}
