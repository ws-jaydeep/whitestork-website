import type { StaticImageData } from "next/image";
import clientRobert from "@/public/images/home/client-robert.png";
import clientSmith from "@/public/images/home/client-smith.png";
import PlayPalLogo from "@/public/images/portfolio/playpal-logo.png";
import QualityFoodLogo from "@/public/images/portfolio/food-logo.png";

export type ClientReviewItem = {
  title: string;
  Description: string;
  name: string;
  role: string;
  image: StaticImageData;
  logo: StaticImageData;
};

export const Client_Story_Data: ClientReviewItem[] = [
  {
    title: "Amazing!",
    Description:
      "Working with Whitestork Software on the PlayPal Sports app was a fantastic experience. They took our vision and turned it into a seamless platform for booking sports facilities, managing memberships, and engaging with users. The team was professional, responsive, and truly understood the complexities of scheduling and user management. Their expertise in ReactJS and NestJS helped create a smooth and scalable application. Highly recommend them for any sports tech development!",
    name: "Michael R",
    role: "USA",
    image: clientSmith,
    logo: PlayPalLogo,
  },
  {
    title: "Very Excellent Job!",
    Description:
      "Whitestork Software delivered an outstanding e-commerce platform for our Quality Food & Wine business. From inventory management to seamless checkout, they built a robust system that improved our online sales and customer experience. Their PHP and ReactJS expertise ensured a fast and user-friendly platform, and their support team was always available to handle any tweaks or updates. A top-notch development partner!",
    name: "James L",
    role: "UK",
    image: clientRobert,
    logo: QualityFoodLogo,
  },
  
];
