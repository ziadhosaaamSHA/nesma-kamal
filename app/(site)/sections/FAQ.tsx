"use client";

import React from "react";
import { motion } from "framer-motion";
import { Plus, Minus } from "@phosphor-icons/react";
import { useLanguage } from "@/context/LanguageContext";
//import SectionReveal from "@/components/transitions/SectionReveal";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Headings from "@/components/ui/Headings";

const faqsEn = [
  {
    question: "What is the difference between CBT and DBT?",
    answer: "CBT focuses on the relationship between thoughts, feelings, and behaviors. DBT is a form of CBT that adds techniques like mindfulness and emotional regulation to help with intense emotions.",
  },
  {
    question: "How long does a typical session last?",
    answer: "Standard individual sessions last 50 minutes. Workshops and group sessions may vary from 90 minutes to 3 hours depending on the intensive nature of the program.",
  },
  {
    question: "Do you offer online therapy sessions?",
    answer: "Yes, I conduct online sessions via professional encrypted platforms for clients globally, ensuring a safe and confidential space regardless of location.",
  },
];

const faqsAr = [
  {
    question: "ما الفرق بين العلاج السلوكي المعرفي والجدلي؟",
    answer: "يركز العلاج السلوكي المعرفي على العلاقة بين الأفكار والمشاعر والسلوكيات. أما العلاج الجدلي فهو شكل من أشكال العلاج السلوكي المعرفي يضيف تقنيات مثل اليقظة الذهنية والتنظيم العاطفي.",
  },
  {
    question: "كم تستغرق الجلسة المعتادة؟",
    answer: "تستغرق الجلسات الفردية القياسية 50 دقيقة. قد تختلف ورش العمل والجلسات الجماعية من 90 دقيقة إلى 3 ساعات حسب طبيعة البرنامج.",
  },
  {
    question: "هل تقدمين جلسات علاجية عبر الإنترنت؟",
    answer: "نعم، أقدم جلسات عبر الإنترنت من خلال منصات مشفرة احترافية للعملاء في جميع أنحاء العالم، مما يضمن مساحة آمنة وسرية بغض النظر عن الموقع.",
  },
];

const FAQ = () => {
  const { lang } = useLanguage();
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  const faqs = lang === "en" ? faqsEn : faqsAr;

  return (
    <Section id="faq" background="transparent">
        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-16 ${lang === "ar" ? "lg:flex-row-reverse" : ""}`}>
          <div className="lg:col-span-4 items-center">
            <Headings variant="h2" align={lang === "ar" ? "right" : "left"} color="brand" lang={lang}>
              {lang === "en" ? "Frequently Asked Questions" : "اكثر الاسئلة"}
            </Headings>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <div className="divide-y divide-brand-charcoal/10">
              {faqs.map((faq, index) => (
                <div key={index} className="py-8">
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full flex justify-between items-center text-left"
                  >
                    <span className="text-xl">{faq.question}</span>
                    {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                  </button>
                  {openIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="mt-6 body-copy-sm text-brand-charcoal/60 max-w-[500px]"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
    </Section>
  );
};

export default FAQ;
