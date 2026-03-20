"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { AppWindow, ChevronLeft, ChevronRight, Smartphone } from "lucide-react";
import { Container } from "@/components/container";
import { CommonSectionTitle } from "@/components/common-section-title";
import { SectionReveal } from "@/components/section-reveal";
import { HERO_SLIDE_DATA } from "@/constants/home-hero-slide-data";

export function HomeProjectCarouselSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeSlide = HERO_SLIDE_DATA[activeIndex];

  function showPrev() {
    setActiveIndex((current) =>
      current === 0 ? HERO_SLIDE_DATA.length - 1 : current - 1,
    );
  }

  function showNext() {
    setActiveIndex((current) => (current + 1) % HERO_SLIDE_DATA.length);
  }

  return (
    <section className="relative overflow-hidden pt-12 pb-6 sm:pt-16 sm:pb-8 lg:pt-20 lg:pb-10">
      <Container width="wide" className="relative">
        <SectionReveal onView>
          <CommonSectionTitle
            title="Our Portfolios"
            highlights={["Our"]}
            className="max-w-4xl"
            titleClassName="text-3xl sm:text-4xl lg:text-[3rem]"
          />
        </SectionReveal>

        <SectionReveal onView className="relative mt-8 sm:mt-10">
          <div className="rounded-[28px] border border-[var(--brand-border)] bg-[linear-gradient(180deg,color-mix(in_srgb,var(--card)_98%,white_2%)_0%,color-mix(in_srgb,var(--brand-surface)_92%,white_8%)_100%)] p-3 shadow-[0_24px_60px_color-mix(in_srgb,var(--brand-base)_10%,transparent)] sm:rounded-[34px] sm:p-5 lg:p-6">
            <div className="grid gap-4 sm:gap-6 lg:grid-cols-[minmax(0,1.18fr)_330px] lg:items-stretch xl:grid-cols-[minmax(0,1.2fr)_350px]">
              <div className="relative h-full overflow-hidden rounded-[28px] border border-[var(--brand-border)] bg-[var(--brand-surface)]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSlide.video}
                    initial={{ opacity: 0, y: 18, filter: "blur(10px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -14, filter: "blur(8px)" }}
                    transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
                    className="relative h-full"
                  >
                    <video
                      className="h-[180px] w-full object-contain sm:h-[220px] md:h-[250px] lg:h-full lg:min-h-[340px]"
                      src={activeSlide.video}
                      preload="metadata"
                      autoPlay
                      muted
                      playsInline
                      controls
                      onEnded={showNext}
                    />
                    <div className="absolute right-3 top-3 z-20 flex items-center gap-2 sm:right-4 sm:top-4">
                      <button
                        type="button"
                        onClick={showPrev}
                        className="inline-flex size-9 items-center justify-center rounded-full border border-white/45 bg-[rgba(8,29,54,0.58)] text-white shadow-[0_12px_30px_rgba(8,29,54,0.28)] backdrop-blur-md transition hover:bg-[rgba(8,29,54,0.74)] sm:size-11"
                        aria-label="Previous slide"
                      >
                        <ChevronLeft className="size-4 sm:size-5" />
                      </button>
                      <button
                        type="button"
                        onClick={showNext}
                        className="inline-flex size-9 items-center justify-center rounded-full border border-white/45 bg-[rgba(8,29,54,0.58)] text-white shadow-[0_12px_30px_rgba(8,29,54,0.28)] backdrop-blur-md transition hover:bg-[rgba(8,29,54,0.74)] sm:size-11"
                        aria-label="Next slide"
                      >
                        <ChevronRight className="size-4 sm:size-5" />
                      </button>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="flex min-h-[230px] w-full flex-col rounded-[28px] border border-[var(--brand-border)] bg-[var(--card)] p-4 shadow-[0_20px_50px_color-mix(in_srgb,var(--brand-base)_8%,transparent)] sm:min-h-[260px] sm:p-5 lg:h-full lg:min-h-[340px]">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex h-12 items-center rounded-[16px] border border-[var(--brand-border)] bg-[var(--brand-surface)] px-3 sm:h-14 sm:px-4">
                    <Image
                      src={activeSlide.logo}
                      alt={`${activeSlide.title} logo`}
                      className="h-6 w-auto object-contain sm:h-7"
                    />
                  </div>
                  <div className="text-xs font-semibold text-[var(--brand-muted)] sm:text-sm">
                    {String(activeIndex + 1).padStart(2, "0")} / {String(HERO_SLIDE_DATA.length).padStart(2, "0")}
                  </div>
                </div>

                <div className="mt-4 overflow-hidden rounded-[22px] border border-[var(--brand-border)] bg-[color:var(--brand-surface)] p-3 sm:mt-5">
                  <Image
                    src={activeSlide.image}
                    alt={activeSlide.title}
                    className="h-[68px] w-full rounded-[16px] object-cover sm:h-[88px]"
                    priority={activeIndex === 0}
                  />
                </div>

                <div className="mt-4 sm:mt-6">
                  <p className="mt-2 font-[family:var(--font-heading)] text-lg font-semibold text-[var(--brand-strong)] sm:text-xl">
                    {activeSlide.title}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[var(--brand-muted)]">
                    {activeSlide.description}
                  </p>
                </div>

                <div className="mt-4 flex flex-wrap gap-2 sm:mt-5 sm:gap-3">
                  {activeSlide.websiteLink ? (
                    <Link
                      href={activeSlide.websiteLink}
                      target="_blank"
                      className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-base)] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[var(--brand-strong)]"
                    >
                      <AppWindow className="size-4" />
                      Visit Website
                    </Link>
                  ) : null}
                  {activeSlide.playStoreLink ? (
                    <Link
                      href={activeSlide.playStoreLink}
                      target="_blank"
                      className="inline-flex items-center gap-2 rounded-full border border-[var(--brand-border)] bg-[var(--brand-surface)] px-4 py-2.5 text-sm font-semibold text-[var(--brand-strong)] transition hover:border-[var(--brand-base)] hover:text-[var(--brand-base)]"
                    >
                      <Smartphone className="size-4" />
                      Play Store
                    </Link>
                  ) : null}
                  {activeSlide.appStoreLink ? (
                    <Link
                      href={activeSlide.appStoreLink}
                      target="_blank"
                      className="inline-flex items-center gap-2 rounded-full border border-[var(--brand-border)] bg-[var(--brand-surface)] px-4 py-2.5 text-sm font-semibold text-[var(--brand-strong)] transition hover:border-[var(--brand-base)] hover:text-[var(--brand-base)]"
                    >
                      <Smartphone className="size-4" />
                      App Store
                    </Link>
                  ) : null}
                </div>

                <div className="mt-auto pt-6 sm:pt-8">
                  <div className="flex justify-center gap-2 sm:justify-start">
                    {HERO_SLIDE_DATA.map((slide, index) => (
                      <button
                        key={slide.title}
                        type="button"
                        onClick={() => setActiveIndex(index)}
                        aria-label={`Go to ${slide.title}`}
                        className={`h-2.5 rounded-full transition-all ${
                          index === activeIndex
                            ? "w-10 bg-[var(--brand-base)]"
                            : "w-2.5 bg-[color:color-mix(in_srgb,var(--brand-border)_70%,var(--brand-soft))]"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SectionReveal>
      </Container>
    </section>
  );
}
