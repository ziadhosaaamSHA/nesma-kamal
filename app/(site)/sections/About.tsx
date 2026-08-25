"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
//import SectionReveal from "@/components/transitions/SectionReveal";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import Headings from "@/components/ui/Headings";

const About = () => {
  const { lang } = useLanguage();

  const content = {
    en: {
      tag: "The Practitioner",
      title: "Nesma <span class='text-brand-sage'>Kamal</span>",
      p1: "Writer and family relations and self-empowerment life coach. She is known for her work in helping individuals, couples, and families build healthier relationships, strengthen their sense of self, and live with greater purpose.",
      p2: "Through her coaching sessions, workshops, and training programs, Nesma creates spaces for honest reflection, meaningful connection, and personal growth. Her work focuses on empowering people to better understand themselves, navigate their relationships with confidence, and unlock their inner potential.",
      p3: "With a passion for writing, coaching, and human connection, Nesma’s mission is to positively contribute to the personal development and coaching world—guiding others toward becoming a more confident, fulfilled, and empowered version of themselves.",
      cta: "Learn More",
    },
    ar: {
      tag: "الأخصائية",
      title: "نسمة <span class='text-brand-sage'>كمال</span>",
      p1: "كاتبة و مدربة على العلاقات الأسرية والتمكين الذاتي. تُعرف بعملها في مساعدة الأفراد، والأزواج، والعائلات في بناء علاقات أكثر صحة، وتعزيز شعورهم بالذات، والعيش بمعنى أكبر.",
      p2: "من خلال جلسات التدريب والورش والبرامج التدريبية، تخلق نسمة مساحات للتأمل الصادق والاتصال المعنى النمو الشخصي. يركز عملها على تمكين الأشخاص لفهم أنفسهم بشكل أفضل، والتنقل في علاقاتهم بالثقة، وفتح إمكاناتهم الداخلية.",
      p3: "مع شغفها بالكتابة والتوجيه والربط الإنساني، تكون مهمة نسمة هي المساهمة الإيجابية في عالم التطوير الشخصي والتوجيه—وهي توجه الآخرين نحو أصبحوا نسخة أكثر ثقة ورضا وتمكين من أنفسهم.",
      cta: "اقرأ المزيد",
    },
  };

  const t = content[lang];

  return (
    <Section id="about" className=" overflow-hidden ">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Content: Text */}
        <div className="lg:col-span-6 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Headings variant="h1" align="left" color="brand" lang={lang}>
                <span dangerouslySetInnerHTML={{ __html: t.title }} />
              </Headings>
              <div className="space-y-6 body-copy text-white text-left">
                <p>{t.p1}</p>
                <p>{t.p2}</p>
                <p>{t.p3}</p>
              </div>
              <div className="CTA flex items-center justify-start">
              <Button className="mt-12" variant="outline">{t.cta}</Button>
              </div>
            </motion.div>
        </div>

        {/* Right: Side Image Placeholder */}
        <div className="lg:col-span-5 lg:col-start-8 order-1 lg:order-2 relative">
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
        </div>
        
        </div>
    </Section>
  );
};

export default About;
