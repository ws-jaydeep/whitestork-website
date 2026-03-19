"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "@/components/container";
import { SectionReveal } from "@/components/section-reveal";
import TextType from "@/components/TextType";
import { UiSelect } from "@/components/ui/select";
import {
  renderUiCompDataArr,
  servicesNavBarCompDataArr,
  servicesSectionContent,
} from "@/constants/services-content";

export function ServicesShowcase() {
  const [activeService, setActiveService] = useState(() => {
    if (typeof window === "undefined") {
      return servicesNavBarCompDataArr[0].renderUi;
    }

    const hash = window.location.hash.replace("#", "");
    const match = servicesNavBarCompDataArr.find((item) => item.renderUi === hash);
    return match?.renderUi ?? servicesNavBarCompDataArr[0].renderUi;
  });

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveService((current) => {
        const currentIndex = servicesNavBarCompDataArr.findIndex((item) => item.renderUi === current);
        const nextIndex = currentIndex === -1
          ? 0
          : (currentIndex + 1) % servicesNavBarCompDataArr.length;
        return servicesNavBarCompDataArr[nextIndex].renderUi;
      });
    }, servicesSectionContent.autoRotateMs);

    return () => window.clearInterval(timer);
  }, []);

  const activePanel = useMemo(
    () => renderUiCompDataArr.find((item) => item.uiName === activeService) ?? renderUiCompDataArr[0],
    [activeService],
  );

  return (
    <section className="relative overflow-hidden bg-[var(--background)] pt-4 pb-16 sm:pt-6 sm:pb-20 lg:pt-8 lg:pb-24">
      <div className="absolute inset-x-0 top-0 h-48 bg-[linear-gradient(180deg,color-mix(in_srgb,var(--brand-soft)_10%,transparent),transparent)]" />

      <Container width="wide" className="max-w-[1480px]">
        <SectionReveal onView className="relative z-10">
          <div className="sticky top-24 z-20 rounded-[28px] border border-[var(--brand-border)] bg-[linear-gradient(180deg,color-mix(in_srgb,var(--card)_92%,white_8%)_0%,var(--card)_100%)] p-3 shadow-[0_20px_44px_color-mix(in_srgb,var(--brand-base)_8%,transparent)] backdrop-blur sm:p-4">
            <div className="xl:hidden">
              <UiSelect
                value={activeService}
                onValueChange={setActiveService}
                options={servicesNavBarCompDataArr.map((item) => ({
                  value: item.renderUi,
                  label: item.label,
                }))}
                placeholder={servicesSectionContent.mobileSelectPlaceholder}
              />
            </div>

            <div className="hidden xl:flex xl:items-stretch xl:gap-1.5">
              {servicesNavBarCompDataArr.map((item) => {
                const isActive = item.renderUi === activeService;
                return (
                  <button
                    key={item.renderUi}
                    type="button"
                    onClick={() => setActiveService(item.renderUi)}
                    className="group relative min-w-0 flex-1 rounded-2xl text-left"
                  >
                    <span
                      className={`relative flex min-h-[56px] w-full items-center gap-2 overflow-hidden rounded-[16px] border px-3 py-2.5 transition duration-250 ${
                        isActive
                          ? "border-[var(--brand-border-strong)] bg-[color:var(--brand-surface)] text-[var(--brand-strong)]"
                          : "border-transparent bg-transparent text-[var(--brand-muted)] hover:border-[var(--brand-border)] hover:bg-[color:var(--brand-surface)] hover:text-[var(--brand-strong)]"
                      }`}
                    >
                      {isActive ? (
                        <motion.span
                          layoutId="services-tab-indicator"
                          className="absolute inset-x-3 bottom-0 h-1 rounded-full bg-[linear-gradient(90deg,var(--brand-base)_0%,var(--brand-soft)_100%)]"
                          transition={{ type: "spring", stiffness: 340, damping: 30 }}
                        />
                      ) : null}
                      <span
                        className={`relative flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition duration-300 ${
                          isActive
                            ? "bg-[color:color-mix(in_srgb,var(--brand-base)_10%,white_90%)]"
                            : "bg-[color:color-mix(in_srgb,var(--background)_72%,white_28%)] group-hover:scale-105"
                        }`}
                      >
                        <Image
                          src={item.icon}
                          alt=""
                          width={20}
                          height={20}
                          className="h-4 w-4 object-contain"
                          aria-hidden="true"
                        />
                      </span>
                      <span className="relative min-w-0">
                        <span
                          className={`block text-[12px] font-semibold leading-tight sm:text-[13px] ${
                            isActive ? "text-[var(--brand-strong)]" : "text-inherit"
                          }`}
                        >
                          {item.label}
                        </span>
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </SectionReveal>

        <AnimatePresence mode="wait">
          <motion.div
            key={activePanel.uiName}
            initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -12, filter: "blur(8px)" }}
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 mt-8 lg:mt-10"
          >
            <div className="grid gap-6 rounded-[36px] border border-[var(--brand-border)] bg-[linear-gradient(180deg,color-mix(in_srgb,var(--card)_96%,white_4%)_0%,var(--card)_100%)] p-6 shadow-[0_28px_60px_color-mix(in_srgb,var(--brand-base)_10%,transparent)] sm:p-8 lg:grid-cols-[1.08fr_0.92fr] lg:p-10">
              <div className="flex flex-col">
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08, duration: 0.34 }}
                >
                  <TextType
                    key={`${activePanel.uiName}-heading`}
                    as="h2"
                    text={activePanel.heading}
                    typingSpeed={28}
                    deletingSpeed={18}
                    pauseDuration={2200}
                    loop={false}
                    startOnVisible
                    showCursor={false}
                    className="font-[family:var(--font-heading)] text-3xl font-semibold leading-tight text-[var(--brand-strong)] sm:text-4xl"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.12, duration: 0.34 }}
                >
                  <TextType
                    key={`${activePanel.uiName}-subheading`}
                    as="p"
                    text={activePanel.subHeading}
                    typingSpeed={16}
                    deletingSpeed={12}
                    initialDelay={250}
                    pauseDuration={2200}
                    loop={false}
                    startOnVisible
                    showCursor={false}
                    className="mt-5 text-lg font-medium leading-8 text-[var(--brand-strong)]"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.16, duration: 0.34 }}
                >
                  <TextType
                    key={`${activePanel.uiName}-paragraph`}
                    as="p"
                    text={activePanel.paragraph}
                    typingSpeed={8}
                    deletingSpeed={8}
                    initialDelay={500}
                    pauseDuration={2200}
                    loop={false}
                    startOnVisible
                    showCursor={false}
                    className="mt-6 text-base leading-8 text-[var(--brand-muted)]"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.34 }}
                >
                  <TextType
                    key={`${activePanel.uiName}-paragraph-bottom`}
                    as="p"
                    text={activePanel.paraButtom}
                    typingSpeed={8}
                    deletingSpeed={8}
                    initialDelay={850}
                    pauseDuration={2200}
                    loop={false}
                    startOnVisible
                    showCursor={false}
                    className="mt-5 text-base leading-8 text-[var(--brand-muted)]"
                  />
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
                  <Image
                    src={activePanel.rightImg.src}
                    alt={activePanel.heading}
                    width={activePanel.rightImg.width}
                    height={activePanel.rightImg.height}
                    className="h-auto max-h-[360px] w-full object-contain"
                    priority
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        <SectionReveal onView delay={0.08} className="relative z-10 mt-6">
          <div className="rounded-[32px] border border-[var(--brand-border)] bg-[linear-gradient(180deg,color-mix(in_srgb,var(--card)_98%,white_2%)_0%,var(--card)_100%)] p-6 shadow-[0_24px_54px_color-mix(in_srgb,var(--brand-base)_8%,transparent)] sm:p-7">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.34 }}
              className="flex flex-wrap gap-3"
            >
              {activePanel.servicesSection.map((service) => (
                <div
                  key={service.lable}
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--brand-border)] bg-[color:var(--brand-surface)] px-4 py-2.5 text-sm font-semibold text-[var(--brand-strong)]"
                >
                  <Image
                    src={service.icon}
                    alt=""
                    width={24}
                    height={24}
                    className="object-contain"
                    aria-hidden="true"
                  />
                  <span>{service.lable}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </SectionReveal>
      </Container>
    </section>
  );
}
