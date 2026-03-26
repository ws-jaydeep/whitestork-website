"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import SpotlightCard from "@/components/animations/SpotlightCard";
import { CommonSectionTitle } from "@/components/shared/common-section-title";
import { Container } from "@/components/shared/container";
import { SectionReveal } from "@/components/shared/section-reveal";
import {
  Client_Story_Data,
  type ClientReviewItem,
} from "@/constants/home-client-review-content";

function chunkReviews(items: ClientReviewItem[], size: number) {
  const chunks: ClientReviewItem[][] = [];

  for (let index = 0; index < items.length; index += size) {
    chunks.push(items.slice(index, index + size));
  }

  return chunks;
}

function ClientReviewCard({ item }: { item: ClientReviewItem }) {
  return (
    <SpotlightCard
      spotlightColor="rgba(77, 147, 255, 0.18)"
      className="h-full min-h-[420px] rounded-[32px] border-[var(--brand-border)] bg-[linear-gradient(180deg,color-mix(in_srgb,var(--card)_98%,#f6f9ff_2%)_0%,color-mix(in_srgb,var(--brand-surface)_96%,#eef5ff_4%)_100%)] p-6 shadow-[0_20px_48px_color-mix(in_srgb,var(--brand-base)_10%,transparent)] sm:min-h-[455px] sm:p-7 md:min-h-[500px]"
    >
      <div className="relative z-[1] flex h-full flex-col">
        <div className="flex items-center justify-between gap-4">
          <div className="inline-flex size-11 items-center justify-center rounded-2xl bg-[color:color-mix(in_srgb,var(--brand-base)_10%,white_90%)] text-[var(--brand-base)]">
            <Quote className="size-5" />
          </div>
          <div className="relative h-10 w-[112px] shrink-0 overflow-hidden rounded-xl border border-[var(--brand-border)] bg-white">
            <Image
              src={item.logo}
              alt={`${item.name} company logo`}
              fill
              className="object-contain p-2"
              sizes="112px"
            />
          </div>
        </div>

        <h3 className="mt-8 font-[family:var(--font-heading)] text-[1.75rem] font-semibold leading-tight text-[var(--brand-strong)] sm:text-[2rem]">
          {item.title}
        </h3>

        <p className="mt-4 flex-1 text-[0.98rem] leading-8 text-[var(--brand-muted)]">
          {item.Description}
        </p>

        <div className="mt-auto flex items-center gap-4 border-t border-[var(--brand-border)] pt-5">
          <div className="relative size-14 overflow-hidden rounded-2xl border border-[var(--brand-border)]">
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="object-cover"
              sizes="56px"
            />
          </div>
          <div className="min-w-0">
            <p className="font-[family:var(--font-heading)] text-lg font-semibold text-[var(--brand-strong)]">
              {item.name}
            </p>
            <p className="text-sm text-[var(--brand-muted)]">{item.role}</p>
          </div>
        </div>
      </div>
    </SpotlightCard>
  );
}

export function HomeClientReviewSection() {
  const [mobileIndex, setMobileIndex] = useState(0);
  const [desktopPage, setDesktopPage] = useState(0);
  const desktopPages = chunkReviews(Client_Story_Data, 2);
  const activeMobileReview = Client_Story_Data[mobileIndex];
  const activeDesktopPage = desktopPages[desktopPage] ?? [];

  function showPrevMobileReview() {
    setMobileIndex((current) =>
      current === 0 ? Client_Story_Data.length - 1 : current - 1,
    );
  }

  function showNextMobileReview() {
    setMobileIndex((current) => (current + 1) % Client_Story_Data.length);
  }

  function showPrevDesktopPage() {
    setDesktopPage((current) =>
      current === 0 ? desktopPages.length - 1 : current - 1,
    );
  }

  function showNextDesktopPage() {
    setDesktopPage((current) => (current + 1) % desktopPages.length);
  }

  return (
    <section className="relative overflow-hidden pt-12 pb-6 sm:pt-16 sm:pb-8 lg:pt-20 lg:pb-10">
      <Container width="wide">
        <SectionReveal onView>
          <CommonSectionTitle
            title="Client Reviews"
            highlights={["Client Reviews"]}
            className="max-w-4xl"
            titleClassName="text-3xl sm:text-4xl lg:text-[3rem]"
          />
        </SectionReveal>

        <SectionReveal onView className="mt-8 sm:mt-10">
          <div className="md:hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeMobileReview.name}-${mobileIndex}`}
                initial={{ opacity: 0, x: 24, filter: "blur(10px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, x: -24, filter: "blur(10px)" }}
                transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
              >
                <ClientReviewCard item={activeMobileReview} />
              </motion.div>
            </AnimatePresence>

            {Client_Story_Data.length > 1 ? (
              <div className="mt-5 flex items-center justify-between gap-4">
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={showPrevMobileReview}
                    aria-label="Show previous client review"
                    className="inline-flex size-11 items-center justify-center rounded-full border border-[var(--brand-border)] bg-[var(--brand-surface)] text-[var(--brand-strong)] transition hover:border-[var(--brand-base)] hover:text-[var(--brand-base)]"
                  >
                    <ChevronLeft className="size-4" />
                  </button>
                  <button
                    type="button"
                    onClick={showNextMobileReview}
                    aria-label="Show next client review"
                    className="inline-flex size-11 items-center justify-center rounded-full border border-[var(--brand-border)] bg-[var(--brand-surface)] text-[var(--brand-strong)] transition hover:border-[var(--brand-base)] hover:text-[var(--brand-base)]"
                  >
                    <ChevronRight className="size-4" />
                  </button>
                </div>

                <div className="flex flex-wrap justify-end gap-2">
                  {Client_Story_Data.map((item, index) => (
                    <button
                      key={`${item.name}-${index}`}
                      type="button"
                      onClick={() => setMobileIndex(index)}
                      aria-label={`Show review from ${item.name}`}
                      className={`h-2.5 rounded-full transition-all ${
                        index === mobileIndex
                          ? "w-10 bg-[var(--brand-base)]"
                          : "w-2.5 bg-[color:color-mix(in_srgb,var(--brand-border)_70%,var(--brand-soft))]"
                      }`}
                    />
                  ))}
                </div>
              </div>
            ) : null}
          </div>

          <div className="hidden md:block">
            <AnimatePresence mode="wait">
              <motion.div
                key={`desktop-page-${desktopPage}`}
                initial={{ opacity: 0, x: 28, filter: "blur(10px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, x: -28, filter: "blur(10px)" }}
                transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
                className="grid gap-5 md:min-h-[500px] md:grid-cols-2 md:auto-rows-fr"
              >
                {activeDesktopPage.map((item, index) => (
                  <ClientReviewCard
                    key={`${item.name}-${desktopPage}-${index}`}
                    item={item}
                  />
                ))}
              </motion.div>
            </AnimatePresence>

            {desktopPages.length > 1 ? (
              <div className="mt-6 flex items-center justify-between gap-4">
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={showPrevDesktopPage}
                    aria-label="Show previous client review page"
                    className="inline-flex size-11 items-center justify-center rounded-full border border-[var(--brand-border)] bg-[var(--brand-surface)] text-[var(--brand-strong)] transition hover:border-[var(--brand-base)] hover:text-[var(--brand-base)]"
                  >
                    <ChevronLeft className="size-4" />
                  </button>
                  <button
                    type="button"
                    onClick={showNextDesktopPage}
                    aria-label="Show next client review page"
                    className="inline-flex size-11 items-center justify-center rounded-full border border-[var(--brand-border)] bg-[var(--brand-surface)] text-[var(--brand-strong)] transition hover:border-[var(--brand-base)] hover:text-[var(--brand-base)]"
                  >
                    <ChevronRight className="size-4" />
                  </button>
                </div>

                <div className="flex flex-wrap justify-end gap-2">
                  {desktopPages.map((page, index) => (
                    <button
                      key={`${page[0]?.name ?? "page"}-${index}`}
                      type="button"
                      onClick={() => setDesktopPage(index)}
                      aria-label={`Show client review page ${index + 1}`}
                      className={`h-2.5 rounded-full transition-all ${
                        index === desktopPage
                          ? "w-10 bg-[var(--brand-base)]"
                          : "w-2.5 bg-[color:color-mix(in_srgb,var(--brand-border)_70%,var(--brand-soft))]"
                      }`}
                    />
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </SectionReveal>
      </Container>
    </section>
  );
}
