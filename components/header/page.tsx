"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Download, Menu, X } from "lucide-react";
import { headerNavigation } from "@/constants/header-footer-content";
import { Container } from "@/components/container";
import { PillNav } from "@/components/PillNav";
import { ThemeSelector } from "@/components/theme-selector";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const portfolioItems = [
  { label: "AI Portfolio", file: "/pdf/portfolio/Whitestork-ai-portfolio.pdf" },
  { label: "Mobile Apps Portfolio", file: "/pdf/portfolio/Whitestork-mobile-portfolio.pdf" },
  { label: "Web Apps Portfolio", file: "/pdf/portfolio/Whitestork-Web-Apps-portfolio.pdf" },
  { label: "Meta Ads Portfolio", file: "/pdf/portfolio/Whitestork-meta-ads-portfolio.pdf" },
  { label: "Google Ads Portfolio", file: "/pdf/portfolio/Whitestork-google-ads-portfolio.pdf" },
  { label: "General Portfolio", file: "/pdf/portfolio/Whitestork-portfolio.pdf" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);
  const portfolioRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (portfolioRef.current && !portfolioRef.current.contains(e.target as Node)) {
        setIsPortfolioOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 py-6">
        <Container className="flex justify-center" width="wide">
          <div className="header-shell animate-header-in flex w-full max-w-[1120px] flex-col gap-4 px-4 py-4 text-[var(--brand-base)] sm:px-5 xl:flex-row xl:items-center xl:justify-between xl:px-6">
            <div className="flex items-center justify-between gap-3">
              <Link href="/" className="header-logo flex items-center">
                <Image
                  src="/images/branding/company-logo.png"
                  alt="WhiteStork company logo"
                  width={243}
                  height={46}
                  className="h-9 w-auto rounded-[var(--theme-control-radius)] bg-[var(--footer-logo-surface)] px-2.5 py-1.5 object-contain shadow-[var(--footer-logo-shadow)]"
                  priority
                />
              </Link>

              <div className="flex items-center gap-2 xl:hidden">
                <ThemeToggle />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon-sm"
                  className="header-control inline-flex rounded-[var(--theme-control-radius)] border border-[var(--brand-border-strong)] bg-[color:var(--brand-surface-strong)] text-[var(--brand-strong)] hover:bg-[color:var(--brand-surface)] hover:text-[var(--brand-strong)]"
                  aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                  aria-expanded={isMenuOpen}
                  onClick={() => setIsMenuOpen((current) => !current)}
                >
                  {isMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
                </Button>
              </div>
            </div>

            <div className="hidden flex-1 justify-center xl:flex">
              <PillNav items={headerNavigation.navItems} pathname={pathname} />
            </div>

            <div className="hidden shrink-0 items-center gap-3 xl:flex">
              <div ref={portfolioRef} className="relative">
                <button
                  type="button"
                  onClick={() => setIsPortfolioOpen((v) => !v)}
                  className={cn(
                    buttonVariants({ variant: "secondary", size: "sm" }),
                    "cta-button header-cta h-11 border-0 px-5 text-[0.98rem] font-semibold text-white",
                  )}
                >
                  {headerNavigation.portfolioCta.label}
                  <ChevronDown className={cn("size-4 transition-transform duration-200", isPortfolioOpen && "rotate-180")} />
                </button>

                {isPortfolioOpen ? (
                  <div className="absolute right-0 top-[calc(100%+8px)] z-50 min-w-[220px] overflow-hidden rounded-2xl border border-[var(--brand-border)] bg-[var(--card)] py-2 shadow-[0_16px_40px_color-mix(in_srgb,var(--brand-base)_12%,transparent)]">
                    {portfolioItems.map((item) => (
                      <a
                        key={item.label}
                        href={item.file}
                        download
                        onClick={() => setIsPortfolioOpen(false)}
                        className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-[var(--brand-strong)] transition hover:bg-[color:var(--brand-surface)] hover:text-[var(--brand-base)]"
                      >
                        <Download className="size-3.5 shrink-0 text-[var(--brand-base)]" />
                        {item.label}
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>

            {isMenuOpen ? (
              <div className="animate-header-panel flex w-full flex-col gap-4 border-t border-[var(--brand-border)] pt-4 xl:hidden">
                <nav className="grid gap-2">
                  {headerNavigation.navItems.map((item) => {
                    const isActive = pathname === item.href;

                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                          "flex items-center justify-between rounded-[var(--theme-control-radius)] px-4 py-3 text-base font-medium transition duration-300",
                          isActive
                            ? "bg-[color:var(--brand-surface-strong)] text-[var(--brand-strong)] shadow-[var(--brand-shadow)]"
                            : "bg-[color:var(--brand-surface)] text-[var(--brand-base)] hover:bg-[color:var(--brand-surface-strong)] hover:text-[var(--brand-strong)]",
                        )}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <span>{item.label}</span>
                      </Link>
                    );
                  })}
                </nav>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <ThemeSelector mobile />
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setIsPortfolioOpen((v) => !v)}
                      className={cn(
                        buttonVariants({ variant: "secondary", size: "sm" }),
                        "cta-button h-11 w-full border-0 px-5 text-[0.98rem] font-semibold text-white sm:w-auto",
                      )}
                    >
                      {headerNavigation.portfolioCta.label}
                      <ChevronDown className={cn("size-4 transition-transform duration-200", isPortfolioOpen && "rotate-180")} />
                    </button>
                    {isPortfolioOpen ? (
                      <div className="absolute left-0 top-[calc(100%+8px)] z-50 min-w-[220px] overflow-hidden rounded-2xl border border-[var(--brand-border)] bg-[var(--card)] py-2 shadow-[0_16px_40px_color-mix(in_srgb,var(--brand-base)_12%,transparent)]">
                        {portfolioItems.map((item) => (
                          <a
                            key={item.label}
                            href={item.file}
                            download
                            onClick={() => { setIsPortfolioOpen(false); setIsMenuOpen(false); }}
                            className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-[var(--brand-strong)] transition hover:bg-[color:var(--brand-surface)] hover:text-[var(--brand-base)]"
                          >
                            <Download className="size-3.5 shrink-0 text-[var(--brand-base)]" />
                            {item.label}
                          </a>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </Container>
      </header>

      <div className="fixed left-5 top-7 z-[65] hidden xl:block xl:left-8">
        <div className="brand-panel rounded-[calc(var(--theme-panel-radius)-14px)] p-2">
          <ThemeSelector />
        </div>
      </div>

      <div className="fixed right-5 top-7 z-[65] hidden xl:block xl:right-8">
        <div className="brand-panel rounded-[calc(var(--theme-panel-radius)-14px)] p-2">
          <ThemeToggle />
        </div>
      </div>
    </>
  );
}
