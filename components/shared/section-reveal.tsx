"use client";

import type { ReactNode } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

type SectionRevealProps = Omit<HTMLMotionProps<"div">, "children"> & {
  children: ReactNode;
  delay?: number;
  distance?: number;
  onView?: boolean;
};

export function SectionReveal({
  children,
  className,
  delay = 0,
  distance = 30,
  onView = false,
  ...props
}: SectionRevealProps) {
  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y: distance, filter: "blur(8px)" }}
      animate={!onView ? { opacity: 1, y: 0, filter: "blur(0px)" } : undefined}
      whileInView={onView ? { opacity: 1, y: 0, filter: "blur(0px)" } : undefined}
      viewport={onView ? { once: true, amount: 0.2 } : undefined}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
