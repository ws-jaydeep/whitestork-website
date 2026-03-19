"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex h-11 w-full rounded-[var(--theme-control-radius)] border border-[var(--brand-border)] bg-[color:var(--brand-surface-strong)] px-4 py-2 text-sm text-[var(--brand-strong)] shadow-[var(--brand-shadow)] outline-none transition placeholder:text-[var(--brand-muted)] focus-visible:border-[var(--brand-base)] focus-visible:ring-3 focus-visible:ring-[color:var(--brand-base)]/20 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
