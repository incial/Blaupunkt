import ChargingStations from '../../../LegacyPages/ChargingStations'
import { chargingStationProductImages } from '../../../Data/index.js'

export const metadata = {
    title: "Home EV Charging Station UAE | Blaupunkt AC Chargers",
    description: "Install a reliable home EV charging station in the UAE. Blaupunkt offers AC, Wallbox, and residential charging station solutions.",
    keywords: "home EV charging station UAE, AC EV charger UAE, Wallbox charger UAE, residential EV charging, Blaupunkt AC chargers",
    alternates: {
        canonical: "https://blaupunkt-ev.com/charging-stations",
    },
    openGraph: {
        title: "Home EV Charging Station UAE",
        description: "Reliable AC and Wallbox-style chargers for homes.",
        images: [{ url: chargingStationProductImages.spec.src || chargingStationProductImages.spec }],
        type: "website",
    },
    twitter: {
        title: "Home EV Charging Station UAE",
        description: "Reliable AC and Wallbox-style chargers for homes.",
    },
};

export default function Page() {
    return <ChargingStations />
}
