"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { TransitionLink } from "./TransitionLink";
import Image from "next/image";

const Hero = () => {
  const { lang } = useLanguage();

  const content = {
    en: {
      title: "Find your<br /><span>internal</span> breeze.",
      desc: "Providing a safe harbor for recovery through evidence-based CBT and DBT therapeutic modalities.",
      btnPrimary: "Book a Consultation",
    },
    ar: {
      title: "ابحثي عن<br /><span>نسمتك</span> الداخلية.",
      desc: "توفير ملاذ آمن للتعافي من خلال أساليب العلاج السلوكي المعرفي والجدلي القائمة على الأدلة.",
      btnPrimary: "احجز استشارة",
    },
  };

  const t = content[lang];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 1.8,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section
      className="
        relative
        w-full
        h-screen
        min-h-[700px]
        overflow-hidden
        flex
        items-center
      "
    >
      {/* Background */}
      <div className="absolute inset-0 h-full w-full">
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 2,
            ease: "easeOut",
            delay: 1.2,
          }}
          className="relative h-full w-full"
        >
          <div className="absolute inset-0 bg-black/20 z-10" />

          <Image
            src="/images/image.png"
            alt="Nesma Kamal"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 100vw"
          />
        </motion.div>
      </div>

      {/* Top Gradient */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-black/60 via-black/20 to-transparent z-20 pointer-events-none hidden md:block" />

      {/* Content */}
      <div className="relative z-30 w-full max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="max-w-[800px]">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              variants={itemVariants}
              className="
                text-4xl
                sm:text-5xl
                md:text-7xl
                lg:text-8xl
                leading-[1.1]
                font-display
                text-white
                mb-6
              "
              dangerouslySetInnerHTML={{ __html: t.title }}
            />

            <motion.p
              variants={itemVariants}
              className="
                text-sm
                md:text-xl
                text-white/80
                max-w-[600px]
                leading-relaxed
                mb-10
              "
            >
              {t.desc}
            </motion.p>

            <motion.div variants={itemVariants}>
              <TransitionLink href="/booking">
                <button
                  className="
                    bg-brand-primary
                    text-white
                    px-6
                    py-3
                    md:px-10
                    md:py-5
                    uppercase
                    tracking-widest
                    text-xs
                    md:text-sm
                    font-bold
                    rounded-sm
                  "
                >
                  {t.btnPrimary}
                </button>
              </TransitionLink>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;