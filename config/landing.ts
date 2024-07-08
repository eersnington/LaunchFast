import { FeaturesList, InfoLdg, TestimonialsList, HeroSectionConfig, PreviewImageConfig } from "types";

export const heroLanding: HeroSectionConfig = {
  headerText: "From idea to launch in",
  headerTextColor: "days, not weeks",
  subHeaderText: "Kickstart your next startup with this dead simple, yet robust Next.js boilerplate. Built for production and typesafety, it's your launchpad to build with confidence."
};

export const PreviewImage: PreviewImageConfig = {
  src: "/images/preview-landing-2000x1000.jpg",
  alt: "preview landing",
  width: 2000,
  height: 1000,
};

export const infos: InfoLdg[] = [
  {
    title: "Your launchpad to success",
    description:
      "Discover why QuickSaaS is the go-to choice for launching your next project. From type safety to scalability, QuickSaaS empowers you to build, scale, and succeed.",
    image: "/images/code-screenshot.jpg",
    list: [
      {
        title: "Type Safety",
        description: "Ensure your code is robust and error-free from the start.",
        icon: "shield_check",
      },
      {
        title: "Production Ready",
        description: "Launch with confidence knowing your app is ready for prime time.",
        icon: "rocket",
      },
      {
        title: "Scalable",
        description: "Grow your app effortlessly as your user base expands.",
        icon: "barchart",
      },
    ],
  },
  {
    title: "Seamless Integration",
    description:
      "Integrate our open-source SaaS seamlessly into your existing workflows. Effortlessly connect with your favorite tools and services for a streamlined experience.",
    image: "/images/work-from-home.jpg",
    list: [
      {
        title: "Flexible",
        description:
          "Customize your integrations to fit your unique requirements.",
        icon: "laptop",
      },
      {
        title: "Efficient",
        description: "Streamline your processes and reducing manual effort.",
        icon: "search",
      },
      {
        title: "Reliable",
        description:
          "Rely on our robust infrastructure and comprehensive documentation.",
        icon: "settings",
      },
    ],
  },
];



export const features: FeaturesList = {
  label: "Unleash the power of...",
  title: "...TypeScript ecosystem tailored to your needs.",
  subtitle: "Discover how our key features can simplify your development process and enhance your project's functionality.",

  featuresList: [
    {
      title: "Complete Next.js Integration",
      description:
        "Seamless integration with Next.js, including pre-configured settings for optimized performance and development efficiency.",
      link: "/",
    },
    {
      title: "Authentication and Authorization",
      description:
        "Easy setup for authentication and authorization using Auth.js, ensuring secure access to your application.",
      link: "/",
    },
    {
      title: "Stripe Payment Integration",
      description:
        "Integration with Stripe for seamless payment processing, allowing you to monetize your application effortlessly.",
      link: "/",
    },
    {
      title: "Database Management with Prisma",
      description:
        "Efficient management of your database using Prisma, a modern ORM for Node.js and TypeScript.",
      link: "/",
    },
    {
      title: "Mail Sending with Resend",
      description:
        "Deliver transactional and marketing emails reliably with Resend, ensuring your messages reach the inbox instead of spam folders.",
      link: "/",
    },
    {
      title: "Supabase Integration",
      description:
        "Integration with Supabase, providing a scalable and secure backend for your application's data storage and management.",
      link: "/",
    }
  ]
};


export const testimonials: TestimonialsList = {
  label: "Don't just take our word for it",
  title: "Here's what our customers have to say about QuickSaaS.",
  subtitle: "Discover how QuickSaaS has helped developers, entrepreneurs, and startups accelerate their projects and achieve their goals.",
  testimonialsList: [
    {
      name: "Sarah Thompson",
      job: "Tech Startup Founder",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      review:
        "QuickSaaS has been a game-changer for my startup. It allowed us to quickly launch our product and start acquiring customers. This saved us countless hours of development time.",
    },
    {
      name: "David O'Hara",
      job: "Software Engineer",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      review:
        "I've been using QuickSaaS for my side projects, and it's been amazing. It's saved me so much time by providing a solid foundation that I can build upon. I highly recommend it to anyone looking to quickly bootstrap their projects.",
    },
    {
      name: "Alex Han",
      job: "Indie Developer",
      image: "https://randomuser.me/api/portraits/men/4.jpg",
      review:
        "I can't imagine building my projects without QuickSaaS. The speed and efficiency it provides are unmatched.",
    },
    {
      name: "Emily W.",
      job: "Aspiring Developer",
      image: "https://randomuser.me/api/portraits/women/3.jpg",
      review:
        "QuickSaaS has been my guiding light in learning the TypeScript ecosystem and launching my projects. It's been an invaluable resource that I can't recommend enough.",
    },
    {
      name: "Rachel Adams",
      job: "Startup Co-Founder",
      image: "https://randomuser.me/api/portraits/women/5.jpg",
      review:
        "Launching our startup was a daunting task, but QuickSaaS made it a breeze. It gave us the solid foundation we needed to build our app quickly and efficiently. We couldn't be happier with the results.",
    },

  ]
}
