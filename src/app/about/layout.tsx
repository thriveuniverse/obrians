import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Meet the Team | O'Brians Pub Narbonne",
    description: "Meet the team behind O'Brians Pub — the friendly faces that make Narbonne's favourite Irish pub the place to be.",
    keywords: ["équipe O'Brians", "staff Irish pub Narbonne", "à propos O'Brians"],
    openGraph: {
        title: "Meet the Team | O'Brians Pub Narbonne",
        description: "The friendly faces behind O'Brians Pub, Narbonne's chic and relaxed Irish pub.",
        url: "https://obriansnarbonne.com/about",
        images: [{ url: "/logo.jpg", width: 800, height: 800 }],
    },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
    return children
}
