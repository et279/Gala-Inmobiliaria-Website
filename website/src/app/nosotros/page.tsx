// src/app/nosotros/page.tsx

import '@/styles/nosotros.css'
import NosotrosClient from './NosotrosClient'

export const metadata = {
    title: "Nosotros | Gala Inmobiliaria",
    description:
      "En Gala Inmobiliaria más que propiedades, acompañamos vidas. Conoce nuestra historia, valores y propósito como marca que protege tu patrimonio.",
    openGraph: {
      title: "Nosotros | Gala Inmobiliaria",
      description:
        "Conoce quiénes somos. En Gala Inmobiliaria acompañamos a las personas en uno de los momentos más importantes de sus vidas.",
      url: "https://www.galainmobiliaria.com.co/nosotros",
      siteName: "Gala Inmobiliaria",
      images: [
        {
          url: "https://www.galainmobiliaria.com.co/assets/og-nosotros.jpg",
          width: 1200,
          height: 630,
          alt: "Equipo Gala Inmobiliaria",
        },
      ],
      locale: "es_CO",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Nosotros | Gala Inmobiliaria",
      description:
        "Más que propiedades, acompañamos vidas. Descubre nuestra historia y valores como marca.",
      images: ["https://www.galainmobiliaria.com.co/assets/og-nosotros.jpg"],
    },
    alternates: {
      canonical: "https://www.galainmobiliaria.com.co/nosotros",
    },
  }
  
  export default NosotrosClient;