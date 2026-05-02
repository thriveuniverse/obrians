import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Live Sports | O'Brians Pub Narbonne",
    description: "Watch live sport at O'Brians Pub in Narbonne — Six Nations rugby, Ligue 1, Champions League, Formula 1, and more on big screens. Reserve your table for the match.",
    keywords: ["live sport Narbonne", "rugby Narbonne", "match football Narbonne", "Six Nations Narbonne", "sport pub Narbonne"],
    openGraph: {
        title: "Live Sports | O'Brians Pub Narbonne",
        description: "Rugby, football, F1 and more — watch live sport at O'Brians Pub Narbonne on big screens.",
        url: "https://obriansnarbonne.com/sports",
        images: [{ url: "/sports-at-obrians.jpg", width: 800, height: 600 }],
    },
}

export default function SportsLayout({ children }: { children: React.ReactNode }) {
    return children
}
