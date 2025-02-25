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
  title: "Shell Byte INC | Staffing, Recruitment & IT Solutions",
  description:
    "Shell Byte INC specializes in staffing, recruitment, and IT services. We connect businesses with top-tier professionals and provide innovative IT solutions to drive growth and efficiency.",
  keywords: [
    "staffing solutions",
    "recruitment services",
    "IT consulting",
    "temporary staffing",
    "contract staffing",
    "permanent hires",
    "talent acquisition",
    "IT services",
    "digital transformation",
    "Shell Byte INC",
  ],
  authors: [{ name: "Shell Byte INC", url: "https://www.shell-byte.com" }],
  openGraph: {
    title: "Shell Byte INC | Staffing, Recruitment & IT Solutions",
    description:
      "Shell Byte INC specializes in staffing, recruitment, and IT services. We connect businesses with top-tier professionals and provide innovative IT solutions to drive growth and efficiency.",
    url: "https://www.shell-byte.com",
    siteName: "Shell Byte INC",
    images: [
      {
        url: "/mainLogo.png", // Replace with your actual OG image URL
        width: 1200,
        height: 630,
        alt: "Shell Byte INC | Staffing, Recruitment & IT Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/mainLogo.png", // Replace with your favicon path
    shortcut: "/mainLogo.png", // Replace with your shortcut icon path
    apple: "/mainLogo.png", // Replace with your Apple touch icon path
  },
  manifest: "/site.webmanifest", // Replace with your manifest file path
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}