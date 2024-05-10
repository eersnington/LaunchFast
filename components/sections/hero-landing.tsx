import Link from "next/link";

import { env } from "@/env.mjs";
import { siteConfig } from "@/config/site";
import { heroLanding } from "@/config/landing";
import { cn, nFormatter } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/shared/icons";


/*
  This component is the Hero Section of the landing page.
  Your website header line and the main call to action button is placed here.
  Make sure to put careful thought into the one-liner header and the sub-header text.
*/

export async function HeroLanding() {

  return (
    <section className="space-y-6 py-12 sm:py-20 lg:py-20">
      <div className="container flex max-w-5xl flex-col items-center gap-5 text-center">

        {/* 
          This is the Twitter Bagde for #BuildInPublic. You can replace it with Product Hunt Badge or any other badge.
          Make sure to replace the href with your Product Hunt link or any other link.
        */}
        <Link
          href="https://twitter.com/sreenington"
          className={cn(
            buttonVariants({ variant: "outline", size: "sm", rounded: "full" }),
            "px-4",
          )}
          target="_blank"
        >
          <span className="mr-3">🎉</span> #BuildInPublic in{" "}
          <Icons.twitter className="ml-2 size-3.5" />
        </Link>

        {/* 
          The header text is below. 
          Make sure to replace the text with your own header text. Edit it in the config/landing.ts file.
        */}

        <h1 className="text-balance font-urban text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-[66px]">
          {heroLanding.headerText}{" "}
          <span className="text-gradient_indigo-purple font-extrabold">
            {heroLanding.headerTextColor}
          </span>
        </h1>

        <p
          className="max-w-2xl text-balance leading-normal text-muted-foreground sm:text-xl sm:leading-8"
          style={{ animationDelay: "0.35s", animationFillMode: "forwards" }}
        >
          {heroLanding.subHeaderText}
        </p>

        {/*
          Call To Action buttons are below
          You can add more buttons or change the text of the buttons
        */}
        {/* <div
          className="flex justify-center space-x-2 md:space-x-4"
          style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
        >
          <Link
            href="/pricing"
            prefetch={true}
            className={cn(
              buttonVariants({ size: "lg", rounded: "full" }),
              "gap-2",
            )}
          >
            <span>Go to Pricing</span>
            <Icons.arrowRight className="size-4" />
          </Link>
          <Link
            href="/docs"
            target="_blank"
            rel="noreferrer"
            className={cn(
              buttonVariants({
                variant: "outline",
                size: "lg",
                rounded: "full",
              }),
              "px-5",
            )}
          >
            <Icons.search className="mr-2 size-4" />
            <p>
              <span className="hidden sm:inline-block">Read the</span>{" "}
              <span className="font-semibold">docs</span>
            </p>
          </Link>
        </div> */}
      </div>
    </section>
  );
}
