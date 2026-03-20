"use client";

import { useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Pause, Play } from "lucide-react";
import BlurText from "@/components/BlurText";
import { Container } from "@/components/container";
import { CommonSectionTitle } from "@/components/common-section-title";
import { SectionReveal } from "@/components/section-reveal";
import { Work_Vibe_Data } from "@/constants/about-content";
import { cn } from "@/lib/utils";

export function AboutWorkVibeSection() {
  const items = useMemo(() => Work_Vibe_Data, []);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  function showVideo(index: number) {
    setActiveIndex(index);
    setIsPaused(false);
  }

  function showNextVideo() {
    setActiveIndex((current) => (current + 1) % items.length);
  }

  function togglePaused() {
    const nextPaused = !isPaused;
    setIsPaused(nextPaused);

    if (!videoRef.current) {
      return;
    }

    if (nextPaused) {
      videoRef.current.pause();
      return;
    }

    void videoRef.current.play();
  }

  const activeItem = items[activeIndex];

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,color-mix(in_srgb,var(--background)_100%,transparent)_0%,color-mix(in_srgb,var(--brand-surface)_86%,var(--background))_45%,color-mix(in_srgb,var(--background)_100%,transparent)_100%)] py-16 sm:py-20 lg:py-24">
      <Container width="wide" className="relative">
        <SectionReveal onView>
          <CommonSectionTitle
            eyebrow="Work Vibe"
            title="Life At WhiteStork In Motion"
            highlights={["In Motion"]}
            description="A quick look at the energy behind the work: celebrations, games, travel, and the everyday moments that keep the team connected."
            className="max-w-4xl"
            titleClassName="text-3xl sm:text-4xl lg:text-[3.25rem]"
            descriptionClassName="max-w-3xl text-base leading-7 sm:text-lg sm:leading-8"
          />
        </SectionReveal>

        <SectionReveal onView delay={0.1}>
        <div className="mt-12 grid gap-6 lg:grid-cols-[minmax(0,1.3fr)_320px] lg:items-stretch">
          <div
            className="relative overflow-hidden rounded-[32px] border border-[color:color-mix(in_srgb,var(--brand-surface-strong)_70%,var(--brand-border))] bg-[color:var(--brand-surface)] p-3 shadow-[var(--brand-shadow-strong)] backdrop-blur-sm lg:h-[620px]"
          >
            <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-[color:var(--brand-surface-strong)] to-transparent" />

            <div className="relative h-[460px] overflow-hidden rounded-[26px] bg-slate-950 sm:h-[540px] lg:h-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeItem.video}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.985 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="absolute inset-0"
                >
                  <video
                    ref={videoRef}
                    key={activeItem.video}
                    src={activeItem.video}
                    className="h-full w-full object-cover"
                    autoPlay
                    muted
                    playsInline
                    onEnded={() => {
                      if (!isPaused) {
                        showNextVideo();
                      }
                    }}
                  />
                </motion.div>
              </AnimatePresence>

              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-6">
                <div>
                  <div
                    className="mb-3 h-1.5 w-14 rounded-full"
                    style={{ backgroundColor: activeItem.accent }}
                  />
                  <BlurText
                    as="p"
                    text="WhiteStork Culture"
                    animateBy="words"
                    delay={20}
                    className="text-xs font-semibold uppercase tracking-[0.24em] text-white/70"
                  />
                  <BlurText
                    as="h3"
                    text={activeItem.title}
                    animateBy="words"
                    delay={28}
                    className="mt-2 font-[family:var(--font-heading)] text-2xl font-semibold text-white sm:text-3xl"
                  />
                </div>

                <button
                  type="button"
                  onClick={togglePaused}
                  className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur transition hover:bg-white/20"
                  aria-label={isPaused ? "Resume carousel autoplay" : "Pause carousel autoplay"}
                >
                  {isPaused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 lg:h-[620px]">
            {items.map((item, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={item.video}
                  type="button"
                  onClick={() => showVideo(index)}
                  className={cn(
                    "group relative overflow-hidden rounded-[22px] border px-4 py-3 text-left transition duration-300 lg:flex-1",
                    isActive
                      ? "border-[color:var(--brand-base)] bg-[color:var(--brand-surface-strong)] shadow-[var(--brand-shadow)]"
                      : "border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] hover:border-[color:var(--brand-border-strong)] hover:bg-[color:var(--brand-surface-strong)]",
                  )}
                >
                  <div
                    className={cn(
                      "absolute inset-y-0 left-0 w-1 transition-opacity",
                      isActive ? "opacity-100" : "opacity-0 group-hover:opacity-60",
                    )}
                    style={{ backgroundColor: item.accent }}
                  />

                  <div className="flex items-center justify-between gap-4 pl-2">
                    <div>
                      <BlurText
                        as="p"
                        text={`Clip ${String(index + 1).padStart(2, "0")}`}
                        animateBy="words"
                        delay={18}
                        className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-muted)]"
                      />
                      <BlurText
                        as="p"
                        text={item.title}
                        animateBy="words"
                        delay={22}
                        className="mt-1 text-base font-semibold text-[var(--brand-strong)]"
                      />
                    </div>
                    <span
                      className={cn(
                        "h-2.5 w-2.5 rounded-full transition-transform",
                        isActive ? "scale-100" : "scale-75",
                      )}
                      style={{ backgroundColor: item.accent }}
                    />
                  </div>

                  <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-[color:var(--brand-border)]/70">
                    <motion.div
                      key={`${item.video}-${isActive}-${isPaused}`}
                      className="h-full rounded-full"
                      style={{ backgroundColor: item.accent }}
                      initial={{ width: isActive ? "0%" : "18%" }}
                      animate={{
                        width: isActive ? (isPaused ? "38%" : "100%") : "18%",
                      }}
                      transition={{
                        duration: isActive && !isPaused ? 6 : 0.35,
                        ease: "linear",
                      }}
                    />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
        </SectionReveal>
      </Container>
    </section>
  );
}
