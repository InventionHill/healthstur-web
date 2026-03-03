import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import { CompanyInfoProvider } from "@/context/CompanyInfoContext";
import CountrySelectDialog from "@/app/components/CountrySelectDialog";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://healthstur.com'),
  title: {
    default: "Healthstur Fitness - Personalized Wellness & Transformation",
    template: "%s | Healthstur Fitness",
  },
  description: "Experience a transformative wellness journey with Healthstur Fitness. Personalized programs, expert guidance, and community stories to help you achieve your health goals.",
  keywords: ["fitness", "wellness", "healthstur", "weight loss", "muscle gain", "personalized nutrition", "workout plans"],
  authors: [{ name: "Healthstur Fitness" }],
  creator: "Healthstur Fitness",
  publisher: "Healthstur Fitness",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://healthstur.com",
    siteName: "Healthstur Fitness",
    title: "Healthstur Fitness - Personalized Wellness & Transformation",
    description: "Experience a transformative wellness journey with Healthstur Fitness. Personalized programs, expert guidance, and community stories.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Healthstur Fitness",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Healthstur Fitness - Personalized Wellness & Transformation",
    description: "Experience a transformative wellness journey with Healthstur Fitness.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased`}
        suppressHydrationWarning
      >
        <CompanyInfoProvider>
          {children}
          <CountrySelectDialog />
        </CompanyInfoProvider>
      </body>
    </html>
  );
}
