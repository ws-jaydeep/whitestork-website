"use client";

import { startTransition, useEffect, useState } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { Check } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "@/components/shared/container";
import { SectionReveal } from "@/components/shared/section-reveal";
import { UiSelect } from "@/components/ui/select";
import {
  renderUiCompDataArr,
  servicesNavBarCompDataArr,
  servicesSectionContent,
} from "@/constants/services-content";

const STORAGE_KEY = "services-active-tab";

type ServiceUiName = (typeof servicesNavBarCompDataArr)[number]["renderUi"];
type ServicePanel = (typeof renderUiCompDataArr)[number];

const validServiceNames = new Set<ServiceUiName>(
  servicesNavBarCompDataArr.map((item) => item.renderUi)
);

function getValidServiceName(value: string | null): ServiceUiName | null {
  if (!value) return null;
  return validServiceNames.has(value as ServiceUiName) ? (value as ServiceUiName) : null;
}

const contentListVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.08,
    },
  },
};

const contentItemVariants = {
  hidden: { opacity: 0, y: 18, filter: "blur(12px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.42, ease: [0.22, 1, 0.36, 1] },
  },
};

function ServiceActiveContent({
  panel,
  index,
  isMobile = false,
}: {
  panel: ServicePanel;
  index: number;
  isMobile?: boolean;
}) {
  const visibleTags = isMobile ? panel.servicesSection : panel.servicesSection.slice(0, 5);

  if (isMobile) {
    return (
      <motion.div
        variants={contentListVariants}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="relative z-10 flex h-full flex-col p-6 sm:p-8"
      >
        <motion.h2
          variants={contentItemVariants}
          className="text-[1.95rem] font-semibold leading-[0.98] text-[var(--brand-strong)] sm:text-[2.1rem]"
        >
          {panel.heading}
        </motion.h2>

        <motion.p
          variants={contentItemVariants}
          className="mt-4 text-base leading-7 font-medium text-[color:color-mix(in_srgb,var(--brand-strong)_88%,white_12%)]"
        >
          {panel.subHeading}
        </motion.p>

        <motion.p
          variants={contentItemVariants}
          className="mt-4 text-sm leading-7 text-[var(--brand-muted)] sm:text-base"
        >
          {panel.paragraph}
        </motion.p>

        <motion.div
          variants={contentItemVariants}
          className="relative mx-auto mt-6 h-[220px] w-full max-w-[280px] sm:h-[260px] sm:max-w-[320px]"
        >
          <Image
            src={panel.rightImg.src}
            alt={panel.heading}
            fill
            sizes="(max-width: 640px) 280px, 320px"
            className="object-contain object-center"
          />
        </motion.div>

        <motion.p
          variants={contentItemVariants}
          className="mt-4 text-sm leading-7 text-[var(--brand-muted)] sm:text-base"
        >
          {panel.paraButtom}
        </motion.p>

        <motion.div variants={contentItemVariants} className="mt-6 flex w-full flex-wrap gap-2.5">
          {visibleTags.map((service) => (
            <span
              key={service.lable}
              className="inline-flex items-center gap-2 rounded-full border border-[var(--chip-border)] bg-[var(--chip-surface)] px-3.5 py-2 text-sm font-medium text-[var(--chip-color)] shadow-[var(--chip-shadow)] backdrop-blur"
            >
              <Check className="h-3.5 w-3.5 shrink-0 text-[var(--brand-base)]" />
              <span>{service.lable}</span>
            </span>
          ))}
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={contentListVariants}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="relative z-10 flex h-full flex-col p-8 xl:p-10"
    >
      <div className="w-full pr-[40%] xl:pr-[42%]">
        <motion.h2
          variants={contentItemVariants}
          className="text-[2rem] font-semibold leading-[0.98] text-[var(--brand-strong)] xl:text-[2.45rem]"
        >
          {panel.heading}
        </motion.h2>

        <motion.p
          variants={contentItemVariants}
          className="mt-4 w-full font-medium leading-8 text-[color:color-mix(in_srgb,var(--brand-strong)_88%,white_12%)]"
        >
          {panel.subHeading}
        </motion.p>
      </div>

      <motion.p
        variants={contentItemVariants}
        className="mt-6 w-full text-base leading-8 text-[var(--brand-muted)]"
      >
        {panel.paragraph}
      </motion.p>

      <motion.p
        variants={contentItemVariants}
        className="mt-4 w-full text-base leading-8 text-[var(--brand-muted)]"
      >
        {panel.paraButtom}
      </motion.p>

      <motion.div variants={contentItemVariants} className="mt-auto flex w-full flex-wrap gap-2.5 pt-6">
        {visibleTags.map((service) => (
          <span
            key={`${index}-${service.lable}`}
            className="inline-flex items-center gap-2 rounded-full border border-[var(--chip-border)] bg-[var(--chip-surface)] px-3.5 py-2 text-sm font-medium text-[var(--chip-color)] shadow-[var(--chip-shadow)] backdrop-blur"
          >
            <Check className="h-3.5 w-3.5 shrink-0 text-[var(--brand-base)]" />
            <span>{service.lable}</span>
          </span>
        ))}
      </motion.div>
    </motion.div>
  );
}

export function ServicesShowcase() {
  const [activeService, setActiveService] = useState<ServiceUiName>(servicesNavBarCompDataArr[0].renderUi);
  const searchParams = useSearchParams();

  useEffect(() => {
    const requestedService = getValidServiceName(searchParams.get("service"));
    const savedService = getValidServiceName(window.localStorage.getItem(STORAGE_KEY));
    const nextService = requestedService ?? savedService;

    if (nextService) {
      startTransition(() => setActiveService(nextService));
      window.localStorage.setItem(STORAGE_KEY, nextService);
    }
  }, [searchParams]);

  function handleTabChange(value: string) {
    const next = value as ServiceUiName;
    setActiveService(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  }

  const activePanel =
    renderUiCompDataArr.find((panel) => panel.uiName === activeService) ?? renderUiCompDataArr[0];

  return (
    <section className="relative overflow-hidden bg-[var(--background)] py-12 sm:py-16 lg:py-5">
      {/* <div className="absolute inset-x-0 top-0 h-64 bg-[radial-gradient(circle_at_top,color-mix(in_srgb,var(--brand-soft)_16%,transparent),transparent_62%)]" /> */}

      <Container width="wide" className="relative z-10 max-w-[1540px]">
        <div className="lg:hidden">
          <UiSelect
            value={activeService}
            onValueChange={handleTabChange}
            options={servicesNavBarCompDataArr.map((item) => ({
              label: item.label,
              value: item.renderUi,
            }))}
            placeholder={servicesSectionContent.mobileSelectPlaceholder}
          />
        </div>

        <SectionReveal onView delay={0.08} className="mt-6 lg:hidden">
          <motion.article
            key={activePanel.uiName}
            initial={{ opacity: 0, y: 20, filter: "blur(12px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-[34px] border border-[var(--brand-border)] bg-[linear-gradient(145deg,color-mix(in_srgb,var(--card)_94%,white_6%)_0%,color-mix(in_srgb,var(--brand-surface)_88%,white_12%)_52%,color-mix(in_srgb,var(--secondary)_72%,white_28%)_100%)] shadow-[var(--brand-shadow-strong)]"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,color-mix(in_srgb,var(--brand-soft)_18%,transparent),transparent_44%)]" />
            <div className="absolute inset-0 bg-[image:var(--services-panel-mobile-overlay)]" />
            <AnimatePresence mode="wait">
              <ServiceActiveContent key={activePanel.uiName} panel={activePanel} index={renderUiCompDataArr.findIndex((panel) => panel.uiName === activePanel.uiName)} isMobile />
            </AnimatePresence>
          </motion.article>
        </SectionReveal>

        <SectionReveal onView delay={0.12} className="mt-10 hidden lg:block">
          <div className="flex h-[700px] items-stretch gap-4 xl:gap-5">
            {renderUiCompDataArr.map((panel, index) => {
              const isActive = panel.uiName === activeService;

              return (
                <motion.article
                  key={panel.uiName}
                  layout
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  onMouseEnter={() => handleTabChange(panel.uiName)}
                  onFocus={() => handleTabChange(panel.uiName)}
                  onClick={() => handleTabChange(panel.uiName)}
                  tabIndex={0}
                  role="button"
                  aria-pressed={isActive}
                  className={`group relative min-w-0 overflow-hidden rounded-[38px] border border-[var(--brand-border)] bg-[linear-gradient(145deg,color-mix(in_srgb,var(--card)_94%,white_6%)_0%,color-mix(in_srgb,var(--brand-surface)_88%,white_12%)_52%,color-mix(in_srgb,var(--secondary)_72%,white_28%)_100%)] shadow-[var(--brand-shadow)] outline-none ${isActive ? "flex-[6.5] cursor-default" : "flex-[0.9] cursor-pointer"}`}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,color-mix(in_srgb,var(--brand-soft)_18%,transparent),transparent_40%)]" />
                  {isActive ? (
                    <div className="absolute right-3 top-3 h-[30%] w-[24%] transition-all duration-500 xl:right-4 xl:top-4 xl:h-[34%] xl:w-[27%]">
                      <Image
                        src={panel.rightImg.src}
                        alt={panel.heading}
                        fill
                        sizes="(min-width: 1024px) 60vw, 100vw"
                        className="object-contain object-top-right scale-100 p-1 opacity-95 transition duration-500"
                      />
                    </div>
                  ) : null}
                  <div
                    className={`absolute inset-0 transition duration-500 ${isActive
                      ? "bg-[image:var(--services-panel-active-overlay)]"
                      : "bg-[image:var(--services-panel-collapsed-overlay)]"
                      }`}
                  />

                  <AnimatePresence mode="wait" initial={false}>
                    {isActive ? (
                      <ServiceActiveContent key={`${panel.uiName}-active`} panel={panel} index={index} />
                    ) : (
                      <motion.div
                        key={`${panel.uiName}-collapsed`}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.28 }}
                        className="relative z-10 flex h-full flex-col justify-between px-3 py-6 xl:px-4 xl:py-7"
                      >
                        <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--brand-base)]">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="[writing-mode:vertical-rl] rotate-180 whitespace-nowrap text-[1.7rem] font-semibold leading-none tracking-[-0.04em] text-[var(--brand-strong)]">
                          {panel.heading}
                        </span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.article>
              );
            })}
          </div>
        </SectionReveal>
      </Container>
    </section>
  );
}
