import { Award, Globe, Trophy, Users } from "lucide-react";
import type { ComponentType, SVGProps } from "react";

export const Choose_right_Data = [
  {
    title: "AI Expert",
    description:
      "Leverage cutting-edge AI expertise to transform workflows, improve efficiency, and unlock smarter decision-making.",
  },
  {
    title: "Agent Creation",
    description:
      "Build intelligent AI agents that automate processes, enhance customer engagement, and reduce operational costs.",
  },
  {
    title: "Web Development",
    description:
      "Craft modern, scalable, and secure web solutions tailored to your business needs with seamless user experiences.",
  },
  {
    title: "Mobile Development",
    description:
      "Deliver high-performing mobile apps with intuitive design and robust functionality for iOS and Android platforms.",
  },
] as const;

export const Home_Experience_Data: Array<{
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  color: string;
}> = [
  {
    icon: Trophy,
    title: "120+",
    description: "Projects Completed",
    color: "#2C9BD0",
  },
  {
    icon: Award,
    title: "10+",
    description: "Years of Experience",
    color: "#EB9B37",
  },
  {
    icon: Globe,
    title: "20+",
    description: "Industries",
    color: "#D046B4",
  },
  {
    icon: Users,
    title: "80+",
    description: "Clients",
    color: "#86C869",
  },
] as const;
