import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "KI 3231 - LTKK Wiki",
    template: "%s | KI 3231 - LTKK Wiki",
  },
  description: "Interactive Chemistry Education Platform for Transition Metals & Complex Chemistry. Explore reaction mechanisms, organometallics, and more with interactive calculators and quizzes.",
  metadataBase: new URL("https://ltkk.g-labs.my.id"),
  openGraph: {
    title: "KI 3231 - LTKK Wiki",
    description: "Interactive Chemistry Education Platform for Transition Metals & Complex Chemistry",
    url: "https://ltkk.g-labs.my.id",
    siteName: "LTKK Wiki",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "KI 3231 - LTKK Wiki",
    description: "Interactive Chemistry Education Platform for Transition Metals & Complex Chemistry",
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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Outfit:wght@600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}

