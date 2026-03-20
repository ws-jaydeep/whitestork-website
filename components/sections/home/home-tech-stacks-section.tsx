"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
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

export function HomeTechStacksSection() {
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

        <div className="mt-8 grid gap-5 sm:mt-10 md:grid-cols-2 xl:grid-cols-3">
          {Tech_Stacks_Data.map((stack, index) => (
            <SectionReveal key={stack.title} onView>
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -8, scale: 1.01 }}
                className="group relative flex h-full flex-col overflow-hidden rounded-[30px] border border-[var(--brand-border)] bg-[linear-gradient(180deg,color-mix(in_srgb,var(--card)_98%,white_2%)_0%,color-mix(in_srgb,var(--brand-surface)_94%,white_6%)_100%)] p-6 shadow-[0_22px_52px_color-mix(in_srgb,var(--brand-base)_10%,transparent)] transition-[border-color,box-shadow] duration-300 hover:border-[var(--brand-border-strong)] hover:shadow-[0_28px_60px_color-mix(in_srgb,var(--brand-base)_14%,transparent)] sm:p-7"
              >
                <div className="pointer-events-none absolute inset-x-6 top-0 h-32 rounded-full bg-[radial-gradient(circle,color-mix(in_srgb,var(--brand-soft)_16%,transparent)_0%,transparent_72%)] opacity-0 blur-3xl transition duration-300 group-hover:opacity-100" />

                <div className="relative z-[1] flex items-start justify-between gap-4">
                  <div className="space-y-4">
                    <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-[color:color-mix(in_srgb,var(--brand-base)_9%,white_91%)] text-[var(--brand-base)]">
                      <Sparkles className="size-5" />
                    </div>
                    <div>
                      <h3 className="font-[family:var(--font-heading)] text-[1.55rem] font-semibold text-[var(--brand-strong)] sm:text-[1.75rem]">
                        {stack.title}
                      </h3>
                      <p className="mt-2 max-w-[24rem] text-sm leading-7 text-[var(--brand-muted)] sm:text-[0.98rem]">
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

                <div className="relative z-[1] mt-8 flex flex-wrap gap-3">
                  {stack.items.map((item) => (
                    <div
                      key={item}
                      className="inline-flex min-h-12 items-center rounded-2xl border border-[var(--brand-border)] bg-[color:color-mix(in_srgb,var(--brand-surface)_94%,white_6%)] px-4 py-3 text-sm font-medium leading-5 text-[var(--brand-strong)] transition duration-300 group-hover:border-[color:color-mix(in_srgb,var(--brand-base)_16%,var(--brand-border))] sm:text-[0.95rem]"
                    >
                      {renderItemLabel(item)}
                    </div>
                  ))}
                </div>
              </motion.article>
            </SectionReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
