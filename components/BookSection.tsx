"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { WhatsappLogo, BookOpen } from "@phosphor-icons/react";
import Image from "next/image";
import SectionReveal from "./SectionReveal";

const BookSection = () => {
  const { lang } = useLanguage();

  const content = {
    en: {
      tag: "Best-Selling Author",
      title: "Dopamine <span class=''>for Sale</span>",
      desc: "An exploration of the psychological journey of healing from toxic relationships and unhealthy attachments. This book serves as a clinical guide to reclaiming your emotional independence.",
      btn: "Buy via WhatsApp",
    },
    ar: {
      tag: "المؤلفة الأكثر مبيعاً",
      title: "دوبامين <span class=''>للبيع</span>",
      desc: "استكشاف للرحلة النفسية للشفاء من العلاقات السامة والارتباطات غير الصحية. يعمل هذا الكتاب كدليل إكلينيكي لاستعادة استقلالك العاطفي.",
      btn: "اشتري عبر الواتساب",
    },
  };

  const t = content[lang];

  return (
    <section id="book-section" className="py-24 bg-brand-parchment relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-16 items-center ${lang === "ar" ? "lg:flex-row-reverse" : ""}`}>
          
          {/* Left: Book Visual */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="bg-brand-sage rounded-t-[80px] shadow-xl">
              <Image
                src="/images/book.png"
                alt="Book Cover"
                width={1440}
                height={1440}
              />
            </div>
            {/* Decorative Element */}
          </div>

          {/* Right: Content */}
          <div className="lg:col-span-6 lg:col-start-7">
            <SectionReveal graphic="botanical" placement="top-right">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <span className="text-xs uppercase tracking-[0.3em] text-brand-olive font-medium mb-6 block">
                  {t.tag}
                </span>
                <h2 
                  className="text-4xl md:text-6xl font-display leading-tight mb-8"
                  dangerouslySetInnerHTML={{ __html: t.title }}
                />
                <p className="text-brand-charcoal/70 leading-relaxed text-lg mb-12 max-w-[500px]">
                  {t.desc}
                </p>
                
                <button 
                  onClick={() => window.open(`https://wa.me/YOUR_NUMBER?text=${encodeURIComponent("I want to buy Dopamine for Sale")}`, "_blank")}
                  className="secondary-btn flex items-center gap-2"
                >
                  <WhatsappLogo size={24} weight="fill" />
                  {t.btn}
                </button>
              </motion.div>
            </SectionReveal>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BookSection;
