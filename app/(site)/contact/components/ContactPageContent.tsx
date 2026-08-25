"use client";

import React from "react";
import { motion } from "framer-motion";
import { BookingForm } from "@/components/BookingForm";
import Container from "@/components/ui/Container";
import Headings from "@/components/ui/Headings";
import Section from "@/components/ui/Section";
import { contactInfoItems } from "./contact.data";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/components/ui/utils";
import {
  Envelope,
  WhatsappLogo,
  InstagramLogo,
  TiktokLogo,
  YoutubeLogo,
  FacebookLogo,
  LinkedinLogo,
  XLogo,
  SpotifyLogo,
  Phone,
  ArrowUpRight,
} from "@phosphor-icons/react";
import type { ContactType } from "../types/contact.types";

const SOCIAL_ICON_MAP: Record<ContactType, React.ElementType> = {
  email: Envelope,
  whatsapp: WhatsappLogo,
  instagram: InstagramLogo,
  tiktok: TiktokLogo,
  youtube: YoutubeLogo,
  facebook: FacebookLogo,
  linkedin: LinkedinLogo,
  x: XLogo,
  phone: Phone,
};

const SOCIAL_ACCENT: Record<ContactType, string> = {
  email: "bg-moss-200 text-moss-800 hover:bg-moss-300",
  whatsapp: "bg-green-100 text-green-700 hover:bg-green-200",
  instagram: "bg-pink-100 text-pink-700 hover:bg-pink-200",
  tiktok: "bg-gray-100 text-gray-800 hover:bg-gray-200",
  youtube: "bg-red-100 text-red-700 hover:bg-red-200",
  facebook: "bg-blue-100 text-blue-700 hover:bg-blue-200",
  linkedin: "bg-sky-100 text-sky-700 hover:bg-sky-200",
  x: "bg-gray-100 text-gray-800 hover:bg-gray-200",
  phone: "bg-moss-100 text-moss-700 hover:bg-moss-200",
};

export default function ContactPageContent() {
  const { lang } = useLanguage();
  const isAr = lang === "ar";

  const content = {
    en: {
      tagline: "Let's Connect",
      heading: "Get in Touch",
      subtitle:
        "Whether you have a question about services, workshops, or just want to say hello — I'd love to hear from you.",
      socialHeading: "Find Me Online",
      formHeading: "Request a Session",
      formSubtitle:
        "Fill in the form below and the team will reach out via WhatsApp to confirm your session details.",
    },
    ar: {
      tagline: "تواصل معنا",
      heading: "تحدث إلينا",
      subtitle:
        "سواء كان لديك سؤال عن الخدمات أو الورش، أو تريد فقط أن تقول مرحباً — يسعدني التواصل معك.",
      socialHeading: "جدني عبر الإنترنت",
      formHeading: "طلب جلسة",
      formSubtitle:
        "امل النموذج أدناه وسيتواصل معك الفريق عبر الواتساب لتأكيد موعد الجلسة.",
    },
  };

  const t = content[lang] || content.en;

  return (
    <div className="relative">
      <Section id="contact" background="transparent">
        <Container size="content">
          {/* Page Header */}
          <div className={cn("mb-14 max-w-2xl", isAr ? "text-right" : "text-left")}>
            <Headings variant="h1" color="brand" lang={lang} align={isAr ? "right" : "left"} className="mb-3 font-bold">
              {t.heading}
            </Headings>
            <p className="body-copy leading-relaxed">
              {t.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start">
            {/* Left: Social Links */}
            <div className="lg:col-span-2 space-y-8">
              <Headings variant="h3" color="brand" lang={lang} align={isAr ? "right" : "left"} className="font-bold text-lg">
                {t.socialHeading}
              </Headings>

              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-4">
                {contactInfoItems.map((item, i) => {
                  const type = item.type ?? "other";
                  const Icon = SOCIAL_ICON_MAP[type] ?? ArrowUpRight;
                  const accent = SOCIAL_ACCENT[type] ?? SOCIAL_ACCENT.other;

                  return (
                    <motion.a
                      key={i}
                      href={item.href || "#"}
                      target={item.type !== "email" && item.type !== "phone" ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: isAr ? 12 : -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: i * 0.05 }}
                      className="flex items-center gap-1.5 p-5.5 rounded-2xl bg-primary"
                    >
                      <span className={cn("w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors text-lg", accent)}>
                        <Icon size={20} weight="fill" />
                      </span>
                      <div className="flex-1 min-w-0">
                        <p className="text-[10px] font-bold uppercase tracking-wider text-white/50 mb-0.5">{item.label}</p>
                        <p className="text-sm font-medium text-white truncate">{item.value}</p>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Right: Booking Form */}
            <div className="lg:col-span-3">
              <div className="rounded-[28px] sm:rounded-[36px] bg-brand-parchment p-8 sm:p-10 shadow-2xl">
                <div className={cn("mb-8", isAr ? "text-right" : "text-left")}>
                  <Headings variant="h3" color="brand" lang={lang} align={isAr ? "right" : "left"} className="font-bold mb-2">
                    {t.formHeading}
                  </Headings>
                  <p className="text-sm text-gray-600 leading-relaxed">{t.formSubtitle}</p>
                </div>
                <BookingForm dark={false} />
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
