"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function PillNav({ items = [], pathname = "", className = "" }) {
  return (
    <nav
      aria-label="Primary"
      className={`flex items-center rounded-full border border-[color:var(--brand-border-strong)] bg-[color:color-mix(in_srgb,var(--brand-surface-strong)_82%,white_18%)] p-1.5 shadow-[0_18px_40px_color-mix(in_srgb,var(--brand-base)_10%,transparent)] backdrop-blur ${className}`}
    >
      <ul className="flex items-center gap-1">
        {items.map((item, index) => {
          const isActive = pathname === item.href;

          return (
            <motion.li
              key={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.32, delay: index * 0.05, ease: "easeOut" }}
              className="list-none"
            >
              <Link
                href={item.href}
                className="group relative flex h-11 items-center justify-center overflow-hidden rounded-full px-4 text-[0.98rem] font-semibold tracking-[0.01em] text-[var(--brand-base)] transition-colors duration-300 hover:text-[var(--brand-strong)]"
              >
                {isActive ? (
                  <motion.span
                    layoutId="header-pill-active"
                    className="absolute inset-0 rounded-full bg-[linear-gradient(135deg,color-mix(in_srgb,var(--brand-base)_90%,white_10%)_0%,color-mix(in_srgb,var(--brand-soft)_88%,white_12%)_100%)] shadow-[0_10px_24px_color-mix(in_srgb,var(--brand-base)_22%,transparent)]"
                    transition={{ type: "spring", stiffness: 320, damping: 26, mass: 0.8 }}
                  />
                ) : (
                  <span className="absolute inset-0 rounded-full bg-[color:var(--brand-surface)] opacity-0 transition duration-300 group-hover:opacity-100" />
                )}

                <span className="relative block overflow-hidden leading-none">
                  <motion.span
                    className="block"
                    initial={false}
                    animate={{ y: isActive ? -12 : 0, opacity: isActive ? 0 : 1 }}
                    transition={{ duration: 0.26, ease: "easeOut" }}
                  >
                    {item.label}
                  </motion.span>
                  <motion.span
                    className="absolute inset-0 text-white"
                    initial={false}
                    animate={{ y: isActive ? 0 : 12, opacity: isActive ? 1 : 0 }}
                    transition={{ duration: 0.26, ease: "easeOut" }}
                    aria-hidden="true"
                  >
                    {item.label}
                  </motion.span>
                </span>
              </Link>
            </motion.li>
          );
        })}
      </ul>
    </nav>
  );
}

export default PillNav;
