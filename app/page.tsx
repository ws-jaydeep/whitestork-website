import type { Metadata } from "next";
import { HomeTrustedSection } from "@/components/home-trusted-section";
import HomeMain from "./home/homeMain";

export const metadata: Metadata = {
  title: "Home | WhiteStork Software Solutions",
  description:
    "AI-powered automation for modern business with smart, scalable solutions for SaaS and SMBs.",
};

export default function Home() {
  return (
    <>
      <HomeMain />
      <HomeTrustedSection />
    </>
  );
}
