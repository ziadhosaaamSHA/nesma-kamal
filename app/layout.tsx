import type { Metadata } from "next";
import { IBM_Plex_Sans_Arabic, Montserrat } from "next/font/google";
import localFont from "next/font/local";
import "@/app/globals.css";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { LanguageProvider } from "@/context/LanguageContext";
import { PageTransitionProvider } from "@/context/PageTransitionContext";
import PageLoader from "@/components/transitions/PageLoader";

const winsel = localFont({
  src: [
    {
      path: "./fonts/Winsel/Winsel-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Winsel/Winsel-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Winsel/Winsel-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Winsel/Winsel-Black.otf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-winsel",
  display: "swap",
  adjustFontFallback: "Times New Roman",
});

const sfPro = localFont({
  src: [
    {
      path: "./fonts/SF Pro/SF-Pro-Display-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/SF Pro/SF-Pro-Display-BoldItalic.otf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-sf-pro",
  display: "swap",
});
const Zain = localFont({
  src: [
    {
      path: "./fonts/Zain/Zain-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Zain/Zain-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Zain/Zain-black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "./fonts/Zain/Zain-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Zain/Zain-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/Zain/Zain-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/Zain/Zain-italic.ttf",
      weight: "200",
      style: "italic",
    },
  ],
  variable: "--font-zain",
  display: "swap",
});

const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "600", "700"],
  variable: "--font-ibm-plex-arabic",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "700"],
});

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const metadata: Metadata = {
  title: "Nesma Kamal | Mental Health Therapist",
  description: "Premium mental health therapy by Nesma Kamal. Restorative clarity and emotional resilience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          winsel.variable,
          sfPro.variable,
          Zain.variable,
          "font-sans antialiased bg-brand-sage text-brand-charcoal"
        )}
      >
        <LanguageProvider>
          <PageTransitionProvider>
            <PageLoader />
            {children}
          </PageTransitionProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
