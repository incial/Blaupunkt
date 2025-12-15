import PortableEVCharging from '../../../LegacyPages/PortableEVCharging'
import { portableEvChargingProductImages } from '../../../Data/index.js'

export const metadata = {
    title: "Portable EV Charger UAE | Mobile & Emergency Chargers",
    description: "Get portable EV chargers in the UAE. Safe, compact and ideal for travel or emergency charging. Compatible with multiple EV brands.",
    keywords: "portable EV charger UAE, mobile EV charger, emergency EV charging UAE, compact EV charger, Blaupunkt portable charger",
    alternates: {
        canonical: "https://blaupunkt-ev.com/portable-ev-charging",
    },
    openGraph: {
        title: "Portable EV Charger UAE",
        description: "Compact mobile chargers for emergencies and travel.",
        images: [{ url: portableEvChargingProductImages.specifications.src || portableEvChargingProductImages.specifications }],
        type: "website",
    },
    twitter: {
        title: "Portable EV Charger UAE",
        description: "Compact mobile chargers for emergencies and travel.",
    },
};

export default function Page() {
    return <PortableEVCharging />
}
