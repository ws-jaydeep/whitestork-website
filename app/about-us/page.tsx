import type { Metadata } from "next";
import { AboutCelebrationsSection } from "@/components/about-celebrations-section";
import { AboutEmployeesSection } from "@/components/about-employees-section";
import { CommonPageHeader } from "@/components/common-page-header";
import { AboutFactsSection } from "@/components/about-facts";
import { AboutValuesSection } from "@/components/about-values-section";
import { AboutWorkVibeSection } from "@/components/about-work-vibe-section";
import { pageHeaderContent } from "@/constants/page-header-content";

export const metadata: Metadata = {
  title: "About Us | WhiteStork Software Solutions",
  description:
    "Learn about WhiteStork Software Solutions, our mindset, and how we approach building reliable digital products and experiences.",
};

export default function AboutUsPage() {
  return (
    <>
      <CommonPageHeader {...pageHeaderContent.about} />
      <AboutFactsSection />
      <AboutValuesSection />
      <AboutEmployeesSection />
      <AboutCelebrationsSection />
      <AboutWorkVibeSection />
    </>
  );
}
