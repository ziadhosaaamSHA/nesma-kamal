"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle,
  CalendarBlank,
  Clock,
  WhatsappLogo,
  CaretDown,
  VideoCamera,
} from "@phosphor-icons/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useLanguage } from "@/context/LanguageContext";
import Section from "@/components/ui/Section";
import Headings from "@/components/ui/Headings";
import Button from "@/components/ui/Button";
import SliderArrows from "@/components/ui/SliderArrow";
import { cn } from "@/components/ui/utils";

export interface Workshop {
  id: string;
  theme: "primary" | "secondary" | "tertiary";
  tagEn: string;
  tagAr: string;
  titleEn: string;
  titleAr: string;
  descEn: string;
  descAr: string;
  dateEn: string;
  dateAr: string;
  durationEn: string;
  durationAr: string;
  priceEn: string;
  priceAr: string;
  originalPriceEn: string;
  originalPriceAr: string;
  highlightsEn: string[];
  highlightsAr: string[];
  syllabusEn: string[];
  syllabusAr: string[];
}

const WORKSHOPS: Workshop[] = [
  {
    id: "attachment-healing",
    theme: "primary",
    tagEn: "Signature 4-Week Cohort",
    tagAr: "البرنامج الرئيسي • ٤ أسابيع",
    titleEn: "Unraveling Attachment & Codependency",
    titleAr: "فك التعلق والتحرر من العلاقات المستنزفة",
    descEn: "Identify unconscious relational wounds, break painful attachment loops, and rebuild emotional autonomy.",
    descAr: "كشف جروح التعلق اللاواعية، تفكيك العلاقات المستنزفة، وبناء استقلال نفسي متزن وراسخ.",
    dateEn: "Starts Oct 15, 2026",
    dateAr: "يبدأ ١٥ أكتوبر ٢٠٢٦",
    durationEn: "4 Live Sessions • 90m each",
    durationAr: "٤ جلسات حية • ٩٠ دقيقة",
    priceEn: "2,800 EGP",
    priceAr: "٢,٨٠٠ ج.م",
    originalPriceEn: "3,500 EGP",
    originalPriceAr: "٣,٥٠٠ ج.م",
    highlightsEn: [
      "Attachment Style Audit & Trigger Mapping",
      "Somatic Regulation to Calm Relational Anxiety",
      "60-Page Recovery Workbook & Recordings",
    ],
    highlightsAr: [
      "تحليل نمط الارتباط ورسم خريطة المحفزات",
      "التنظيم الجسدي والعصبي لتهدئة قلق العلاقات",
      "دليل تدريبي شامل (٦٠ صفحة) وتسجيلات الجلسات",
    ],
    syllabusEn: [
      "Module 1: Unconscious Triggers & Attachment Styles",
      "Module 2: Anxious-Avoidant Dynamics & Trauma Bonding",
      "Module 3: Somatic Soothing & Nervous System Reset",
      "Module 4: Reclaiming Self-Worth & Healthy Relational Blueprints",
    ],
    syllabusAr: [
      "المحور ١: كشف المحفزات اللاواعية وأنماط الارتباط",
      "المحور ٢: ديناميكيات التعلق القلق وفخاخ الارتباط الصدمي",
      "المحور ٣: التهدئة الجسدية وضبط الجهاز العصبي",
      "المحور ٤: استعادة تقدير الذات وبناء علاقات صحية",
    ],
  },
  {
    id: "cbt-inner-critic",
    theme: "secondary",
    tagEn: "Intensive 4-Week Cohort",
    tagAr: "معسكر تدريبي مكثف • ٤ أسابيع",
    titleEn: "CBT & Taming The Inner Critic",
    titleAr: "العلاج المعرفي وترويض الناقد الداخلي",
    descEn: "Evidence-based Cognitive Behavioral tools to challenge self-doubt, catastrophizing, and perfectionism.",
    descAr: "تقنيات العلاج المعرفي السلوكي المعتمدة لتجاوز الشك الذاتي، التهويل الفكري، وشلل المثالية.",
    dateEn: "Starts Nov 06, 2026",
    dateAr: "يبدأ ٦ نوفمبر ٢٠٢٦",
    durationEn: "4 Live Sessions • 90m each",
    durationAr: "٤ جلسات حية • ٩٠ دقيقة",
    priceEn: "3,200 EGP",
    priceAr: "٣,٢٠٠ ج.م",
    originalPriceEn: "3,800 EGP",
    originalPriceAr: "٣,٨٠٠ ج.م",
    highlightsEn: [
      "Automated Negative Thought (ANT) Reframing",
      "Overcoming Imposter Syndrome & Overthinking",
      "CBT Thought-Record Journal Included",
    ],
    highlightsAr: [
      "إعادة صياغة وتفنيد الأفكار التلقائية السلبية",
      "تجاوز متلازمة المحتال والاستغراق في التفكير",
      "مفكرة رصد الأفكار السلوكية وتطبيقات يومية",
    ],
    syllabusEn: [
      "Module 1: Detecting Cognitive Distortions in Real Time",
      "Module 2: Deconstructing Imposter Syndrome & Self-Sabotage",
      "Module 3: Building Evidence-Based Self-Compassion",
      "Module 4: Practical Action Plans Without Perfectionism",
    ],
    syllabusAr: [
      "المحور ١: رصد وتصنيف التشوهات المعرفية لحظة حدوثها",
      "المحور ٢: تفكيك متلازمة المحتال وسلوكيات التدمير الذاتي",
      "المحور ٣: بناء حوار داخلي بديل قائم على الشفقة بالذات",
      "المحور ٤: خطط تنفيذ واقعية بعيداً عن وهم الكمال",
    ],
  },
  {
    id: "healthy-boundaries",
    theme: "tertiary",
    tagEn: "Weekend Masterclass",
    tagAr: "ماستركلاس نهاية الأسبوع",
    titleEn: "Guilt-Free Boundaries & Empowerment",
    titleAr: "رسم الحدود دون ذنب والتمكين الذاتي",
    descEn: "Assertive communication scripts to set firm boundaries with family, partners, and colleagues.",
    descAr: "نماذج عملية للتواصل الحازم ووضع حدود واضحة مع العائلة، شريك الحياة، وزملاء العمل.",
    dateEn: "Starts Nov 20, 2026",
    dateAr: "يبدأ ٢٠ نوفمبر ٢٠٢٦",
    durationEn: "2 Extended Sessions • 2.5h each",
    durationAr: "جلستان مطولتان • ساعتان ونصف",
    priceEn: "2,400 EGP",
    priceAr: "٢,٤٠٠ ج.م",
    originalPriceEn: "2,900 EGP",
    originalPriceAr: "٢,٩٠٠ ج.م",
    highlightsEn: [
      "Saying 'No' Without Guilt or Relational Fallout",
      "Handling Emotional Blackmail & Boundary Pushback",
      "Ready-to-Use Boundary Playbook & Role-Playing",
    ],
    highlightsAr: [
      "قول (لا) بلطف وحزم دون الشعور بالذنب",
      "التعامل مع الابتزاز العاطفي والضغط الاجتماعي",
      "كتيب نماذج الحوار الحازم وتمارين محاكاة حية",
    ],
    syllabusEn: [
      "Module 1: The Psychology of People-Pleasing & Boundary Myths",
      "Module 2: Verbal Scripts for High-Stakes Situations",
      "Module 3: Defusing Guilt Trips & Holding Your Line",
      "Module 4: Sustaining Healthy Boundaries Long-Term",
    ],
    syllabusAr: [
      "المحور ١: سيكولوجية إرضاء الآخرين وأوهام الحدود",
      "المحور ٢: نصوص الحوار الحازم في المواقف الحساسة",
      "المحور ٣: امتصاص محاولات الإشعار بالذنب والثبات",
      "المحور ٤: ترسيخ واستدامة الحدود في نمط حياتك",
    ],
  },
  {
    id: "dbt-skills",
    theme: "primary",
    tagEn: "Skills Intensive",
    tagAr: "مختبر المهارات الحية",
    titleEn: "DBT Skills: Emotional Agility",
    titleAr: "مهارات العلاج الجدلي والمرونة العاطفية",
    descEn: "Practical Dialectical Behavior Therapy techniques to ride out emotional storms and reduce impulsivity.",
    descAr: "أدوات تطبيقية مستمدة من العلاج السلوكي الجدلي لاحتواء المشاعر الجياشة وتجنب الاندفاعية.",
    dateEn: "Starts Dec 04, 2026",
    dateAr: "يبدأ ٤ ديسمبر ٢٠٢٦",
    durationEn: "3 Live Sessions • 90m each",
    durationAr: "٣ جلسات حية • ٩٠ دقيقة",
    priceEn: "2,600 EGP",
    priceAr: "٢,٦٠٠ ج.م",
    originalPriceEn: "3,200 EGP",
    originalPriceAr: "٣,٢٠٠ ج.م",
    highlightsEn: [
      "T.I.P.P Grounding for Acute Distress Moments",
      "Riding Emotional Surges Without Impulsive Acts",
      "DBT Pocket Skills Reference & Audio Guides",
    ],
    highlightsAr: [
      "تقنيات التجذير والتهدئة العاجلة في لحظات الأزمات",
      "ركوب موجات المشاعر وتفادي ردود الفعل المتسرعة",
      "بطاقة مهارات الجدلي السريعة وتسجيلات صوتية",
    ],
    syllabusEn: [
      "Module 1: Somatic Mindfulness & T.I.P.P Skills",
      "Module 2: Emotional Wave Surfing & Impulse Control",
      "Module 3: Radical Acceptance of Difficult Realities",
      "Module 4: Interpersonal Effectiveness & DEAR MAN Technique",
    ],
    syllabusAr: [
      "المحور ١: اليقظة الجسدية وإدارة الأزمات العاجلة",
      "المحور ٢: ضبط الاندفاع واحتواء تقلبات المزاج",
      "المحور ٣: القبول الجذري للحقائق التي لا نملكها",
      "المحور ٤: التواصل الفعال وتقنية العلاقات المتوازنة",
    ],
  },
];

const THEME_CLASSES = {
  primary: {
    cardBg: "bg-moss-200 text-moss-950",
    tag: "bg-moss-300 text-moss-900",
    metaPill: "bg-moss-400 text-white",
    liveBadge: "bg-moss-300 text-moss-900",
    priceColor: "text-moss-800",
    checkColor: "text-moss-700",
    syllabusBg: "bg-moss-50/80 text-moss-900 border-moss-300/40",
    buttonVariant: "primary" as const,
  },
  secondary: {
    cardBg: "bg-burgundy-200 text-burgundy-950",
    tag: "bg-burgundy-300 text-burgundy-900",
    metaPill: "bg-burgundy-600 text-white",
    liveBadge: "bg-burgundy-300 text-burgundy-900",
    priceColor: "text-burgundy-800",
    checkColor: "text-burgundy-700",
    syllabusBg: "bg-burgundy-50/80 text-burgundy-900 border-burgundy-300/40",
    buttonVariant: "secondary" as const,
  },
  tertiary: {
    cardBg: "bg-navy-200 text-navy-950",
    tag: "bg-navy-300 text-navy-900",
    metaPill: "bg-navy-600 text-white",
    liveBadge: "bg-navy-300 text-navy-900",
    priceColor: "text-navy-800",
    checkColor: "text-navy-700",
    syllabusBg: "bg-navy-50/80 text-navy-900 border-navy-300/40",
    buttonVariant: "navy" as const,
  },
};

export default function WorkshopsSection() {
  const { lang } = useLanguage();
  const isAr = lang === "ar";
  const [swiper, setSwiper] = useState<any>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [expandedSyllabus, setExpandedSyllabus] = useState<Record<string, boolean>>({});

  const toggleSyllabus = (id: string) => {
    setExpandedSyllabus((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const updateNavState = (s: any) => {
    if (!s) return;
    setIsBeginning(s.isBeginning);
    setIsEnd(s.isEnd);
  };

  const content = {
    en: {
      heading: "Workshops Hosted by <span class='text-moss-700'>Nesma Kamal</span>",
      subheading:
        "Practical, small-group clinical learning experiences designed for real emotional breakthroughs.",
      bookWhatsApp: "Book via WhatsApp",
      viewSyllabus: "View Syllabus",
      hideSyllabus: "Hide Syllabus",
      liveBadge: "Live on Zoom",
    },
    ar: {
      heading: "ورش العمل التفاعلية مع <span class='text-moss-700'>نسمة كمال</span>",
      subheading:
        "تجارب تدريبية إكلينيكية بمجموعات صغيرة تركز على التطبيق العملي والتحول النفسي الحقيقي.",
      bookWhatsApp: "احجز عبر الواتساب",
      viewSyllabus: "عرض محاور البرنامج",
      hideSyllabus: "إخفاء المحاور",
      liveBadge: "بث مباشر عبر زووم",
    },
  };

  const t = content[lang] || content.en;

  const handleBook = (workshop: Workshop) => {
    const title = isAr ? workshop.titleAr : workshop.titleEn;
    const text = isAr
      ? `مرحباً، أود حجز مقعد في ورشة: ${title}`
      : `Hello, I'd like to book a seat in the workshop: ${title}`;
    window.open(`https://wa.me/YOUR_NUMBER?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <Section id="workshops" background="transparent" className="py-8 sm:py-14">
      {/* Header with Heading & Slider Controls aligned by Language */}
      <div
        className={cn(
          "flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-8 sm:mb-12",
          isAr ? "sm:flex-row-reverse" : ""
        )}
      >
        <div className="max-w-2xl">
          <Headings
            variant="h2"
            align={isAr ? "right" : "left"}
            color="brand"
            lang={lang}
            className="font-bold"
          >
            <span dangerouslySetInnerHTML={{ __html: t.heading }} />
          </Headings>

          <p
            className={cn(
              "body-copy leading-relaxed",
              isAr ? "text-right" : "text-left"
            )}
          >
            {t.subheading}
          </p>
        </div>

        {/* Carousel Navigation Arrows + Pagination Controls */}
        <div
          className={cn(
            "hidden sm:flex items-center gap-4 shrink-0",
            isAr ? "flex-row-reverse" : ""
          )}
        >
          <div className="workshops-swiper-pagination flex items-center gap-1.5 !w-auto" />
          <SliderArrows
            previousDisabled={isAr ? isEnd : isBeginning}
            nextDisabled={isAr ? isBeginning : isEnd}
            onPrevious={() => (isAr ? swiper?.slideNext() : swiper?.slidePrev())}
            onNext={() => (isAr ? swiper?.slidePrev() : swiper?.slideNext())}
            lang={lang}
          />
        </div>
      </div>

      {/* Swiper Carousel */}
      <Swiper
        key={lang}
        onSwiper={(s) => {
          setSwiper(s);
          updateNavState(s);
        }}
        onSlideChange={updateNavState}
        onReachBeginning={updateNavState}
        onReachEnd={updateNavState}
        onFromEdge={updateNavState}
        onProgress={updateNavState}
        modules={[Pagination]}
        dir={isAr ? "rtl" : "ltr"}
        spaceBetween={16}
        slidesPerView={1.06}
        grabCursor
        pagination={{
          clickable: true,
          el: ".workshops-swiper-pagination",
          bulletClass: "swiper-pagination-bullet !bg-moss-400 !opacity-50 hover:!opacity-80 transition-all",
          bulletActiveClass: "swiper-pagination-bullet-active !bg-moss-800 !opacity-100 !w-6 !rounded-full",
        }}
        breakpoints={{
          640: { slidesPerView: 1.25, spaceBetween: 20 },
          768: { slidesPerView: 1.4, spaceBetween: 24 },
          1024: { slidesPerView: 2, spaceBetween: 24 },
          1280: { slidesPerView: 2, spaceBetween: 32 },
        }}
        className="pb-4 [&_.swiper-pagination-bullet]:!bg-moss-400 [&_.swiper-pagination-bullet-active]:!bg-moss-800"
      >
        {WORKSHOPS.map((workshop) => {
          const theme = THEME_CLASSES[workshop.theme];
          const isExpanded = !!expandedSyllabus[workshop.id];
          const title = isAr ? workshop.titleAr : workshop.titleEn;
          const desc = isAr ? workshop.descAr : workshop.descEn;
          const tag = isAr ? workshop.tagAr : workshop.tagEn;
          const date = isAr ? workshop.dateAr : workshop.dateEn;
          const duration = isAr ? workshop.durationAr : workshop.durationEn;
          const price = isAr ? workshop.priceAr : workshop.priceEn;
          const originalPrice = isAr ? workshop.originalPriceAr : workshop.originalPriceEn;
          const highlights = isAr ? workshop.highlightsAr : workshop.highlightsEn;
          const syllabus = isAr ? workshop.syllabusAr : workshop.syllabusEn;

          return (
            <SwiperSlide key={workshop.id} className="h-auto flex">
              <div
                className={cn(
                  "w-full flex flex-col justify-between rounded-[28px] sm:rounded-[36px] p-6 sm:p-8 shadow-md transition-all duration-300",
                  theme.cardBg
                )}
              >
                {/* Card Top: Badges without borders */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span
                      className={cn(
                        "text-[11px] font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider",
                        theme.tag
                      )}
                    >
                      {tag}
                    </span>
                    <span
                      className={cn(
                        "text-[11px] font-medium px-3 py-1.5 rounded-full flex items-center gap-1.5",
                        theme.liveBadge
                      )}
                    >
                      <VideoCamera size={14} />
                      {t.liveBadge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 leading-snug">
                    {title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-sm opacity-80 mb-5 leading-relaxed">
                    {desc}
                  </p>

                  {/* Date & Duration Info Pill - matching button background with white text */}
                  <div
                    className={cn(
                      "flex flex-wrap items-center gap-3 px-4 py-2.5 rounded-full mb-5 text-xs font-semibold shadow-xs",
                      theme.metaPill
                    )}
                  >
                    <div className="flex items-center gap-1.5 text-white">
                      <CalendarBlank size={16} className="text-white shrink-0" />
                      <span>{date}</span>
                    </div>
                    <span className="text-white/40">•</span>
                    <div className="flex items-center gap-1.5 text-white">
                      <Clock size={16} className="text-white shrink-0" />
                      <span>{duration}</span>
                    </div>
                  </div>

                  {/* Key Highlights */}
                  <div className="space-y-2.5 mb-5">
                    {highlights.map((point, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                        <CheckCircle
                          size={18}
                          weight="fill"
                          className={cn("shrink-0 mt-0.5", theme.checkColor)}
                        />
                        <span className="font-medium">{point}</span>
                      </div>
                    ))}
                  </div>

                  {/* Expandable Syllabus */}
                  <div className="mb-6">
                    <button
                      type="button"
                      onClick={() => toggleSyllabus(workshop.id)}
                      className="flex items-center gap-1.5 text-xs font-bold opacity-75 hover:opacity-100 transition-opacity py-1"
                    >
                      <span>{isExpanded ? t.hideSyllabus : t.viewSyllabus}</span>
                      <CaretDown
                        size={14}
                        weight="bold"
                        className={cn("transition-transform duration-200", isExpanded ? "rotate-180" : "")}
                      />
                    </button>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden mt-3 pt-3 border-t border-black/10 space-y-2"
                        >
                          {syllabus.map((module, mIdx) => (
                            <div
                              key={mIdx}
                              className={cn(
                                "p-2.5 rounded-xl text-xs border flex items-center gap-2",
                                theme.syllabusBg
                              )}
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-current shrink-0" />
                              <span className="font-medium">{module}</span>
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Card Footer: Price + Direct WhatsApp CTA */}
                <div className="pt-4 border-t border-black/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-auto">
                  <div className="flex items-baseline gap-2.5">
                    <span className={cn("text-2xl sm:text-3xl font-bold", theme.priceColor)}>
                      {price}
                    </span>
                    <span className="text-xs line-through opacity-50">
                      {originalPrice}
                    </span>
                  </div>

                  <Button
                    variant={theme.buttonVariant}
                    size="md"
                    onClick={() => handleBook(workshop)}
                    className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 text-sm shadow-md hover:shadow-lg transition-transform active:scale-95"
                  >
                    <WhatsappLogo size={20} weight="fill" />
                    <span>{t.bookWhatsApp}</span>
                  </Button>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* Mobile Swipe Navigation Controls & Pagination */}
      <div
        className={cn(
          "flex sm:hidden items-center justify-between mt-4",
          isAr ? "flex-row-reverse" : ""
        )}
      >
        <div className="workshops-swiper-pagination !w-auto flex items-center gap-1.5" />
        <SliderArrows
          previousDisabled={isAr ? isEnd : isBeginning}
          nextDisabled={isAr ? isBeginning : isEnd}
          onPrevious={() => (isAr ? swiper?.slideNext() : swiper?.slidePrev())}
          onNext={() => (isAr ? swiper?.slidePrev() : swiper?.slideNext())}
          lang={lang}
        />
      </div>
    </Section>
  );
}
