// src/lib/Analytics.tsx

'use client'

import Script from 'next/script'

export default function Analytics() {
  return (
    <>
      {/* Google Analytics Script */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
        strategy="afterInteractive"
        onLoad={() => console.log("✅ GA script loaded")}
      />
      
      {/* GA4 Config */}
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          console.log("✅ Initializing GA");
          window.dataLayer = window.dataLayer || [];
          function gtag(){ dataLayer.push(arguments); }
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}', { debug_mode: true });
        `}
      </Script>
    </>
  )
}
