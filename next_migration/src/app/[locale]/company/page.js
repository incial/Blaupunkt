import Company from '../../../LegacyPages/Company'
import { companyPageImgs } from '../../../Data/assets.js'

export const metadata = {
    title: "EV Charging Solutions UAE | About Blaupunkt",
    description: "Learn about Blaupunkt's EV charging solutions in the UAE. Trusted German technology for home, commercial, and fast-charging applications.",
    keywords: "EV charging solutions UAE, Blaupunkt EV charging, DEWA compliant EV chargers, home EV charging UAE, commercial EV charging UAE, fast charging solutions, German EV technology",
    alternates: {
        canonical: "https://blaupunkt-ev.com/company",
    },
    openGraph: {
        title: "About Blaupunkt EV Charging",
        description: "Premium EV charging solutions from Blaupunkt.",
        images: [{ url: companyPageImgs.picture3.src || companyPageImgs.picture3 }],
        type: "website",
    },
    twitter: {
        title: "About Blaupunkt EV Charging",
        description: "Premium EV charging solutions from Blaupunkt.",
    },
};

export default function Page() {
    return <Company />
}
