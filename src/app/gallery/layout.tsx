import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Gallery | O'Brians Pub Narbonne",
    description: "Discover the vibe at O'Brians Pub Narbonne — photos and videos of the atmosphere, cocktails, sports nights, and the team.",
    keywords: ["galerie O'Brians", "vibe Irish pub Narbonne", "photos bar Narbonne"],
    openGraph: {
        title: "Gallery | O'Brians Pub Narbonne",
        description: "Photos and videos from O'Brians Pub — the vibe, the drinks, the people.",
        url: "https://obriansnarbonne.com/gallery",
        images: [{ url: "/logo.jpg", width: 800, height: 800 }],
    },
}

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
    return children
}
