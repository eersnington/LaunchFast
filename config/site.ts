import { SidebarNavItem, SiteConfig } from "types";
import { env } from "@/env.mjs";

const site_url = env.NEXT_PUBLIC_APP_URL;

export const siteConfig: SiteConfig = {
  name: "LaunchFast",
  author: "Sreenington",
  description:
    "LaunchFast propels your project with Next.js 14, Prisma, Supabase, Auth.js v5, Resend, React Email, Shadcn/ui, and Stripe. Built for production and type-safe, it's your launchpad to build with confidence.",
  url: site_url,
  ogImage: `${site_url}/og.jpg`,
  links: {
    twitter: "https://twitter.com/sreenington/",
    github: "-",
  },
  twitterID: "@sreenington",
  mailSupport: "sree.zaplineai@gmail.com",
  seoKeywords: [
    "Next.js",
    "React",
    "Prisma",
    "Neon",
    "Auth.js",
    "shadcn ui",
    "Resend",
    "React Email",
    "Stripe",
    "Next.js SaaS",
    "React SaaS",
    "Prisma SaaS",
    "Supabase integration",
    "Auth.js security",
    "Shadcn UI design",
    "Resend email service",
    "React Email templates",
    "Stripe payments",
    "SaaS development tools"
  ],
  defaultTheme: "dark" // "dark" | "light" | "system"
};

export const footerLinks: SidebarNavItem[] = [
  {
    title: "Company",
    items: [
      { title: "About", href: "#" },
      { title: "Enterprise", href: "#" },
      { title: "Partners", href: "#" },
      { title: "Jobs", href: "#" },
    ],
  },
  {
    title: "Product",
    items: [
      { title: "Security", href: "#" },
      { title: "Customization", href: "#" },
      { title: "Customers", href: "#" },
      { title: "Changelog", href: "#" },
    ],
  },
  {
    title: "Legal",
    items: [
      { title: "Terms of Service", href: "#" },
      { title: "Privacy Policy", href: "#" },
      { title: "Refund Policy", href: "#" },
    ],
  },
];
