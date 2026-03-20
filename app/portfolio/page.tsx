import type { Metadata } from "next";
import { MetaData_Portfolio } from "@/constants/metadata";
import PortfolioPageClient from "./portfolio-page-client";

export const metadata: Metadata = MetaData_Portfolio;

export default function PortfolioPage() {
  return <PortfolioPageClient />;
}
