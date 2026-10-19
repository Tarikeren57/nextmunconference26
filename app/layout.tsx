import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "NEXT MUN'26 | Next Conference",
  description:
    "Model United Nations Conference — December 11–14, 2026 at İbn Haldun Üniversitesi. Organized by 15 Temmuz Şehitleri AİHL.",
  keywords: ["MUN", "Model United Nations", "NEXT MUN", "Next Conference", "2026"],
  openGraph: {
    title: "NEXT MUN'26 | Next Conference",
    description: "Where the future meets diplomacy. December 11–14, 2026.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-black text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
