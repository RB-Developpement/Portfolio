import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const gotham = localFont({src: "../public/fonts/Gotham/Gotham-Book.otf", variable: "--font-gotham", weight: "400", display: "swap"});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.romainbeka.fr"),
  title: "Romain Beka — Développeur Full Stack · C#/.NET & React",
  description: "Portfolio de Romain Beka, développeur Full Stack orienté produit. Projets web et desktop, IA locale, automatisation, C#/.NET et React.",
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "fr_FR", url: "/", siteName: "Romain Beka", title: "Romain Beka — Développeur Full Stack", description: "Applications web et desktop, IA locale et automatisation. Découvrez mes projets, mes compétences et mon parcours." },
  twitter: { card: "summary", title: "Romain Beka — Développeur Full Stack", description: "C#/.NET, React, IA locale et automatisation." },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr"><body className={gotham.variable}>{children}</body></html>;
}
