"use client";

import CurvedLoop from "@/components/animations/CurvedLoop";

export function AiDevelopmentSection() {
  return (
    <section className="relative overflow-hidden pt-10 pb-4 sm:pt-12 sm:pb-5 lg:pt-14 lg:pb-6">
      <div className="relative flex items-center justify-center opacity-90">
        <CurvedLoop
          marqueeText="⬢ AI DEVELOPMENT   ⬢ AI DEVELOPMENT   ⬢ AI DEVELOPMENT   ⬢ AI DEVELOPMENT   ⬢ AI DEVELOPMENT   ⬢ AI DEVELOPMENT"
          speed={4.0}
          curveAmount={0}
          interactive
          className="fill-[color:color-mix(in_srgb,var(--brand-base)_56%,transparent)]"
        />
      </div>
    </section>
  );
}
