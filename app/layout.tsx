import type { Metadata } from "next";
import { SiteFooter } from "@/components/layout/footer";
import { SiteHeader } from "@/components/layout/header";
import { ScrollToTopButton } from "@/components/shared/scroll-to-top-button";
import { AnimatedBackground } from "@/components/shared/animated-background";
import { DEFAULT_SITE_THEME } from "@/constants/themes";
import "./globals.css";

export const metadata: Metadata = {
  title: "WhiteStork Software Solutions",
  description: "Modern digital experiences for software, services, and growth.",
  icons: {
    icon: "/images/Logo.svg",
    shortcut: "/images/Logo.svg",
    apple: "/images/Logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen antialiased">
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (() => {
                const siteTheme = window.localStorage.getItem("site-theme") ?? "${DEFAULT_SITE_THEME}";
                const storedMode = window.localStorage.getItem("theme-mode");
                const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
                const mode = storedMode ?? (systemPrefersDark ? "dark" : "light");
                document.documentElement.dataset.theme = siteTheme;
                document.documentElement.classList.toggle("dark", mode === "dark");
              })();
            `,
          }}
        />
        <div className="app-shell relative flex min-h-screen flex-col text-foreground">
          <SiteHeader />
          <main className="relative z-10 flex-1">{children}</main>
          <SiteFooter />
          <ScrollToTopButton />
        </div>
      </body>
    </html>
  );
}
