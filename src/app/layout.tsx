import type { Metadata } from "next"
import { Header } from "@/components/header/page"
import "./globals.css"

export const metadata: Metadata = {
  title: "Gravo Business Solution | Soluções Digitais & SaaS para Crescimento Empresarial",
  description:
    "Plataforma digital innovadora para elevar a experiência de Negócios. Criamos soluções SaaS user-centric, prontas para o futuro, que impulsionam a productividade e o crescimento das emprêzas.",
  keywords:
    "Gravo, Business Solution, SaaS, Soluções Digitais, Design User-Centric, Desenvolvimento Web, Productividade, Tecnologia, Python, JavaScript, Next.js",
  authors: [{ name: "Hutauta Developer (HutaDev)" }],
  creator: "Hutauta Developer (HutaDev)",
  publisher: "Hutauta Developer (HutaDev)",
  robots: "index, follow",
  metadataBase: new URL("https://gravo-hutadev.vercel.app/"),
  manifest: "/site.webmanifest",

  icons: {
    icon: [
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", rel: "shortcut icon" }
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }]
  },

  openGraph: {
    title: "Gravo Business Solution | Plataforma Digital Innovadora",
    description:
      "Criamos plataformas SaaS user-centric que transformam negócios, simplificam operações e aceleram o crescimento. O seu parceiro em soluções digitais technológicas.",
    url: "https://gravo-hutadev.vercel.app/",
    siteName: "Gravo Business Solution",
    type: "website",
    locale: "pt_PT",
    images: [
      {
        url: "/demo.webp",
        width: 1200,
        height: 630,
        alt: "Demonstração visual do design sustentável Gravo"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",
    title: "Gravo Business Solution | Soluções para Negócios & Vida",
    description:
      "SaaS e Soluções Digitais de ponta para optimizar a gestão e productividade. Desenvolvido com Python, Next.js e React.js.",
    images: ["/demo.webp"]
  },

  appleWebApp: {
    title: "Gravo"
  }
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pr">
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
