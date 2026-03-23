import type { Metadata } from "next";
import { AiDevelopmentSection } from "@/components/sections/home/ai-development-section";
import { HomeClientReviewSection } from "@/components/sections/home/home-client-review-section";
import { HomeChooseSection } from "@/components/sections/home/home-choose-section";
import { HomeOfferServicesSection } from "@/components/sections/home/home-offer-services-section";
import { HomeProjectCarouselSection } from "@/components/sections/home/home-project-carousel-section";
import { HomeTeamMasonrySection } from "@/components/sections/home/home-team-masonry-section";
import { HomeTechStacksSection } from "@/components/sections/home/home-tech-stacks-section";
import { HomeTestimonialsSection } from "@/components/sections/home/home-testimonials-section";
import { HomeTrustedSection } from "@/components/sections/home/home-trusted-section";
import { NegotioShowcaseSection } from "@/components/sections/home/negotio-showcase-section";
import { MetaData_Home } from "@/constants/metadata";
import HomeMain from "@/components/sections/home/home-main";

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
      <HomeTeamMasonrySection />
    </>
  );
}
