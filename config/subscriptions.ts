import { SubscriptionPlan } from "types"
import { env } from "@/env.mjs"

export const paymentSupport = {
  email: "support@zaplineai.cloud",
  // message1: "If you have any questions or need assistance, please don't hesitate to contact us.", // There is another one in pricing-faq.tsx
  message2: "Do give me a day or two to get back to you. I'm a one-person team, but I promise to respond as soon as I can.",
}

export const pricingData: SubscriptionPlan[] = [
  {
    title: 'Starter',
    description: 'For Beginners',
    benefits: [
      'Up to 100 monthly posts',
      'Basic analytics and reporting',
      'Access to standard templates',
    ],
    limitations: [
      'No priority access to new features.',
      'Limited customer support',
      'No custom branding',
      'Limited access to business resources.',
    ],
    prices: {
      monthly: 0,
      yearly: 0,
    },
    stripeIds: {
      monthly: null,
      yearly: null,
    },
  },
  {
    title: 'Pro',
    description: 'Unlock Advanced Features',
    benefits: [
      'Up to 500 monthly posts',
      'Advanced analytics and reporting',
      'Access to business templates',
      'Priority customer support',
      'Exclusive webinars and training.',
    ],
    limitations: [
      'No custom branding',
      'Limited access to business resources.',
    ],
    prices: {
      monthly: 15,
      yearly: 144,
    },
    stripeIds: {
      monthly: env.NEXT_PUBLIC_STRIPE_PRO_MONTHLY_PLAN_ID,
      yearly: env.NEXT_PUBLIC_STRIPE_PRO_YEARLY_PLAN_ID,
    },
  },
  {
    title: 'Business',
    description: 'For Power Users',
    benefits: [
      'Unlimited posts',
      'Real-time analytics and reporting',
      'Access to all templates, including custom branding',
      '24/7 business customer support',
      'Personalized onboarding and account management.',
    ],
    limitations: [],
    prices: {
      monthly: 30,
      yearly: 300,
    },
    stripeIds: {
      monthly: env.NEXT_PUBLIC_STRIPE_BUSINESS_MONTHLY_PLAN_ID,
      yearly: env.NEXT_PUBLIC_STRIPE_BUSINESS_YEARLY_PLAN_ID,
    },
  },
];

export const pricingFaqData = [
  {
    id: "item-1",
    question: "What is the cost of the free plan?",
    answer:
      "Our free plan is completely free, with no monthly or annual charges. It's a great way to get started and explore our basic features.",
  },
  {
    id: "item-2",
    question: "How much does the Basic Monthly plan cost?",
    answer:
      "The Basic Monthly plan is priced at $15 per month. It provides access to our core features and is billed on a monthly basis.",
  },
  {
    id: "item-3",
    question: "What is the price of the Pro Monthly plan?",
    answer:
      "The Pro Monthly plan is available for $25 per month. It offers advanced features and is billed on a monthly basis for added flexibility.",
  },
  {
    id: "item-4",
    question: "Do you offer any annual subscription plans?",
    answer:
      "Yes, we offer annual subscription plans for even more savings. The Basic Annual plan is $144 per year, and the Pro Annual plan is $300 per year.",
  },
  {
    id: "item-5",
    question: "Is there a trial period for the paid plans?",
    answer:
      "We offer a 14-day free trial for both the Pro Monthly and Pro Annual plans. It's a great way to experience all the features before committing to a paid subscription.",
  },
];