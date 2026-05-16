"use client";

import React from "react";
import { TransitionLink } from "./TransitionLink";
import { InstagramLogo, LinkedinLogo, YoutubeLogo } from "@phosphor-icons/react";
import { useLanguage } from "@/context/LanguageContext";

const Footer = () => {
  const { lang } = useLanguage();

  const navigation = [
    { label: "About", labelAr: "عن نسمة", href: "/about" },
    {
      label: "Services",
      labelAr: "الخدمات",
      dropdown: [
        { name: "Live Workshops", nameAr: "ورش عمل مباشرة", href: "/services/workshops" },
        { name: "1:1 Consultation", nameAr: "استشارة فردية", href: "/services/consultation" },
        { name: "Recorded Courses", nameAr: "دورات مسجلة", href: "/services/courses" },
      ],
    },
    { label: "Gallery", labelAr: "المعرض", href: "/gallery" },
    { label: "Testimonials", labelAr: "آراء العملاء", href: "/testimonials" },
    {
      label: "Resources",
      labelAr: "المصادر",
      dropdown: [
        { name: "Podcasts", nameAr: "بودكاست", href: "/resources/podcasts" },
        { name: "Videos", nameAr: "فيديوهات", href: "/resources/videos" },
        { name: "Blog", nameAr: "المدونة", href: "/resources/blog" },
        { name: "Assessments", nameAr: "اختبارات", href: "/resources/assessments" },
      ],
    },
    { label: "Connect", labelAr: "تواصل", href: "/contact" },
  ];

  const generalNavLinks = navigation.filter(item => !item.dropdown);
  const servicesNavLinks = navigation.find(item => item.label === "Services");
  const resourcesNavLinks = navigation.find(item => item.label === "Resources");

  return (
    <footer className="bg-brand-primary text-brand-parchment pt-24 pb-12 border-t border-brand-parchment/10">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-24 ${lang === "ar" ? "text-right" : ""}`}>
          
          <div className="lg:col-span-4">
            <div className="relative mb-8">
              <h2 className="text-3xl font-display logo-spacing text-white">nesma</h2>
            </div>
            <p className="text-sm text-brand-parchment/60 leading-relaxed max-w-[300px]">
              {lang === "en" 
                ? "Providing a safe harbor for emotional resilience and clinical recovery through evidence-based therapy."
                : "توفير ملاذ آمن للمرونة العاطفية والتعافي الإكلينيكي من خلال العلاج القائم على الأدلة."}
            </p>
          </div>

          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="text-[10px] uppercase tracking-widest text-brand-parchment/40 mb-8">
              {lang === "en" ? "Navigation" : "التنقل"}
            </h4>
            <nav className="flex flex-col gap-4">
              {generalNavLinks.map((link) => (
                <TransitionLink key={link.label} href={link.href as string} className="text-xs uppercase tracking-widest hover:text-white transition-colors w-fit">
                  {lang === "en" ? link.label : link.labelAr}
                </TransitionLink>
              ))}
            </nav>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-[10px] uppercase tracking-widest text-brand-parchment/40 mb-8">
              {lang === "en" ? servicesNavLinks?.label : servicesNavLinks?.labelAr}
            </h4>
            <nav className="flex flex-col gap-4">
              {servicesNavLinks?.dropdown?.map((link) => (
                <TransitionLink key={link.name} href={link.href} className="text-xs uppercase tracking-widest hover:text-white transition-colors w-fit">
                  {lang === "en" ? link.name : link.nameAr}
                </TransitionLink>
              ))}
            </nav>
            <h4 className="text-[10px] uppercase tracking-widest text-brand-parchment/40 mb-8 mt-12">
              {lang === "en" ? resourcesNavLinks?.label : resourcesNavLinks?.labelAr}
            </h4>
            <nav className="flex flex-col gap-4">
              {resourcesNavLinks?.dropdown?.map((link) => (
                <TransitionLink key={link.name} href={link.href} className="text-xs uppercase tracking-widest hover:text-white transition-colors w-fit">
                  {lang === "en" ? link.name : link.nameAr}
                </TransitionLink>
              ))}
            </nav>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-[10px] uppercase tracking-widest text-brand-parchment/40 mb-8">
              {lang === "en" ? "Social" : "اجتماعي"}
            </h4>
            <div className={`flex gap-6 ${lang === "ar" ? "justify-end lg:justify-start" : ""}`}>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><InstagramLogo size={24} /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><LinkedinLogo size={24} /></a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><YoutubeLogo size={24} /></a>
            </div>
            <div className="mt-8">
              <p className="text-[10px] uppercase tracking-widest text-brand-parchment/40 mb-4">{lang === "en" ? "Location" : "الموقع"}</p>
              <p className="text-xs leading-relaxed text-brand-parchment/80">
                {lang === "en" ? "Cairo, Egypt" : "القاهرة، مصر"}<br />
                {lang === "en" ? "Available for Online Consultations Worldwide" : "متاح للاستشارات عبر الإنترنت في جميع أنحاء العالم"}
              </p>
            </div>
          </div>

        </div>

        <div className={`flex justify-center items-center pt-12 border-t border-brand-parchment/10`}>
          <p className="text-[10px] uppercase tracking-widest text-brand-parchment/40 text-center">
            {lang === "en" ? "© 2026 Nesma Kamal. All rights reserved." : "© 2026 نسمة كمال. جميع الحقوق محفوظة."}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
