import type { Metadata } from "next";
import PortfolioPageClient from "./portfolio-page-client";

export const metadata: Metadata = {
  title: "Portfolio | WhiteStork Software Solutions",
  description:
    "Browse WhiteStork portfolio projects across AI tools, web platforms, marketplaces, mobile apps, and business systems.",
};

export default function PortfolioPage() {
  return <PortfolioPageClient />;
}
