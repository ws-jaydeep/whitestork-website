import Image from "next/image";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import { footerContent } from "@/constants/header-footer-content";
import BlurText from "@/components/animations/BlurText";
import { Container } from "@/components/shared/container";
import { SectionReveal } from "@/components/shared/section-reveal";

const socialIconMap = {
  Instagram,
  LinkedIn: Linkedin,
  Facebook,
  X: Twitter,
} as const;

export function SiteFooter() {
  return (
    <footer className="footer-shell mt-16">
      <Container className="py-12" width="wide">
        <SectionReveal onView>
        <div className="grid gap-10 sm:gap-12 lg:grid-cols-2 xl:grid-cols-[0.85fr_1fr_0.75fr_1.2fr] xl:gap-12">
          <div className="space-y-5 sm:max-w-sm">
            <Link
              href="/"
              className="inline-flex rounded-[var(--theme-control-radius)] border px-3 py-2"
              style={{
                borderColor: "var(--footer-logo-border)",
                background: "var(--footer-logo-surface)",
                boxShadow: "var(--footer-logo-shadow)",
              }}
            >
              <Image
                src="/images/branding/company-logo.png"
                alt="WhiteStork company logo"
                width={243}
                height={46}
                className="h-11 w-auto object-contain"
              />
            </Link>  
          </div>

          <div className="space-y-4 sm:max-w-md">
            <BlurText as="h3" text="Services" animateBy="words" delay={30} className="brand-title text-xl font-semibold" />
            <ul className="brand-copy grid gap-x-6 gap-y-2.5 text-[0.96rem] leading-7 sm:grid-cols-2 xl:grid-cols-1">
              {footerContent.services.map((service) => (
                <li key={service}>
                  <span className="brand-link inline-block">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <BlurText as="h3" text="Company" animateBy="words" delay={30} className="brand-title text-xl font-semibold" />
            <ul className="brand-copy space-y-3 text-[0.96rem] leading-7">
              {footerContent.companyLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="brand-link inline-block">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-5">
            <BlurText as="h3" text="Contact us" animateBy="words" delay={30} className="brand-title text-xl font-semibold" />

            <div className="flex gap-3">
              <Mail className="mt-1 size-4 shrink-0 text-[var(--brand-base)]" />
              <div className="space-y-1.5">
                <BlurText as="p" text="Email" animateBy="words" delay={24} className="brand-title text-base font-medium" />
                {footerContent.emails.map((item) => (
                  <Link key={item.href} href={item.href} className="brand-link block text-[0.96rem] leading-7">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex gap-3">
              <Phone className="mt-1 size-4 shrink-0 text-[var(--brand-base)]" />
              <div className="space-y-1">
                <BlurText as="p" text="Mobile Number" animateBy="words" delay={24} className="brand-title text-base font-medium" />
                <Link href={footerContent.phone.href} className="brand-link text-[0.96rem] leading-7">
                  {footerContent.phone.label}
                </Link>
              </div>
            </div>
            {footerContent.locations.map((location) => (
              <div key={location.city} className="flex gap-3">
                <MapPin className="mt-1 size-4 shrink-0 text-[var(--brand-base)]" />
                <div className="space-y-1">
                  <BlurText as="p" text={location.city} animateBy="words" delay={24} className="brand-title text-base font-medium" />
                  <Link
                    href={location.href}
                    target="_blank"
                    rel="noreferrer"
                    className="brand-link block text-[0.96rem] leading-7"
                  >
                    {location.label}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        </SectionReveal>

        <div
          className="mt-10 flex flex-col gap-5 border-t pt-6 md:gap-6 lg:flex-row lg:items-center lg:justify-between"
          style={{ borderColor: "var(--footer-border)" }}
        >
          <div className="order-2 flex flex-wrap items-center gap-3 sm:order-1">
            {footerContent.socialLinks.map(({ href, label }) => {
              const Icon = socialIconMap[label];

              return (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="brand-social size-9"
                  aria-label={label}
                >
                  <Icon className="size-4" />
                </Link>
              );
            })}
          </div>

          <BlurText
            as="p"
            text={footerContent.copyright}
            animateBy="words"
            delay={16}
            className="order-1 text-sm text-[var(--brand-muted)] sm:order-2 lg:text-center"
          />

          <div className="order-3 flex flex-wrap items-center gap-5 text-sm text-[var(--brand-muted)]">
            {footerContent.legalLinks.map((item) => (
              <Link key={item.href} href={item.href} className="brand-legal-link">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
