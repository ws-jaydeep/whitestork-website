"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home } from "lucide-react";
import { Container } from "@/components/shared/container";
import SplitText from "@/components/animations/SplitText";
import SpotlightCard from "@/components/animations/SpotlightCard";

export function NotFoundMotion() {
  return (
    <section className="relative flex min-h-[88vh] items-center justify-center overflow-hidden bg-[var(--background)]">

      {/* Ambient glow blobs */}
      <motion.div
        className="pointer-events-none absolute left-[-12%] top-[-10%] h-[500px] w-[500px] rounded-full"
        style={{ background: "radial-gradient(circle, color-mix(in srgb, var(--brand-soft) 16%, transparent), transparent 70%)" }}
        animate={{ scale: [1, 1.14, 1], opacity: [0.45, 0.75, 0.45] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute bottom-[-10%] right-[-10%] h-[440px] w-[440px] rounded-full"
        style={{ background: "radial-gradient(circle, color-mix(in srgb, var(--brand-base) 12%, transparent), transparent 70%)" }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.35, 0.65, 0.35] }}
        transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
      />

      <Container width="default" className="relative z-10 py-16">
        <SpotlightCard
          className="mx-auto max-w-2xl !bg-[var(--card)] !border-[var(--brand-border)] !rounded-[var(--theme-panel-radius)] !p-10 sm:!p-14 text-center"
          spotlightColor="color-mix(in srgb, var(--brand-soft) 22%, transparent)"
        >
          {/* Floating 404 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6, filter: "blur(24px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.span
              className="block font-[family:var(--font-heading)] font-semibold leading-none"
              style={{
                fontSize: "clamp(100px, 18vw, 180px)",
                background: "linear-gradient(135deg, var(--brand-strong) 0%, var(--brand-base) 55%, var(--brand-soft) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                letterSpacing: "-0.05em",
              }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
            >
              404
            </motion.span>
          </motion.div>

          {/* Animated divider line */}
          <motion.div
            className="mx-auto my-6 h-px rounded-full bg-gradient-to-r from-transparent via-[var(--brand-border-strong)] to-transparent"
            style={{ width: "60%" }}
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          />

          {/* SplitText heading */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55, duration: 0.3 }}
          >
            <SplitText
              text="Looks like this page flew away"
              tag="h1"
              className="font-[family:var(--font-heading)] text-2xl font-semibold text-[var(--brand-strong)] sm:text-3xl"
              splitType="chars"
              delay={28}
              duration={0.7}
              ease="power3.out"
              from={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              to={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              threshold={0}
              rootMargin="0px"
              textAlign="center"
            />
          </motion.div>

          {/* Subtitle */}
          <motion.p
            className="brand-copy mx-auto mt-4 max-w-md text-base leading-7"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            The link may be broken or the page may have moved. Let us guide you back to the right place.
          </motion.p>

          {/* Eyebrow badge */}
          <motion.p
            className="mt-5 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--brand-base)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.05, duration: 0.4 }}
          >
            Page Not Found
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.15, duration: 0.45 }}
          >
            <motion.div whileHover={{ y: -2, scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/"
                className="cta-button inline-flex h-11 items-center gap-2 px-6 text-sm font-semibold text-white transition"
              >
                <Home className="size-4" />
                Go Home
              </Link>
            </motion.div>
           
          </motion.div>
        </SpotlightCard>
      </Container>
    </section>
  );
}
