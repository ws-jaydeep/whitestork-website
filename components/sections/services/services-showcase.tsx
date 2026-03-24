"use client";

import { useEffect, useState, startTransition, useRef } from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import BlurText from "@/components/animations/BlurText";
import { Container } from "@/components/shared/container";
import { SectionReveal } from "@/components/shared/section-reveal";
import { UiSelect } from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  renderUiCompDataArr,
  servicesNavBarCompDataArr,
} from "@/constants/services-content";

const STORAGE_KEY = "services-active-tab";

type ServiceUiName = (typeof servicesNavBarCompDataArr)[number]["renderUi"];

export function ServicesShowcase() {
  const [activeService, setActiveService] = useState<ServiceUiName>(servicesNavBarCompDataArr[0].renderUi);
  const sectionRef = useRef<HTMLElement>(null);
  const activeServiceRef = useRef<ServiceUiName>(servicesNavBarCompDataArr[0].renderUi);

  useEffect(() => {
    activeServiceRef.current = activeService;
  }, [activeService]);

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY) as ServiceUiName | null;
    const match = servicesNavBarCompDataArr.find((item) => item.renderUi === saved);
    if (match) {
      startTransition(() => setActiveService(match.renderUi));
      activeServiceRef.current = match.renderUi;
    }
  }, []);

  function handleTabChange(value: string) {
    const next = value as ServiceUiName;
    setActiveService(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  }

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const desktopQuery = window.matchMedia("(min-width: 1024px)");
    let lastScrollTime = 0;
    const interactiveSelector = "select, option, button, input, textarea, a, [role='button']";

    const shouldHandleGesture = (target: EventTarget | null) => {
      if (!desktopQuery.matches) return false;
      if (!(target instanceof Element)) return true;
      return !target.closest(interactiveSelector);
    };

    const handleWheel = (e: WheelEvent) => {
      if (!shouldHandleGesture(e.target)) return;

      const rect = section.getBoundingClientRect();
      const inView = rect.top <= window.innerHeight * 0.4 && rect.bottom >= window.innerHeight * 0.6;
      if (!inView) return;

      const currentIndex = servicesNavBarCompDataArr.findIndex(
        (item) => item.renderUi === activeServiceRef.current
      );

      const isScrollingDown = e.deltaY > 0;
      const isScrollingUp = e.deltaY < 0;

      if (currentIndex === 0 && isScrollingUp) return;
      if (currentIndex === servicesNavBarCompDataArr.length - 1 && isScrollingDown) return;

      e.preventDefault();

      const now = Date.now();
      if (now - lastScrollTime < 1000) return;
      lastScrollTime = now;

      let nextIndex = currentIndex;
      if (isScrollingDown) {
        nextIndex = Math.min(currentIndex + 1, servicesNavBarCompDataArr.length - 1);
      } else if (isScrollingUp) {
        nextIndex = Math.max(currentIndex - 1, 0);
      }

      if (nextIndex !== currentIndex) {
        const nextService = servicesNavBarCompDataArr[nextIndex].renderUi;
        startTransition(() => {
          setActiveService(nextService);
          activeServiceRef.current = nextService;
          window.localStorage.setItem(STORAGE_KEY, nextService);
        });
      }
    };

    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      if (!shouldHandleGesture(e.target)) return;
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!shouldHandleGesture(e.target)) return;

      const rect = section.getBoundingClientRect();
      const inView = rect.top <= window.innerHeight * 0.4 && rect.bottom >= window.innerHeight * 0.6;
      if (!inView) return;

      const touchEndY = e.touches[0].clientY;
      const deltaY = touchStartY - touchEndY;

      const currentIndex = servicesNavBarCompDataArr.findIndex(
        (item) => item.renderUi === activeServiceRef.current
      );

      if (Math.abs(deltaY) < 30) return;

      const isScrollingDown = deltaY > 0;
      const isScrollingUp = deltaY < 0;

      if (currentIndex === 0 && isScrollingUp) return;
      if (currentIndex === servicesNavBarCompDataArr.length - 1 && isScrollingDown) return;

      e.preventDefault();

      const now = Date.now();
      if (now - lastScrollTime < 1000) return;
      lastScrollTime = now;

      let nextIndex = currentIndex;
      if (isScrollingDown) nextIndex++;
      else if (isScrollingUp) nextIndex--;

      if (nextIndex >= 0 && nextIndex < servicesNavBarCompDataArr.length && nextIndex !== currentIndex) {
        const nextService = servicesNavBarCompDataArr[nextIndex].renderUi;
        startTransition(() => {
          setActiveService(nextService);
          activeServiceRef.current = nextService;
          window.localStorage.setItem(STORAGE_KEY, nextService);
        });
      }
    };

    // Use non-passive listeners for correct event preventing
    section.addEventListener("wheel", handleWheel, { passive: false });
    section.addEventListener("touchstart", handleTouchStart, { passive: false });
    section.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      section.removeEventListener("wheel", handleWheel);
      section.removeEventListener("touchstart", handleTouchStart);
      section.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);
  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-[var(--background)] pt-4 pb-16 sm:pt-6 sm:pb-20 lg:pb-10">
      <div className="absolute inset-x-0 top-0 h-48 bg-[linear - gradient(180deg, color - mix(in_srgb,var(--brand - soft)_10 %, transparent),transparent)]" />

      <Container width="wide" className="max-w-[1520px]">
        <div className="relative z-30 mb-6 w-full lg:hidden">
          <UiSelect
            value={activeService}
            onValueChange={handleTabChange}
            options={servicesNavBarCompDataArr.map((item) => ({
              label: item.label,
              value: item.renderUi,
            }))}
            placeholder="Select a service"
          />
        </div>

        <Tabs
          value={activeService}
          onValueChange={handleTabChange}
          orientation="vertical"
          className="flex flex-col gap-6 lg:flex-row lg:items-stretch lg:gap-8"
        >
          {/* Vertical tab list — desktop only */}
          <SectionReveal onView className="relative z-10 hidden lg:flex lg:w-[280px] xl:w-[300px] shrink-0 lg:flex-col">
            <div className="sticky top-24 z-20 h-full rounded-[28px] p-1 border border-[var(--brand-border)] bg-[linear-gradient(180deg,color-mix(in_srgb,var(--card)_92%,white_8%)_0%,var(--card)_100%)] shadow-[0_20px_44px_color-mix(in_srgb,var(--brand-base)_8%,transparent)] backdrop-blur sm:p-2">
              <TabsList className="h-auto w-full flex-col gap-1.5 rounded-none bg-transparent p-0">
                {servicesNavBarCompDataArr.map((item) => {
                  const isActive = item.renderUi === activeService;
                  return (
                    <TabsTrigger
                      key={item.renderUi}
                      value={item.renderUi}
                      className="group relative w-full rounded-2xl border-none bg-transparent p-0 text-left shadow-none after:hidden data-active:bg-transparent data-active:shadow-none"
                    >
                      <span
                        className={`relative flex w-full items-center gap-3 overflow-hidden rounded-[16px] border px-3 py-3 transition duration-250 ${isActive
                          ? "border-[var(--brand-border-strong)] bg-[color:var(--brand-surface)] text-[var(--brand-strong)]"
                          : "border-transparent bg-transparent text-[var(--brand-muted)] hover:border-[var(--brand-border)] hover:bg-[color:var(--brand-surface)] hover:text-[var(--brand-strong)]"
                          }`}
                      >
                        {isActive && (
                          <motion.span
                            layoutId="services-tab-indicator"
                            className="absolute inset-y-3 left-0 w-1 rounded-full bg-[linear-gradient(180deg,var(--brand-base)_0%,var(--brand-soft)_100%)]"
                            transition={{ type: "spring", stiffness: 340, damping: 30 }}
                          />
                        )}
                        <span
                          className={`relative flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition duration-300 ${isActive
                            ? "bg-[color:color-mix(in_srgb,var(--brand-base)_10%,white_90%)]"
                            : "bg-[color:color-mix(in_srgb,var(--background)_72%,white_28%)] group-hover:scale-105"
                            }`}
                        >
                          <item.icon className="h-4 w-4" aria-hidden="true" />
                        </span>
                        <span className="relative min-w-0 flex-1">
                          <span className={`block text-[13px] font-semibold leading-snug ${isActive ? "text-[var(--brand-strong)]" : "text-inherit"}`}>
                            {item.label}
                          </span>
                        </span>
                      </span>
                    </TabsTrigger>
                  );
                })}
              </TabsList>
            </div>
          </SectionReveal>

          {/* Tab panels */}
          <div className="min-w-0 flex-1">
            {renderUiCompDataArr.map((panel) => (
              <TabsContent key={panel.uiName} value={panel.uiName} className="mt-0">
                <AnimatePresence mode="wait">
                  {activeService === panel.uiName && (
                    <motion.div
                      key={panel.uiName}
                      initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      exit={{ opacity: 0, y: -12, filter: "blur(8px)" }}
                      transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                      className="relative z-10"
                    >
                      <div className="grid gap-6 rounded-[36px] border border-[var(--brand-border)] bg-[linear-gradient(180deg,color-mix(in_srgb,var(--card)_96%,white_4%)_0%,var(--card)_100%)] p-6 shadow-[0_28px_60px_color-mix(in_srgb,var(--brand-base)_10%,transparent)] sm:p-8 lg:grid-cols-[1.08fr_0.92fr] lg:p-10">
                        <div className="flex flex-col">
                          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08, duration: 0.34 }}>
                            <BlurText key={`${panel.uiName}-heading`} as="h2" text={panel.heading} animateBy="words" delay={55} className="font-[family:var(--font-heading)] text-3xl font-semibold leading-tight text-[var(--brand-strong)] sm:text-4xl" />
                          </motion.div>
                          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12, duration: 0.34 }}>
                            <BlurText key={`${panel.uiName}-subheading`} as="p" text={panel.subHeading} animateBy="words" delay={34} className="mt-5 text-lg font-medium leading-8 text-[var(--brand-strong)]" />
                          </motion.div>
                          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.16, duration: 0.34 }}>
                            <BlurText key={`${panel.uiName}-paragraph`} as="p" text={panel.paragraph} animateBy="words" delay={18} className="mt-6 text-base leading-8 text-[var(--brand-muted)]" />
                          </motion.div>
                          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.34 }}>
                            <BlurText key={`${panel.uiName}-paragraph-bottom`} as="p" text={panel.paraButtom} animateBy="words" delay={18} className="mt-5 text-base leading-8 text-[var(--brand-muted)]" />
                          </motion.div>
                        </div>

                        <motion.div
                          initial={{ opacity: 0, scale: 0.96, y: 18 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          transition={{ delay: 0.1, duration: 0.42 }}
                          className="relative flex min-h-[310px] overflow-hidden rounded-[32px] border border-[var(--brand-border)] bg-[linear-gradient(145deg,color-mix(in_srgb,var(--brand-soft)_10%,white)_0%,color-mix(in_srgb,var(--card)_97%,white_3%)_100%)] p-6 sm:p-8"
                        >
                          <div className="relative flex w-full items-center justify-center p-4 sm:p-6">
                            <Image src={panel.rightImg.src} alt={panel.heading} width={panel.rightImg.width} height={panel.rightImg.height} className="w-full object-contain" priority />
                          </div>
                        </motion.div>
                      </div>


                    </motion.div>
                  )}
                </AnimatePresence>
              </TabsContent>
            ))}
          </div>
        </Tabs>

        {/* Full-width services tags */}
        {renderUiCompDataArr.map((panel) =>
          activeService === panel.uiName ? (
            <SectionReveal key={panel.uiName} onView delay={0.08} className="relative z-10 mt-6">
              <motion.div
                key={panel.uiName}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.34 }}
                className="rounded-[32px] border border-[var(--brand-border)] bg-[linear-gradient(180deg,color-mix(in_srgb,var(--card)_98%,white_2%)_0%,var(--card)_100%)] p-6 shadow-[0_24px_54px_color-mix(in_srgb,var(--brand-base)_8%,transparent)] sm:p-7"
              >
                <div className="flex flex-wrap gap-3">
                  {panel.servicesSection.map((service) => (
                    <div key={service.lable} className="inline-flex items-center gap-1.5 rounded-[22px] border border-[var(--brand-border)] bg-[color:var(--brand-surface)] px-4 py-2.5 text-sm font-semibold text-[var(--brand-strong)]">
                      <Check className="h-3.5 w-3.5 shrink-0 text-[var(--brand-base)]" />
                      <span className="leading-6">{service.lable}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </SectionReveal>
          ) : null
        )}
      </Container>
    </section>
  );
}
