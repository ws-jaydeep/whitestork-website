import {
  Award,
  Briefcase,
  DiamondIcon,
  Globe,
  Rocket,
  Smile,
  Sparkles,
  Star,
  Target,
  ShoppingCart,
  Trophy,
  Users,
  User2,
} from "lucide-react";
import aman from "@/public/images/about/employees/aman.png";
import anjali from "@/public/images/about/employees/anjali.png";
import ankit from "@/public/images/about/employees/ankit.png";
import arbaz from "@/public/images/about/employees/arbaz.png";
import ashishBhai from "@/public/images/about/employees/ashish-bhai.png";
import bhakti from "@/public/images/about/employees/bhakti.png";
import bhargav from "@/public/images/about/employees/bhargav.png";
import bhumi from "@/public/images/about/employees/bhumi.png";
import bhumihr from "@/public/images/about/employees/bhumihr.png";
import brij from "@/public/images/about/employees/brij.png";
import darshan from "@/public/images/about/employees/darshan.png";
import dhruvanshi from "@/public/images/about/employees/dhruvanshi.png";
import dhruvi from "@/public/images/about/employees/dhruvi.png";
import dhruvil from "@/public/images/about/employees/dhruvil.png";
import dhruvithesiya from "@/public/images/about/employees/dhruvithesiya.png";
import het from "@/public/images/about/employees/het.png";
import heta from "@/public/images/about/employees/heta.png";
import hirenBhai from "@/public/images/about/employees/hiren-bhai.png";
import jaydeep from "@/public/images/about/employees/jd3.jpg";
import jeel from "@/public/images/about/employees/jeel.png";
import jenil from "@/public/images/about/employees/jenil.png";
import kanvi from "@/public/images/about/employees/kanvi.png";
import krishna from "@/public/images/about/employees/krishna.png";
import nikul from "@/public/images/about/employees/nikul.png";
import pratik from "@/public/images/about/employees/pratik.png";
import priyanshi from "@/public/images/about/employees/priyanshi.png";
import ravi from "@/public/images/about/employees/ravi.png";
import riya from "@/public/images/about/employees/riya.png";
import shivani from "@/public/images/about/employees/shivani.png";
import sweta from "@/public/images/about/employees/sweta.png";
import tilak from "@/public/images/about/employees/tilak.png";
import vidhi from "@/public/images/about/employees/vidhi.png";
import zeel from "@/public/images/about/employees/zeel.png";
import type {
  IAboutValueCard,
  IEmployeeData,
  IFactsAboutData,
  IWorkVibeVideo,
} from "@/constants/content-types";

export const Facts_About: IFactsAboutData[] = [
  {
    title: "10+",
    icon: Award,
    description: "Years in Business",
    color: "#2C9BD0",
  },
  {
    title: "50+",
    icon: Users,
    description: "Team Members",
    color: "#EB9B37",
  },
  {
    title: "120+",
    icon: Smile,
    description: "Happy Clients",
    color: "#D046B4",
  },
  {
    title: "98%",
    icon: Sparkles,
    description: "Repeat Clients Ratio",
    color: "#86C869",
  },
  {
    title: "20+",
    icon: Globe,
    description: "Countries Served",
    color: "#3ECAC1",
  },
  {
    title: "90+",
    icon: Briefcase,
    description: "Clients",
    color: "#AA75FF",
  },
  {
    title: "80+",
    icon: Trophy,
    description: "Apps Launched",
    color: "#89BCF6",
  },
  {
    title: "90+",
    icon: ShoppingCart,
    description: "Websites Launched",
    color: "#F2591D",
  },
  {
    title: "100+",
    icon: Star,
    description: "5 Star Ratings",
    color: "#0A7570",
  },
  {
    title: "5M+",
    icon: User2,
    description: "Happy End-Users",
    color: "#41199E",
  },
];

export const About_Value_Cards: IAboutValueCard[] = [
  {
    title: "Vision",
    icon: Target,
    points: [
      "To make software that simplifies lives.",
      "Help businesses grow through smart tech.",
      "Lead with clarity and innovation.",
      "Build solutions that people love to use.",
      "Be known for trust and impact.",
    ],
  },
  {
    title: "Mission",
    icon: Rocket,
    points: [
      "Turn ideas into real, working products.",
      "Deliver clean, quality code every time.",
      "Keep things simple and easy to use.",
      "Always meet deadlines with care.",
      "Work closely with clients at every step.",
    ],
  },
  {
    title: "Values",
    icon: DiamondIcon,
    points: [
      "Simplicity in every solution.",
      "Quality in every detail.",
      "Respect for time and trust.",
      "Clear and honest communication.",
      "Passion for building great software.",
    ],
  },
];

export const Employees: IEmployeeData[] = [
  {
    name: "Hiren Ghoniya",
    designation: "CEO",
    subDesignation: " Chief Everything Officer",
    description: "Solves problems no one saw coming, usually caused by the team.",
    image: hirenBhai,
  },
  {
    name: "Ashish Makwana",
    designation: "CTO",
    subDesignation: "Code Godfather",
    description: "Threatens bugs with a git push and they disappear.",
    image: ashishBhai,
  },
  {
    name: "Darshan Akbari",
    designation: "Marketing Head",
    subDesignation: "Lord of Leads",
    description: "Generates leads using cat memes and dark magic.",
    image: darshan,
  },
  {
    name: "Ravi Rupapara",
    designation: "Sales Lead Manager",
    subDesignation: "Money Magnet",
    description: "Could sell sunscreen in Antarctica with a smile.",
    image: ravi,
  },
  {
    name: "Jeel Patel",
    designation: "HR",
    subDesignation: "Attendance Avenger",
    description: "Tracks attendance so hard, even ghosts punch in.",
    image: jeel,
  },
  {
    name: "Bhumi Patadiya",
    designation: "HR",
    subDesignation: "Culture Builder",
    description: "Tracks attendance so precisely, even late excuses arrive early.",
    image: bhumihr,
  },

  {
    name: "Tilak Patel",
    designation: "Backend Developer",
    subDesignation: "Database Jedi",
    description: "Wields SQL like a lightsaber and keeps the data layer calm.",
    image: tilak,
  },
  {
    name: "Jaydeep Gadhavi",
    designation: "Frontend Developer",
    subDesignation: "UI Architect",
    description: "Aligns everything perfectly, even life feels centered.",
    image: jaydeep,
  },  {
    name: "Riya Patel",
    designation: "Frontend Developer",
    subDesignation: "Pixel Pusher",
    description: "Fixes layout bugs by staring at the screen until they surrender.",
    image: riya,
  },{
    name: "Pratik Gupta",
    designation: "Backend Developer",
    subDesignation: "Lord of the Loops",
    description: "His APIs are so fast, they feel like time travel.",
    image: pratik,
  },
  
  {
    name: "Vidhi Vekariya",
    designation: "Frontend Intern",
    subDesignation: "Design Enthusiast",
    description: "Learns every day, breaks things occasionally, improves always.",
    image: vidhi,
  },
  {
    name: "Dhruvil Prajapati",
    designation: "Frontend Intern",
    subDesignation: "Code Learner",
    description: "Turns curiosity into code, one line at a time.",
    image: dhruvil,
  },
  {
    name: "Zeel Dhaduk",
    designation: "Backend Intern",
    subDesignation: "Core Logic Developer",
    description: "Keeps the server running, even while still learning.",
    image: zeel,
  },
  {
    name: "Kanvi Doshi",
    designation: "Backend Intern",
    subDesignation: "System Learner",
    description: "Builds logic so strong, even edge cases behave.",
    image: kanvi,
  },
  {
    name: "Heta Patel",
    designation: "Frontend Developer",
    subDesignation: "Interface Innovator",
    description: "Builds experiences so seamless, users forget it is code.",
    image: heta,
  },
  {
    name: "Aman Nayak",
    designation: "Flutter Developer",
    subDesignation: "Cross-Platform Pro",
    description: "Creates UI so fast, even ideas struggle to keep up.",
    image: aman,
  },
  {
    name: "Arbaz Khan",
    designation: "Sr. UI/UX Designer",
    subDesignation: "Rage-Click Preventer",
    description: "Turns rage-clicks into love-taps since forever.",
    image: arbaz,
  },
  {
    name: "Priyanshi Shah",
    designation: "UI/UX Designer",
    subDesignation: "Figma Sorceress",
    description: "Designs so smooth, users think it is magic. It is.",
    image: priyanshi,
  },
  {
    name: "Krishna Dholakiya",
    designation: "Graphic Designer",
    subDesignation: "Pixel Ninja",
    description: "Can spot a 1px misalignment from a kilometer away.",
    image: krishna,
  },
  {
    name: "Anjali Gajera",
    designation: "Shopify Consultant",
    subDesignation: "E-commerce Builder",
    description: "Optimizes Shopify so well, sales feel automatic.",
    image: anjali,
  },
  {
    name: "Bhargav Joshi",
    designation: "Biz Dev Executive",
    subDesignation: "Opportunity Snatcher",
    description: "Kicks doors open, even if it is a Zoom call.",
    image: bhargav,
  },
  {
    name: "Brijrajshinh Sarvaiya",
    designation: "Biz Dev Executive",
    subDesignation: "Deal Hacker",
    description: "His pitch deck has closing powers of a Marvel snap.",
    image: brij,
  },
  {
    name: "Shivani Parmar",
    designation: "Biz Dev Executive",
    subDesignation: "Inbox Destroyer",
    description: "Sends follow-ups so sharp, Gmail files a complaint.",
    image: shivani,
  },
  {
    name: "Jenil Gajera",
    designation: "Digital Marketing",
    subDesignation: "Growth Hacker",
    description: "Makes your brand show up at the right time, every time.",
    image: jenil,
  },
  {
    name: "Het Khunt",
    designation: "Digital Marketing",
    subDesignation: "Brand Booster",
    description: "Turns clicks into customers, and customers into growth.",
    image: het,
  },
  {
    name: "Sweta Savaliya",
    designation: "Digital Marketing",
    subDesignation: "Traffic Generator",
    description: "Makes brands visible, even in the noisiest markets.",
    image: sweta,
  },
  {
    name: "Bhumika Sojitra",
    designation: "Digital Marketing",
    subDesignation: "Algorithm Whisperer",
    description: "Turns data into decisions, and decisions into growth.",
    image: bhumi,
  },
  {
    name: "Nikul Sarvaiya",
    designation: "SEO Executive",
    subDesignation: "Ranking Strategist",
    description: "Makes your brand easy to find, hard to ignore.",
    image: nikul,
  },
  {
    name: "Dhruvi Thesiya",
    designation: "SEO Executive",
    subDesignation: "Search Specialist",
    description: "Ranks pages so well, even competitors take notes.",
    image: dhruvithesiya,
  },
  {
    name: "Dhruvanshi Kyada",
    designation: "SEO Intern",
    subDesignation: "Growth Trainee",
    description: "Optimizes quietly, improves consistently.",
    image: dhruvanshi,
  },
  {
    name: "Bhakti Jiyani",
    designation: "SEO Intern",
    subDesignation: "Keyword Researcher",
    description: "Optimizes quietly, improves consistently.",
    image: bhakti,
  },
  {
    name: "Dhruvi Gandhi",
    designation: "QA Engineer",
    subDesignation: "Pixel Perfection Police",
    description: "Breaks things just to make sure you do not.",
    image: dhruvi,
  },
  {
    name: "Ankit Upadhyay",
    designation: "Care Taker",
    subDesignation: "Office Guardian",
    description:
      "Keeps the office spotless, everyone hydrated, and the vibe just right. From morning tea to midday smiles, he is the silent force behind our smooth day.",
    image: ankit,
  },
];

export const Work_Vibe_Data: IWorkVibeVideo[] = [
  {
    video: "/video/ganesha.webm",
    title: "Festival Spirit",
    accent: "#f59e0b",
  },
  {
    video: "/video/cricket.webm",
    title: "Cricket Breaks",
    accent: "#22c55e",
  },
  {
    video: "/video/trip.webm",
    title: "Team Trips",
    accent: "#0ea5e9",
  },
  {
    video: "/video/ras-garba.webm",
    title: "Raas Nights",
    accent: "#ec4899",
  },
  {
    video: "/video/christmas.webm",
    title: "Holiday Moments",
    accent: "#ef4444",
  },
  {
    video: "/video/cup-game.webm",
    title: "Fun Challenges",
    accent: "#8b5cf6",
  },
  {
    video: "/video/garba.webm",
    title: "Office Garba",
    accent: "#f97316",
  },
];
