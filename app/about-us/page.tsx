import type { Metadata } from "next";
import { AboutCelebrationsSection } from "@/components/about-celebrations-section";
import { AboutEmployeesSection } from "@/components/about-employees-section";
import { AboutFactsSection } from "@/components/about-facts";
import { CommonPageHeader } from "@/components/common-page-header";
import { AboutValuesSection } from "@/components/about-values-section";
import { AboutWorkVibeSection } from "@/components/about-work-vibe-section";
import { MetaData_About } from "@/constants/metadata";
import { pageHeaderContent } from "@/constants/page-header-content";

export const metadata: Metadata = MetaData_About;

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
