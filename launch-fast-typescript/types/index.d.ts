import { User } from "@prisma/client";
import type { Icon } from "lucide-react";

import { Icons } from "@/components/shared/icons";

export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
};

export type MainNavItem = NavItem;

export type SidebarNavItem = {
  title: string;
  disabled?: boolean;
  external?: boolean;
  icon?: keyof typeof Icons;
} & (
    | {
      href: string;
      items?: never;
    }
    | {
      href?: string;
      items: NavLink[];
    }
  );

export type SiteConfig = {
  name: string;
  author: string;
  description: string;
  url: string;
  ogImage: string;
  twitterID: string;
  mailSupport: string;
  links: {
    twitter: string;
    github: string;
  };
  seoKeywords: string[];
  defaultTheme: "dark" | "light" | "system";
};

export type HeroSectionConfig = {
  headerText: string;
  headerTextColor: string;
  subHeaderText: string;
}

export type PreviewImageConfig = {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export type FeaturesList = {
  label: string;
  title: string;
  subtitle: string;
  featuresList: {
    title: string;
    description: string;
    link: string;
  }[];
}

export type TestimonialsList = {
  label: string;
  title: string;
  subtitle: string;
  testimonialsList: {
    name: string;
    job: string;
    image: string;
    review: string;
  }[];

}

export type DocsConfig = {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
};

export type MarketingConfig = {
  mainNav: MainNavItem[];
};

export type DashboardConfig = {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
};

export type paymentSupportConfig = {
  email: string;
  message1: string;
  message2: string;
};

export type SubscriptionPlan = {
  title: string;
  description: string;
  benefits: string[];
  limitations: string[];
  prices: {
    monthly: number;
    yearly: number;
  };
  stripeIds: {
    monthly: string | null;
    yearly: string | null;
  };
};

export type UserSubscriptionPlan = SubscriptionPlan &
  Pick<User, "stripeCustomerId" | "stripeSubscriptionId" | "stripePriceId"> & {
    stripeCurrentPeriodEnd: number;
    isPaid: boolean;
    interval: "month" | "year" | null;
    isCanceled?: boolean;
  };

export type pricingFaqConfig = {
  id: string;
  question: string;
  answer: string;
};

export type InfoList = {
  icon: keyof typeof Icons;
  title: string;
  description: string;
};

export type InfoLdg = {
  title: string;
  image: string;
  description: string;
  list: InfoList[];
}
