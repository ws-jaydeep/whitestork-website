"use client";

import Image from "next/image";
import { Container } from "@/components/container";
import { SectionReveal } from "@/components/section-reveal";
import ScrollVelocity from "@/components/ScrollVelocity";
import { CommonSectionTitle } from "./common-section-title";

const trustedLogos = [
  {
    src: "/images/home/trusted-one.png",
    alt: "Trusted brand one",
    width: 160,
    height: 72,
  },
  {
    src: "/images/home/trusted-two.png",
    alt: "Trusted brand two",
    width: 160,
    height: 72,
  },
  {
    src: "/images/home/trusted-three.png",
    alt: "Trusted brand three",
    width: 160,
    height: 72,
  },
  {
    src: "/images/home/trusted-four.png",
    alt: "Trusted brand four",
    width: 160,
    height: 72,
  },
  {
    src: "/images/home/trusted-five.png",
    alt: "Trusted brand five",
    width: 160,
    height: 72,
  },
  {
    src: "/images/home/trusted-six.png",
    alt: "Trusted brand six",
    width: 160,
    height: 72,
  },
  {
    src: "/images/home/trustedSeven.png",
    alt: "Trusted brand seven",
    width: 160,
    height: 72,
  },
  {
    src: "/images/home/trustedEight.png",
    alt: "Trusted brand eight",
    width: 160,
    height: 72,
  },
  {
    src: "/images/home/trustedNine.png",
    alt: "Trusted brand nine",
    width: 160,
    height: 72,
  },
];

function LogoCard({ src, alt, width, height }: (typeof trustedLogos)[number]) {
  return (
    <div className="mx-3 inline-flex h-24 min-w-[220px] items-center justify-center rounded-[24px] border border-[color:color-mix(in_srgb,var(--brand-soft)_24%,white_12%)] bg-[linear-gradient(180deg,color-mix(in_srgb,var(--brand-strong)_92%,black_8%)_0%,color-mix(in_srgb,var(--brand-base)_88%,black_12%)_100%)] px-7 shadow-[0_18px_40px_color-mix(in_srgb,var(--brand-base)_18%,transparent)]">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="h-auto max-h-11 w-auto object-contain brightness-110 contrast-125"
      />
    </div>
  );
}

export function HomeTrustedSection() {
  const firstRow = trustedLogos
    .slice(0, 5)
    .map((logo) => <LogoCard key={logo.src} {...logo} />);
  const secondRow = trustedLogos
    .slice(4)
    .map((logo) => <LogoCard key={logo.src} {...logo} />);

  return (
    <section className="relative overflow-hidden pb-16 pt-4 sm:pb-20 lg:pb-24">
      <Container width="wide" className="relative">
        <SectionReveal className="mx-auto max-w-3xl text-center" onView>
         <CommonSectionTitle
                  //   eyebrow="Company Snapshot"
                    title="Globally Trusted By"
                    highlights={["Globally"]}
                  //   description="We focus on real outcomes for clients and teams-trust, quality, and growth across every project."
                  /> 
        </SectionReveal>
      </Container>
      <SectionReveal
        className="relative left-1/2 mt-10 w-screen -translate-x-1/2"
        delay={0.08}
        onView
      >
        <div className="w-full border-y border-[color:color-mix(in_srgb,var(--brand-soft)_22%,var(--brand-border))] bg-[linear-gradient(180deg,color-mix(in_srgb,var(--background)_96%,white_4%)_0%,color-mix(in_srgb,var(--card)_94%,white_6%)_100%)] py-6 shadow-[0_22px_60px_color-mix(in_srgb,var(--brand-base)_8%,transparent)]">
          <ScrollVelocity
            texts={[firstRow, secondRow]}
            velocity={24}
            numCopies={5}
            damping={45}
            stiffness={320}
            parallaxClassName="parallax py-3"
            scrollerClassName="scroller items-center"
          />
        </div>
      </SectionReveal>
    </section>
  );
}
