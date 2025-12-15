import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Navbar from "../../Components/Common/Navbar";
import Footer from "../../Components/Common/Footer";
import WhatsAppButton from "../../Components/Common/WhatsAppButton";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '../../i18n/routing';

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

export default async function RootLayout({ children, params }) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <main className='flex-grow pt-20 lg:pt-24'>{children}</main>
          <WhatsAppButton />
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
