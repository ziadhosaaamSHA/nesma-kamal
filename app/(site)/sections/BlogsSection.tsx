"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useLanguage } from "@/context/LanguageContext";
import Section from "@/components/ui/Section";
import Headings from "@/components/ui/Headings";
import Button from "@/components/ui/Button";
import BlogCard, { type CardTheme } from "@/components/ui/BlogCard";
import SliderArrows from "@/components/ui/SliderArrow";
import { cn } from "@/components/ui/utils";

export interface PressItem {
  id: string;
  theme: CardTheme;
  dateEn: string;
  dateAr: string;
  titleEn: string;
  titleAr: string;
  excerptEn: string;
  excerptAr: string;
  href: string;
  image?: string;
}

const PRESS_ITEMS: PressItem[] = [
  {
    id: "sky-news-interview",
    theme: "primary",
    dateEn: "May 15, 2026",
    dateAr: "١٥ مايو ٢٠٢٦",
    titleEn: "Dr. Nesma Kamal on Modern Anxiety & Work-Life Balance",
    titleAr: "د. نسمة كمال تتحدث عن قلق العصر والتوازن النفسي والمهني",
    excerptEn: "A clinical breakdown on live television exploring how workplace pressures affect mental clarity and practical tools for daily decompression.",
    excerptAr: "تحليل إكلينيكي مباشر على التلفزيون يستعرض كيفية تأثير ضغوط العمل على الصفاء الذهني مع أدوات عملية للتفريغ اليومي.",
    href: "/resources/videos",
  },
  {
    id: "forbes-feature",
    theme: "secondary",
    dateEn: "Apr 28, 2026",
    dateAr: "٢٨ أبريل ٢٠٢٦",
    titleEn: "Transforming Mental Health Awareness in the Arab World",
    titleAr: "إعادة تشكيل الوعي بالصحة النفسية في الوطن العربي",
    excerptEn: "An editorial spotlight examining Dr. Nesma Kamal's innovative workshops and therapeutic approach empowering thousands across the region.",
    excerptAr: "تسليط ضوء صحفي يتناول ورش عمل د. نسمة كمال ومنهجيتها العلاجية المبتكرة التي ألهمت آلاف الأفراد في المنطقة.",
    href: "/resources/blog",
  },
  {
    id: "podcasts-mental-peace",
    theme: "tertiary",
    dateEn: "Mar 10, 2026",
    dateAr: "١٠ مارس ٢٠٢٦",
    titleEn: "Healing the Inner Critic: Dialogue with Thought Leaders",
    titleAr: "ترويض الناقد الداخلي: حوار مع رواد الفكر النفسي",
    excerptEn: "An in-depth audio session exploring self-compassion frameworks, dealing with perfectionism, and overcoming subconscious self-sabotage.",
    excerptAr: "جلسة صوتية متعمقة تناقش أطر الشفقة بالذات، التعامل مع فخ المثالية، وتجاوز سلوكيات التدمير الذاتي اللاواعي.",
    href: "/resources/podcasts",
  },
  {
    id: "cairo-talks",
    theme: "primary",
    dateEn: "Feb 18, 2026",
    dateAr: "١٨ فبراير ٢٠٢٦",
    titleEn: "The Psychology of Attachment in Modern Relationships",
    titleAr: "سيكولوجية الارتباط في العلاقات المعاصرة",
    excerptEn: "Exploring the neurological roots of trauma bonding and actionable exercises for building secure self-connection.",
    excerptAr: "استكشاف الجذور العصبية للتعلق الصدمي وتمارين عملية لبناء اتصال آمن ومستقر مع الذات.",
    href: "/resources/blog",
  },
];

export default function BlogsSection() {
  const { lang } = useLanguage();
  const isAr = lang === "ar";
  const [swiper, setSwiper] = useState<any>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const updateNavState = (s: any) => {
    if (!s) return;
    setIsBeginning(s.isBeginning);
    setIsEnd(s.isEnd);
  };

  const content = {
    en: {
      heading: "Press & Media",
      subtitle: "Selected media coverage, television appearances, and editorial features.",
      viewAll: "View All Press",
      readBtn: "Read Coverage",
    },
    ar: {
      heading: "في الصحافة والإعلام",
      subtitle: "أبرز التغطيات الإعلامية، اللقاءات التلفزيونية، والمقالات الصحفية.",
      viewAll: "عرض كل التغطيات",
      readBtn: "اقرأ التغطية",
    },
  };

  const t = content[lang] || content.en;

  return (
    <Section id="press" background="transparent" className="py-8 sm:py-14">
      {/* Header Container with Slider Arrows aligned by language */}
      <div
        className={cn(
          "flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-8 sm:mb-12",
          isAr ? "sm:flex-row-reverse" : ""
        )}
      >
        <div className="max-w-2xl">
          <Headings
            variant="h2"
            align={isAr ? "right" : "left"}
            color="brand"
            lang={lang}
          >
            {t.heading}
          </Headings>

          <p
            className={cn(
              "body-copy leading-relaxed",
              isAr ? "text-right" : "text-left"
            )}
          >
            {t.subtitle}
          </p>
        </div>

        {/* Carousel Navigation Arrows + Pagination */}
        <div
          className={cn(
            "hidden sm:flex items-center gap-4 shrink-0",
            isAr ? "flex-row-reverse" : ""
          )}
        >
          <div className="blogs-swiper-pagination flex items-center gap-1.5 !w-auto" />
          <SliderArrows
            previousDisabled={isAr ? isEnd : isBeginning}
            nextDisabled={isAr ? isBeginning : isEnd}
            onPrevious={() => (isAr ? swiper?.slideNext() : swiper?.slidePrev())}
            onNext={() => (isAr ? swiper?.slidePrev() : swiper?.slideNext())}
            lang={lang}
          />
        </div>
      </div>

      {/* Swiper Slider */}
      <Swiper
        key={lang}
        onSwiper={(s) => {
          setSwiper(s);
          updateNavState(s);
        }}
        onSlideChange={updateNavState}
        onReachBeginning={updateNavState}
        onReachEnd={updateNavState}
        onFromEdge={updateNavState}
        onProgress={updateNavState}
        modules={[Pagination]}
        dir={isAr ? "rtl" : "ltr"}
        spaceBetween={20}
        slidesPerView={1.08}
        grabCursor
        pagination={{
          clickable: true,
          el: ".blogs-swiper-pagination",
          bulletClass: "swiper-pagination-bullet !bg-moss-400 !opacity-50 hover:!opacity-80 transition-all",
          bulletActiveClass: "swiper-pagination-bullet-active !bg-moss-800 !opacity-100 !w-6 !rounded-full",
        }}
        breakpoints={{
          640: { slidesPerView: 1.3, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 24 },
          1024: { slidesPerView: 3, spaceBetween: 24 },
          1280: { slidesPerView: 3, spaceBetween: 28 },
        }}
        className="pb-4 [&_.swiper-pagination-bullet]:!bg-moss-400 [&_.swiper-pagination-bullet-active]:!bg-moss-800"
      >
        {PRESS_ITEMS.map((item) => (
          <SwiperSlide key={item.id} className="h-auto flex">
            <BlogCard
              title={isAr ? item.titleAr : item.titleEn}
              excerpt={isAr ? item.excerptAr : item.excerptEn}
              date={isAr ? item.dateAr : item.dateEn}
              theme={item.theme}
              href={item.href}
              image={item.image}
              buttonText={t.readBtn}
              className="h-full w-full"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Mobile Swipe Navigation Controls & Pagination */}
      <div
        className={cn(
          "flex sm:hidden items-center justify-between mt-4 mb-6",
          isAr ? "flex-row-reverse" : ""
        )}
      >
        <div className="blogs-swiper-pagination !w-auto flex items-center gap-1.5" />
        <SliderArrows
          previousDisabled={isAr ? isEnd : isBeginning}
          nextDisabled={isAr ? isBeginning : isEnd}
          onPrevious={() => (isAr ? swiper?.slideNext() : swiper?.slidePrev())}
          onNext={() => (isAr ? swiper?.slidePrev() : swiper?.slideNext())}
          lang={lang}
        />
      </div>

      {/* Footer CTA */}
      <div className="mt-10 flex justify-center">
        <Link href="/resources/blog">
          <Button variant="primary">
            {t.viewAll}
          </Button>
        </Link>
      </div>
    </Section>
  );
}
