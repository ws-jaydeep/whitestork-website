import type { Metadata } from "next";
import { NotFoundMotion } from "@/components/not-found-motion";

export const metadata: Metadata = {
  title: "Page Not Found | WhiteStork Software Solutions",
  description:
    "The page you are looking for could not be found. Return to WhiteStork Software Solutions home, services, or portfolio pages.",
};

export default function NotFound() {
  return <NotFoundMotion />;
}
