import { Suspense } from 'react'
import Products from '../../../LegacyPages/Products'

export const metadata = {
    title: "EV Charging Products UAE | Blaupunkt Complete Range",
    description: "Browse Blaupunkt's complete range of EV charging products in UAE including AC chargers, DC fast chargers, portable charging solutions, and premium charging cables for all electric vehicles.",
    keywords: "EV charging products UAE, electric vehicle chargers UAE, AC chargers UAE, DC chargers UAE, EV charging cables, Blaupunkt EV products",
    alternates: {
        canonical: "https://blaupunkt-ev.com/products",
    },
    openGraph: {
        title: "EV Charging Products UAE | Blaupunkt",
        description: "Complete range of EV charging solutions for UAE",
        type: "website",
    },
    twitter: {
        title: "EV Charging Products UAE | Blaupunkt",
        description: "Complete range of EV charging solutions for UAE",
    },
};

export default function Page() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Products />
        </Suspense>
    )
}
