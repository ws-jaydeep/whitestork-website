"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Home, SearchX } from "lucide-react";
import { Container } from "@/components/shared/container";
import companyLogo from "@/public/images/branding/company-logo.png";
import showcaseImage from "@/public/images/portfolio/krafted-care-web.png";

const rise = {
  initial: { opacity: 0, y: 20, filter: "blur(8px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
};

export function NotFoundMotion() {
  return (
    <section className="relative overflow-hidden py-6 sm:py-8 lg:py-10">
      <Container width="wide">
        <motion.div
          className="page-header-panel relative mx-auto max-w-5xl overflow-hidden rounded-[calc(var(--theme-panel-radius)+8px)] px-5 py-6 sm:px-7 sm:py-8 lg:px-8 lg:py-9"
          initial={{ opacity: 0, y: 24, scale: 0.985 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="absolute left-0 top-0 h-36 w-36 rounded-full blur-3xl"
            style={{
              background:
                "radial-gradient(circle, color-mix(in srgb, var(--page-header-glow) 56%, transparent) 0%, transparent 72%)",
            }}
            animate={{ x: [0, 18, 0], y: [0, 12, 0], scale: [1, 1.08, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-0 right-0 h-40 w-40 rounded-full blur-3xl"
            style={{
              background:
                "radial-gradient(circle, color-mix(in srgb, var(--brand-soft) 24%, transparent) 0%, transparent 72%)",
            }}
            animate={{ x: [0, -16, 0], y: [0, -10, 0], scale: [1, 1.1, 1], opacity: [0.62, 0.94, 0.62] }}
            transition={{ duration: 6.4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute left-[12%] top-[22%] hidden size-20 rounded-full border border-border/60 bg-background/50 blur-sm lg:block"
            animate={{ y: [0, -14, 0], x: [0, 8, 0], rotate: [0, 8, 0] }}
            transition={{ duration: 7.2, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute right-[14%] top-[18%] hidden size-14 rounded-full border border-border/60 bg-background/45 blur-sm lg:block"
            animate={{ y: [0, 12, 0], x: [0, -8, 0], rotate: [0, -8, 0] }}
            transition={{ duration: 7.8, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="relative grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <motion.div
              className="pointer-events-none absolute right-[8%] top-[10%] hidden lg:block"
              animate={{ y: [0, -10, 0], rotate: [0, 4, 0] }}
              transition={{ duration: 5.4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="inline-flex size-14 items-center justify-center rounded-full border bg-[color:var(--brand-surface-strong)] text-[var(--brand-base)] shadow-[var(--brand-shadow)]">
                <SearchX className="size-6" />
              </div>
            </motion.div>

            <div className="order-2 flex flex-col items-center text-center lg:order-1 lg:items-start lg:text-left">
              <motion.div
                className="inline-flex rounded-full border bg-[color:var(--brand-surface-strong)] px-4 py-2 shadow-[var(--brand-shadow)]"
                variants={rise}
                initial="initial"
                animate="animate"
                transition={{ delay: 0.06, duration: 0.4 }}
              >
                <Image
                  src={companyLogo}
                  alt="WhiteStork Software Solutions"
                  className="h-8 w-auto object-contain"
                  priority
                />
              </motion.div>

              <motion.p
                className="mt-5 text-xs font-semibold uppercase tracking-[0.32em] text-[var(--brand-base)] sm:text-sm"
                variants={rise}
                initial="initial"
                animate="animate"
                transition={{ delay: 0.12, duration: 0.4 }}
              >
                Error 404
              </motion.p>
              <motion.h1
                className="mt-3 max-w-xl font-[family:var(--font-heading)] text-3xl font-semibold text-[var(--brand-strong)] sm:text-4xl lg:text-5xl"
                style={{ letterSpacing: "var(--theme-heading-spacing)" }}
                variants={rise}
                initial="initial"
                animate="animate"
                transition={{ delay: 0.2, duration: 0.52, ease: [0.22, 1, 0.36, 1] }}
              >
                Page not found. The screen you requested is unavailable.
              </motion.h1>
              <motion.p
                className="brand-copy mt-4 max-w-xl text-base leading-7 sm:text-lg"
                variants={rise}
                initial="initial"
                animate="animate"
                transition={{ delay: 0.28, duration: 0.52, ease: [0.22, 1, 0.36, 1] }}
              >
                The link may be broken, the page may have moved, or the address may be wrong. Let
                us guide you back to the right place.
              </motion.p>

              <motion.div
                className="mt-6 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
                variants={rise}
                initial="initial"
                animate="animate"
                transition={{ delay: 0.36, duration: 0.48 }}
              >
                <motion.div whileHover={{ y: -2, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    href="/"
                    className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
                  >
                    <Home className="size-4" />
                    Go Home
                  </Link>
                </motion.div>
                <motion.div whileHover={{ y: -2, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    href="/portfolio"
                    className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-border bg-background/80 px-5 text-sm font-medium text-foreground transition hover:bg-muted"
                  >
                    View Portfolio
                  </Link>
                </motion.div>
              </motion.div>

              <motion.div
                variants={rise}
                initial="initial"
                animate="animate"
                transition={{ delay: 0.44, duration: 0.42 }}
              >
                <motion.div whileHover={{ x: -3 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    href="/services"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[var(--brand-base)] underline-offset-4 transition hover:text-[var(--brand-strong)] hover:underline"
                  >
                    <ArrowLeft className="size-4" />
                    See Services
                  </Link>
                </motion.div>
              </motion.div>
            </div>

            <motion.div
              className="order-1 flex justify-center lg:order-2 lg:justify-end"
              variants={rise}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.14, duration: 0.55 }}
            >
              <motion.div
                className="relative w-full max-w-md"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
              >
                <motion.div
                  className="absolute -left-3 top-6 h-24 w-24 rounded-full bg-[color:var(--brand-soft)]/12 blur-3xl"
                  animate={{ scale: [1, 1.18, 1], opacity: [0.45, 0.72, 0.45] }}
                  transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                  className="absolute -right-2 bottom-4 h-28 w-28 rounded-full bg-[color:var(--brand-base)]/14 blur-3xl"
                  animate={{ scale: [1, 1.14, 1], opacity: [0.42, 0.68, 0.42] }}
                  transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut" }}
                />
                <div className="relative rounded-[calc(var(--theme-panel-radius)-2px)] border bg-[linear-gradient(180deg,color-mix(in_srgb,var(--brand-surface-strong)_96%,white),color-mix(in_srgb,var(--brand-surface)_92%,white))] p-3 shadow-[var(--brand-shadow-strong)]">
                  <div className="rounded-[calc(var(--theme-card-radius)-8px)] border bg-[color:var(--brand-strong)]/4 p-2">
                    <div className="mb-2 flex items-center gap-2 rounded-full px-2 py-1">
                      <span className="size-2 rounded-full bg-rose-400/80" />
                      <span className="size-2 rounded-full bg-amber-400/80" />
                      <span className="size-2 rounded-full bg-emerald-400/80" />
                    </div>
                    <div className="overflow-hidden rounded-[calc(var(--theme-card-radius)-10px)] border bg-white">
                      <Image
                        src={showcaseImage}
                        alt="WhiteStork website preview on screen"
                        className="h-auto w-full object-cover object-top"
                        priority
                      />
                    </div>
                  </div>
                  <motion.div
                    className="absolute -bottom-3 left-1/2 h-4 w-40 -translate-x-1/2 rounded-full bg-[color:var(--brand-strong)]/10 blur-md"
                    animate={{ scaleX: [1, 1.08, 1], opacity: [0.4, 0.65, 0.4] }}
                    transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <div className="mx-auto mt-1 h-3 w-28 rounded-b-full bg-[color:var(--brand-strong)]/18" />
                  <div className="mx-auto h-2.5 w-44 rounded-full bg-[color:var(--brand-strong)]/10" />
                </div>
                <motion.div
                  className="absolute -right-3 top-5 rounded-full border bg-[color:var(--brand-surface-strong)] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-base)] shadow-[var(--brand-shadow)]"
                  animate={{ y: [0, -8, 0], rotate: [0, 4, 0] }}
                  transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut" }}
                >
                  404
                </motion.div>
                <motion.div
                  className="absolute -left-2 bottom-10 rounded-full border bg-[color:var(--brand-surface-strong)] px-3 py-1.5 text-xs font-medium text-[var(--brand-strong)] shadow-[var(--brand-shadow)]"
                  animate={{ y: [0, 8, 0], x: [0, 4, 0] }}
                  transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
                >
                  Page missing
                </motion.div>
                <motion.div
                  className="absolute left-6 top-10 flex size-10 items-center justify-center rounded-full border bg-[color:var(--brand-surface-strong)] text-[var(--brand-base)] shadow-[var(--brand-shadow)]"
                  animate={{ y: [0, -10, 0], scale: [1, 1.06, 1] }}
                  transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
                >
                  <SearchX className="size-4" />
                </motion.div>
                <motion.div
                  className="absolute right-8 bottom-14 hidden h-14 w-14 rounded-full border border-border/60 bg-background/65 lg:block"
                  animate={{ y: [0, 10, 0], x: [0, -6, 0] }}
                  transition={{ duration: 5.1, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                  className="absolute left-12 bottom-6 hidden h-8 w-24 rounded-full border border-border/60 bg-background/50 lg:block"
                  animate={{ y: [0, 6, 0], scaleX: [1, 1.08, 1] }}
                  transition={{ duration: 4.4, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                  className="absolute inset-0 rounded-[calc(var(--theme-panel-radius)-2px)] border border-white/30"
                  animate={{ opacity: [0.35, 0.65, 0.35] }}
                  transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
