"use client";

import Masonry from "@/components/Masonry";
import { Container } from "@/components/shared/container";
import { CommonSectionTitle } from "@/components/shared/common-section-title";
import { SectionReveal } from "@/components/shared/section-reveal";

const celebrationGalleryItems = [
  { id: 1, img: "/images/about/celebrations/about-one.png", height: 400 },
  { id: 2, img: "/images/about/celebrations/about-two.png", height: 600 },
  { id: 3, img: "/images/about/celebrations/about-three.png", height: 450 },
  { id: 4, img: "/images/about/celebrations/about-four.png", height: 380 },
  { id: 5, img: "/images/about/celebrations/about-five.png", height: 420 },
  { id: 6, img: "/images/about/celebrations/about-six.png", height: 360 },
  { id: 7, img: "/images/about/celebrations/about-seven.png", height: 410 },
  { id: 8, img: "/images/about/celebrations/about-eight.png", height: 390 },
  { id: 9, img: "/images/about/celebrations/about-nine.png", height: 430 },
  { id: 10, img: "/images/about/celebrations/about-ten.png", height: 370 },
  { id: 11, img: "/images/about/celebrations/about-eleven.png", height: 440 },
  { id: 12, img: "/images/about/celebrations/about-twelve.png", height: 340 },
  { id: 13, img: "/images/about/celebrations/about-thirteen.png", height: 400 },
  { id: 14, img: "/images/about/celebrations/about-fifteen.png", height: 380 },
];

export function AboutCelebrationsSection() {
  return (
    <section className="bg-[linear-gradient(180deg,color-mix(in_srgb,var(--background)_100%,transparent)_0%,color-mix(in_srgb,var(--brand-surface)_88%,var(--background))_48%,color-mix(in_srgb,var(--background)_100%,transparent)_100%)] py-14 sm:py-18 lg:py-24">
      <Container width="wide">
        <SectionReveal onView>
          <CommonSectionTitle
            title="Our Team"
            highlights={["Team"]}
            description="Our CEO's vision is simple: to build a team so capable they can run the company better than he can. We believe in empowering people and growing together toward success."
          />
        </SectionReveal>
      </Container>

      <SectionReveal onView delay={0.1}>
        <div className="mt-10 px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="relative min-h-[500px] sm:min-h-[600px] lg:min-h-[700px]">
            <Masonry
              items={celebrationGalleryItems}
              animateFrom="bottom"
              scaleOnHover
              hoverScale={0.98}
              blurToFocus
              colorShiftOnHover
            />
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
