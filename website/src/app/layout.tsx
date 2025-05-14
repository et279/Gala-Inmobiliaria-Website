import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Analytics from "@/lib/Analytics";
import TagManager from "@/lib/TagManager";
import SeoProvider from "@/components/SeoProvide";
import TagManagerNoScript from "@/lib/TagManagerNoScript";
import { Inter, Merriweather } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-serif",
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gala Inmobiliaria",
  description: "Compra o arrienda propiedades en Medellín y el Valle de Aburrá.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`dark`}>
      <body
        className={`antialiased`}
      >
        <Analytics />
        <TagManager />
        <TagManagerNoScript />
        <SeoProvider />
        {children}
      </body>
    </html>
  );
}
