"use client";

import React from "react";
import { VideoCamera, Users, MonitorPlay } from "@phosphor-icons/react";
import { useLanguage } from "@/context/LanguageContext";
//import SectionReveal from "@/components/transitions/SectionReveal";
import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import Headings from "@/components/ui/Headings";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import SliderArrows from "@/components/ui/SliderArrow";

/** One theme per card, cycled so each service reads as its own colour. */
const CARD_THEMES = ["primary", "secondary", "tertiary"] as const;

const services = [
  {
    icon: <Users size={32} />,
    title: "Live Workshop One",
    titleAr: "ورش عمل مباشرة",
    desc: "Group sessions designed to promote mental health awareness and shared healing journeys.",
    descAr: "جلسات جماعية تفاعلية مصممة لتعزيز الوعي بالصحة النفسية ورحلات الشفاء المشتركة.",
    price: "3000EGP",
    reviews: { rating: 4.5, count: 12 },
    href: "/services/workshops",
  },
  {
    icon: <VideoCamera size={32} />,
    title: "Live Workshop Two",
    titleAr: "استشارة فردية",
    desc: "Private, evidence-based therapy sessions tailored to your individual needs and emotional regulation.",
    descAr: "جلسات علاجية خاصة قائمة على الأدلة مصممة خصيصاً لاحتياجاتك الفردية والتنظيم العاطفي.",
    price: "5000EGP",
    reviews: { rating: 4.8, count: 20 },
    href: "/services/consultation",
  },
  {
    icon: <MonitorPlay size={32} />,
    title: "Live Workshop Three",
    titleAr: "دورات مسجلة",
    desc: "Self-paced therapeutic learning materials providing clinical insights and practical recovery tools.",
    descAr: "مواد تعليمية علاجية ذاتية التوجيه توفر رؤى إكلينيكية وأدوات عملية للتعافي.",
    price: "2000EGP",
    reviews: { rating: 4.6, count: 15 },
    href: "/services/courses",
  },
];

const Services = () => {
  const { lang } = useLanguage();
  const [swiper, setSwiper] = React.useState<any>(null);
  const [isBeginning, setIsBeginning] = React.useState(true);
  const [isEnd, setIsEnd] = React.useState(false);

  return (
    <Section id="services" background="transparent">
      <div className="service-header flex flex-row items-center justify-between gap-4 mb-6 sm:mb-8">
        <Headings
          variant="h2"
          align={lang === "ar" ? "right" : "left"}
          color="brand"
          lang={lang}
        >
          {lang === "en" ? "Explore Our Services" : "استكشف  خدماتنا المميزة"}
        </Headings>
        {/* Pagination Arrows */}
        <div className="swiper-navigation-services hidden md:flex justify-end">
          <SliderArrows
            previousDisabled={lang === "ar" ? !isBeginning : isBeginning}
            nextDisabled={lang === "ar" ? !isEnd : isEnd}
            onNext={() => lang === "ar" ? swiper?.slidePrev() : swiper?.slideNext()}
            onPrevious={() => lang === "ar" ? swiper?.slideNext() : swiper?.slidePrev()}
            lang={lang}
          />
        </div>
      </div>

      <Swiper
        // Re-initialise on language change so `dir` is re-applied.
        key={lang}
        onSwiper={(s) => {
          setSwiper(s);
          setIsBeginning(s.isBeginning);
          setIsEnd(s.isEnd);
        }}
        onSlideChange={(s) => {
          setIsBeginning(s.isBeginning);
          setIsEnd(s.isEnd);
        }}
        modules={[Pagination]}
        dir={lang === "ar" ? "rtl" : "ltr"}
        spaceBetween={20}
        slidesPerView={1}
        grabCursor
        pagination={{ clickable: false, type: "fraction", el: ".swiper-pagination" }}
        breakpoints={{
          640: { slidesPerView: 1.15, spaceBetween: 24 },
          768: { slidesPerView: 1.35, spaceBetween: 24 },
          1024: { slidesPerView: 2, spaceBetween: 32 },
          1280: { slidesPerView: 2, spaceBetween: 40 },
        }}
        className="pb-8 sm:pb-12"
      >
        {services.map((service, index) => (
          <SwiperSlide key={service.href} className="h-auto">
            <Card
              variant="colored-container"
              theme={CARD_THEMES[index % CARD_THEMES.length]}
              section="services"
              className="h-full w-full"
              title={lang === "en" ? service.title : service.titleAr}
              caption={lang === "en" ? service.desc : service.descAr}
              buttonText={lang === "en" ? "Book Now" : "احجز الآن"}
              reviews={{ rating: service.reviews.rating, count: service.reviews.count }}
              price={service.price}
              href={service.href}
              lang={lang}
              buttonBg="dark"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Pagination Fraction */}
      <div className="swiper-pagination !static mt-2 flex justify-center items-center text-moss-700 font-sans text-lg" />

      <Card className="max-w-xl" variant="default" title="Heading" subtitle="Subtitle" caption="Caption" buttonText="Book Now"  price="400EGP" reviews={{rating: 5, count:12}}/>
    </Section>
  );
};

export default Services;
