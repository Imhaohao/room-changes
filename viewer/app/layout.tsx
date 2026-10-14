import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Karla, Libre_Franklin, Atkinson_Hyperlegible_Mono } from "next/font/google";
import "./globals.css";

const karla = Karla({ subsets: ["latin"], variable: "--font-karla" });
const libreFranklin = Libre_Franklin({ subsets: ["latin"], variable: "--font-libre-franklin" });
const atkinsonMono = Atkinson_Hyperlegible_Mono({
  subsets: ["latin"],
  variable: "--font-atkinson-mono",
  adjustFontFallback: false,
  fallback: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
});

export const metadata: Metadata = {
  title: "What changed in the room",
  description: "Compare two phone videos of one room and see, in 3D, which things moved, appeared or disappeared.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${karla.variable} ${libreFranklin.variable} ${atkinsonMono.variable}`}>
      <body className="min-h-dvh">{children}</body>
    </html>
  );
}
