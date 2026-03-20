import type { Metadata } from "next";
import { CommonPageHeader } from "@/components/common-page-header";
import { ServicesShowcase } from "@/components/services-showcase";
import { MetaData_Services } from "@/constants/metadata";
import { pageHeaderContent } from "@/constants/page-header-content";

export const metadata: Metadata = MetaData_Services;

export default function ServicesPage() {
  return (
    <>
      <CommonPageHeader {...pageHeaderContent.services} />
      <ServicesShowcase />
    </>
  );
}
