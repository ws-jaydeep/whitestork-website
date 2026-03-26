"use client";

import { Container } from "@/components/shared/container";
import { SectionReveal } from "@/components/shared/section-reveal";
import { Offer_Services_data } from "@/constants/home-offer-services";
import { CommonSectionTitle } from "@/components/shared/common-section-title";
import ScrollStack, { ScrollStackItem } from "@/components/ScrollStack";

export function HomeOfferServicesSection() {
  return (
    <section className="relative overflow-hidden pt-10 pb-10 sm:pt-12 sm:pb-12 lg:pt-14 lg:pb-14">
      <Container width="wide">
        <SectionReveal onView>
          <CommonSectionTitle
            title="Services We Offer"
            highlights={["We", "offer"]}
          />
        </SectionReveal>
        <div className="mx-auto max-w-6xl">
          <ScrollStack useWindowScroll>
            {Offer_Services_data.map((service) => {
              return (
                <ScrollStackItem key={service.id}>
                  <article className="relative h-full overflow-hidden rounded-[28px] border border-[var(--brand-border)] bg-[linear-gradient(180deg,color-mix(in_srgb,var(--card)_98%,white_2%)_0%,color-mix(in_srgb,var(--brand-surface)_92%,white_8%)_100%)] p-5 shadow-[0_18px_48px_color-mix(in_srgb,var(--brand-base)_10%,transparent)] sm:rounded-[32px]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,color-mix(in_srgb,var(--brand-soft)_14%,transparent),transparent_56%)]" />
                    <div className="relative flex h-full flex-col">
                      <div className="inline-flex size-11 items-center justify-center rounded-full bg-[color:color-mix(in_srgb,var(--brand-base)_12%,white_88%)] text-sm font-semibold text-[var(--brand-base)] sm:size-12 sm:text-base">
                        {service.id}
                      </div>
                      <div className="mt-5 space-y-1">
                        <p className="font-[family:var(--font-heading)] text-[1.4rem] font-semibold leading-tight text-[var(--brand-strong)] sm:text-[1.7rem]">
                          {service.title}
                        </p>
                      </div>
                      <p className="mt-4 text-[0.98rem] leading-7 text-[var(--brand-muted)] sm:text-[1.08rem] sm:leading-8">
                        {service.description}
                      </p>
                      <div className="mt-auto pt-5">
                        <div className="h-1 rounded-full bg-[linear-gradient(90deg,var(--brand-base)_0%,var(--brand-soft)_100%)]" />
                      </div>
                    </div>
                  </article>
                </ScrollStackItem>
              );
            })}
          </ScrollStack>
        </div>
      </Container>
    </section>
  );
}
