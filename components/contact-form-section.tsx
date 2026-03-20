"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  CheckCircle2,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
} from "lucide-react";
import BlurText from "@/components/BlurText";
import { Container } from "@/components/container";
import { CommonSectionTitle } from "@/components/common-section-title";
import { SectionReveal } from "@/components/section-reveal";
import { footerContent } from "@/constants/header-footer-content";
import { buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

type FormValues = {
  name: string;
  email: string;
  company: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;
type TouchedFields = Partial<Record<keyof FormValues, boolean>>;

const initialValues: FormValues = {
  name: "",
  email: "",
  company: "",
  message: "",
};

function validateForm(values: FormValues) {
  const errors: FormErrors = {};

  if (!values.name.trim()) {
    errors.name = "Please enter your name.";
  } else if (values.name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters.";
  }

  if (!values.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!values.company.trim()) {
    errors.company = "Please enter your company name.";
  } else if (values.company.trim().length < 2) {
    errors.company = "Company name must be at least 2 characters.";
  }

  if (!values.message.trim()) {
    errors.message = "Please enter your message.";
  } else if (values.message.trim().length < 20) {
    errors.message = "Message must be at least 20 characters.";
  }

  return errors;
}

export function ContactFormSection() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<TouchedFields>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const primaryEmail = footerContent.emails[2];
  const primaryLocation = footerContent.locations[0];
  const socialLinks = [
    {
      href: footerContent.socialLinks[0]?.href ?? "#",
      label: "Instagram",
      icon: Instagram,
    },
    {
      href: footerContent.socialLinks[1]?.href ?? "#",
      label: "LinkedIn",
      icon: Linkedin,
    },
    {
      href: footerContent.socialLinks[2]?.href ?? "#",
      label: "Facebook",
      icon: Facebook,
    },
    {
      href: footerContent.socialLinks[3]?.href ?? "#",
      label: "X",
      icon: Twitter,
    },
  ];

  function updateField<K extends keyof FormValues>(field: K, value: FormValues[K]) {
    setValues((current) => ({ ...current, [field]: value }));
    if (touched[field]) {
      const nextValues = { ...values, [field]: value };
      const nextErrors = validateForm(nextValues);
      setErrors((current) => ({ ...current, [field]: nextErrors[field] }));
    } else {
      setErrors((current) => ({ ...current, [field]: undefined }));
    }
    setIsSubmitted(false);
  }

  function handleBlur<K extends keyof FormValues>(field: K) {
    setTouched((current) => ({ ...current, [field]: true }));
    const nextErrors = validateForm(values);
    setErrors((current) => ({ ...current, [field]: nextErrors[field] }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors = validateForm(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setTouched({
        name: true,
        email: true,
        company: true,
        message: true,
      });
      setIsSubmitted(false);
      return;
    }

    setIsSubmitting(true);

    await new Promise((resolve) => window.setTimeout(resolve, 700));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setShowToast(true);
    setValues(initialValues);
    setTouched({});
    window.setTimeout(() => setShowToast(false), 3200);
  }

  return (
    <section className="relative bg-[linear-gradient(180deg,color-mix(in_srgb,var(--background)_100%,transparent)_0%,color-mix(in_srgb,var(--brand-surface)_88%,var(--background))_100%)] py-10 sm:py-18 lg:py-24">
      <AnimatePresence>
        {showToast ? (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.24, ease: "easeOut" }}
            className="fixed bottom-5 right-4 z-50 w-[calc(100%-2rem)] max-w-sm rounded-[var(--theme-card-radius)] border border-[color:var(--brand-base)]/30 bg-[color:var(--brand-surface-strong)] p-4 shadow-[var(--brand-shadow-strong)] backdrop-blur sm:bottom-6 sm:right-6"
          >
            <div className="flex items-start gap-3">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[var(--brand-base)]/12 text-[var(--brand-base)]">
                <CheckCircle2 className="size-5" />
              </div>
              <div>
                <BlurText
                  as="p"
                  text="Message submitted successfully"
                  animateBy="words"
                  delay={20}
                  className="font-medium text-[var(--brand-strong)]"
                />
                <BlurText
                  as="p"
                  text="Thanks for reaching out. We will get back to you soon."
                  animateBy="words"
                  delay={16}
                  className="mt-1 text-sm leading-6 text-[var(--brand-muted)]"
                />
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <Container width="wide">
        <SectionReveal onView>
        <div className="grid gap-5 sm:gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
          <div className="rounded-[calc(var(--theme-panel-radius)-6px)] border border-[var(--brand-border)] bg-[color:var(--brand-surface)] p-4 shadow-[var(--brand-shadow)] backdrop-blur-sm sm:rounded-[var(--theme-panel-radius)] sm:p-6 lg:p-8">
            <CommonSectionTitle
              title="Contact Us"
              highlights={["Contact Us"]}
              description={
                <span>
                  &ldquo;We&apos;re just a click away!{" "}
                  <span className="text-[var(--brand-base)]">Reach out to us</span> to explore
                  collaboration opportunities.&rdquo;
                </span>
              }
              align="left"
              className="mx-0 max-w-xl"
              titleClassName="text-3xl sm:text-4xl"
              descriptionClassName="mx-0 max-w-xl text-[0.98rem] leading-7 sm:text-lg sm:leading-9"
            />

            <div className="mt-6 space-y-5 sm:mt-8 sm:space-y-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[color:var(--brand-surface-strong)] text-[var(--brand-base)] shadow-[var(--brand-shadow)] sm:size-11">
                  <Mail className="size-4 sm:size-5" />
                </div>
                <div className="min-w-0">
                  <BlurText
                    as="p"
                    text="Email"
                    animateBy="words"
                    delay={18}
                    className="text-sm font-medium text-[var(--brand-muted)]"
                  />
                  <Link
                    href={primaryEmail.href}
                    className="mt-1 inline-block break-all text-base leading-7 text-[var(--brand-strong)] transition hover:text-[var(--brand-base)] sm:text-lg"
                  >
                    <BlurText
                      as="span"
                      text={primaryEmail.label.replace(" (For Legal)", "")}
                      animateBy="words"
                      delay={16}
                      className="!inline-flex !flex-none"
                    />
                  </Link>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[color:var(--brand-surface-strong)] text-[var(--brand-base)] shadow-[var(--brand-shadow)] sm:size-11">
                  <Phone className="size-4 sm:size-5" />
                </div>
                <div className="min-w-0">
                  <BlurText
                    as="p"
                    text="Phone"
                    animateBy="words"
                    delay={18}
                    className="text-sm font-medium text-[var(--brand-muted)]"
                  />
                  <Link
                    href={footerContent.phone.href}
                    className="mt-1 inline-block text-base leading-7 text-[var(--brand-strong)] transition hover:text-[var(--brand-base)] sm:text-lg"
                  >
                    <BlurText
                      as="span"
                      text={footerContent.phone.label}
                      animateBy="words"
                      delay={16}
                      className="!inline-flex !flex-none"
                    />
                  </Link>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[color:var(--brand-surface-strong)] text-[var(--brand-base)] shadow-[var(--brand-shadow)] sm:size-11">
                  <MapPin className="size-4 sm:size-5" />
                </div>
                <div className="min-w-0">
                  <BlurText
                    as="p"
                    text="Address"
                    animateBy="words"
                    delay={18}
                    className="text-sm font-medium text-[var(--brand-muted)]"
                  />
                  <Link
                    href={primaryLocation.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 inline-block text-base leading-7 text-[var(--brand-strong)] transition hover:text-[var(--brand-base)] sm:text-lg sm:leading-9"
                  >
                    <BlurText
                      as="span"
                      text={primaryLocation.label}
                      animateBy="words"
                      delay={16}
                      className="!inline-flex !flex-none"
                    />
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2.5 sm:mt-8 sm:gap-3">
              {socialLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.label}
                  className="flex size-11 items-center justify-center rounded-[var(--theme-control-radius)] border border-[var(--brand-base)] bg-[color:var(--brand-surface-strong)] text-[var(--brand-base)] shadow-[var(--brand-shadow)] transition hover:bg-[var(--brand-base)] hover:text-[var(--primary-foreground)] sm:size-12"
                >
                  <item.icon className="size-4 sm:size-5" />
                </Link>
              ))}
            </div>
          </div>

          <div className="rounded-[calc(var(--theme-panel-radius)-6px)] border border-[var(--brand-border)] bg-[color:var(--brand-surface)] p-4 shadow-[var(--brand-shadow-strong)] backdrop-blur-sm sm:rounded-[var(--theme-panel-radius)] sm:p-6 lg:p-8">
            <form className="space-y-4 sm:space-y-5" onSubmit={handleSubmit} noValidate>
              <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-[var(--brand-strong)]">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your full name"
                    value={values.name}
                    onChange={(event) => updateField("name", event.target.value)}
                    onBlur={() => handleBlur("name")}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                  {errors.name ? (
                    <p id="name-error" className="text-sm text-destructive">
                      {errors.name}
                    </p>
                  ) : null}
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-[var(--brand-strong)]">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@company.com"
                    value={values.email}
                    onChange={(event) => updateField("email", event.target.value)}
                    onBlur={() => handleBlur("email")}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email ? (
                    <p id="email-error" className="text-sm text-destructive">
                      {errors.email}
                    </p>
                  ) : null}
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="company" className="text-sm font-medium text-[var(--brand-strong)]">
                  Company
                </label>
                <Input
                  id="company"
                  name="company"
                  placeholder="Your company or brand"
                  value={values.company}
                  onChange={(event) => updateField("company", event.target.value)}
                  onBlur={() => handleBlur("company")}
                  aria-invalid={Boolean(errors.company)}
                  aria-describedby={errors.company ? "company-error" : undefined}
                />
                {errors.company ? (
                  <p id="company-error" className="text-sm text-destructive">
                    {errors.company}
                  </p>
                ) : null}
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-[var(--brand-strong)]">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us what you are building, what you need help with, and any timeline or goals."
                  value={values.message}
                  onChange={(event) => updateField("message", event.target.value)}
                  onBlur={() => handleBlur("message")}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  className="min-h-[120px] sm:min-h-[140px]"
                />
                {errors.message ? (
                  <p id="message-error" className="text-sm text-destructive">
                    {errors.message}
                  </p>
                ) : null}
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <BlurText
                  as="p"
                  text="Please make sure your email is correct so we can reply."
                  animateBy="words"
                  delay={14}
                  className="max-w-md text-sm leading-6 text-[var(--brand-muted)]"
                />
                <button
                  type="submit"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "cta-button h-11 w-full rounded-full px-6 text-white sm:w-auto",
                  )}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                  <Send className="size-4" />
                </button>
              </div>

              {isSubmitted ? (
                <BlurText
                  as="p"
                  text="Form submitted successfully."
                  animateBy="words"
                  delay={14}
                  className="text-sm text-[var(--brand-muted)]"
                />
              ) : null}
            </form>
          </div>
        </div>
        </SectionReveal>
      </Container>
    </section>
  );
}
