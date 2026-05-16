"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import SectionReveal from "./SectionReveal";

const QuoteSection = () => {
  const { lang } = useLanguage();

  return (
    <section className="relative py-48 flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-brand-olive/60 z-10" />
        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2000')] bg-cover bg-center bg-fixed" />
      </div>

      <div className="max-w-[1000px] mx-auto px-6 text-center relative z-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-display text-brand-parchment leading-tight ">
          {lang === "en" 
            ? '"Restorative clarity is not found in the noise, but in the gentle breeze of self-awareness."'
            : '"الوضوح الاستردادي لا يوجد في الضجيج، بل في نسمة الوعي الذاتي اللطيفة."'}
        </h2>
        <span className="block mt-12 text-xs uppercase tracking-[0.5em] text-brand-parchment/60 font-medium">
          — Nesma Kamal
        </span>
      </motion.div>
      </div>
    </section>
  );
};

export default QuoteSection;
