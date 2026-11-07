import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const gotham = localFont({src: "../public/fonts/Gotham/Gotham-Book.otf", variable: "--font-gotham", weight: "400", display: "swap"});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.romainbeka.fr"),
  title: "Romain Beka — Développeur Full Stack · C#/.NET & React",
  description: "Romain Beka, développeur Full Stack C#/.NET et React. Réalisations personnelles en développement logiciel, conception et pilotage de projets assistés par IA.",
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "fr_FR", url: "/", siteName: "Romain Beka", title: "Romain Beka — Développeur Full Stack", description: "Développement logiciel personnel, conception et pilotage de projets assistés par IA. Découvrez mes réalisations et mon rôle dans chacune." },
  twitter: { card: "summary", title: "Romain Beka — Développeur Full Stack", description: "C#/.NET et React : développement logiciel personnel et conception de projets assistés par IA." },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr"><body className={gotham.variable}>{children}</body></html>;
}
