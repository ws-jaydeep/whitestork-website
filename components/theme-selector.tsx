"use client";

import * as React from "react";
import { Check, ChevronDown, Palette } from "lucide-react";
import { Popover as PopoverPrimitive } from "@base-ui/react/popover";
import { siteThemes, type SiteTheme } from "@/constants/themes";
import { Button } from "@/components/ui/button";
import { Tooltip } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

const THEME_EVENT = "theme-change";
const THEME_STORAGE_KEY = "site-theme";

function subscribe(callback: () => void) {
  window.addEventListener(THEME_EVENT, callback);
  return () => window.removeEventListener(THEME_EVENT, callback);
}

function getSnapshot(): SiteTheme {
  return (document.documentElement.dataset.theme as SiteTheme | undefined) ?? "ocean";
}

function getServerSnapshot(): SiteTheme {
  return "ocean";
}

type ThemeSelectorProps = {
  mobile?: boolean;
};

export function ThemeSelector({ mobile = false }: ThemeSelectorProps) {
  const theme = React.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [open, setOpen] = React.useState(false);

  function changeTheme(nextTheme: SiteTheme) {
    document.documentElement.setAttribute("data-theme", nextTheme);
    window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    window.dispatchEvent(new Event(THEME_EVENT));
    setOpen(false);
  }

  if (mobile) {
    return (
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-sm font-medium text-[var(--brand-strong)]">
          <Palette className="size-4 text-[var(--brand-base)]" />
          <span>Choose Theme</span>
        </div>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {siteThemes.map((item) => {
            const isActive = theme === item.value;

            return (
              <Button
                key={item.value}
                type="button"
                variant="ghost"
                className={cn(
                  "h-10 justify-start rounded-[var(--theme-control-radius)] border px-3 text-sm",
                  isActive
                    ? "border-[var(--brand-base)] bg-[color:var(--brand-surface-strong)] text-[var(--brand-strong)] shadow-[var(--brand-shadow)]"
                    : "border-[var(--brand-border-strong)] bg-[color:var(--brand-surface)] text-[var(--brand-muted)] hover:bg-[color:var(--brand-surface-strong)] hover:text-[var(--brand-strong)]",
                )}
                onClick={() => changeTheme(item.value)}
              >
                {item.label}
              </Button>
            );
          })}
        </div>
      </div>
    );
  }

  const activeTheme = siteThemes.find((item) => item.value === theme) ?? siteThemes[0];

  return (
    <PopoverPrimitive.Root open={open} onOpenChange={setOpen}>
      <Tooltip
        content={`Theme: ${activeTheme.label}`}
        render={
          <PopoverPrimitive.Trigger
            className={cn(
              "inline-flex size-10 items-center justify-center rounded-[var(--theme-control-radius)]",
              "border border-[var(--brand-border-strong)] bg-[color:var(--brand-surface-strong)] text-[var(--brand-base)]",
              "shadow-[var(--brand-shadow)] transition hover:bg-[color:var(--brand-surface)] hover:text-[var(--brand-soft)]",
            )}
            aria-label="Open theme selector"
          />
        }
      >
          <Palette className="size-4" />
      </Tooltip>

      <PopoverPrimitive.Portal>
        <PopoverPrimitive.Positioner align="end" sideOffset={8}>
          <PopoverPrimitive.Popup
            className={cn(
              "z-[80] w-[220px] rounded-[calc(var(--theme-panel-radius)-10px)] border border-[var(--brand-border-strong)]",
              "bg-[color:var(--brand-surface-strong)] p-2.5 shadow-[var(--brand-shadow-strong)] backdrop-blur-xl",
            )}
          >
            <div className="mb-2 flex items-center justify-between px-1">
              <div>
                <p className="text-sm font-semibold text-[var(--brand-strong)]">Site Theme</p>
                <p className="text-[11px] text-[var(--brand-muted)]">Choose a company style</p>
              </div>
              <ChevronDown className="size-4 text-[var(--brand-base)]" />
            </div>

            <div className="grid gap-2">
              {siteThemes.map((item) => {
                const isActive = theme === item.value;

                return (
                  <Button
                    key={item.value}
                    type="button"
                    variant="ghost"
                    className={cn(
                      "h-10 justify-between rounded-[var(--theme-control-radius)] border px-3 text-sm font-medium",
                      isActive
                        ? "border-[var(--brand-base)] bg-[color:var(--brand-surface)] text-[var(--brand-strong)] shadow-[var(--brand-shadow)]"
                        : "border-[var(--brand-border)] bg-transparent text-[var(--brand-muted)] hover:bg-[color:var(--brand-surface)] hover:text-[var(--brand-strong)]",
                    )}
                    onClick={() => changeTheme(item.value)}
                  >
                    <span className="flex items-center gap-2">
                      <span
                        className="size-2.5 rounded-full"
                        style={{ background: item.value === theme ? "var(--brand-base)" : "var(--brand-muted)" }}
                      />
                      {item.label}
                    </span>
                    {isActive ? <Check className="size-4 text-[var(--brand-base)]" /> : null}
                  </Button>
                );
              })}
            </div>
          </PopoverPrimitive.Popup>
        </PopoverPrimitive.Positioner>
      </PopoverPrimitive.Portal>
    </PopoverPrimitive.Root>
  );
}
