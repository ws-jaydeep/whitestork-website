"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Container } from "@/components/container";
import { CommonProfileCard } from "@/components/common-profile-card";
import { CommonSectionTitle } from "@/components/common-section-title";
import { SectionReveal } from "@/components/section-reveal";
import { Button } from "@/components/ui/button";
import type { IEmployeeData } from "@/constants/content-types";
import { Employees } from "@/constants/about-content";

const INITIAL_EMPLOYEE_COUNT = 8;
const EMPLOYEE_LOAD_STEP = 8;

export function AboutEmployeesSection() {
  const [visibleCount, setVisibleCount] = useState(INITIAL_EMPLOYEE_COUNT);
  const [selectedEmployee, setSelectedEmployee] = useState<IEmployeeData | null>(null);
  const visibleEmployees = Employees.slice(0, visibleCount);
  const hasMoreEmployees = visibleCount < Employees.length;
  const portalTarget = typeof document !== "undefined" ? document.body : null;

  useEffect(() => {
    if (!selectedEmployee) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setSelectedEmployee(null);
      }
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedEmployee]);

  return (
    <section className="bg-[linear-gradient(180deg,color-mix(in_srgb,var(--background)_100%,transparent)_0%,color-mix(in_srgb,var(--brand-surface)_88%,var(--background))_100%)] py-14 sm:py-18 lg:py-24">
      <Container width="wide">
        <CommonSectionTitle
          // eyebrow="Our Team"
          title="Meet The People Behind WhiteStork"
          highlights={["People", "WhiteStork"]}
          // description="A team of builders, designers, marketers, and operators who bring energy, craft, and personality to every project."
          className="max-w-5xl"
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {visibleEmployees.map((employee, index) => (
            <SectionReveal key={employee.name} delay={index * 0.08} distance={32} onView>
              <CommonProfileCard
                name={employee.name}
                designation={employee.designation}
                subDesignation={employee.subDesignation}
                image={employee.image}
                onClick={() => setSelectedEmployee(employee)}
              />
            </SectionReveal>
          ))}
        </div>

        {hasMoreEmployees ? (
          <div className="mt-10 flex justify-center">
            <Button
              size="lg"
              className="h-11 rounded-full px-6 text-sm font-semibold uppercase tracking-[0.16em]"
              onClick={() =>
                setVisibleCount((current) => Math.min(current + EMPLOYEE_LOAD_STEP, Employees.length))
              }
            >
              Load More ...
            </Button>
          </div>
        ) : null}
      </Container>

      {portalTarget
        ? createPortal(
            <AnimatePresence>
              {selectedEmployee ? (
                <motion.div
                  className="fixed inset-0 z-[100] grid place-items-center bg-[rgba(8,20,38,0.62)] px-3 py-4 backdrop-blur-sm sm:px-4 sm:py-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setSelectedEmployee(null)}
                >
                  <motion.div
                    className="relative w-full max-w-4xl overflow-y-auto rounded-[1.75rem] border border-[color:color-mix(in_srgb,var(--brand-base)_18%,var(--brand-border))] bg-[color:var(--brand-surface-strong)] shadow-[var(--brand-shadow-strong)] max-h-[min(760px,calc(100vh-2rem))] sm:max-h-[min(820px,calc(100vh-3rem))] sm:rounded-[2rem]"
                    initial={{ opacity: 0, y: 24, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.98 }}
                    transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                    onClick={(event) => event.stopPropagation()}
                  >
                    <button
                      type="button"
                      aria-label="Close team member details"
                      onClick={() => setSelectedEmployee(null)}
                      className="absolute right-3 top-3 z-10 inline-flex size-9 items-center justify-center rounded-full border border-[var(--brand-border)] bg-[color:var(--brand-surface)] text-[var(--brand-strong)] transition hover:bg-[var(--brand-base)] hover:text-[var(--primary-foreground)] sm:right-4 sm:top-4 sm:size-10"
                    >
                      <X className="size-5" />
                    </button>

                    <div className="grid gap-0 md:grid-cols-[0.94fr_1.06fr]">
                      <div className="relative min-h-[240px] bg-[linear-gradient(180deg,color-mix(in_srgb,var(--brand-surface)_92%,transparent)_0%,color-mix(in_srgb,var(--secondary)_88%,transparent)_100%)] p-5 sm:min-h-[320px] sm:p-10">
                        <div className="absolute inset-x-8 top-6 h-24 rounded-full bg-[radial-gradient(circle,color-mix(in_srgb,var(--brand-base)_18%,transparent)_0%,transparent_74%)] blur-2xl sm:inset-x-12 sm:top-10 sm:h-28" />
                        <div className="relative mx-auto flex h-full max-w-sm items-center justify-center">
                          <div className="relative h-52 w-52 overflow-hidden rounded-full border-[8px] border-[color:var(--brand-surface-strong)] bg-[color:var(--brand-surface-strong)] shadow-[var(--brand-shadow-strong)] sm:h-80 sm:w-80 sm:border-[10px]">
                            <Image
                              src={selectedEmployee.image}
                              alt={selectedEmployee.name}
                              fill
                              className="object-cover object-top"
                              sizes="(min-width: 768px) 40vw, 80vw"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col justify-center bg-[color:var(--brand-surface-strong)] p-5 sm:p-10 lg:p-12">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-base)] sm:text-sm">
                          Team Member
                        </p>
                        <h3 className="brand-title mt-3 text-2xl font-semibold leading-tight sm:text-4xl">
                          {selectedEmployee.name}
                        </h3>
                        <p className="brand-copy mt-2 text-[0.98rem] leading-7 sm:mt-3 sm:text-lg">
                          {selectedEmployee.designation} - {selectedEmployee.subDesignation}
                        </p>
                        <div className="mt-4 h-px w-16 bg-[linear-gradient(90deg,var(--brand-base),transparent)] sm:mt-6 sm:w-20" />
                        <p className="mt-4 text-[0.98rem] leading-7 text-[var(--brand-strong)] sm:mt-6 sm:text-lg sm:leading-8">
                          {selectedEmployee.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ) : null}
            </AnimatePresence>,
            portalTarget,
          )
        : null}
    </section>
  );
}
