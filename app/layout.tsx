import type { Metadata } from "next";
import { Nunito, Playfair_Display } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Invitación Formal · Burger Party",
  description:
    "Invitación oficial para la Srta. Jazmin Orellana. Cena formal, dress code estricto, peluche obligatorio.",
  openGraph: {
    title: "Invitación Formal · Burger Party",
    description:
      "Para la Srta. Jazmin Orellana. Cena formal, martes 21 de abril, Casa de Pepi.",
    type: "website",
    locale: "es_AR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Invitación Formal · Burger Party",
    description:
      "Para la Srta. Jazmin Orellana. Cena formal, martes 21 de abril, Casa de Pepi.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${nunito.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
