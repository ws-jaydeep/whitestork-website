"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Container } from "@/components/shared/container";
import { CommonSectionTitle } from "@/components/shared/common-section-title";
import { SectionReveal } from "@/components/shared/section-reveal";
import { Testimonial_Home_Video } from "@/constants/home-testimonial-content";

export function HomeTestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = Testimonial_Home_Video[activeIndex];

  function showPrev() {
    setActiveIndex((current) =>
      current === 0 ? Testimonial_Home_Video.length - 1 : current - 1,
    );
  }

  function showNext() {
    setActiveIndex((current) => (current + 1) % Testimonial_Home_Video.length);
  }

  return (
    <section className="relative overflow-hidden pt-12 pb-6 sm:pt-16 sm:pb-8 lg:pt-20 lg:pb-10">
      <Container width="wide">
        <SectionReveal onView>
          <CommonSectionTitle
            title="Testimonials"
            highlights={["Testimonials"]}
            className="max-w-4xl"
            titleClassName="text-3xl sm:text-4xl lg:text-[3rem]"
          />
        </SectionReveal>

        <SectionReveal onView className="mt-8 sm:mt-10">
          <div className="overflow-hidden rounded-[34px] border border-[var(--brand-border)] bg-[linear-gradient(180deg,color-mix(in_srgb,var(--card)_98%,white_2%)_0%,color-mix(in_srgb,var(--brand-surface)_92%,white_8%)_100%)] p-4 shadow-[0_24px_60px_color-mix(in_srgb,var(--brand-base)_10%,transparent)] sm:p-5 lg:p-6">
            <div className="relative overflow-hidden rounded-[28px] border border-[var(--brand-border)] bg-[linear-gradient(180deg,color-mix(in_srgb,var(--brand-soft)_16%,var(--brand-surface-strong))_0%,color-mix(in_srgb,var(--brand-base)_12%,var(--brand-surface))_100%)]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeItem.video}
                  initial={{ opacity: 0, x: 28, filter: "blur(10px)" }}
                  animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, x: -28, filter: "blur(10px)" }}
                  transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
                  className="relative"
                >
                  <video
                    className="h-[240px] w-full object-contain sm:h-[340px] lg:h-[460px]"
                    src={activeItem.video}
                    preload="metadata"
                    autoPlay
                    muted
                    playsInline
                    controls
                    onEnded={showNext}
                  />
                </motion.div>
              </AnimatePresence>

              <div className="absolute inset-y-0 left-3 z-20 flex items-center sm:left-4">
                <button
                  type="button"
                  onClick={showPrev}
                  className="inline-flex size-10 items-center justify-center rounded-full border border-white/55 bg-[rgba(8,29,54,0.72)] text-white shadow-[0_14px_32px_rgba(8,29,54,0.34)] backdrop-blur-md transition hover:bg-[rgba(8,29,54,0.86)] sm:size-12"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="size-5 sm:size-6" />
                </button>
              </div>

              <div className="absolute inset-y-0 right-3 z-20 flex items-center sm:right-4">
                <button
                  type="button"
                  onClick={showNext}
                  className="inline-flex size-10 items-center justify-center rounded-full border border-white/55 bg-[rgba(8,29,54,0.72)] text-white shadow-[0_14px_32px_rgba(8,29,54,0.34)] backdrop-blur-md transition hover:bg-[rgba(8,29,54,0.86)] sm:size-12"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="size-5 sm:size-6" />
                </button>
              </div>
            </div>

            <div className="mt-5 flex gap-3 overflow-x-auto pb-2">
              {Testimonial_Home_Video.map((item, index) => {
                const isActive = index === activeIndex;

                return (
                  <button
                    key={item.name}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`min-w-[190px] rounded-[22px] border px-4 py-4 text-left transition duration-300 sm:min-w-[220px] ${
                      isActive
                        ? "border-[var(--brand-base)] bg-[color:color-mix(in_srgb,var(--brand-base)_8%,white_92%)] shadow-[0_14px_34px_color-mix(in_srgb,var(--brand-base)_14%,transparent)]"
                        : "border-[var(--brand-border)] bg-[color:var(--brand-surface)] hover:border-[var(--brand-border-strong)]"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="font-[family:var(--font-heading)] text-lg font-semibold text-[var(--brand-strong)]">
                          {item.name}
                        </p>
                        <p className="mt-1 text-sm text-[var(--brand-muted)]">
                          {item.county}
                        </p>
                      </div>
                      <span
                        className={`mt-1 h-2.5 w-2.5 shrink-0 rounded-full ${
                          isActive ? "bg-[var(--brand-base)]" : "bg-[var(--brand-border-strong)]"
                        }`}
                      />
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="mt-5 flex justify-center gap-2">
              {Testimonial_Home_Video.map((item, index) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Show testimonial from ${item.name}`}
                  className={`h-2.5 rounded-full transition-all ${
                    index === activeIndex
                      ? "w-10 bg-[var(--brand-base)]"
                      : "w-2.5 bg-[color:color-mix(in_srgb,var(--brand-border)_70%,var(--brand-soft))]"
                  }`}
                />
              ))}
            </div>
          </div>
        </SectionReveal>
      </Container>
    </section>
  );
}
