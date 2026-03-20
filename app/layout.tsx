import type { Metadata } from "next";
import { SiteFooter } from "@/components/footer";
import { SiteHeader } from "@/components/header";
import { ScrollToTopButton } from "@/components/scroll-to-top-button";
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
        <div className="app-shell flex min-h-screen flex-col bg-background text-foreground">
       
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
          <ScrollToTopButton />
        </div>
      </body>
    </html>
  );
}
