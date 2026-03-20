"use client";

import BlurText from "@/components/animations/BlurText";
import { Container } from "@/components/shared/container";
import { CommonSectionTitle } from "@/components/shared/common-section-title";
import { SectionReveal } from "@/components/shared/section-reveal";
import { About_Value_Cards } from "@/constants/about-content";

function AboutValueCard({
  title,
  icon: Icon,
  points,
  index,
}: {
  title: string;
  icon: typeof About_Value_Cards[number]["icon"];
  points: string[];
  index: number;
}) {
  return (
    <SectionReveal className="h-full" delay={index * 0.08} onView>
      <article className="flex h-full flex-col rounded-[2rem] border border-[var(--brand-border)] bg-[color:var(--brand-surface)] px-6 py-8 shadow-[var(--brand-shadow)] backdrop-blur-sm sm:px-8 sm:py-10 lg:px-10 lg:py-12">
        <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[var(--brand-base)] bg-[color:var(--brand-surface-strong)] shadow-[var(--brand-shadow)] sm:h-24 sm:w-24">
          <Icon className="h-8 w-8 text-[var(--brand-base)] sm:h-10 sm:w-10" strokeWidth={1.8} />
        </div>
        <BlurText
          as="h3"
          text={title}
          animateBy="words"
          delay={28}
          className="brand-title mt-6 font-[family:var(--font-heading)] text-2xl font-semibold sm:text-3xl"
        />
        <ul className="mt-5 space-y-3 text-base leading-7 text-[var(--brand-strong)] sm:text-lg sm:leading-8">
          {points.map((point) => (
            <li key={point}>
              <BlurText as="span" text={point} animateBy="words" delay={20} className="!inline-flex !flex-none" />
            </li>
          ))}
        </ul>
      </article>
    </SectionReveal>
  );
}

export function AboutValuesSection() {
  return (
    <section className="bg-[var(--background)] py-14 sm:py-18 lg:py-24">
      <Container width="wide">
        <CommonSectionTitle
          title="We Believe In Our Goals and Values"
          highlights={["Goals", "Values"]}
          className="max-w-5xl"
          titleClassName="text-3xl sm:text-4xl lg:text-[3.4rem]"
        />
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-8">
          {About_Value_Cards.map((card, index) => (
            <AboutValueCard key={card.title} {...card} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
