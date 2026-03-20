"use client";

import { Bot, ShieldCheck } from "lucide-react";
import { Container } from "@/components/container";
import { SectionReveal } from "@/components/section-reveal";
import BlurText from "@/components/BlurText";
import { negotioShowcaseContent } from "@/constants/negotio-content";
import { CommonSectionTitle } from "./common-section-title";

export function NegotioShowcaseSection() {
  return (
    <section className="relative overflow-hidden pt-16 pb-6 sm:pt-20 sm:pb-8 lg:pt-18 lg:pb-8">
      <Container width="wide" className="relative">
        <SectionReveal className="mx-auto max-w-5xl text-center" onView>
          <CommonSectionTitle
            title="Meet Negotio : In House AI Product For Travel Industry"
            highlights={["In", "House AI Product", "Travel Industry"]}
            className="max-w-5xl"
            titleClassName="text-3xl sm:text-4xl lg:text-[3.4rem]"
          />
        </SectionReveal>

        <div className="relative mt-12 grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-stretch">
          <SectionReveal className="relative" onView>
            <div className="group relative overflow-hidden rounded-[36px] border border-[var(--brand-border)] bg-[linear-gradient(180deg,color-mix(in_srgb,var(--card)_97%,white_3%)_0%,color-mix(in_srgb,var(--brand-surface)_94%,white_6%)_100%)] p-4 shadow-[0_32px_80px_color-mix(in_srgb,var(--brand-base)_10%,transparent)] sm:p-5">
              {/* <div className="absolute left-6 top-6 z-10 inline-flex items-center gap-2 rounded-full border border-[color:color-mix(in_srgb,var(--brand-soft)_18%,var(--brand-border))] bg-[color:color-mix(in_srgb,var(--card)_82%,white_18%)] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-base)] backdrop-blur">
                <Sparkles className="size-3.5" />
                {negotioShowcaseContent.badge}
              </div> */}

              <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-32 bg-[linear-gradient(180deg,transparent_0%,color-mix(in_srgb,var(--brand-strong)_20%,transparent)_100%)]" />

              <div className="relative overflow-hidden rounded-[28px] border border-[color:color-mix(in_srgb,var(--brand-soft)_18%,var(--brand-border))] bg-[color:var(--brand-surface)]">
                <video
                  className="aspect-[16/10] w-full object-cover transition duration-700 group-hover:scale-[1.015]"
                  src={negotioShowcaseContent.videoSrc}
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls={true}
                />
              </div>

              {/* <div className="relative z-10 mt-5 grid gap-3 sm:grid-cols-3">
                {negotioShowcaseContent.highlights.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[22px] border border-[color:color-mix(in_srgb,var(--brand-soft)_20%,var(--brand-border))] bg-[color:color-mix(in_srgb,var(--card)_90%,white_10%)] px-4 py-4"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-base)]">
                      {item.label}
                    </p>
                    <p className="mt-2 text-xl font-semibold text-[var(--brand-strong)]">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div> */}
            </div>
          </SectionReveal>

          <SectionReveal className="relative" delay={0.08} onView>
            <div className="relative h-full overflow-hidden rounded-[36px] border border-[var(--brand-border)] bg-[linear-gradient(180deg,color-mix(in_srgb,var(--card)_98%,white_2%)_0%,var(--card)_100%)] p-6 shadow-[0_28px_72px_color-mix(in_srgb,var(--brand-base)_8%,transparent)] sm:p-8">
              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[radial-gradient(circle,color-mix(in_srgb,var(--brand-soft)_14%,transparent)_0%,transparent_72%)] blur-3xl" />

              <div className="relative">
                <div className="inline-flex items-center gap-2 rounded-full bg-[color:color-mix(in_srgb,var(--brand-base)_12%,white_88%)] px-3 py-1.5 text-sm font-semibold text-[var(--brand-base)]">
                  <Bot className="size-4" />
                  {negotioShowcaseContent.infoBadge}
                </div>

                <BlurText
                  text={negotioShowcaseContent.description}
                  animateBy="words"
                  delay={45}
                  className="mt-6 !block text-base leading-8 text-[var(--brand-muted)]"
                />

                <div className="mt-8 rounded-[28px] border border-[color:color-mix(in_srgb,var(--brand-soft)_18%,var(--brand-border))] bg-[linear-gradient(180deg,color-mix(in_srgb,var(--brand-surface)_82%,white_18%)_0%,color-mix(in_srgb,var(--card)_96%,white_4%)_100%)] p-5">
                  <div className="flex items-center gap-2 text-[var(--brand-strong)]">
                    <ShieldCheck className="size-5 text-[var(--brand-base)]" />
                    <BlurText
                      text={negotioShowcaseContent.benefitsTitle}
                      animateBy="words"
                      delay={35}
                      className="text-lg font-semibold"
                    />
                  </div>

                  <div className="mt-4 space-y-4">
                    {negotioShowcaseContent.benefits.map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <span className="mt-2 size-2 rounded-full bg-[var(--brand-base)]" />
                        <BlurText
                          text={item}
                          animateBy="words"
                          delay={35}
                          className="text-base leading-7 text-[var(--brand-muted)]"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* <a
                  href={negotioShowcaseContent.ctaHref}
                  className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[var(--brand-base)] px-5 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white shadow-[0_20px_44px_color-mix(in_srgb,var(--brand-base)_24%,transparent)] transition duration-300 hover:-translate-y-0.5 hover:bg-[var(--brand-strong)]"
                >
                  {negotioShowcaseContent.ctaLabel}
                  <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a> */}
              </div>
            </div>
          </SectionReveal>
        </div>
      </Container>
    </section>
  );
}
