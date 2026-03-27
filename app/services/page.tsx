import type { Metadata } from "next";
import { Suspense } from "react";
import { CommonPageHeader } from "@/components/shared/common-page-header";
import { ServicesShowcase } from "@/components/sections/services/services-showcase";
import { MetaData_Services } from "@/constants/metadata";
import { pageHeaderContent } from "@/constants/page-header-content";

export const metadata: Metadata = MetaData_Services;

export default function ServicesPage() {
  return (
    <>
      <CommonPageHeader {...pageHeaderContent.services} />
      <Suspense fallback={null}>
        <ServicesShowcase />
      </Suspense>
    </>
  );
}
