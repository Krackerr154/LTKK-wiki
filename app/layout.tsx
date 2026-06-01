import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "KI 3231 - Logam Transisi & Kimia Kompleks",
    template: "%s | KI 3231 - LTKK",
  },
  description: "Platform Edukasi Kimia Interaktif untuk Logam Transisi & Kimia Kompleks. Pelajari mekanisme reaksi, organologam, dan lainnya dengan kalkulator dan kuis interaktif.",
  metadataBase: new URL("https://ltkk.g-labs.my.id"),
  openGraph: {
    title: "KI 3231 - Logam Transisi & Kimia Kompleks",
    description: "Platform Edukasi Kimia Interaktif untuk Logam Transisi & Kimia Kompleks",
    url: "https://ltkk.g-labs.my.id",
    siteName: "LTKK",
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "KI 3231 - Logam Transisi & Kimia Kompleks",
    description: "Platform Edukasi Kimia Interaktif untuk Logam Transisi & Kimia Kompleks",
  },
  robots: { index: true, follow: true },
  other: {
    "theme-color": "#0a0e17",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.variable} ${outfit.variable}`}>
      <body>{children}</body>
    </html>
  );
}

