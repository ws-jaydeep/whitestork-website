"use client";

import BlurText from "@/components/animations/BlurText";
import CountUp from "@/components/animations/CountUp";
import { Container } from "@/components/shared/container";
import { CommonSectionTitle } from "@/components/shared/common-section-title";
import { SectionReveal } from "@/components/shared/section-reveal";
import type { IFactsAboutData } from "@/constants/content-types";
import { Facts_About } from "@/constants/about-content";
import { useMemo } from "react";

function parseCountText(text: string) {
  const match = text.match(/^([0-9]+(?:\.[0-9]+)?)(.*)$/);
  if (!match) return { value: 0, suffix: text };
  return { value: Number(match[1]), suffix: match[2] ?? "" };
}

function FactsCard({ fact }: { fact: IFactsAboutData }) {
  const Icon = fact.icon;
  const { value, suffix } = useMemo(() => parseCountText(fact.title), [fact.title]);

  return (
    <article className="rounded-3xl border border-[var(--brand-border)] bg-[var(--card)] p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-xl">
      <div className="flex items-center gap-3">
        <div
          className="flex h-12 w-12 items-center justify-center rounded-xl text-white"
          style={{ backgroundColor: fact.color }}
        >
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <p className="text-2xl font-bold text-[var(--brand-strong)]">
            <CountUp to={value} duration={1.2} className="tabular-nums" />
            {suffix}
          </p>
          <BlurText
            as="p"
            text={fact.description}
            animateBy="words"
            delay={18}
            className="text-sm text-[var(--brand-muted)]"
          />
        </div>
      </div>
    </article>
  );
}

export function AboutFactsSection() {
  return (
    <section className="bg-[var(--background)] py-12 sm:py-16 lg:py-20">
      <Container>
        <SectionReveal onView>
          <CommonSectionTitle
            title="Excellent Facts!"
            highlights={["Excellent"]}
          />
        </SectionReveal>
        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {Facts_About.map((fact, index) => (
            <SectionReveal key={fact.title + fact.description} delay={index * 0.07} onView>
              <FactsCard fact={fact} />
            </SectionReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
