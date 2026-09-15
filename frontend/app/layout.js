import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Al Sheikh Cooling Center | Premium AC, Washing Machine & Refrigerator Services",
  description:
    "Al Sheikh Cooling Center — your trusted partner for expert AC installation, repair, washing machine service, and refrigerator maintenance. Book now on WhatsApp for same-day service.",
  keywords: [
    "AC repair",
    "washing machine service",
    "refrigerator repair",
    "cooling center",
    "HVAC service",
    "Al Sheikh",
    "appliance repair",
  ],
  openGraph: {
    title: "Al Sheikh Cooling Center",
    description:
      "Premium cooling & appliance services. Expert installation, repair & maintenance.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
