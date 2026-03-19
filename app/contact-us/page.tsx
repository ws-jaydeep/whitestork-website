import type { Metadata } from "next";
import { ContactFormSection } from "@/components/contact-form-section";
import { CommonPageHeader } from "@/components/common-page-header";
import { pageHeaderContent } from "@/constants/page-header-content";

export const metadata: Metadata = {
  title: "Contact Us | WhiteStork Software Solutions",
  description:
    "Contact WhiteStork Software Solutions to discuss your product idea, website, automation workflow, or next digital project.",
};

export default function ContactUsPage() {
  return (
    <>
      <CommonPageHeader {...pageHeaderContent.contact} />
      <ContactFormSection />
    </>
  );
}
