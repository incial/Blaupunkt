import Services from '../../../LegacyPages/Services'
import { Servicepage } from '../../../Data/assets.js'

export const metadata = {
    title: "EV Charger Installation UAE | Blaupunkt Services",
    description: "Professional EV charger installation for homes and businesses in the UAE. DEWA-approved technicians and certified charging solutions.",
    keywords: "EV charger installation UAE, EV charger installer UAE, DEWA approved EV installation, home EV charger installation, commercial EV charger installation, Blaupunkt services",
    alternates: {
        canonical: "https://blaupunkt-ev.com/services",
    },
    openGraph: {
        title: "EV Charger Installation Services",
        description: "Certified home and commercial EV charger installation.",
        images: [{ url: Servicepage.ServicesPageImg.src || Servicepage.ServicesPageImg }],
        type: "website",
    },
    twitter: {
        title: "EV Charger Installation Services",
        description: "Certified home and commercial EV charger installation.",
    },
};

export default function Page() {
    return <Services />
}
