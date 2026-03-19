import type { Metadata } from "next";
import { CommonPageHeader } from "@/components/common-page-header";
import { ServicesShowcase } from "@/components/services-showcase";
import { pageHeaderContent } from "@/constants/page-header-content";

export const metadata: Metadata = {
  title: "Services | WhiteStork Software Solutions",
  description:
    "Explore WhiteStork services including AI automation, software development, digital platforms, and scalable product delivery.",
};

export default function ServicesPage() {
  return (
    <>
      <CommonPageHeader {...pageHeaderContent.services} />
      <ServicesShowcase />
    </>
  );
}
