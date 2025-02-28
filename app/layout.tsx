import type React from "react";
import "./globals.css";
import { Cormorant_Garamond } from "next/font/google";

const titleFont = Cormorant_Garamond({ weight: "700", subsets: ["cyrillic"] });
const bodyFont = Cormorant_Garamond({ weight: "700",subsets: ["latin-ext"] });

export const metadata = {
  title: "Ryoiki Tenkai",
  description: "Malevolent Shrine of ART",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${bodyFont.className} bg-black text-white`}>
        <header className="py-6 text-center">
          <h1 className={`${titleFont.className} glow-text text-5xl font-bold tracking-tight`}>
            Ryoiki Tenkai
          </h1>
        </header>
        {children}
      </body>
    </html>
  );
}
