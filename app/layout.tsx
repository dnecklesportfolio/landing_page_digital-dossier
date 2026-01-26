import type { Metadata } from "next";
import { Merriweather, JetBrains_Mono } from "next/font/google"; // Import fonts
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll"; // Import SmoothScroll

// Configure fonts
const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "53 Madison Street | The Digital Dossier",
  description: "Investigative report on the 53 Madison Street deed theft case.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${merriweather.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
