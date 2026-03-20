"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Lottie from "lottie-react";
import TextType from "@/components/animations/TextType";
import { Container } from "@/components/shared/container";
import { SectionReveal } from "@/components/shared/section-reveal";
import BlurText from "@/components/animations/BlurText";
import { homePageContent } from "@/constants/home-content";
import homeHeroAnimation from "./home-hero-animation.json";

const words = [
  "AI DEVELOPMENT",
  "WORKFLOW AUTOMATION",
  "CUSTOM CHATBOT",
  "WEB DEVELOPMENT",
  "INFRA CLOUD",
];

export default function HomeMain() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-18">
      <Container width="wide" className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <SectionReveal className="relative z-10" onView>
            <div
              className="mt-5 font-[family:var(--font-heading)] text-3xl font-semibold leading-[1.02] text-[var(--brand-strong)] sm:text-4xl lg:text-5xl"
              style={{ letterSpacing: "var(--theme-heading-spacing)" }}
            >
              <BlurText
                text={homePageContent.title}
                animateBy="words"
                delay={110}
                className="!block max-w-3xl !flex-none"
              />
            </div>

            <div className="brand-copy mt-6 max-w-xl text-base leading-7 sm:text-lg sm:leading-8">
              <BlurText
                text={homePageContent.description}
                animateBy="words"
                delay={75}
                className="!block !flex-none"
              />
            </div>
            <TextType
              as="p"
              text={words}
              typingSpeed={42}
              deletingSpeed={50}
              pauseDuration={1400}
              initialDelay={350}
              loop
              startOnVisible
              className="mt-4 min-h-[2.5rem] text-lg font-bold uppercase tracking-[0.16em] text-[var(--brand-base)] sm:min-h-[2.75rem] sm:text-xl"
            />
            <SectionReveal className="mt-1" delay={0.24} onView>
              <Link
                href="/contact-us"
                className="group flex w-fit items-center gap-3 rounded-full border border-[color:color-mix(in_srgb,var(--brand-soft)_22%,var(--brand-border))] bg-[linear-gradient(135deg,color-mix(in_srgb,var(--brand-surface)_88%,white_12%)_0%,color-mix(in_srgb,var(--card)_92%,white_8%)_100%)] px-6 py-3 text-lg font-semibold text-[var(--brand-strong)] shadow-[0_16px_36px_color-mix(in_srgb,var(--brand-base)_10%,transparent)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[color:color-mix(in_srgb,var(--brand-base)_30%,var(--brand-border))] hover:text-[var(--brand-base)] hover:shadow-[0_20px_42px_color-mix(in_srgb,var(--brand-base)_14%,transparent)]"
              >
                <BlurText
                  text="Get Free Consultation"
                  animateBy="words"
                  delay={90}
                  className="!block !flex-none transition-transform duration-300 group-hover:translate-x-1"
                />
                <span className="inline-flex size-9 items-center justify-center rounded-full bg-[var(--brand-base)] text-white shadow-[0_10px_24px_color-mix(in_srgb,var(--brand-base)_28%,transparent)] transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight className="size-5" />
                </span>
              </Link>
            </SectionReveal>
          </SectionReveal>

          <SectionReveal
            className="relative z-10 flex justify-center lg:justify-end"
            delay={0.1}
            onView
          >
            <div className="relative w-full max-w-[420px]">
              <div className="relative mx-auto h-[280px] w-full max-w-[320px] sm:h-[320px] sm:max-w-[360px] lg:h-[340px] lg:max-w-[380px]">
                <div className="absolute inset-0 z-10">
                  <Lottie
                    animationData={homeHeroAnimation}
                    loop
                    autoplay
                    className="h-full w-full"
                  />
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </Container>
    </section>
  );
}
