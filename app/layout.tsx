import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { ContactModal } from "./components/ui/ContactModal";
import { JsonLd } from "./components/ui/JsonLd";

/* Display serif for headings, Inter for everything else. */
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zahidrahimoon.dev"),
  title: {
    default: "Zahid Rahimoon — Full-Stack Engineer",
    template: "%s | Zahid Rahimoon",
  },
  description:
    "Full-Stack Engineer with 2+ years building scalable web and mobile products with React, Next.js, Node.js and React Native.",
  keywords: [
    "Zahid Rahimoon",
    "Full-Stack Engineer",
    "Karachi",
    "Pakistan",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "React Native",
  ],
  authors: [{ name: "Zahid Rahimoon" }],
  creator: "Zahid Rahimoon",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://zahidrahimoon.dev",
    siteName: "Zahid Rahimoon Portfolio",
    title: "Zahid Rahimoon — Full-Stack Engineer",
    description:
      "Full-Stack Engineer with 2+ years building scalable web and mobile products with React, Next.js, Node.js and React Native.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Zahid Rahimoon — Full-Stack Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zahid Rahimoon — Full-Stack Engineer",
    description:
      "Full-Stack Engineer with 2+ years building scalable web and mobile products with React, Next.js, Node.js and React Native.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://zahidrahimoon.dev",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      {/* suppressHydrationWarning: browser extensions (e.g. ColorZilla's
          `cz-shortcut-listen`) inject attributes on <body> before React
          hydrates, which would otherwise log a hydration mismatch. */}
      <body className="min-h-full" suppressHydrationWarning>
        <JsonLd />
        {children}
        <ContactModal />
      </body>
    </html>
  );
}
