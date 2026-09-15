import { Inter, Tajawal } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./context/LanguageContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const tajawal = Tajawal({
  variable: "--font-tajawal",
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "700", "800"],
  display: "swap",
});

export const metadata = {
  title: "مركز الشيخ لصيانة الأجهزة والتكييف بالدمام والظهران | Al Sheikh Cooling & Appliance Repair",
  description:
    "صيانة سريعة وفورية للمكيفات، الثلاجات، الغسالات والأفران بالدمام والظهران. وصول خلال 40 دقيقة، قطع غيار أصلية وضمان 30 يوماً. فحص يبدأ من 50 ريال. Emergency home appliance repair in Dammam & Dhahran.",
  keywords: [
    "صيانة مكيفات الدمام",
    "تصليح ثلاجات الدمام",
    "صيانة غسالات الظهران",
    "تصليح أفران",
    "تعبئة فريون الدمام",
    "AC repair Dammam",
    "refrigerator repair Dhahran",
    "washing machine repair",
    "Al Sheikh Cooling",
  ],
  openGraph: {
    title: "مركز الشيخ لصيانة الأجهزة والتكييف | Al Sheikh Cooling",
    description: "خدمة صيانة منزلية فورية وموثوقة بالدمام والظهران. وصول خلال 40 دقيقة وضمان معتمد.",
    type: "website",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "name": "Al Sheikh Cooling Center & Home Appliance Repair",
  "alternateName": "مركز الشيخ لصيانة الأجهزة المنزلية والتكييف",
  "description":
    "Rapid on-site repair for air conditioners, refrigerators, washing machines, and ovens across Dammam and Dhahran.",
  "telephone": "+966556906093",
  "priceRange": "SAR 50 - 350",
  "image": "https://alsheikh-cooling.com/hero-technician.jpg",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "18th Street, Al Souq District",
    "addressLocality": "Dammam",
    "addressRegion": "Eastern Province",
    "postalCode": "32242",
    "addressCountry": "SA",
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 26.4328,
    "longitude": 50.1036,
  },
  "areaServed": [
    { "@type": "City", "name": "Dammam" },
    { "@type": "City", "name": "Dhahran" },
  ],
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    "opens": "08:00",
    "closes": "23:00",
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "184",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" className={`${inter.variable} ${tajawal.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900 selection:bg-blue-600 selection:text-white">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
