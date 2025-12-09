import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Fuat Can Ağcabay - Yazılım Geliştirici & SAP Uzmanı",
  description:
    "Next.js, React, WordPress ve SAP sistemleri konusunda 3+ yıl tecrübeli yazılım geliştirici. 50+ kurumsal proje deneyimi. Kıbrıs merkezli, freelance projelere açık.",
  keywords: [
    "Fuat Can Ağcabay",
    "yazılım geliştirici",
    "web developer",
    "Next.js developer",
    "React developer",
    "WordPress developer",
    "SAP uzmanı",
    "full-stack developer",
    "Kıbrıs yazılımcı",
    "freelance developer",
    "Near East Technology",
    "web uygulaması geliştirme",
  ],
  authors: [{ name: "Fuat Can Ağcabay" }],
  creator: "Fuat Can Ağcabay",
  publisher: "Fuat Can Ağcabay",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://fuatcanagcabay.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "/",
    title: "Fuat Can Ağcabay - Yazılım Geliştirici & SAP Uzmanı",
    description:
      "Next.js, React, WordPress ve SAP sistemleri konusunda 3+ yıl tecrübeli yazılım geliştirici. 50+ kurumsal proje deneyimi.",
    siteName: "Fuat Can Ağcabay Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fuat Can Ağcabay - Yazılım Geliştirici & SAP Uzmanı",
    description:
      "Next.js, React, WordPress ve SAP sistemleri konusunda 3+ yıl tecrübeli yazılım geliştirici. 50+ kurumsal proje deneyimi.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  generator: "Next.js",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAFAFA" },
    { media: "(prefers-color-scheme: dark)", color: "#0D0D12" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr" className="dark">
      <head>
        {/* Security headers via meta tags */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="SAMEORIGIN" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
