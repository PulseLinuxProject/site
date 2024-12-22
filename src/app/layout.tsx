import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#00ffff",
};

export const metadata: Metadata = {
  metadataBase: new URL('https://pulseos.spitkov.hu'),
  title: "PulseOS - Modern Linux Distribution",
  description: "A fresh take on Linux that just works. Great looks, smooth performance, and rock-solid reliability - all in one beautiful package.",
  openGraph: {
    title: "PulseOS - Modern Linux Distribution",
    description: "A fresh take on Linux that just works. Great looks, smooth performance, and rock-solid reliability.",
    url: "https://pulseos.spitkov.hu",
    siteName: "PulseOS",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "PulseOS - Modern Linux Distribution",
    description: "A fresh take on Linux that just works. Great looks, smooth performance, and rock-solid reliability.",
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
