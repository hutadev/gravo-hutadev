import React from "react"
import { LenisWrapper } from "@/components/leniswrapper/page"
import type { Metadata } from "next"
import { Header } from "@/components/header/page"
import "./globals.css"

const BASE_URL = "https://gravo-hutadev.vercel.app"
export const metadata: Metadata = {
  title: "Gravo Business Solution | Soluções Digitais & SaaS para Crescimento Empresarial",
  description: "Plataforma digital innovadora para elevar a experiência de Negócios. Criamos soluções SaaS user-centric, prontas para o futuro, que impulsionam a productividade e o crescimento das emprêzas.",
  keywords: "Gravo, Business Solution, SaaS, Soluções Digitais, Design User-Centric, Desenvolvimento Web, Productividade, Tecnologia, Python, JavaScript, Next.js",
  authors: [{ name: "Hutauta Developer (HutaDev)" }],
  creator: "Hutauta Developer (HutaDev)",
  publisher: "Hutauta Developer (HutaDev)",
  robots: "index, follow",

  metadataBase: new URL(BASE_URL),
  manifest: "/site.webmanifest",

  icons: {
    icon: [{ url: `${BASE_URL}/favicon.ico` }, { url: `${BASE_URL}/favicon.svg`, type: "image/svg+xml" }, { url: `${BASE_URL}/favicon-96x96.png`, type: "image/png" }],
    apple: [{ url: `${BASE_URL}/apple-touch-icon.png`, sizes: "180x180" }]
  },

  openGraph: {
    title: "Gravo Business Solution | Plataforma Digital Innovadora",
    description: "Criamos plataformas SaaS user-centric que transformam negócios, simplificam operações e aceleram o crescimento. O seu parceiro em soluções digitais technológicas.",
    url: BASE_URL,
    siteName: "Gravo Business Solution",
    type: "website",
    locale: "pt_PT",
    images: [
      {
        url: `${BASE_URL}/demo.webp`,
        width: 1200,
        height: 630,
        alt: "Demonstração visual do design sustentável Gravo"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",
    title: "Gravo Business Solution | Soluções para Negócios & Vida",
    description: "SaaS e Soluções Digitais de ponta para optimizar a gestão e productividade. Desenvolvido com Python, Next.js e React.js.",
    images: [`${BASE_URL}/demo.webp`]
  },

  appleWebApp: {
    title: "Gravo"
  }
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt">
      <body>
        <Header />
        <LenisWrapper>{children}</LenisWrapper>
      </body>
    </html>
  )
}
