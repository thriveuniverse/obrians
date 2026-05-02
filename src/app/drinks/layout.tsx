import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Drinks Menu | O'Brians Pub Narbonne",
    description: "Explore O'Brians Pub's full drinks menu — signature cocktails, Guinness & craft beers on tap, fine wines, and shooters. Located in Narbonne, France.",
    keywords: ["cocktails Narbonne", "bières Narbonne", "carte des boissons", "Irish pub drinks", "Guinness Narbonne"],
    openGraph: {
        title: "Drinks Menu | O'Brians Pub Narbonne",
        description: "Signature cocktails, craft beers on tap, fine wines, and more at O'Brians Pub Narbonne.",
        url: "https://obriansnarbonne.com/drinks",
        images: [{ url: "/pumps.jpg", width: 800, height: 600 }],
    },
}

export default function DrinksLayout({ children }: { children: React.ReactNode }) {
    return children
}
