import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Analytics from "@/lib/Analytics";
import TagManager from "@/lib/TagManager";
import SeoProvider from "@/components/SeoProvide";
import TagManagerNoScript from "@/lib/TagManagerNoScript";

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
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
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
