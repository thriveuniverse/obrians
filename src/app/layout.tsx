import type { Metadata } from "next";
import { UnifrakturCook, Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import Script from "next/script";


const unifrakturcook = UnifrakturCook({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-unifrakturcook",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "O'Brians Pub | Taverne à Narbonne",
  description: "Bienvenue à O'Brians Pub, brasserie historique et bar vivant au cœur de Narbonne (Place des Quatre Fontaines). Découvrez notre cuisine locale, nos tapas et l'histoire de Duncan Boyer.",
  keywords: ["O'Brians Pub", "Bar Narbonne", "Restaurant Narbonne", "Artisanal", "Bieres Narbonne", "taverne Narbonne"],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "O'Brians Pub | Pub à Narbonne",
    description: "Bieres artisnales et bien plus encore au cœur de Narbonne.",
    url: "https://obrians-narbonne.netlify.app",
    siteName: "O'Brians Pub Narbonne",
    images: [
      {
        url: "/logo.jpg",
        width: 800,
        height: 800,
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "O'Brians Pub",
    "url": "https://obrians-narbonne.netlify.app",
    "creator": {
      "@type": "Organization",
      "name": "The Thrive Clan",
      "url": "https://thethriveclan.com"
    }
  };

  return (
    <html lang="fr" className={`${unifrakturcook.variable} ${inter.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=UnifrakturCook:wght@700&display=swap" rel="stylesheet" />
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-xxxxxxxxxx"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-xxxxxxxxxxx');
      `}
        </Script>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className="font-sans antialiased text-gray-900 bg-[#faf9f6]">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
