import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../Components/Common/Navbar";
import Footer from "../Components/Common/Footer";
import WhatsAppButton from "../Components/Common/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Blaupunkt",
  description: "Blaupunkt EV Charging Solutions",
  icons: {
    icon: "/Logo.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className='flex-grow pt-20 lg:pt-24'>{children}</main>
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
