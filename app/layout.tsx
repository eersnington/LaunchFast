import "@/styles/globals.css";

import { fontHeading, fontSans, fontUrban } from "@/assets/fonts";
import { ModalProvider } from "@/components/modal-provider";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { Toaster } from "@/components/ui/toaster";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/react";

interface RootLayoutProps {
  children: React.ReactNode
}

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.seoKeywords,
  authors: [
    {
      name: siteConfig.author,
    },
  ],
  creator: "@Sreenington",
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: siteConfig.twitterID,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
}

export default function RootLayout({ children }: RootLayoutProps) {

  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontUrban.variable,
          fontHeading.variable
        )}
      >
        <script defer data-domain="quicksaas.vercel.app" src="http://plausible-dsgcsog.23.21.74.219.sslip.io/js/script.js"></script>
        <ThemeProvider attribute="class" defaultTheme={siteConfig.defaultTheme} enableSystem disableTransitionOnChange>
          {children}
          <Analytics />
          <Toaster />
          <ModalProvider />
          <TailwindIndicator />
        </ThemeProvider>
      </body>
    </html>
  )
}
