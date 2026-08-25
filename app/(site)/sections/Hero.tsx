"use client";

import React from "react";
import { color, motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import { TransitionLink } from "@/components/transitions/TransitionLink";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import SlideDots from "@/components/ui/SlideDots";
import Headings from "@/components/ui/Headings";
import { desc } from "framer-motion/client";
import SliderArrows from "@/components/ui/SliderArrow";

const Hero = () => {
  const { lang } = useLanguage();

  const content = {
    en: {
      title: "Free yourself from the leash of emotions, create who you want to be and a life you love.",
      desc: null,
      btnPrimary: "Book a Consultation",
    },
    ar: {
      title: "حرر نفسك من قيود المشاعر، واصنع من تريد أن تكونه وحياة تحبها.",
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
        h-full
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
          />
        </motion.div>
      </div>

      {/* Top Gradient */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-black/60 via-black/20 to-transparent z-20 pointer-events-none hidden md:block" />

      {/* Content */}
      <Container className="relative z-30 w-full bg-transparent h-full">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col w-full h-full gap-16 pt-50 pb-10 px-2 md:px-20"
          >
            <div className="headings">
              <Headings variant="h1" align="left" color="white" className="max-w-3xl text-center md:text-left" lang={lang}>
                <span dangerouslySetInnerHTML={{ __html: t.title }} />
              </Headings>
            </div>
            <motion.div variants={itemVariants} className="buttons flex flex-col items-left gap-5">
              <TransitionLink href="/booking" className="CTA flex justify-center md:justify-start">
                <Button variant="primary" size="lg">
                  {t.btnPrimary}
                  </Button>
              </TransitionLink>
              <div className="hero-buttons flex items-center justify-center md:justify-between">
                <SlideDots count={4} activeIndex={1} />
                <SliderArrows className="hidden md:inline-flex" />
              </div>
            </motion.div>
          </motion.div>
      </Container>
    </section>
  );
};

export default Hero;