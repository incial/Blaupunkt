import DCChargingStation from '../../../LegacyPages/DCChargingStation'
import { dcChargingStationImages } from '../../../Data/index.js'

export const metadata = {
    title: "DC Charger UAE | DC Charging Station & Fast Chargers",
    description: "Explore DC chargers for commercial and high-power EV charging in the UAE. Fast DC charging stations with advanced safety and performance.",
    keywords: "DC charger UAE, DC charging station UAE, fast DC charger, commercial DC EV charging, high power EV charging UAE",
    alternates: {
        canonical: "https://blaupunkt-ev.com/dc-charging-station",
    },
    openGraph: {
        title: "DC Charger UAE",
        description: "Fast and commercial DC charging solutions.",
        images: [{ url: dcChargingStationImages.dcMidSpec.src || dcChargingStationImages.dcMidSpec }],
        type: "website",
    },
    twitter: {
        title: "DC Charger UAE",
        description: "Fast and commercial DC charging solutions.",
    },
};

export default function Page() {
    return <DCChargingStation />
}
