import DCSuperFastChargingStation from '../../../LegacyPages/DCSuperFastChargingStation'
import { ProductImages } from '../../../Data/index.js'

const dcSuperFastChargingStationImages = ProductImages.dcSuperFastChargingStation

export const metadata = {
    title: "DC Super Fast Charger UAE | Ultra Fast EV Charging",
    description: "Install ultra fast DC charging stations in the UAE. High-power solutions for commercial and rapid EV charging applications.",
    keywords: "DC super fast charger UAE, ultra fast DC charging UAE, high power EV charging station, rapid DC charger UAE",
    alternates: {
        canonical: "https://blaupunkt-ev.com/dc-super-fast-charging-station",
    },
    openGraph: {
        title: "DC Super Fast Charger UAE",
        description: "Ultra fast, high-power EV charging stations.",
        images: [{ url: dcSuperFastChargingStationImages.fastSpec.src || dcSuperFastChargingStationImages.fastSpec }],
        type: "website",
    },
    twitter: {
        title: "DC Super Fast Charger UAE",
        description: "Ultra fast, high-power EV charging stations.",
    },
};

export default function Page() {
    return <DCSuperFastChargingStation />
}
