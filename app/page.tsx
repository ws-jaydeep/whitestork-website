import type { Metadata } from "next";
import { AiDevelopmentSection } from "@/components/ai-development-section";
import { HomeClientReviewSection } from "@/components/home-client-review-section";
import { HomeChooseSection } from "@/components/home-choose-section";
import { HomeOfferServicesSection } from "@/components/home-offer-services-section";
import { HomeProjectCarouselSection } from "@/components/home-project-carousel-section";
import { HomeTechStacksSection } from "@/components/home-tech-stacks-section";
import { HomeTestimonialsSection } from "@/components/home-testimonials-section";
import { HomeTrustedSection } from "@/components/home-trusted-section";
import { NegotioShowcaseSection } from "@/components/negotio-showcase-section";
import { MetaData_Home } from "@/constants/metadata";
import HomeMain from "./home/homeMain";

export const metadata: Metadata = MetaData_Home;

export default function Home() {
  return (
    <>
      <HomeMain />
      <HomeTrustedSection />
      <HomeOfferServicesSection />
      <NegotioShowcaseSection />
      <AiDevelopmentSection />
      <HomeChooseSection />
      <HomeProjectCarouselSection />
      <HomeTestimonialsSection />
      <HomeClientReviewSection />
      <HomeTechStacksSection />
    </>
  );
}
