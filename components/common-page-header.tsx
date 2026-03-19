"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Container } from "@/components/container";

type CommonPageHeaderProps = {
  title: string;
  highlight: string;
  description: string;
  className?: string;
};

export function CommonPageHeader({
  title,
  highlight,
  description,
  className,
}: CommonPageHeaderProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-[var(--page-header-surface)]",
        className,
      )}
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,color-mix(in_srgb,var(--page-header-glow-soft)_44%,transparent)_0%,transparent_36%,color-mix(in_srgb,var(--page-header-glow-soft)_30%,transparent)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,color-mix(in_srgb,var(--page-header-glow)_24%,transparent)_0%,transparent_54%)]" />
      <div className="absolute left-0 top-0 h-40 w-40 rounded-full blur-3xl" />
      <motion.div
        className="absolute left-[-6%] top-1/2 h-56 w-[28%] min-w-[220px] -translate-y-1/2 blur-3xl sm:h-64"
        style={{
          background:
            "radial-gradient(circle at left, color-mix(in srgb, var(--brand-strong) 32%, var(--page-header-glow)) 0%, color-mix(in srgb, var(--brand-strong) 18%, var(--page-header-glow-soft)) 42%, transparent 72%)",
        }}
        animate={{
          x: [0, 18, -10, 0],
          y: ["-50%", "-60%", "-42%", "-50%"],
          scale: [1, 1.08, 0.96, 1],
          opacity: [0.88, 1, 0.92, 0.88],
        }}
        transition={{
          duration: 5.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute right-[-5%] top-1/2 h-56 w-[28%] min-w-[220px] -translate-y-1/2 blur-3xl sm:h-64"
        style={{
          background:
            "radial-gradient(circle at right, color-mix(in srgb, var(--brand-strong) 34%, var(--page-header-glow)) 0%, color-mix(in srgb, var(--brand-strong) 20%, var(--page-header-glow-soft)) 42%, transparent 72%)",
        }}
        animate={{
          x: [0, -16, 12, 0],
          y: ["-50%", "-40%", "-58%", "-50%"],
          scale: [1, 1.08, 0.97, 1],
          opacity: [0.84, 0.98, 0.9, 0.84],
        }}
        transition={{
          duration: 5.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="page-header-orb absolute left-[8%] top-14 hidden size-28 rounded-full lg:block"
        animate={{
          y: [0, -18, 0, 14, 0],
          scale: [1, 1.04, 1, 0.98, 1],
        }}
        transition={{
          duration: 4.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ willChange: "transform" }}
      />
      <motion.div
        className="page-header-orb page-header-orb-delayed absolute bottom-10 right-[10%] hidden size-36 rounded-full lg:block"
        animate={{
          y: [0, 16, 0, -20, 0],
          scale: [1, 0.98, 1, 1.05, 1],
        }}
        transition={{
          duration: 4.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ willChange: "transform" }}
      />
      <Container className="relative py-8 sm:py-10 lg:py-12" width="wide">
        <div className="page-header-panel relative mx-auto w-full max-w-5xl overflow-hidden rounded-[calc(var(--theme-panel-radius)+4px)] px-6 py-8 text-center sm:px-8 sm:py-9 lg:px-12 lg:py-11">
          <div className="absolute inset-x-[14%] top-0 h-px bg-[linear-gradient(90deg,transparent,color-mix(in_srgb,var(--brand-soft)_80%,white),transparent)] opacity-80" />
          <div
            className="absolute left-0 top-0 h-40 w-40 rounded-full blur-3xl"
            style={{
              background:
                "radial-gradient(circle, color-mix(in srgb, var(--page-header-glow) 58%, transparent) 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute bottom-0 right-0 h-44 w-44 rounded-full blur-3xl"
            style={{
              background:
                "radial-gradient(circle, color-mix(in srgb, var(--brand-soft) 26%, transparent) 0%, transparent 72%)",
            }}
          />
          <div className="relative">
            <h1
              className="animate-page-header-title font-[family:var(--font-heading)] text-3xl font-semibold text-[var(--brand-strong)] sm:text-4xl lg:text-5xl xl:text-[3.7rem]"
              style={{ letterSpacing: "var(--theme-heading-spacing)" }}
            >
              {title}
            </h1>
            <p className="animate-page-header-copy mx-auto mt-4 max-w-4xl text-base font-medium leading-7 text-[var(--brand-strong)] sm:text-lg lg:text-[1.22rem] lg:leading-8">
              <span className="font-semibold text-[var(--brand-soft)]">{highlight}</span>{" "}
              <span>{description}</span>
            </p>
            <div className="animate-page-header-line mx-auto mt-6 h-1.5 w-24 rounded-full bg-[linear-gradient(90deg,var(--brand-base)_0%,var(--brand-soft)_100%)] shadow-[0_10px_24px_color-mix(in_srgb,var(--brand-soft)_30%,transparent)]" />
          </div>
        </div>
      </Container>
    </section>
  );
}
