import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import SplashScreen from "@/app/ui/splashscreen";
import NavLinks from "@/app/ui/navlinks";
import CustomCursorAnimation from "@/app/ui/customcursor";
import Script from "next/script";
import AnalyticsTracker from './analytics'

const elType = localFont({
  src: [
    {
      path: './fonts/elegant-typewriter-reg.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: './fonts/elegant-typewriter-light.woff2',
      weight: '100',
      style: 'light'
    },
    {
      path: './fonts/elegant-typewriter-bold.woff2',
      weight: '700',
      style: 'bold'
    },
  ]
});

export const metadata: Metadata = {
  title: "Sedikit Acak | Refa Andhika's Personal Site",
  description: "Personal website by Refa Andhika, a Full Stack Software Engineer with X+ years of experience in software development with extensive experience in building web application.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-4HTDGQR9JV`}
        />
        <Script
          id="ga-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-4HTDGQR9JV', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body
        className={`${elType.className} antialiased`}
      >
        <SplashScreen />
        <header>
          <NavLinks />
        </header>
        {children}
        <CustomCursorAnimation />
        <AnalyticsTracker />
      </body>
    </html>
  );
}
