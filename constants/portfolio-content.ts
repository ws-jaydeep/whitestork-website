import creatorwrkLogo from "@/public/images/portfolio/creatorwrk-logo.png";
import creatorwrkWeb from "@/public/images/portfolio/creatorwrk-web.png";
import cryptoLogo from "@/public/images/portfolio/crypto-logo.png";
import cryptoWeb from "@/public/images/portfolio/crypto-web.png";
import drivingLogo from "@/public/images/portfolio/driving-logo.png";
import drivingWeb from "@/public/images/portfolio/driving-web.png";
import fiberwayLogo from "@/public/images/portfolio/fiberway-logo.png";
import fiberwayWeb from "@/public/images/portfolio/fiberway-web.png";
import foodLogo from "@/public/images/portfolio/food-logo.png";
import foodWineWeb from "@/public/images/portfolio/food-wine-web.png";
import kraftedCareLogo from "@/public/images/portfolio/krafted-care-logo.png";
import kraftedCareWeb from "@/public/images/portfolio/krafted-care-web.png";
import masLogo from "@/public/images/portfolio/mas-logo.png";
import masWeb from "@/public/images/portfolio/mas-web.png";
import mixBitzLogo from "@/public/images/portfolio/mix-bitz-logo.png";
import mixBitzWeb from "@/public/images/portfolio/mix-bitz-web.png";
import negotioLogo from "@/public/images/portfolio/negotio-logo.png";
import negotioWeb from "@/public/images/portfolio/negotio-web.png";
import pixiesLogo from "@/public/images/portfolio/pixies-logo.png";
import pixiesWeb from "@/public/images/portfolio/pixies-web.png";
import playpalLogo from "@/public/images/portfolio/playpal-logo.png";
import playpalWeb from "@/public/images/portfolio/playpal-web.png";
import qualAgentLogo from "@/public/images/portfolio/qual-agent-logo.png";
import qualAgentWeb from "@/public/images/portfolio/qual-agent-web.png";
import rapidLiftLogo from "@/public/images/portfolio/rapid-lift-logo.png";
import rapidLiftWeb from "@/public/images/portfolio/rapid-lift-web.png";
import tennisLogo from "@/public/images/portfolio/tennis-logo.png";
import tennisAppWeb from "@/public/images/portfolio/tennis-app-web.png";
import testRouteLogo from "@/public/images/portfolio/test-route-logo.png";
import testRouteWeb from "@/public/images/portfolio/test-route-web.png";
import ticketSnapperLogo from "@/public/images/portfolio/ticket-snapper-logo.png";
import ticketSnapperWeb from "@/public/images/portfolio/ticket-snapper-web.png";
import xpressLogo from "@/public/images/portfolio/xpress-logo.png";
import xpressWeb from "@/public/images/portfolio/xpress-web.png";
import type { PortfolioProject } from "@/constants/content-types";

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 1,
    name: "Negotio AI",
    logo: negotioLogo,
    image: negotioWeb,
    description:
      "An AI-powered platform that helps you bargain and find the best deals, saving you time and money with smart negotiations.",
    web: "https://negotio.whitestorksoft.com/",
    techStack: ["OpenAI", "React JS", "NestJS", "AWS", "PostgreSQL"],
  },
  {
    id: 2,
    name: "QualAgent",
    logo: qualAgentLogo,
    image: qualAgentWeb,
    description: "An AI tool that makes mobile app testing fast and automatic.",
    web: "https://qualgent.ai/",
    techStack: ["OpenAI", "React JS", "Python", "Supabase", "Next.js"],
  },
  {
    id: 3,
    name: "Xpress Labs",
    logo: xpressLogo,
    image: xpressWeb,
    description:
      "An AI-powered platform that automates the entire quality assurance process effortlessly, ensuring faster delivery with unmatched accuracy.",
    web: "https://xpresslabs.ai/",
    techStack: ["OpenAI", "React JS", "Node.js", "AWS", "Python"],
  },
  {
    id: 4,
    name: "Pixies Gardens",
    logo: pixiesLogo,
    image: pixiesWeb,
    description:
      "Pixies Gardens offers live and artificial plants nationwide, blending nursery roots with modern e-commerce on Shopify, Amazon, and Walmart.",
    web: "https://www.pixiesgardens.com/",
    techStack: ["Shopify"],
  },
  {
    id: 5,
    name: "Creatorwrk",
    logo: creatorwrkLogo,
    image: creatorwrkWeb,
    description:
      "Platform connecting influencers and brands to bridge the gap between creators and businesses.",
    web: "https://creatorwrk.com",
    techStack: ["React JS", "Tailwind CSS", "NestJS", "GraphQL"],
  },
  {
    id: 6,
    name: "PlayPal Sports",
    logo: playpalLogo,
    image: playpalWeb,
    description:
      "Streamline sports bookings for players and managers alike with a user-friendly platform.",
    playstore: "https://play.google.com/store/apps/details?id=com.playpal.android",
    ios: "https://apps.apple.com/app/id6473602475",
    web: "https://www.playpalsports.com",
    techStack: ["React JS", "NestJS", "GraphQL", "Tailwind CSS", "Flutter"],
  },
  {
    id: 7,
    name: "FiberWay",
    logo: fiberwayLogo,
    image: fiberwayWeb,
    description:
      "FiberWay delivers authentic farm-to-brand data, ensuring transparency, sustainability, and trust across the supply chain.",
    web: "https://fiberwaysource.com/",
    techStack: ["NestJS", "React JS", "PHP", "Tailwind CSS"],
  },
  {
    id: 8,
    name: "RapidLift",
    logo: rapidLiftLogo,
    image: rapidLiftWeb,
    description:
      "From fast deliveries to flexible payments, RapidLift is built around your needs.",
    playstore: "https://play.google.com/store/apps/details?id=com.rapidlift.android",
    ios: "https://apps.apple.com/us/app/rapid-lift/id6747738269",
    web: "https://rapidlift.whitestorksoft.com/",
    techStack: ["Flutter", "Dart", "Node.js", "React JS", "Tailwind CSS"],
  },
  {
    id: 10,
    name: "Quality Foods & Wines",
    logo: foodLogo,
    image: foodWineWeb,
    description:
      "Quality Foods and Wines blends fine food, exceptional wines, and customer-first service.",
    web: "https://qualityfoodandwine.co.uk",
    techStack: ["React JS", "PHP", "Tailwind CSS"],
  },
  {
    id: 11,
    name: "Tennis App",
    logo: tennisLogo,
    image: tennisAppWeb,
    description: "Tennis scores delivered live and accurately anytime, anywhere.",
    web: "https://tennis-app.whitestorksoft.com/",
    techStack: ["Electron", "Tailwind CSS", "React JS"],
  },
  {
    id: 12,
    name: "Ticket Snapper",
    logo: ticketSnapperLogo,
    image: ticketSnapperWeb,
    description:
      "Ticket reselling platform serving multiple event categories with seamless transactions.",
    web: "https://ticketsnapper.whitestorksoft.com/",
    techStack: ["Next.js", "Tailwind CSS", "NestJS", "GraphQL"],
  },
  {
    id: 13,
    name: "Krafted Care",
    logo: kraftedCareLogo,
    image: kraftedCareWeb,
    description: "Customized medical treatment anytime and anywhere, 24/7.",
    web: "https://kraftedcare.com/",
    techStack: ["PHP", "Laravel"],
  },
  {
    id: 14,
    name: "Mix Bitz",
    logo: mixBitzLogo,
    image: mixBitzWeb,
    description: "Craft personalized videos with limitless customization options.",
    playstore: "https://play.google.com/store/apps/details?id=com.brainpax.mixbitz",
    techStack: ["Kotlin"],
  },
  {
    id: 15,
    name: "Crypto Cloud Expo",
    logo: cryptoLogo,
    image: cryptoWeb,
    description: "Dubai's largest cryptocurrency summit experience.",
    web: "https://cryptocloudexpo.com/",
    techStack: ["HTML", "CSS"],
  },
  {
    id: 16,
    name: "KK Driving",
    logo: drivingLogo,
    image: drivingWeb,
    description: "Master automatic and manual driving with expert lessons.",
    web: "https://kkdriving.co.uk/",
    techStack: ["WordPress"],
  },
  {
    id: 17,
    name: "Test Routes",
    logo: testRouteLogo,
    image: testRouteWeb,
    description:
      "Driving test routes across the UK so learners know their route back to front.",
    web: "https://www.testroutes.co.uk/",
    ios: "https://apps.apple.com/in/app/test-routes/id1520170627",
    playstore:
      "https://play.google.com/store/apps/details?id=com.deepcoder.testroute&pli=1",
    techStack: ["Kotlin"],
  },
  {
    id: 18,
    name: "MAS",
    logo: masLogo,
    image: masWeb,
    description:
      "A mobile app that tracks salesperson activity with real-time updates for managers.",
    playstore: "https://play.google.com/store/apps/details?id=com.whitestork.skf",
    techStack: ["Flutter"],
  },
];
