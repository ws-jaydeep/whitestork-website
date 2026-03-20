"use client";

import Image, { type StaticImageData } from "next/image";
import BlurText from "@/components/BlurText";
import { cn } from "@/lib/utils";

type CommonProfileCardProps = {
  name: string;
  designation: string;
  subDesignation: string;
  image: StaticImageData;
  onClick?: () => void;
  className?: string;
};

export function CommonProfileCard({
  name,
  designation,
  image,
  subDesignation,
  onClick,
  className,
}: CommonProfileCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "group block h-full w-full cursor-pointer text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-base)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--background)]",
        className,
      )}
    >
      <div className="relative h-[410px] rounded-[2rem] border border-[var(--brand-border)] bg-[linear-gradient(180deg,color-mix(in_srgb,var(--brand-surface-strong)_94%,transparent),color-mix(in_srgb,var(--brand-surface)_92%,transparent))] p-6 shadow-[var(--brand-shadow)] transition-[transform,box-shadow,border-color,background] duration-500 ease-out group-hover:-translate-y-2 group-hover:border-[color:color-mix(in_srgb,var(--brand-base)_18%,var(--brand-border))] group-hover:bg-[linear-gradient(180deg,color-mix(in_srgb,var(--brand-surface-strong)_98%,transparent),color-mix(in_srgb,var(--brand-surface)_98%,transparent))] group-hover:shadow-[var(--brand-shadow-strong)] sm:h-[440px] sm:p-7">
        <div className="absolute inset-x-8 top-6 h-24 rounded-full bg-[radial-gradient(circle,color-mix(in_srgb,var(--brand-base)_22%,transparent)_0%,transparent_72%)] opacity-0 blur-2xl transition duration-500 group-hover:opacity-100" />
        <div className="flex h-full flex-col">
          <div className="flex flex-1 items-center justify-center">
            <div className="relative h-52 w-52 overflow-hidden rounded-full border-4 border-[color:var(--brand-surface-strong)] bg-[color:var(--brand-surface)] shadow-[var(--brand-shadow)] transition duration-500 ease-out group-hover:shadow-[var(--brand-shadow-strong)] sm:h-60 sm:w-60">
              <div className="absolute inset-0 rounded-full ring-0 ring-[var(--brand-base)]/12 transition duration-500 group-hover:ring-6" />
              <Image
                src={image}
                alt={name}
                fill
                className="object-cover object-top"
                sizes="240px"
              />
            </div>
          </div>

          <div className="flex translate-y-0 flex-col items-center justify-end text-center transition duration-500 ease-out group-hover:-translate-y-1">
            <BlurText
              as="h3"
              text={name}
              animateBy="words"
              delay={26}
              className="brand-title text-2xl font-semibold transition duration-500 group-hover:text-[var(--brand-base)]"
            />
            <BlurText
              as="p"
              text={designation}
              animateBy="words"
              delay={18}
              className="brand-copy mt-2 max-w-[22rem] text-sm leading-6 transition duration-500 group-hover:text-[var(--brand-strong)]/80 sm:text-base"
            />
            <BlurText
              as="p"
              text={subDesignation}
              animateBy="words"
              delay={18}
              className="brand-copy mt-2 max-w-[22rem] text-sm leading-6 transition duration-500 group-hover:text-[var(--brand-strong)]/80 sm:text-base"
            />
          </div>
        </div>
      </div>
    </button>
  );
}
