import type { Metadata } from "next";
import { ContactFormSection } from "@/components/contact-form-section";
import { CommonPageHeader } from "@/components/common-page-header";
import { MetaData_Contact } from "@/constants/metadata";
import { pageHeaderContent } from "@/constants/page-header-content";

export const metadata: Metadata = MetaData_Contact;

export default function ContactUsPage() {
  return (
    <>
      <CommonPageHeader {...pageHeaderContent.contact} />
      <ContactFormSection />
    </>
  );
}
