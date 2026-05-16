"use client";

import React from "react";
import { motion } from "framer-motion";
import { WhatsappLogo } from "@phosphor-icons/react";
import { useLanguage } from "@/context/LanguageContext";
import SectionReveal from "./SectionReveal";
import { BookingForm } from "./BookingForm";

const Booking = () => {
  const { lang } = useLanguage();

  const content = {
    en: {
      tag: "Take the first step",
      title: "Begin your <span class=' text-brand-sage'>restorative</span> journey.",
      desc: "Our streamlined intake process ensures your path to recovery is handled with clinical precision and empathetic care.",
      whatsapp: "Immediate WhatsApp Confirmation",
    },
    ar: {
      tag: "اتخذ الخطوة الأولى",
      title: "ابدأ رحلة <span class=' text-brand-sage'>التعافي</span> الخاصة بك.",
      desc: "تضمن عملية الاستقبال المبسطة لدينا أن يتم التعامل مع مسار تعافيك بدقة إكلينيكية ورعاية متعاطفة.",
      whatsapp: "تأكيد فوري عبر الواتساب",
    },
  };

  const t = content[lang];

  return (
    <section id="book" className="py-24 bg-brand-charcoal text-brand-parchment overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-burgundy/10 -skew-x-12 translate-x-1/2" />
      <SectionReveal iconClassName="text-brand-sage/10" graphic="grass" placement="top-right">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-brand-sage/60 font-medium mb-6 block">
                {t.tag}
              </span>
              <h2 className="text-5xl md:text-7xl font-display leading-tight mb-8" dangerouslySetInnerHTML={{ __html: t.title }} />
              <p className="text-brand-parchment/60 leading-relaxed max-w-[450px] mb-12">
                {t.desc}
              </p>
              
              <div className="flex items-center gap-4 text-brand-sage/40">
                <WhatsappLogo size={32} />
                <span className="text-[10px] uppercase tracking-widest">{t.whatsapp}</span>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-brand-parchment text-brand-charcoal p-10 md:p-16 rounded-sm shadow-2xl"
            >
              <BookingForm />
            </motion.div>

          </div>
        </div>
      </SectionReveal>
    </section>
  );
};

export default Booking;
