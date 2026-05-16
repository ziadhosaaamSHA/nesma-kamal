"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";

interface PageHeroProps {
  titleEn: string;
  titleAr: string;
  image: string;
}

const PageHero = ({ titleEn, titleAr, image }: PageHeroProps) => {
  const { lang } = useLanguage();

  return (
    <section className="relative h-[40vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={image}
          alt={lang === "en" ? titleEn : titleAr}
          fill
          className="object-cover"
          priority
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-brand-charcoal/40 z-10" />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-7xl font-display text-white"
        >
          {lang === "en" ? titleEn : titleAr}
        </motion.h1>
      </div>
    </section>
  );
};

export default PageHero;
