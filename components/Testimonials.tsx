"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import SectionReveal from "./SectionReveal";
import { Quotes, CaretLeft, CaretRight } from "@phosphor-icons/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const testimonials = [
  {
    text: "Working with Nesma changed my perspective on recovery. The CBT techniques were practical and life-changing.",
    textAr: "العمل مع نسمة غير منظوري للتعافي. كانت تقنيات العلاج السلوكي المعرفي عملية وغيرت حياتي.",
    author: "Sara Ahmed",
    location: "Cairo, Egypt",
  },
  {
    text: "The workshops provided a safe community where I felt heard and understood for the first time.",
    textAr: "وفرت ورش العمل مجتمعاً آمناً حيث شعرت أن صوتي مسموع ومفهوم لأول مرة.",
    author: "Omar Khalid",
    location: "Dubai, UAE",
  },
  {
    text: "The book 'Dopamine for Sale' was my guide through a very difficult transition. Truly transformative.",
    textAr: "كتاب 'دوبامين للبيع' كان دليلي خلال مرحلة انتقالية صعبة للغاية. تحولي حقاً.",
    author: "Laila Mahmoud",
    location: "Riyadh, KSA",
  },
  {
    text: "Her approach to DBT is unique. She combines clinical precision with deep cultural empathy.",
    textAr: "نهجها في العلاج الجدلي السلوكي فريد. إنها تجمع بين الدقة الإكلينيكية والتعاطف الثقافي العميق.",
    author: "Hassan Ali",
    location: "Amman, Jordan",
  },
  {
    text: "I finally understood my attachment patterns. Nesma's sessions are a lighthouse for those lost in emotional fog.",
    textAr: "فهمت أخيراً أنماط الارتباط الخاصة بي. جلسات نسمة هي منارة لأولئك الضائعين في الضباب العاطفي.",
    author: "Nour El-Din",
    location: "Alexandria, Egypt",
  },
];

const Testimonials = () => {
  const { lang } = useLanguage();

  return (
    <section id="testimonials" className="py-24 bg-brand-parchment relative overflow-hidden">
      <SectionReveal graphic="grass" placement="top-both">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-brand-olive font-medium mb-6 block">
              {lang === "en" ? "Shared Journeys" : "رحلاتنا المشتركة"}
            </span>
            <h2 className="text-4xl md:text-5xl font-display leading-tight">
              {lang === "en" ? "Voices of resilience." : "أصوات المرونة."}
            </h2>
          </div>

          <div className="relative group">
            <Swiper
              key={lang}
              dir={lang === "ar" ? "rtl" : "ltr"}
              modules={[Autoplay, Pagination, Navigation]}
              spaceBetween={40}
              slidesPerView={1}
              breakpoints={{ 768: { slidesPerView: 3 } }}
              loop={true}
              autoplay={{ delay: 4000 }}
              pagination={{ clickable: true, el: ".swiper-pagination-custom" }}
              navigation={{
                nextEl: ".swiper-button-next-custom",
                prevEl: ".swiper-button-prev-custom",
              }}
              className="pb-24"
            >
              {testimonials.map((t, index) => (
                <SwiperSlide key={index}>
                  <motion.div
                    className="bg-brand-sage p-12 rounded-2xl shadow-xl shadow-brand-olive/5 relative h-full flex flex-col min-h-[400px]"
                  >
                    <Quotes size={48} weight="fill" className={`text-brand-olive/10 absolute top-8 ${lang === 'ar' ? 'right-8' : 'left-8'}`} />
                    <p className="text-lg font-display leading-relaxed mb-8 relative z-10">
                      &ldquo;{lang === "en" ? t.text : t.textAr}&rdquo;
                    </p>
                    <div className="mt-auto pt-8 border-t border-brand-charcoal/5">
                      <span className="block font-bold text-xs uppercase tracking-widest text-brand-olive">
                        {t.author}
                      </span>
                      <span className="text-[10px] uppercase tracking-widest text-brand-charcoal/40">
                        {t.location}
                      </span>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation */}
            <button className={`swiper-button-prev-custom absolute ${lang === 'ar' ? 'right-0' : 'left-0'} top-1/2 -translate-y-1/2 ${lang === 'ar' ? 'translate-x-full mr-[-20px]' : '-translate-x-full ml-[-20px]'} hidden xl:flex w-14 h-14 rounded border border-brand-olive/20 items-center justify-center text-brand-olive hover:bg-brand-olive hover:text-brand-parchment transition-all duration-500 z-20`}>
              {lang === 'ar' ? <CaretRight size={24} weight="bold" /> : <CaretLeft size={24} weight="bold" />}
            </button>
            <button className={`swiper-button-next-custom absolute ${lang === 'ar' ? 'left-0' : 'right-0'} top-1/2 -translate-y-1/2 ${lang === 'ar' ? '-translate-x-full ml-[-20px]' : 'translate-x-full mr-[-20px]'} hidden xl:flex w-14 h-14 rounded border border-brand-olive/20 items-center justify-center text-brand-olive hover:bg-brand-olive hover:text-brand-parchment transition-all duration-500 z-20`}>
              {lang === 'ar' ? <CaretLeft size={24} weight="bold" /> : <CaretRight size={24} weight="bold" />}
            </button>

            {/* Mobile Navigation & Pagination */}
            <div className="flex xl:hidden items-center justify-between mt-12">
              <button className="swiper-button-prev-custom w-12 h-12 rounded border border-brand-olive/20 flex items-center justify-center text-brand-olive">
                <CaretLeft size={20} weight="bold" />
              </button>
              <div className="swiper-pagination-custom !w-auto flex gap-2" />
              <button className="swiper-button-next-custom w-12 h-12 rounded border border-brand-olive/20 flex items-center justify-center text-brand-olive">
                <CaretRight size={20} weight="bold" />
              </button>
            </div>

            <div className="hidden xl:flex justify-center mt-8">
              <div className="swiper-pagination-custom !w-auto flex gap-2" />
            </div>
          </div>
        </div>
      </SectionReveal>
    </section>
  );
};

export default Testimonials;
