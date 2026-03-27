"use client";

import type { ReactNode } from "react";
import SplitText from "@/components/animations/SplitText";
import { cn } from "@/lib/utils";

type CommonSectionTitleProps = {
  title: string;
  highlights?: string[];
  eyebrow?: string;
  description?: ReactNode;
  as?: keyof HTMLElementTagNameMap;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
  highlightClassName?: string;
  descriptionClassName?: string;
};

export function CommonSectionTitle({
  title,
  eyebrow,
  description,
  as: Heading = "h2",
  align = "center",
  className,
  titleClassName,
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
      <SplitText
        tag={Heading}
        text={title}
        splitType="words"
        delay={40}
        duration={0.9}
        rootMargin="-40px"
        textAlign={isCentered ? "center" : "left"}
        className={cn(
          "brand-title mt-3 text-balance text-3xl font-semibold text-[var(--brand-base)] sm:text-4xl lg:text-5xl",
          titleClassName,
        )}
      >
        {title}
      </SplitText>
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
