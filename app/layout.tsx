import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { ContactModal } from "./components/ui/ContactModal";

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
  title: "Zahid Rahimoon — Full-Stack Engineer",
  description:
    "Full-Stack Engineer with 2+ years building scalable web and mobile products with React, Next.js, Node.js and React Native.",
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
        {children}
        <ContactModal />
      </body>
    </html>
  );
}
