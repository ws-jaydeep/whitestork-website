export type TechStackItem = {
  image: string;
  title: string;
  items: string[];
  description: string;
};

export const Tech_Stacks_Data: TechStackItem[] = [
  {
    image: "/images/home/digital-marketing.png",
    title: "Digital Marketing",
    items: [
      "Website SEO",
      "Google Ads",
      "Growth Marketing",
      "Meta Ads",
      "Social Media Marketing",
      "Performance Marketing",
    ],
    description: "Data-driven growth, powered by strategy.",
  },
  {
    image: "/images/home/ai.png",
    title: "AI",
    items: [
      "OpenAI",
      "Anthropic (Claude)",
      "Google (Vertex AI)",
      "Microsoft (Azure AI)",
      "LangChain",
      "Hugging Face",
    ],
    description: "Smarter systems. Faster results.",
  },
  {
    image: "/images/home/web.png",
    title: "Web Development",
    items: [
      "NodeJS",
      "NestJS",
      "PHP",
      "HTML/CSS",
      "Python",
      "ReactJS",
      "NextJS",
      "ElectronJS",
    ],
    description: "Building the web, one pixel at a time.",
  },
  {
    image: "/images/home/mobile.png",
    title: "Mobile Development",
    items: ["Android", "iOS", "Flutter"],
    description: "Seamless apps. Smarter users.",
  },
  {
    image: "/images/home/qa.png",
    title: "Quality Assurance",
    items: [
      "Manual Testing",
      "Automation",
      "Selenium",
      "Appium",
      "Playwright",
      "Cucumber",
    ],
    description: "QA / Quality Assurance — Flawless performance, every time.",
  },
];
