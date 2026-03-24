"use client";

import { motion } from "framer-motion";

const particles = Array.from({ length: 16 }, (_, i) => ({
  id: i,
  size: 3 + (i % 3) * 2,
  x: 5 + (i * 6.1) % 90,
  y: 5 + (i * 7.3) % 88,
  duration: 5 + (i % 6) * 1.2,
  delay: (i * 0.4) % 3,
  drift: i % 2 === 0 ? 14 : -14,
}));

export function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>

      {/* Base page color */}
      <div className="absolute inset-0 bg-[#f8fbff] dark:bg-[#0d1522]" />

      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.35] dark:opacity-[0.18]"
        style={{
          backgroundImage: `radial-gradient(circle, color-mix(in srgb, var(--brand-base) 55%, transparent) 1px, transparent 1px)`,
          backgroundSize: "36px 36px",
        }}
      />

      {/* Soft vignette so grid fades at edges */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 50% 50%, transparent 40%, var(--background) 100%)",
        }}
      />

      {/* Orb 1 — top left */}
      <motion.div
        className="absolute -left-32 -top-32 h-[520px] w-[520px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, color-mix(in srgb, var(--brand-soft) 22%, transparent) 0%, transparent 70%)",
        }}
        animate={{ x: [0, 40, 0], y: [0, 30, 0], scale: [1, 1.12, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Orb 2 — bottom right */}
      <motion.div
        className="absolute -bottom-40 -right-40 h-[560px] w-[560px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, color-mix(in srgb, var(--brand-base) 16%, transparent) 0%, transparent 70%)",
        }}
        animate={{ x: [0, -36, 0], y: [0, -28, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      />

      {/* Orb 3 — center top */}
      <motion.div
        className="absolute left-1/2 -top-24 h-[360px] w-[360px] -translate-x-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, color-mix(in srgb, var(--brand-strong) 8%, transparent) 0%, transparent 70%)",
        }}
        animate={{ y: [0, 24, 0], scale: [1, 1.08, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
      />

      {/* Floating particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-[var(--brand-base)]"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
            opacity: 0.18,
          }}
          animate={{
            y: [0, p.drift, 0],
            x: [0, p.id % 3 === 0 ? 10 : p.id % 3 === 1 ? -8 : 4, 0],
            opacity: [0.12, 0.28, 0.12],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: p.delay,
          }}
        />
      ))}
    </div>
  );
}
