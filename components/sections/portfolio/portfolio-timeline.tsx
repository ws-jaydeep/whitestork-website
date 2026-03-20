"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import type { ReactNode, RefObject } from "react";

type PortfolioTimelineProps = {
  containerRef: RefObject<HTMLElement | null>;
  children: ReactNode;
};

export function PortfolioTimeline({ containerRef, children }: PortfolioTimelineProps) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.25"],
  });

  const lineScale = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 26,
    mass: 0.45,
  });

  const glowOpacity = useTransform(scrollYProgress, [0, 0.2, 1], [0.15, 0.6, 1]);

  return (
    <div className="relative mt-10 space-y-8 sm:space-y-10 lg:space-y-14">
      <div className="absolute left-1/2 top-0 hidden h-full w-[2px] -translate-x-1/2 bg-[linear-gradient(180deg,transparent,rgba(255,255,255,0.92),transparent)] lg:block" />
      <motion.div
        className="absolute left-1/2 top-0 hidden h-full w-[3px] -translate-x-1/2 origin-top rounded-full bg-[linear-gradient(180deg,color-mix(in_srgb,var(--brand-strong)_82%,black),color-mix(in_srgb,var(--brand-strong)_96%,black))] shadow-[0_0_28px_color-mix(in_srgb,var(--brand-strong)_20%,transparent)] lg:block"
        style={{ scaleY: lineScale, opacity: glowOpacity }}
      />
      {children}
    </div>
  );
}
