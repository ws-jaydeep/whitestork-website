"use client";

import Stack from "@/components/animations/Stack";
import { Container } from "@/components/shared/container";
import { SectionReveal } from "@/components/shared/section-reveal";
import { Offer_Services_data } from "@/constants/home-offer-services";
import { CommonSectionTitle } from "@/components/shared/common-section-title";

function OfferServiceStackCard({
  id,
  title,
  description,
}: {
  id: number;
  title: string;
  description: string;
}) {
  const titleLines = title.split("\n");

  return (
    <article className="relative h-full overflow-hidden rounded-[28px] border border-[var(--brand-border)] bg-[linear-gradient(180deg,color-mix(in_srgb,var(--card)_98%,white_2%)_0%,color-mix(in_srgb,var(--brand-surface)_92%,white_8%)_100%)] p-5 shadow-[0_18px_48px_color-mix(in_srgb,var(--brand-base)_10%,transparent)] sm:rounded-[32px] sm:p-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,color-mix(in_srgb,var(--brand-soft)_14%,transparent),transparent_56%)]" />
      <div className="relative flex h-full flex-col">
        <div className="inline-flex size-11 items-center justify-center rounded-full bg-[color:color-mix(in_srgb,var(--brand-base)_12%,white_88%)] text-sm font-semibold text-[var(--brand-base)] sm:size-12 sm:text-base">
          {id}
        </div>

        <div className="mt-5 space-y-1">
          {titleLines.map((line) => (
            <p
              key={line}
              className="font-[family:var(--font-heading)] text-[1.4rem] font-semibold leading-tight text-[var(--brand-strong)] sm:text-[1.7rem]"
            >
              {line}
            </p>
          ))}
        </div>

        <p className="mt-4 text-[0.98rem] leading-7 text-[var(--brand-muted)] sm:text-[1.08rem] sm:leading-8">
          {description}
        </p>

        <div className="mt-auto pt-5">
          <div className="h-1 rounded-full bg-[linear-gradient(90deg,var(--brand-base)_0%,var(--brand-soft)_100%)]" />
        </div>
      </div>
    </article>
  );
}

export function HomeOfferServicesSection() {
  const stackCards = [...Offer_Services_data]
    .reverse()
    .map((service) => (
      <OfferServiceStackCard
        key={service.id}
        id={service.id}
        title={service.title}
        description={service.description}
      />
    ));

  return (
    <section className="relative overflow-hidden pt-10 pb-10 sm:pt-12 sm:pb-12 lg:pt-14 lg:pb-14">
      <Container width="wide">
        <SectionReveal onView>
          <CommonSectionTitle
            title="Services We Offer"
            highlights={["We", "offer"]}
          />
        </SectionReveal>

        <SectionReveal delay={0.08} onView>
          <div className="mx-auto mt-5 w-full max-w-[390px] sm:mt-6 sm:max-w-[560px] lg:max-w-[700px]">
            <div className="h-[280px] sm:h-[320px] lg:h-[360px]">
              <Stack
                cards={stackCards}
                randomRotation
                sensitivity={130}
                sendToBackOnClick
                pauseOnHover
                mobileClickOnly
                animationConfig={{ stiffness: 240, damping: 22 }}
              />
            </div>
          </div>
        </SectionReveal>
      </Container>
    </section>
  );
}
