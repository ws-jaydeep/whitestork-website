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
    { label: "AI Automation Services", renderUi: "aiAuto" },
    { label: "AI Agent Development", renderUi: "aiAgentDev" },
    { label: "Custom Chatbot Development", renderUi: "customChatBotDev" },
    { label: "Work Flow Automation Services", renderUi: "workFlowAutom" },
    { label: "Web & Mobile App Development", renderUi: "webAndMobileAppDev" },
    { label: "Infra / Cloud", renderUi: "devOps" },
    { label: "Digital Marketing", renderUi: "digiMart" },
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
      href: "https://www.google.com/maps/place/Atlanta+Shopping+Mall/data=!4m7!3m6!1s0x3be051003da59acb:0x29ec1eb46f90ff5b!8m2!3d21.1432778!4d72.804667!16s%2Fg%2F11vz8qrh14!19sChIJy5qlPQBR4DsRW_-Qb7Qe7Ck?authuser=0&hl=en&rclk=1",
    },
  ],
  copyright: `@${new Date().getFullYear()} Whitestork Software Solutions LLP`,
  legalLinks: [
    { href: "/terms-and-conditions", label: "Terms & Condition" },
    { href: "/privacy-policy", label: "Privacy Policy" },
  ],
} as const;
