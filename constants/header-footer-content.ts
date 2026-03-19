export const headerNavigation = {
  navItems: [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/about-us", label: "About Us" },
    { href: "/contact-us", label: "Contact Us" },
  ],
  portfolioCta: {
    href: "/portfolio",
    label: "Download Portfolio",
  },
} as const;

export const footerContent = {
  services: [
    
    "AI Automation Services",
    "AI Agent Development",
    "Custom Chatbot Development",
    "Work Flow Automation Services",
    "Web & Mobile App Development",
    "Infra / Cloud",
    "Digital Marketing",
  ],
  companyLinks: [
    { href: "/about-us", label: "About Us" },
    { href: "/portfolio", label: "Project" },
    { href: "/contact-us", label: "Contact Us" },
  ],
  socialLinks: [
    {
      href: "https://www.instagram.com/whitestorksoftwaresolutions/",
      label: "Instagram",
    },
    {
      href: "https://www.linkedin.com/company/whitestork-software/posts/",
      label: "LinkedIn",
    },
    {
      href: "https://www.facebook.com/whitestorksoftwareSolutions/",
      label: "Facebook",
    },
    {
      href: "https://x.com/whitestorksoft",
      label: "X",
    },
  ],
  emails: [
    {
      href: "mailto:riya@whitestorksoft.com",
      label: "riya@whitestorksoft.com (For Sales)",
    },
    {
      href: "mailto:hr@whitestorksoft.com",
      label: "hr@whitestorksoft.com (For Hiring)",
    },
    {
      href: "mailto:contact@whitestorksoft.com",
      label: "contact@whitestorksoft.com (For Legal)",
    },
  ],
  phone: {
    href: "tel:+919106828745",
    label: "+91 91068 28745",
  },
  locations: [
    {
      city: "Ahmedabad",
      label: "504, Jay Hind HN Safal, SG Highway, Thaltej Ahmedabad, Gujarat, India.",
      href: "https://www.google.com/maps/search/?api=1&query=Whitestork+Software+Solutions,+504+Jaihind+Safal,+Nr.+New+York+Tower,+Thaltej+Cross+Road,+Sarkhej-Gandhinagar+Hwy,+Ahmedabad,+Gujarat+380054",
    },
    {
      city: "Surat",
      label: "410, Atlanta Shopping Mall, Sudama Chowk, Mota Varachha, Surat, Gujarat, India.",
      href: "https://www.google.com/maps/search/?api=1&query=Atlanta+Shopping+Mall,+Sudama+Chowk,+Mota+Varachha,+Surat,+Gujarat,+India",
    },
  ],
  copyright: "© 2026 Whitestork Software Solutions LLP",
  legalLinks: [
    { href: "/terms-and-conditions", label: "Terms & Condition" },
    { href: "/privacy-policy", label: "Privacy Policy" },
  ],
} as const;
