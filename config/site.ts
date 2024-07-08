import { MainNavItem, SidebarNavItem, SiteConfig } from "types";
import { env } from "@/env.mjs";

const site_url = env.NEXT_PUBLIC_APP_URL;


export const siteConfig: SiteConfig = {
  name: "QuickSaaS",
  author: "Sreenington",
  description:
    "Don't waste your time building your next Startup from scratch! QuickSaaS is powered by Next.js 14, Prisma, Supabase, Auth.js v5, Resend, React Email, Shadcn/ui, and Stripe. Ready for production and type-safety, it's your launchpad to build with confidence.",
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
    title: "QuickSaaS",
    items: [
      { title: "About", href: "#" },
      { title: "Pricing", href: "/pricing" },
      { title: "Blog", href: "/blog" },
      { title: "Documentation", href: "/docs" },
      // { title: "Enterprise", href: "#" },
      // { title: "Partners", href: "#" },
      // { title: "Jobs", href: "#" },
    ],
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
      { title: "License", href: "/license" },
    ],
  },
];