import { TailwindIndicator } from "@/components/tailwind-indicator"

import "./globals.css"

import type { Metadata } from "next"
import { GeistMono } from "geist/font/mono"
import { GeistSans } from "geist/font/sans"

import { cn } from "@/lib/utils"
import Sidebar from "@/components/layout/sidebar"
import SiteHeader from "@/components/layout/site-header"
import { ThemeProvider } from "@/components/providers/theme-provider"

export const metadata: Metadata = {
  title: "ChatGPT Prompt",
  description: "Generate chat prompts for ChatGPT",
  icons: [
    {
      rel: "icon",
      url: "https://cdn.midday.ai/cursor/favicon.png",
    },
  ],
  openGraph: {
    title: "Cursor Directory",
    description: "Find the best cursor rules for your framework and language",
    url: "https://cursor.directory",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://cdn.midday.ai/cursor/opengraph-image.png",
        width: 800,
        height: 600,
      },
      {
        url: "https://cdn.midday.ai/cursor/opengraph-image.png",
        width: 1800,
        height: 1600,
      },
    ],
  },
  twitter: {
    title: "Cursor Directory",
    description: "Find the best cursor rules for your framework and language",
    images: [
      {
        url: "https://cdn.midday.ai/cursor/opengraph-image.png",
        width: 800,
        height: 600,
      },
      {
        url: "https://cdn.midday.ai/cursor/opengraph-image.png",
        width: 1800,
        height: 1600,
      },
    ],
  },
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: [
    { media: "(prefers-color-scheme: light)" },
    { media: "(prefers-color-scheme: dark)" },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          `${GeistSans.variable} ${GeistMono.variable}`,
          "whitespace-pre-line bg-background font-sans text-foreground antialiased"
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SiteHeader />
          <div className="flex">
            <Sidebar />
            <main className="flex-1 space-y-8 p-6 pt-4 md:pt-16">
              {children}
            </main>
          </div>
          <TailwindIndicator />
        </ThemeProvider>
      </body>
    </html>
  )
}
