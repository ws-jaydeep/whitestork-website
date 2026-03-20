import type { Metadata } from "next";
import Link from "next/link";
import BlurText from "@/components/BlurText";
import { Container } from "@/components/container";
import { CommonPageHeader } from "@/components/common-page-header";
import { SectionReveal } from "@/components/section-reveal";
import { privacyData } from "@/constants/terms-and-privacy-content";
import { pageHeaderContent } from "@/constants/page-header-content";

export const metadata: Metadata = {
  title: "Privacy Policy | WhiteStork Software Solutions",
  description:
    "Read the WhiteStork Software Solutions privacy policy to understand how information is collected, used, and protected.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <CommonPageHeader {...pageHeaderContent.privacy} />
      <Container as="section" className="py-12" width="wide">
        <SectionReveal
          className="legal-shell rounded-[var(--theme-panel-radius)] px-5 py-8 sm:px-6 sm:py-10 lg:px-7"
          distance={34}
        >
          <div className="border-b pb-6" style={{ borderColor: "var(--legal-intro-border)" }}>
            <BlurText
              as="p"
              text={pageHeaderContent.privacy.intro}
              animateBy="words"
              delay={22}
              className="brand-copy text-sm leading-7"
            />
          </div>
          <div className="mt-8 space-y-8">
            {privacyData.map((section, index) => (
              <SectionReveal
                key={section.heading}
                className="legal-divider border-b pb-8 last:border-b-0 last:pb-0"
                delay={index * 0.05}
                distance={24}
                onView
              >
                <BlurText
                  as="h2"
                  text={section.heading}
                  animateBy="words"
                  delay={28}
                  className="brand-title text-xl font-semibold tracking-tight sm:text-2xl"
                />
                <div className="brand-copy mt-3 space-y-3 text-base leading-8">
                  {section.para?.map((item, index) => {
                    const isLastParagraph = index === section.para.length - 1;

                    return (
                      <div key={`${section.heading}-para-${index}`}>
                        <BlurText
                          as="p"
                          text={item}
                          animateBy="words"
                          delay={16}
                        />
                        {section.email && isLastParagraph ? (
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
                      </div>
                    );
                  })}
                  {section.list ? (
                    <ul className="space-y-2">
                      {section.list.map((item, index) => (
                        <li
                          key={`${section.heading}-list-${index}`}
                          className="flex gap-3"
                        >
                          <span className="mt-3 size-1.5 shrink-0 rounded-full bg-[var(--brand-soft)]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </SectionReveal>
            ))}
          </div>
        </SectionReveal>
      </Container>
    </>
  );
}
