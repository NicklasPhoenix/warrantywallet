import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PriceDrop Guard — Never miss a price drop",
  description:
    "Track your purchases, watch for price drops, and claim refunds before the return window closes.",
  metadataBase: new URL("https://pricedropguard.vercel.app"),
  openGraph: {
    title: "PriceDrop Guard — Never miss a price drop",
    description:
      "Track your purchases, watch for price drops, and claim refunds before the return window closes.",
    url: "https://pricedropguard.vercel.app",
    siteName: "PriceDrop Guard",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PriceDrop Guard — Never miss a price drop",
    description:
      "Track your purchases, watch for price drops, and claim refunds before the return window closes.",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
