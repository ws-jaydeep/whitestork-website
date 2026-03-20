import type { Metadata } from "next";
import { AboutCelebrationsSection } from "@/components/sections/about/about-celebrations-section";
import { AboutEmployeesSection } from "@/components/sections/about/about-employees-section";
import { AboutFactsSection } from "@/components/sections/about/about-facts";
import { CommonPageHeader } from "@/components/shared/common-page-header";
import { AboutValuesSection } from "@/components/sections/about/about-values-section";
import { AboutWorkVibeSection } from "@/components/sections/about/about-work-vibe-section";
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
