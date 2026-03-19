"use client";

import { useEffect, useMemo, useState } from "react";
import { Container } from "@/components/container";
import { CommonSectionTitle } from "@/components/common-section-title";
import { SectionReveal } from "@/components/section-reveal";
import type { IFactsAboutData } from "@/constants/content-types";
import { Facts_About } from "@/constants/about-content";

function parseCountText(text: string) {
  const match = text.match(/^([0-9]+(?:\.[0-9]+)?)(.*)$/);
  if (!match) return { value: 0, suffix: text };
  return { value: Number(match[1]), suffix: match[2] ?? "" };
}

function FactsCard({ fact }: { fact: IFactsAboutData }) {
  const Icon = fact.icon;
  const { value, suffix } = useMemo(() => parseCountText(fact.title), [fact.title]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 900;
    const step = 16;
    const steps = Math.max(1, Math.floor(duration / step));
    const increment = value / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCurrent(value);
        clearInterval(timer);
      } else {
        setCurrent(Number(start.toFixed(0)));
      }
    }, step);

    return () => clearInterval(timer);
  }, [value]);

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
            {current}
            {suffix}
          </p>
          <p className="text-sm text-[var(--brand-muted)]">{fact.description}</p>
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
          //   eyebrow="Company Snapshot"
            title="Excellent Facts!"
            highlights={["Excellent"]}
          //   description="We focus on real outcomes for clients and teams-trust, quality, and growth across every project."
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
