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
  title: "مركز الشيخ لصيانة الأجهزة والتكييف بالدمام والخبر | Al Sheikh Cooling & Appliance Repair",
  description:
    "صيانة سريعة وفورية للمكيفات، الثلاجات، الغسالات والأفران بالدمام والخبر. وصول خلال 40 دقيقة، قطع غيار أصلية وضمان 30 يوماً. فحص يبدأ من 50 ريال. Emergency home appliance repair in Dammam & Khobar.",
  keywords: [
    "صيانة مكيفات الدمام",
    "تصليح ثلاجات الدمام",
    "صيانة غسالات الخبر",
    "تصليح أفران",
    "تعبئة فريون الدمام",
    "AC repair Dammam",
    "refrigerator repair Khobar",
    "washing machine repair",
    "Al Sheikh Cooling",
  ],
  openGraph: {
    title: "مركز الشيخ لصيانة الأجهزة والتكييف | Al Sheikh Cooling",
    description: "خدمة صيانة منزلية فورية وموثوقة بالدمام والخبر. وصول خلال 40 دقيقة وضمان معتمد.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" className={`${inter.variable} ${tajawal.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900 selection:bg-blue-600 selection:text-white">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
