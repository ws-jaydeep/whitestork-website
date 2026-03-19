import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { CommonPageHeader } from "@/components/common-page-header";
import { SectionReveal } from "@/components/section-reveal";
import { termsData } from "@/constants/terms-and-privacy-content";
import { pageHeaderContent } from "@/constants/page-header-content";

export const metadata: Metadata = {
  title: "Terms & Conditions | WhiteStork Software Solutions",
  description:
    "Review the WhiteStork Software Solutions terms and conditions for website access, services, materials, and usage policies.",
};

export default function TermsAndConditionsPage() {
  return (
    <>
      <CommonPageHeader {...pageHeaderContent.terms} />
      <Container as="section" className="py-12" width="wide">
        <SectionReveal
          className="legal-shell rounded-[var(--theme-panel-radius)] px-5 py-8 sm:px-6 sm:py-10 lg:px-7"
          distance={34}
        >
          <div className="border-b pb-6" style={{ borderColor: "var(--legal-intro-border)" }}>
            <p className="brand-copy text-sm leading-7">
              {pageHeaderContent.terms.intro}
            </p>
          </div>
          <div className="mt-8 space-y-8">
            {termsData.map((section, index) => (
              <SectionReveal
                key={section.heading}
                className="legal-divider border-b pb-8 last:border-b-0 last:pb-0"
                delay={index * 0.05}
                distance={24}
                onView
              >
                <h2 className="brand-title text-xl font-semibold tracking-tight sm:text-2xl">
                  {section.heading}
                </h2>
                <div className="brand-copy mt-3 space-y-3 text-base leading-8">
                  {section.para?.map((item, index) => {
                    // const isLastParagraph = index === section.para.length - 1;

                    return (
                      <p key={`${section.heading}-para-${index}`}>
                        {item}
                        {section.email ? (
                          <>
                            {" "}
                            <Link
                              href={`mailto:${section.email}`}
                              className="font-medium text-[var(--brand-base)] underline underline-offset-4 transition hover:text-[var(--brand-strong)]"
                            >
                              {section.email}
                            </Link>
                            .
                          </>
                        ) : null}
                      </p>
                    );
                  })}
                </div>
              </SectionReveal>
            ))}
          </div>
        </SectionReveal>
      </Container>
    </>
  );
}
