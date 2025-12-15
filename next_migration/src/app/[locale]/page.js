import HomePage from '../../LegacyPages/HomePage'
import OgImage from '../../assets/Images/CatImages/Ev_charging.webp'

export const metadata = {
  title: "EV Charger UAE | Blaupunkt EV Charging Solutions",
  description: "Buy premium EV chargers in the UAE. DEWA-approved home and commercial charging solutions. High-quality AC and DC chargers from Blaupunkt.",
  keywords: "EV charger UAE, EV chargers UAE, DEWA approved EV charger, home EV charger UAE, commercial EV chargers UAE, AC DC EV charger, Blaupunkt EV",
  alternates: {
    canonical: "https://blaupunkt-ev.com/",
  },
  openGraph: {
    title: "EV Charger UAE – Blaupunkt",
    description: "Premium EV chargers for UAE homes and businesses.",
    images: [{ url: OgImage.src || OgImage }], // Handle both static import object or string
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EV Charger UAE – Blaupunkt",
    description: "Premium EV chargers for UAE homes and businesses.",
  },
};

export default function Page() {
  return <HomePage />
}
