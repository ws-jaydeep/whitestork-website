"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, Globe, Smartphone } from "lucide-react";
import { useRef, useState } from "react";
import { Container } from "@/components/container";
import { CommonPageHeader } from "@/components/common-page-header";
import { PortfolioTimeline } from "@/components/portfolio-timeline";
import { SectionReveal } from "@/components/section-reveal";
import { pageHeaderContent } from "@/constants/page-header-content";
import { portfolioProjects } from "@/constants/portfolio-content";

type Project = (typeof portfolioProjects)[number];

export default function PortfolioPageClient() {
  const timelineRef = useRef<HTMLElement | null>(null);

  return (
    <>
      <CommonPageHeader {...pageHeaderContent.portfolio} />

      <Container
        as="section"
        ref={timelineRef}
        className="py-8 sm:py-12 lg:py-14"
        width="wide"
      >
        <PortfolioTimeline containerRef={timelineRef}>
          {portfolioProjects.map((project, index) => {
            const isRightAligned = index % 2 === 0;

            return (
              <div key={project.id} className="relative">
                {index > 0 ? (
                  <div className="mb-8 flex justify-center lg:mb-10">
                    <div className="h-[2px] w-16 bg-[linear-gradient(90deg,transparent,color-mix(in_srgb,var(--brand-strong)_75%,black),transparent)]" />
                  </div>
                ) : null}

                <SectionReveal
                  className="grid items-start gap-5 lg:grid-cols-[1fr_auto_1fr] lg:gap-8"
                  delay={0.04}
                  onView
                >
                  <div className={isRightAligned ? "hidden lg:block" : "hidden lg:flex lg:justify-start"}>
                    {!isRightAligned ? (
                      <ProjectHoverCard project={project} align="left" index={index} />
                    ) : null}
                  </div>

                  <div className="relative hidden justify-center lg:flex">
                    <motion.div
                      className="flex h-12 w-12 items-center justify-center rounded-full border border-[color:color-mix(in_srgb,var(--brand-strong)_28%,black)] bg-[color:color-mix(in_srgb,var(--brand-strong)_92%,black)] shadow-[0_14px_32px_color-mix(in_srgb,var(--brand-strong)_20%,transparent)]"
                      whileInView={{ scale: [0.82, 1.08, 1], opacity: [0.45, 1, 1] }}
                      viewport={{ once: true, amount: 0.7 }}
                      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <span className="brand-title text-xs font-semibold text-white">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </motion.div>
                  </div>

                  <div className={isRightAligned ? "hidden lg:flex lg:justify-end" : "hidden lg:block"}>
                    {isRightAligned ? (
                      <ProjectHoverCard project={project} align="right" index={index} />
                    ) : null}
                  </div>

                  <div className="lg:hidden">
                    <ProjectHoverCard project={project} align="left" index={index} />
                  </div>
                </SectionReveal>
              </div>
            );
          })}
        </PortfolioTimeline>
      </Container>
    </>
  );
}

function ProjectHoverCard({
  project,
  index,
}: {
  project: Project;
  align: "left" | "right";
  index: number;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start 0.88", "end 0.45"],
  });

  const xRange = index % 2 === 0 ? [28, 0] : [-28, 0];
  const x = useSpring(useTransform(scrollYProgress, [0, 1], xRange), {
    stiffness: 150,
    damping: 28,
    mass: 0.55,
  });
  const y = useSpring(useTransform(scrollYProgress, [0, 1], [24, 0]), {
    stiffness: 150,
    damping: 28,
    mass: 0.55,
  });
  const opacity = useTransform(scrollYProgress, [0, 0.35, 1], [0.35, 0.78, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.94, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [index % 2 === 0 ? 1.2 : -1.2, 0]);

  return (
    <motion.div
      ref={cardRef}
      className="group relative h-[330px] w-full max-w-[540px] sm:h-[360px]"
      style={{ x, y, opacity, scale, rotate }}
    >
      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        className="relative block h-full w-full overflow-hidden rounded-[28px] border bg-[color:var(--brand-surface)] p-4 text-left shadow-[var(--brand-shadow)] transition duration-500 hover:shadow-[var(--brand-shadow-strong)] sm:p-5"
        aria-expanded={isOpen}
      >
        <div className="relative flex h-full flex-col overflow-hidden rounded-[22px] border bg-[color:var(--brand-surface-strong)]">
          <div className="flex min-h-10 items-center justify-center border-b px-4 py-2.5 sm:px-5 sm:py-3">
            <Image
              src={project.logo}
              alt={`${project.name} logo`}
              width={150}
              height={48}
              className="h-6 w-auto max-w-[110px] object-contain sm:h-7 sm:max-w-[124px]"
            />
          </div>

          <div className="relative flex flex-1 items-center justify-center overflow-hidden px-4 py-4 sm:px-5 sm:py-5">
            <Image
              src={project.image}
              alt={`${project.name} preview`}
              className="max-h-full w-auto max-w-full object-contain transition duration-500 group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,color-mix(in_srgb,var(--brand-soft)_18%,transparent),transparent_56%)]" />
          </div>

          <div
            className={`absolute inset-0 flex flex-col rounded-[22px] border border-[color:color-mix(in_srgb,var(--brand-soft)_22%,white)] bg-[linear-gradient(180deg,color-mix(in_srgb,var(--brand-strong)_94%,black)_0%,color-mix(in_srgb,var(--brand-strong)_88%,black)_100%)] p-4 text-white transition duration-500 sm:p-6 ${
              isOpen
                ? "translate-y-0 opacity-100"
                : "translate-y-full opacity-0"
            } lg:translate-y-full lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100`}
          >
            <p className="brand-title text-base font-semibold text-white sm:text-xl">
              {project.name}
            </p>

            <p className="mt-2 line-clamp-5 text-[13px] leading-5 text-white/88 sm:mt-3 sm:line-clamp-4 sm:text-[0.96rem] sm:leading-6">
              {project.description}
            </p>

            <div className="mt-3 flex flex-wrap gap-1.5 sm:mt-4 sm:gap-2">
              {project.techStack.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-[9px] font-medium text-white sm:px-3 sm:text-[11px]"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-auto flex flex-wrap gap-2 pt-4 sm:pt-5">
              {project.web ? (
                <Link
                  href={project.web}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Visit website"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-[var(--brand-strong)] transition hover:bg-white/90 sm:h-9 sm:w-auto sm:gap-2 sm:px-4 sm:text-xs sm:font-medium"
                >
                  <Globe className="size-3.5" />
                  <span className="hidden sm:inline">Website</span>
                </Link>
              ) : null}

              {project.playstore ? (
                <Link
                  href={project.playstore}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Open Play Store"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/8 text-white transition hover:bg-white/14 sm:h-9 sm:w-auto sm:gap-2 sm:px-4 sm:text-xs sm:font-medium"
                >
                  <Smartphone className="size-3.5" />
                  <span className="hidden sm:inline">Play Store</span>
                </Link>
              ) : null}

              {project.ios ? (
                <Link
                  href={project.ios}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Open App Store"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/8 text-white transition hover:bg-white/14 sm:h-9 sm:w-auto sm:gap-2 sm:px-4 sm:text-xs sm:font-medium"
                >
                  <ArrowUpRight className="size-3.5 sm:hidden" />
                  <span className="hidden sm:inline">App Store</span>
                  <ArrowUpRight className="hidden sm:block sm:size-3.5" />
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      </button>
    </motion.div>
  );
}
