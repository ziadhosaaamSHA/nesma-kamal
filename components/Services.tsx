"use client";

import React from "react";
import { motion } from "framer-motion";
import { VideoCamera, Users, MonitorPlay } from "@phosphor-icons/react";
import { useLanguage } from "@/context/LanguageContext";
import SectionReveal from "./SectionReveal";

const services = [
  {
    icon: <Users size={32} />,
    title: "Live Workshops",
    titleAr: "ورش عمل مباشرة",
    desc: "Interactive group sessions designed to promote mental health awareness and shared healing journeys.",
    descAr: "جلسات جماعية تفاعلية مصممة لتعزيز الوعي بالصحة النفسية ورحلات الشفاء المشتركة.",
    href: "/services/workshops",
  },
  {
    icon: <VideoCamera size={32} />,
    title: "1:1 Consultation",
    titleAr: "استشارة فردية",
    desc: "Private, evidence-based therapy sessions tailored to your individual needs and emotional regulation.",
    descAr: "جلسات علاجية خاصة قائمة على الأدلة مصممة خصيصاً لاحتياجاتك الفردية والتنظيم العاطفي.",
    href: "/services/consultation",
  },
  {
    icon: <MonitorPlay size={32} />,
    title: "Recorded Courses",
    titleAr: "دورات مسجلة",
    desc: "Self-paced therapeutic learning materials providing clinical insights and practical recovery tools.",
    descAr: "مواد تعليمية علاجية ذاتية التوجيه توفر رؤى إكلينيكية وأدوات عملية للتعافي.",
    href: "/services/courses",
  },
];

const Services = () => {
  const { lang } = useLanguage();

  return (
    <section id="services" className="py-24 bg-brand-parchment relative overflow-hidden">
      <SectionReveal graphic="grass" placement="top-both">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className={`flex flex-col md:flex-row justify-between items-end mb-16 gap-8 ${lang === "ar" ? "md:flex-row-reverse" : ""}`}>
          <div className="max-w-[600px]">
            <span className="text-xs uppercase tracking-[0.3em] text-brand-olive font-medium mb-6 block">
              {lang === "en" ? "Our Expertise" : "خبراتنا"}
            </span>
            <h2 className="text-4xl md:text-5xl font-display leading-tight">
              {lang === "en" ? (
                <>Specialized pathways to <span className="">mental</span> clarity.</>
              ) : (
                <>مسارات متخصصة للوضوح <span className="">النفسي</span>.</>
              )}
            </h2>
          </div>
          <p className="text-sm text-brand-charcoal/60 max-w-[350px] leading-relaxed">
            {lang === "en" 
              ? "We utilize clinical modalities that are proven to deliver sustainable behavioral change and emotional stability."
              : "نحن نستخدم الأساليب الإكلينيكية التي أثبتت فعاليتها في تقديم تغيير سلوكي مستدام واستقرار عاطفي."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-10 border border-brand-charcoal/5 rounded-sm hover:border-brand-burgundy/20 hover:shadow-2xl hover:shadow-brand-burgundy/5 transition-all duration-500 group bg-white relative flex flex-col items-center text-center"
            >
              <div className="text-brand-olive mb-8 group-hover:text-brand-burgundy transition-colors duration-500">
                {service.icon}
              </div>
              <h3 className="text-2xl font-display mb-4">
                {lang === "en" ? service.title : service.titleAr}
              </h3>
              <p className="text-sm text-brand-charcoal/60 leading-relaxed mb-8 flex-grow">
                {lang === "en" ? service.desc : service.descAr}
              </p>
              
              <button className="btn-primary">
                {lang === "en" ? "Book Now" : "احجز الآن"}
              </button>
            </motion.div>
          ))}
        </div>
        </div>
      </SectionReveal>
    </section>
  );
};

export default Services;
