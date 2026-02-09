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
        <SmoothScroll>
          {children}
          {/* Global SVG Filters for Forensic Effects */}
          <svg className="absolute w-0 h-0 overflow-hidden" aria-hidden="true">
            <defs>
              <filter id="ink-bleed">
                <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="3" result="noise" />
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" />
              </filter>
            </defs>
          </svg>
        </SmoothScroll>
      </body>
    </html>
  );
}
