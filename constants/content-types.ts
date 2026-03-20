import type { StaticImageData } from "next/image";
import type { ComponentType, SVGProps } from "react";

export type IFactsAboutData = {
  title: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  description: string;
  color: string;
};

export type IAboutValueCard = {
  title: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  points: string[];
};

export type IEmployeeData = {
  name: string;
  designation: string;
  subDesignation: string;
  description: string;
  image: StaticImageData;
};

export type IWorkVibeVideo = {
  video: string;
  title: string;
  accent: string;
};

export type PortfolioProject = {
  id: number;
  name: string;
  logo: StaticImageData;
  image: StaticImageData;
  description: string;
  web?: string;
  ios?: string;
  playstore?: string;
  techStack: string[];
};

export type LegalSection = {
  heading: string;
  para?: string[];
  list?: string[];
  email?: string;
};
