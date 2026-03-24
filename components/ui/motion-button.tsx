"use client";

import type { FC } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  label: string;
  classes?: string;
}

const MotionButton: FC<Props> = ({ label, classes }) => {
  return (
    <button
      className={cn(
        "group relative inline-flex h-12 items-center overflow-hidden rounded-full border border-[var(--brand-border)] bg-[var(--card)] p-1 outline-none shadow-[var(--brand-shadow)]",
        classes,
      )}
    >
      {/* Background circle */}
      <span
        aria-hidden="true"
        className="absolute left-1 top-1 z-0 h-10 w-10 rounded-full bg-primary transition-all duration-500 ease-out group-hover:w-[calc(100%-0.5rem)]"
      />

      {/* Content */}
      <span className="relative z-10 flex items-center gap-3 px-4 pl-14 pr-6 whitespace-nowrap text-lg font-medium tracking-tight text-[var(--brand-strong)] transition-colors duration-500 group-hover:text-white">

        {/* Icon */}
        <span className="absolute left-2 flex h-6 w-6 items-center justify-center">
          <ArrowUpRight className="size-5 text-white" />
        </span>

        {label}
      </span>
    </button>
  );
};

export default MotionButton;
