import { MainNavItem, SidebarNavItem, SiteConfig } from "types";
import { env } from "@/env.mjs";

const site_url = env.NEXT_PUBLIC_APP_URL;

export const siteConfig: SiteConfig = {
  name: "Domain Dash",
  author: "Sreenington",
  description:
    "Never worry about domain renewals again. Domain Dash is a domain management tool that helps you keep track of all your domains in one place.",
  url: site_url,
  ogImage: `${site_url}/og.jpg`,
  links: {
    twitter: "https://twitter.com/sreenington/",
    github: "-",
  },
  twitterID: "@sreenington",
  mailSupport: "sree@zaplineai.cloud",
  seoKeywords: [
    "Domain Management",
    "Domain Renewal",
    "Domain Expiry",
    "Domain Dash",
    "Domain Manager",
    "Domain Monitoring",
    "Domain Alerts",
    "Domain Notifications",
    "Domain Tracking",
    "Domain Expiry Date",
  ],
  defaultTheme: "light" // "dark" | "light" | "system"
};

export const footerLinks: SidebarNavItem[] = [
  {
    title: "Domain Dash",
    items: [
      { title: "features", href: "#" },
      { title: "Pricing", href: "/pricing" },],
  },
  {
    title: "Socials",
    items: [
      { title: "X | Twitter", href: "https://twitter.com/sreenington/" },
      { title: "LinkedIn", href: "https://www.linkedin.com/in/sreenington/" },
      { title: "Product Hunt", href: "https://www.producthunt.com/@sreenington" },
    ],
  },
  {
    title: "Boring Stuff",
    items: [
      { title: "Terms of Service", href: "/terms" },
      { title: "Privacy Policy", href: "/privacy" },
      // { title: "Refund Policy", href: "#" },
    ],
  },
];
