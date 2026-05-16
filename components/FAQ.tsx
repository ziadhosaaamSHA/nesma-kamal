"use client";

import React from "react";
import { motion } from "framer-motion";
import { Plus, Minus } from "@phosphor-icons/react";
import { useLanguage } from "@/context/LanguageContext";
import SectionReveal from "./SectionReveal";

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
    <section id="faq" className="py-24 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-16 ${lang === "ar" ? "lg:flex-row-reverse" : ""}`}>
          <div className="lg:col-span-4">
            <SectionReveal graphic="daisy" placement="sides-middle-rev">
              <span className="text-xs uppercase tracking-[0.3em] text-brand-olive font-medium mb-6 block">
                {lang === "en" ? "Common Inquiries" : "الأسئلة الشائعة"}
              </span>
              <h2 className="text-4xl font-display leading-tight mb-8">
                {lang === "en" ? (
                  <>Frequently Asked <span className="">Questions</span></>
                ) : (
                  <>الأسئلة <span className="">الأكثر</span> تداولاً</>
                )}
              </h2>
            </SectionReveal>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <div className="divide-y divide-brand-charcoal/10">
              {faqs.map((faq, index) => (
                <div key={index} className="py-8">
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full flex justify-between items-center text-left"
                  >
                    <span className="text-xl font-display">{faq.question}</span>
                    {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                  </button>
                  {openIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="mt-6 text-brand-charcoal/60 leading-relaxed text-sm max-w-[500px]"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
