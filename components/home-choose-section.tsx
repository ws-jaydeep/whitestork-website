"use client";

import { useMemo } from "react";
import BlurText from "@/components/BlurText";
import CountUp from "@/components/CountUp";
import { Container } from "@/components/container";
import { CommonSectionTitle } from "@/components/common-section-title";
import { SectionReveal } from "@/components/section-reveal";
import { Choose_right_Data, Home_Experience_Data } from "@/constants/home-choose-content";

function parseCountText(text: string) {
  const match = text.match(/^([0-9]+(?:\.[0-9]+)?)(.*)$/);
  if (!match) return { value: 0, suffix: text };
  return { value: Number(match[1]), suffix: match[2] ?? "" };
}

function ChooseRightCard({
  title,
  description,
  index,
}: {
  title: string;
  description: string;
  index: number;
}) {
  return (
    <SectionReveal delay={index * 0.06} onView>
      <article className="h-full rounded-[2rem] border border-[var(--brand-border)] bg-[var(--card)] p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-xl sm:p-7">
        <BlurText
          as="h3"
          text={title}
          animateBy="words"
          delay={24}
          className="font-[family:var(--font-heading)] text-2xl font-semibold text-[var(--brand-strong)]"
        />
        <BlurText
          as="p"
          text={description}
          animateBy="words"
          delay={18}
          className="mt-3 text-sm leading-7 text-[var(--brand-muted)] sm:text-base"
        />
      </article>
    </SectionReveal>
  );
}

function ExperienceCard({
  title,
  description,
  color,
  icon: Icon,
}: {
  title: string;
  description: string;
  color: string;
  icon: (props: React.ComponentProps<"svg">) => JSX.Element;
}) {
  const { value, suffix } = useMemo(() => parseCountText(title), [title]);

  return (
    <article className="rounded-3xl border border-[var(--brand-border)] bg-[var(--card)] p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-xl">
      <div className="flex items-center gap-3">
        <div
          className="flex h-12 w-12 items-center justify-center rounded-xl text-white"
          style={{ backgroundColor: color }}
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
            text={description}
            animateBy="words"
            delay={18}
            className="text-sm text-[var(--brand-muted)]"
          />
        </div>
      </div>
    </article>
  );
}

export function HomeChooseSection() {
  return (
    <section className="bg-[var(--background)] pt-12 pb-6 sm:pt-16 sm:pb-8 lg:pt-20 lg:pb-10">
      <Container width="wide">
        <SectionReveal onView>
          <CommonSectionTitle
            title="Why Choose Whitestork ?"
            highlights={["Whitestork"]}
            description="Your Partner for Innovation and Growth in Healthcare and SaaS Software Development since 2015"
            className="max-w-5xl"
            titleClassName="text-3xl sm:text-4xl lg:text-[3.2rem]"
            descriptionClassName="max-w-3xl text-base leading-7 sm:text-lg sm:leading-8"
          />
        </SectionReveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {Choose_right_Data.map((item, index) => (
            <ChooseRightCard
              key={item.title}
              title={item.title}
              description={item.description}
              index={index}
            />
          ))}
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {Home_Experience_Data.map((item, index) => (
            <SectionReveal key={item.title + item.description} delay={index * 0.07} onView>
              <ExperienceCard {...item} />
            </SectionReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
