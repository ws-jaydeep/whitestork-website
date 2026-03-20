"use client";

import Image from "next/image";
import { Quote } from "lucide-react";
import SpotlightCard from "@/components/animations/SpotlightCard";
import { CommonSectionTitle } from "@/components/shared/common-section-title";
import { Container } from "@/components/shared/container";
import { SectionReveal } from "@/components/shared/section-reveal";
import { Client_Story_Data } from "@/constants/home-client-review-content";

export function HomeClientReviewSection() {
  return (
    <section className="relative overflow-hidden pt-12 pb-6 sm:pt-16 sm:pb-8 lg:pt-20 lg:pb-10">
      <Container width="wide">
        <SectionReveal onView>
          <CommonSectionTitle
            title="Client Reviews"
            highlights={["Client Reviews"]}
            className="max-w-4xl"
            titleClassName="text-3xl sm:text-4xl lg:text-[3rem]"
          />
        </SectionReveal>

        <SectionReveal onView className="mt-8 sm:mt-10">
          <div className="grid gap-5 md:grid-cols-2">
            {Client_Story_Data.map((item, index) => (
              <SpotlightCard
                key={`${item.name}-${index}`}
                spotlightColor="rgba(77, 147, 255, 0.18)"
                className="rounded-[32px] border-[var(--brand-border)] bg-[linear-gradient(180deg,color-mix(in_srgb,var(--card)_98%,#f6f9ff_2%)_0%,color-mix(in_srgb,var(--brand-surface)_96%,#eef5ff_4%)_100%)] p-6 shadow-[0_20px_48px_color-mix(in_srgb,var(--brand-base)_10%,transparent)] sm:p-7"
              >
                <div className="relative z-[1] flex h-full flex-col">
                  <div className="flex items-center justify-between gap-4">
                    <div className="inline-flex size-11 items-center justify-center rounded-2xl bg-[color:color-mix(in_srgb,var(--brand-base)_10%,white_90%)] text-[var(--brand-base)]">
                      <Quote className="size-5" />
                    </div>
                    <div className="relative h-10 w-[112px] shrink-0 overflow-hidden rounded-xl border border-[var(--brand-border)] bg-white">
                      <Image
                        src={item.logo}
                        alt={`${item.name} company logo`}
                        fill
                        className="object-contain p-2"
                        sizes="112px"
                      />
                    </div>
                  </div>

                  <h3 className="mt-8 font-[family:var(--font-heading)] text-[1.75rem] font-semibold leading-tight text-[var(--brand-strong)] sm:text-[2rem]">
                    {item.title}
                  </h3>

                  <p className="mt-4 flex-1 text-[0.98rem] leading-8 text-[var(--brand-muted)]">
                    {item.Description}
                  </p>

                  <div className="mt-auto flex items-center gap-4 border-t border-[var(--brand-border)] pt-5">
                    <div className="relative size-14 overflow-hidden rounded-2xl border border-[var(--brand-border)]">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                        sizes="56px"
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="font-[family:var(--font-heading)] text-lg font-semibold text-[var(--brand-strong)]">
                        {item.name}
                      </p>
                      <p className="text-sm text-[var(--brand-muted)]">{item.role}</p>
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </SectionReveal>
      </Container>
    </section>
  );
}
