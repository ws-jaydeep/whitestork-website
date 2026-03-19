"use client";

import * as React from "react";
import { Select as SelectPrimitive } from "@base-ui/react/select";
import { Check, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type SelectOption = {
  label: React.ReactNode;
  value: string;
};

type UiSelectProps = {
  value: string;
  onValueChange: (value: string) => void;
  options: SelectOption[];
  placeholder?: string;
  className?: string;
};

export function UiSelect({
  value,
  onValueChange,
  options,
  placeholder = "Select an option",
  className,
}: UiSelectProps) {
  return (
    <SelectPrimitive.Root
      value={value}
      onValueChange={(nextValue) => {
        if (typeof nextValue === "string") {
          onValueChange(nextValue);
        }
      }}
      items={options}
    >
      <SelectPrimitive.Trigger
        className={cn(
          "flex h-13 w-full items-center justify-between rounded-[16px] border border-[var(--brand-border-strong)] bg-[color:var(--brand-surface)] px-4 text-sm font-semibold text-[var(--brand-strong)] shadow-[0_10px_24px_color-mix(in_srgb,var(--brand-base)_8%,transparent)] outline-none transition",
          "data-[popup-open]:border-[var(--brand-base)]",
          className,
        )}
      >
        <SelectPrimitive.Value placeholder={placeholder} />
        <SelectPrimitive.Icon>
          <ChevronDown className="h-4 w-4 text-[var(--brand-strong)]" />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>

      <SelectPrimitive.Portal>
        <SelectPrimitive.Positioner sideOffset={8}>
          <SelectPrimitive.Popup className="z-[80] max-h-72 min-w-[var(--anchor-width)] overflow-y-auto rounded-[18px] border border-[var(--brand-border-strong)] bg-[color:var(--brand-surface-strong)] p-1.5 shadow-[var(--brand-shadow-strong)] backdrop-blur-xl outline-none">
            <SelectPrimitive.List>
              {options.map((option) => (
                <SelectPrimitive.Item
                  key={option.value}
                  value={option.value}
                  className={cn(
                    "flex cursor-default items-center justify-between rounded-[14px] px-3 py-2.5 text-sm font-medium text-[var(--brand-strong)] outline-none transition",
                    "data-[highlighted]:bg-[color:var(--brand-surface)]",
                    "data-[selected]:bg-[color:var(--brand-surface)]",
                  )}
                >
                  <SelectPrimitive.ItemText>{option.label}</SelectPrimitive.ItemText>
                  <SelectPrimitive.ItemIndicator>
                    <Check className="h-4 w-4 text-[var(--brand-base)]" />
                  </SelectPrimitive.ItemIndicator>
                </SelectPrimitive.Item>
              ))}
            </SelectPrimitive.List>
          </SelectPrimitive.Popup>
        </SelectPrimitive.Positioner>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  );
}
