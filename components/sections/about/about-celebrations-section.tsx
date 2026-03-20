"use client";

import CircularGallery from "@/components/animations/CircularGallery";
import { Container } from "@/components/shared/container";
import { CommonSectionTitle } from "@/components/shared/common-section-title";
import { SectionReveal } from "@/components/shared/section-reveal";

const celebrationGalleryItems = [
  { image: "/images/about/celebrations/about-one.png", text: "" },
  { image: "/images/about/celebrations/about-two.png", text: "" },
  { image: "/images/about/celebrations/about-three.png", text: "" },
  { image: "/images/about/celebrations/about-four.png", text: "" },
  { image: "/images/about/celebrations/about-five.png", text: "" },
  { image: "/images/about/celebrations/about-six.png", text: "" },
  { image: "/images/about/celebrations/about-seven.png", text: "" },
  { image: "/images/about/celebrations/about-eight.png", text: "" },
  { image: "/images/about/celebrations/about-nine.png", text: "" },
  { image: "/images/about/celebrations/about-ten.png", text: "" },
  { image: "/images/about/celebrations/about-eleven.png", text: "" },
  { image: "/images/about/celebrations/about-twelve.png", text: "" },
  { image: "/images/about/celebrations/about-thirteen.png", text: "" },
  { image: "/images/about/celebrations/about-fifteen.png", text: "" },
];

export function AboutCelebrationsSection() {
  return (
    <section className="bg-[linear-gradient(180deg,color-mix(in_srgb,var(--background)_100%,transparent)_0%,color-mix(in_srgb,var(--brand-surface)_88%,var(--background))_48%,color-mix(in_srgb,var(--background)_100%,transparent)_100%)] py-14 sm:py-18 lg:py-24">
      <Container width="wide">
        <SectionReveal onView>
          <CommonSectionTitle
          // eyebrow="Celebrations"
          title="Our Team"
          highlights={["Team"]}
          description="Our CEO's vision is simple: to build a team so capable they can run the company better than he can. We believe in empowering people and growing together toward success."
          className="max-w-5xl"
          titleClassName="text-3xl sm:text-4xl lg:text-[3.4rem]"
          descriptionClassName="max-w-3xl text-base leading-7 sm:text-lg sm:leading-8"
        />
        </SectionReveal>
      </Container>

      <SectionReveal onView delay={0.1}>
        <div className="mt-10 px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="mx-auto h-[460px] w-full sm:h-[560px] lg:h-[660px]">
            <CircularGallery
              items={celebrationGalleryItems}
              bend={2.8}
              textColor="var(--brand-strong)"
              borderRadius={0.08}
              font="bold 32px Figtree"
              scrollSpeed={2.2}
              scrollEase={0.06}
            />
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
