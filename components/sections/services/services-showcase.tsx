"use client";

import { useEffect, useState, startTransition } from "react";
import Image from "next/image";
import { Check, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import BlurText from "@/components/animations/BlurText";
import { Container } from "@/components/shared/container";
import { SectionReveal } from "@/components/shared/section-reveal";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  renderUiCompDataArr,
  servicesNavBarCompDataArr,
  servicesSectionContent,
} from "@/constants/services-content";

const STORAGE_KEY = "services-active-tab";

type ServiceUiName = (typeof servicesNavBarCompDataArr)[number]["renderUi"];

export function ServicesShowcase() {
  const [activeService, setActiveService] = useState<ServiceUiName>(servicesNavBarCompDataArr[0].renderUi);

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY) as ServiceUiName | null;
    const match = servicesNavBarCompDataArr.find((item) => item.renderUi === saved);
    if (match) startTransition(() => setActiveService(match.renderUi));
  }, []);

  function handleTabChange(value: string) {
    const next = value as ServiceUiName;
    setActiveService(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  }

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveService((current) => {
        const currentIndex = servicesNavBarCompDataArr.findIndex((item) => item.renderUi === current);
        const nextIndex = currentIndex === -1 ? 0 : (currentIndex + 1) % servicesNavBarCompDataArr.length;
        const next = servicesNavBarCompDataArr[nextIndex].renderUi;
        window.localStorage.setItem(STORAGE_KEY, next);
        return next;
      });
    }, servicesSectionContent.autoRotateMs);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[var(--background)] pt-4 pb-16 sm:pt-6 sm:pb-20 lg:pt-8 lg:pb-24">
      <div className="absolute inset-x-0 top-0 h-48 bg-[linear-gradient(180deg,color-mix(in_srgb,var(--brand-soft)_10%,transparent),transparent)]" />

      <Container width="wide" className="max-w-[1520px]">
        <Tabs
          value={activeService}
          onValueChange={handleTabChange}
          orientation="vertical"
          className="flex flex-col gap-6 lg:flex-row lg:items-stretch lg:gap-8"
        >
          {/* Vertical tab list */}
          <SectionReveal onView className="relative z-10 w-full lg:w-[280px] xl:w-[300px] shrink-0 lg:flex lg:flex-col">
            <div className="sticky top-24 z-20 h-full rounded-[28px] border border-[var(--brand-border)] bg-[linear-gradient(180deg,color-mix(in_srgb,var(--card)_92%,white_8%)_0%,var(--card)_100%)] p-3 shadow-[0_20px_44px_color-mix(in_srgb,var(--brand-base)_8%,transparent)] backdrop-blur sm:p-4">
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
                        className={`relative flex w-full items-center gap-3 overflow-hidden rounded-[16px] border px-3 py-3 transition duration-250 ${
                          isActive
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
                          className={`relative flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition duration-300 ${
                            isActive
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
                          className="relative flex min-h-[340px] overflow-hidden rounded-[32px] border border-[var(--brand-border)] bg-[linear-gradient(145deg,color-mix(in_srgb,var(--brand-soft)_10%,white)_0%,color-mix(in_srgb,var(--card)_97%,white_3%)_100%)] p-6 sm:p-8"
                        >
                          <div className="absolute right-0 top-0 h-36 w-36 rounded-full bg-[radial-gradient(circle,color-mix(in_srgb,var(--brand-soft)_16%,transparent)_0%,transparent_68%)] blur-2xl" />
                          <div className="relative flex w-full items-center justify-center p-4 sm:p-6">
                            <Image src={panel.rightImg.src} alt={panel.heading} width={panel.rightImg.width} height={panel.rightImg.height} className="h-auto max-h-[360px] w-full object-contain" priority />
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
