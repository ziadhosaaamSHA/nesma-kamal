"use client";

import React from "react";
import { motion } from "framer-motion";
import { WhatsappLogo } from "@phosphor-icons/react";
import { useLanguage } from "@/context/LanguageContext";
//import SectionReveal from "@/components/transitions/SectionReveal";
import { BookingForm } from "@/components/BookingForm";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Headings from "@/components/ui/Headings";

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
    <Section id="book">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            
            <div>
              <span className="text-xs uppercase text-brand-sage/60 font-medium mb-6 block">
                {t.tag}
              </span>
              <Headings dangerouslySetInnerHTML={{ __html: t.title }} variant="h1" className="font-display leading-tight mb-8" children={undefined} lang={lang}>
              </Headings>
              <p className="body-copy text-brand-parchment/60 max-w-[450px] mb-12">
                {t.desc}
              </p>
              
              <div className="flex items-center gap-4 text-brand-sage/40">
                <WhatsappLogo size={32} />
                <span className="text-[10px] uppercase ">{t.whatsapp}</span>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-brand-parchment p-10 text-brand-charcoal shadow-2xl md:p-16">
                <BookingForm />
              </Card>
            </motion.div>

          </div>
    </Section>
  );
};

export default Booking;
