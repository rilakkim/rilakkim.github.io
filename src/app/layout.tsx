import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import Navigation from "@/components/Navigation";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Hyungjun Kim | Think Make Play",
  description: "Portfolio of Hyungjun Kim",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${playfairDisplay.variable} antialiased`}
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}
