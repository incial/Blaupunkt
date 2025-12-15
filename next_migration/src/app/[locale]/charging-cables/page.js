import ChargingCables from '../../../LegacyPages/ChargingCables'
import { chargingCableProductImages } from '../../../Data/index.js'

export const metadata = {
    title: "EV Charging Cables UAE | Type 2 & 22kW Cables",
    description: "Buy EV charging cables in the UAE. Type 2 and 22kW charging cables compatible with all major EV brands. High-quality Blaupunkt cables.",
    keywords: "EV charging cables UAE, Type 2 EV cables, 22kW charging cables, EV cables for all brands, Blaupunkt charging cables",
    alternates: {
        canonical: "https://blaupunkt-ev.com/charging-cables",
    },
    openGraph: {
        title: "EV Charging Cables UAE",
        description: "Premium Type 2 and high-power EV charging cables.",
        images: [{ url: chargingCableProductImages.specifications.src || chargingCableProductImages.specifications }],
        type: "website",
    },
    twitter: {
        title: "EV Charging Cables UAE",
        description: "Premium Type 2 and high-power EV charging cables.",
    },
};

export default function Page() {
    return <ChargingCables />
}
