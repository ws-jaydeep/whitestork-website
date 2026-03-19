"use client";

import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

type CommonSectionTitleProps = {
  title: string;
  highlights?: string[];
  eyebrow?: string;
  description?: ReactNode;
  as?: ElementType;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
  highlightClassName?: string;
  descriptionClassName?: string;
};

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function renderHighlightedTitle(title: string, highlights: string[], highlightClassName?: string) {
  if (highlights.length === 0) {
    return title;
  }

  const matches = highlights
    .filter(Boolean)
    .sort((a, b) => b.length - a.length)
    .map(escapeRegExp);

  if (matches.length === 0) {
    return title;
  }

  const parts = title.split(new RegExp(`(${matches.join("|")})`, "gi"));

  return parts.map((part, index) => {
    const isHighlight = highlights.some((highlight) => highlight.toLowerCase() === part.toLowerCase());

    if (!isHighlight) {
      return <span key={`${part}-${index}`}>{part}</span>;
    }

    return (
      <span
        key={`${part}-${index}`}
        className={cn("text-[var(--brand-base)]", highlightClassName)}
      >
        {part}
      </span>
    );
  });
}

export function CommonSectionTitle({
  title,
  highlights = [],
  eyebrow,
  description,
  as: Heading = "h2",
  align = "center",
  className,
  titleClassName,
  highlightClassName,
  descriptionClassName,
}: CommonSectionTitleProps) {
  const isCentered = align === "center";

  return (
    <div className={cn("mx-auto max-w-4xl", isCentered ? "text-center" : "text-left", className)}>
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-base)]">
          {eyebrow}
        </p>
      ) : null}
      <Heading
        className={cn(
          "brand-title mt-3 font-[family:var(--font-heading)] text-3xl font-semibold sm:text-4xl lg:text-5xl",
          titleClassName,
        )}
      >
        {renderHighlightedTitle(title, highlights, highlightClassName)}
      </Heading>
      {description ? (
        <div
          className={cn(
            "brand-copy mt-3 text-sm leading-6 sm:text-base",
            isCentered && "mx-auto max-w-2xl",
            descriptionClassName,
          )}
        >
          {description}
        </div>
      ) : null}
    </div>
  );
}
