import type { Metadata } from "next";
import { MetaData_Portfolio } from "@/constants/metadata";
import PortfolioPageClient from "./portfolio-page-client";
import { pageHeaderContent } from "@/constants/page-header-content";
import { CommonPageHeader } from "@/components/shared/common-page-header";

export const metadata: Metadata = MetaData_Portfolio;

export default function PortfolioPage() {
  return (
  <>
   <CommonPageHeader {...pageHeaderContent.portfolio} />
   <PortfolioPageClient />;
  </>)
}
