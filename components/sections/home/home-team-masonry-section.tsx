"use client";

import Masonry from "@/components/Masonry";
import { CommonSectionTitle } from "@/components/shared/common-section-title";
import { Container } from "@/components/shared/container";
import { SectionReveal } from "@/components/shared/section-reveal";

const teamGalleryItems = [
  { id: 1, img: "/images/home/team-one.png", url: "/about-us", height: 400},
  { id: 2, img: "/images/home/team-two.png", url: "/about-us", height: 500},
  { id: 3, img: "/images/home/team-three.png", url: "/about-us", height: 350},
  { id: 4, img: "/images/home/team-four.png", url: "/about-us", height: 280},
  { id: 5, img: "/images/home/team-five.png", url: "/about-us", height: 380},
  { id: 6, img: "/images/home/team-six.png", url: "/about-us", height: 500},
  { id: 7, img: "/images/home/teamSeven.png", url: "/about-us", height: 350 },
  { id: 8, img: "/images/home/teamEight.png", url: "/about-us", height: 300 },
  { id: 9, img: "/images/home/teamNine.png", url: "/about-us", height: 250 },
] as const;

export function HomeTeamMasonrySection() {
  return (
    <section className="relative overflow-hidden pt-12 pb-8 sm:pt-16 sm:pb-10 lg:pt-20 lg:pb-14">
      <Container width="full" className="relative">
        <SectionReveal className="mx-auto max-w-4xl text-center" onView>
          <CommonSectionTitle
            title="Meet The Team Behind WhiteStork"
            highlights={["Team", "WhiteStork"]}
            className="max-w-4xl"
            titleClassName="text-3xl sm:text-4xl lg:text-[3rem]"
          />
        </SectionReveal>

        <SectionReveal className="mt-8 sm:mt-10" delay={0.06} onView>
          <div className="overflow-hidden  p-4 sm:p-5">
            <div className="relative">
              <Masonry
                items={teamGalleryItems}
                animateFrom="bottom"
                scaleOnHover
                hoverScale={0.98}
                blurToFocus
                colorShiftOnHover
              />
            </div>
          </div>
        </SectionReveal>
      </Container>
    </section>
  );
}
