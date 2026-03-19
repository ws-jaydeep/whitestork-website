"use client";

import * as React from "react";
import { Tooltip as TooltipPrimitive } from "@base-ui/react/tooltip";
import { cn } from "@/lib/utils";

type TooltipProps = {
  content: React.ReactNode;
  children: React.ReactNode;
  delay?: number;
  render?: React.ReactElement;
};

export function Tooltip({ content, children, delay = 180, render }: TooltipProps) {
  return (
    <TooltipPrimitive.Root>
      <TooltipPrimitive.Trigger className="inline-flex" render={render} delay={delay}>
        {children}
      </TooltipPrimitive.Trigger>
      <TooltipPrimitive.Portal>
        <TooltipPrimitive.Positioner sideOffset={10}>
          <TooltipPrimitive.Popup
            className={cn(
              "z-[70] rounded-[var(--theme-control-radius)] border border-[var(--brand-border-strong)]",
              "bg-[color:var(--brand-surface-strong)] px-3 py-2 text-xs font-medium text-[var(--brand-strong)]",
              "shadow-[var(--brand-shadow-strong)] backdrop-blur-xl",
            )}
          >
            {content}
          </TooltipPrimitive.Popup>
        </TooltipPrimitive.Positioner>
      </TooltipPrimitive.Portal>
    </TooltipPrimitive.Root>
  );
}
