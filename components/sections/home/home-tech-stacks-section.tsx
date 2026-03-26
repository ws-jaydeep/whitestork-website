"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  BrainCircuit,
  Code2,
  Megaphone,
  ShieldCheck,
  Smartphone,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { CommonSectionTitle } from "@/components/shared/common-section-title";
import { Container } from "@/components/shared/container";
import { SectionReveal } from "@/components/shared/section-reveal";
import { Tech_Stacks_Data } from "@/constants/home-tech-stacks-content";

function renderItemLabel(label: string) {
  return label.split("\n").map((part, index) => (
    <span key={`${label}-${index}`} className="block">
      {part}
    </span>
  ));
}

const stackIcons: Record<string, LucideIcon> = {
  "Digital Marketing": Megaphone,
  AI: BrainCircuit,
  "Web Development": Code2,
  "Mobile Development": Smartphone,
  "Quality Assurance": ShieldCheck,
};

const featuredSummary = [
  "AI + Automation",
  "Web + Mobile",
  "Growth + QA",
];

function getStackSpanClass(index: number) {
  if (index === 0) {
    return "md:col-span-2 xl:col-span-3";
  }

  if (index === 1) {
    return "xl:col-span-3";
  }

  return "xl:col-span-2";
}

export function HomeTechStacksSection() {
  const totalCapabilities = Tech_Stacks_Data.reduce(
    (count, stack) => count + stack.items.length,
    0,
  );

  return (
    <section className="relative overflow-hidden pt-12 pb-6 sm:pt-16 sm:pb-8 lg:pt-20 lg:pb-10">
      <Container width="wide">
        <SectionReveal onView>
          <CommonSectionTitle
            title="Tech Stacks We Take Pride in Mastering"
            highlights={["Stacks", "Mastering"]}
            className="max-w-5xl"
            titleClassName="text-3xl sm:text-4xl lg:text-[3rem]"
          />
        </SectionReveal>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-6">
          {Tech_Stacks_Data.map((stack, index) => {
            const Icon = stackIcons[stack.title] ?? Code2;

            return (
              <SectionReveal
                key={stack.title}
                onView
                delay={index * 0.05}
                className={getStackSpanClass(index)}
              >
                <motion.article
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{ y: -8 }}
                  className="group relative flex h-full flex-col overflow-hidden rounded-[30px] border border-[var(--brand-border)] bg-[linear-gradient(180deg,color-mix(in_srgb,var(--card)_98%,white_2%)_0%,color-mix(in_srgb,var(--brand-surface)_94%,white_6%)_100%)] p-5 shadow-[0_22px_52px_color-mix(in_srgb,var(--brand-base)_10%,transparent)] transition-[border-color,box-shadow,transform] duration-300 hover:border-[var(--brand-border-strong)] hover:shadow-[0_30px_65px_color-mix(in_srgb,var(--brand-base)_14%,transparent)] sm:p-6"
                >
                  <div className="pointer-events-none absolute inset-x-6 top-0 h-28 rounded-full bg-[radial-gradient(circle,color-mix(in_srgb,var(--brand-soft)_16%,transparent)_0%,transparent_74%)] opacity-0 blur-3xl transition duration-300 group-hover:opacity-100" />
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,color-mix(in_srgb,var(--brand-surface)_48%,transparent)_100%)]" />

                  <div className="relative z-[1] flex items-start justify-between gap-4">
                    <div className="space-y-4">
                      {/* <div className="inline-flex size-12 items-center justify-center rounded-2xl border border-[var(--brand-border)] bg-[color:color-mix(in_srgb,var(--brand-base)_10%,white_90%)] text-[var(--brand-base)] shadow-[0_14px_28px_color-mix(in_srgb,var(--brand-base)_12%,transparent)]">
                        <Icon className="size-5" />
                      </div> */}
                      <div>
                       
                        <h3 className="mt-3 font-[family:var(--font-heading)] text-[1.55rem] font-semibold leading-tight text-[var(--brand-strong)] sm:text-[1.85rem]">
                          {stack.title}
                        </h3>
                        <p className="mt-3 max-w-[28rem] text-sm leading-7 text-[var(--brand-muted)] sm:text-[0.98rem]">
                          {stack.description}
                        </p>
                      </div>
                    </div>

                    <div className="relative h-20 w-20 shrink-0 rounded-[24px] border border-[var(--brand-border)] bg-[linear-gradient(180deg,color-mix(in_srgb,var(--brand-surface)_96%,white_4%)_0%,white_100%)] p-3 shadow-[0_16px_34px_color-mix(in_srgb,var(--brand-base)_8%,transparent)] sm:h-24 sm:w-24">
                      <Image
                        src={stack.image}
                        alt={stack.title}
                        fill
                        className="object-contain p-3 transition duration-300 group-hover:scale-105"
                        sizes="96px"
                      />
                    </div>
                  </div>

                  <div className="relative z-[1] mt-8 grid gap-3 sm:grid-cols-2">
                    {stack.items.map((item) => (
                      <div
                        key={item}
                        className="inline-flex min-h-12 items-center rounded-2xl border border-[var(--brand-border)] bg-[color:color-mix(in_srgb,var(--brand-surface)_92%,white_8%)] px-4 py-3 text-sm font-medium leading-5 text-[var(--brand-strong)] transition duration-300 group-hover:border-[color:color-mix(in_srgb,var(--brand-base)_16%,var(--brand-border))] group-hover:bg-[color:color-mix(in_srgb,var(--brand-base)_6%,white_94%)] sm:text-[0.95rem]"
                      >
                        {renderItemLabel(item)}
                      </div>
                    ))}
                  </div>

                  <div className="relative z-[1] mt-auto pt-6">
                    <div className="h-1 rounded-full bg-[linear-gradient(90deg,var(--brand-base)_0%,color-mix(in_srgb,var(--brand-soft)_72%,white_28%)_55%,transparent_100%)]" />
                  </div>
                </motion.article>
              </SectionReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
