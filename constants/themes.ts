export const siteThemes = [
  { value: "ocean", label: "Corporate Blue" },
  { value: "forest", label: "Emerald" },
  { value: "sunset", label: "Copper" },
  { value: "rose", label: "Executive" },
  { value: "violet", label: "Indigo" },
  { value: "slate", label: "Graphite" },
] as const;

export type SiteTheme = (typeof siteThemes)[number]["value"];
export type ThemeMode = "light" | "dark";

export const DEFAULT_SITE_THEME: SiteTheme = "ocean";
