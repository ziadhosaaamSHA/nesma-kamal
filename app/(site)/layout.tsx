"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Header from "@/components/navigation/Header";
import Footer from "@/app/(site)/sections/Footer";
import PageHero from "@/components/PageHero";
import { pageHeroTitles } from "./layout.data";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const title = pageHeroTitles[pathname] || { en: "Nesma Kamal", ar: "نسمة كمال" };

  return (
    <>
      <Header />
      <div className="relative">
        {!isHome && (
          <PageHero 
            titleEn={title.en} 
            titleAr={title.ar} 
            image="/images/image.png" 
          />
        )}
        {children}
      </div>
      <Footer />
    </>
  );
}
