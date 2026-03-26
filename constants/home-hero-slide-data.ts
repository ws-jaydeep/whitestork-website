import creatorwrkLogo from "@/public/images/portfolio/creatorwrk-logo.png";
import creatorwrk from "@/public/images/portfolio/creatorwrk-web.png";
import pixisLogo from "@/public/images/portfolio/pixies-logo.png";
import pixis from "@/public/images/portfolio/pixies-web.png";
import playPalLogo from "@/public/images/portfolio/playpal-logo.png";
import playPal from "@/public/images/portfolio/playpal-web.png";

export const HERO_SLIDE_DATA = [
  {
    image: playPal,
    logo: playPalLogo,
    title: "PlayPal Sports",
    description: "Your Ultimate Sports Ground Booking App!",
    video: "/video/playpal.webm",
    videoPoster: playPal,
    playStoreLink:
      "https://play.google.com/store/apps/details?id=com.playpal.android",
    appStoreLink: "https://apps.apple.com/us/app/playpal-sports/id6473602475",
    websiteLink: "https://www.playpalsports.com",
  },
  {
    image: creatorwrk,
    logo: creatorwrkLogo,
    title: "Creatorwrk",
    description: "The Ultimate Influencer Marketing Platform!",
    websiteLink: "https://creatorwrk.com",
    video: "/video/creatorwrk.webm",
    videoPoster: creatorwrk,
  },
  {
    image: pixis,
    logo: pixisLogo,
    title: "Pixies Gardens",
    description: "Your One-Stop Shop For Plants",
    video: "/video/pixis-garden.webm",
    videoPoster: pixis,
    websiteLink: "https://www.pixiesgardens.com/",
  },
] as const;
