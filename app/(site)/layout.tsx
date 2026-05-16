"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

const titles: Record<string, { en: string; ar: string }> = {
  "/about": { en: "About Nesma", ar: "عن نسمة" },
  "/contact": { en: "Connect with Me", ar: "تواصل معي" },
  "/gallery": { en: "Gallery", ar: "المعرض" },
  "/testimonials": { en: "Shared Journeys", ar: "رحلات مشتركة" },
  "/services/workshops": { en: "Live Workshops", ar: "ورش عمل مباشرة" },
  "/services/consultation": { en: "1:1 Consultation", ar: "استشارة فردية" },
  "/services/courses": { en: "Recorded Courses", ar: "دورات مسجلة" },
  "/resources/podcasts": { en: "Podcasts", ar: "بودكاست" },
  "/resources/videos": { en: "Videos", ar: "فيديوهات" },
  "/resources/blog": { en: "Blog", ar: "المدونة" },
  "/resources/assessments": { en: "Self-Assessments", ar: "اختبارات" },
};

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const title = titles[pathname] || { en: "Nesma Kamal", ar: "نسمة كمال" };

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
