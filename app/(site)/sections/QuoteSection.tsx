"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const QuoteSection = () => {
  const { lang } = useLanguage();

  return (
    <Section className="relative flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
        <div className="absolute inset-0 bg-brand-olive/60 z-10" />
        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2000')] bg-cover bg-center bg-fixed" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl md:text-6xl lg:text-7xl text-brand-parchment leading-tight ">
          {lang === "en" 
            ? '"Restorative clarity is not found in the noise, but in the gentle breeze of self-awareness."'
            : '"الوضوح الاستردادي لا يوجد في الضجيج، بل في نسمة الوعي الذاتي اللطيفة."'}
        </h2>
        <span className="block mt-12 text-xs uppercase text-brand-parchment/60 font-medium">
          — Nesma Kamal
        </span>
      </motion.div>
    </Section>
  );
};

export default QuoteSection;
