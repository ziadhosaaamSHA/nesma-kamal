"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { WhatsappLogo } from "@phosphor-icons/react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import Headings from "@/components/ui/Headings";

const BookSection = () => {
  const { lang } = useLanguage();

  const content = {
    en: {
      tag: "Best-Selling Author",
      title: "Dopamine <span class=''>for Sale</span>",
      desc: "An exploration of the psychological journey of healing from toxic relationships and unhealthy attachments. This book serves as a clinical guide to reclaiming your emotional independence.",
      price: "350 EGP",
      originalPrice: "450 EGP",
      rating: 4.9,
      reviewsCount: "180+ reviews",
      btn: "Buy via WhatsApp",
    },
    ar: {
      tag: "المؤلفة الأكثر مبيعاً",
      title: "دوبامين <span class=''>للبيع</span>",
      desc: "استكشاف للرحلة النفسية للشفاء من العلاقات السامة والارتباطات غير الصحية. يعمل هذا الكتاب كدليل إكلينيكي لاستعادة استقلالك العاطفي.",
      price: "٣٥٠ ج.م",
      originalPrice: "٤٥٠ ج.م",
      rating: 4.9,
      reviewsCount: "١٨٠+ تقييم",
      btn: "اشتري عبر الواتساب",
    },
  };

  const t = content[lang];

  return (
    <Section id="book-section" background="transparent">
      <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${lang === "ar" ? "lg:flex-row-reverse" : ""}`}>
        {/* Left: Book Visual */}
        <div className="lg:col-span-5 relative flex justify-center">
          <div className="rounded-2xl overflow-hidden shadow-2xl w-80 sm:w-96 lg:w-full transition-transform duration-500 hover:scale-[1.02]">
            <Image
              src="/images/book.webp"
              alt="Book Cover"
              width={1040}
              height={1040}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Right: Content */}
        <div className="lg:col-span-6 lg:col-start-7">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start gap-4"
          >
            <Headings variant="h2" className="font-bold" align={lang === "ar" ? "right" : "left"} color="brand" lang={lang}>
              <span dangerouslySetInnerHTML={{ __html: t.title }} />
            </Headings>

            {/* Gold Review Stars */}
            <div className="flex items-center gap-2 text-sm font-medium">
              <div className="flex items-center gap-0.5 text-amber-500">
                {[0, 1, 2, 3, 4].map((i) => (
                  <svg key={i} viewBox="0 0 20 20" aria-hidden="true" className="h-5 w-5 fill-current">
                    <path d="M10 15.27 16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z" />
                  </svg>
                ))}
              </div>
              <span className="font-bold text-gray-900">{t.rating}</span>
              <span className="text-gray-500">({t.reviewsCount})</span>
            </div>

            <p className="body-copy text-left max-w-[520px] text-gray-700">
              {t.desc}
            </p>

            {/* Price display just like in Card */}
            <div className="flex items-baseline gap-3 my-2">
              <span className="text-3xl sm:text-4xl font-bold text-burgundy-700">
                {t.price}
              </span>
              <span className="text-base line-through text-gray-500 font-medium">
                {t.originalPrice}
              </span>
            </div>

            <Button
              variant="secondary"
              onClick={() => window.open(`https://wa.me/YOUR_NUMBER?text=${encodeURIComponent("I want to buy Dopamine for Sale")}`, "_blank")}
              className="flex items-center gap-2.5 px-8 py-3.5"
            >
              <WhatsappLogo size={24} weight="fill" />
              {t.btn}
            </Button>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default BookSection;
