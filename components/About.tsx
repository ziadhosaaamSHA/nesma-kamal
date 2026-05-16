"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import SectionReveal from "./SectionReveal";
import Image from "next/image";

const About = () => {
  const { lang } = useLanguage();

  const content = {
    en: {
      tag: "The Practitioner",
      title: "Nesma <span class=''>Kamal</span>",
      p1: "Nesma is a prominent Egyptian mental health therapist specializing in Cognitive Behavioral Therapy (CBT) and Dialectical Behavior Therapy (DBT).",
      p2: "With over 7 years of clinical experience, her approach bridges the gap between professional therapy and accessible mental health advocacy.",
      p3: "She creates a 'Safe Harbor' for those seeking grounded stability through proven clinical techniques and empathetic guidance.",
      cta: "Learn More",
    },
    ar: {
      tag: "الأخصائية",
      title: "نسمة <span class=''>كمال</span>",
      p1: "نسمة هي أخصائية صحة نفسية مصرية بارزة متخصصة في العلاج السلوكي المعرفي (CBT) والعلاج الجدلي السلوكي (DBT).",
      p2: "مع أكثر من 7 سنوات من الخبرة الإكلينيكية، يربط نهجها بين العلاج المهني والدفاع عن الصحة النفسية.",
      p3: "تخلق 'ملاذًا آمنًا' لمن يبحثون عن الاستقرار من خلال التقنيات الإكلينيكية المثبتة والتوجيه المتعاطف.",
      cta: "اقرأ المزيد",
    },
  };

  const t = content[lang];

  return (
    <section id="about" className="py-24 bg-brand-parchment overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Content: Text */}
        <div className="lg:col-span-6 order-2 lg:order-1">
          <SectionReveal graphic="sun" placement="top-right">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
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
              <div className="space-y-6 text-brand-charcoal/70 leading-relaxed text-lg">
                <p>{t.p1}</p>
                <p>{t.p2}</p>
                <p>{t.p3}</p>
              </div>
              
              <button className="btn-primary mt-12">
                {t.cta}
              </button>
            </motion.div>
          </SectionReveal>
        </div>

        {/* Right: Side Image Placeholder */}
        <div className="lg:col-span-5 lg:col-start-8 order-1 lg:order-2 relative">
          <SectionReveal graphic="waves" placement="waves-bottom">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-[3/4] w-full bg-brand-parchment rounded-sm overflow-hidden shadow-2xl z-10"
            >
              <Image 
                src="/images/about.png" 
                alt="Nesma Kamal" 
                fill 
                className="object-cover" 
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" 
                priority 
              />
            </motion.div>
          </SectionReveal>
        </div>
        
        </div>
      </div>
    </section>
  );
};

export default About;
