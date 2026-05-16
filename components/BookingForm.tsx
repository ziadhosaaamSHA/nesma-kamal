"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, WhatsappLogo } from "@phosphor-icons/react";
import { useLanguage } from "@/context/LanguageContext";

export const BookingForm = ({ dark = false }: { dark?: boolean }) => {
  const { lang } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    country: "",
    city: "",
    whatsapp: "",
  });

  const content = {
    en: {
      labels: {
        name: "Full Name",
        age: "Age",
        country: "Country",
        city: "City",
        whatsapp: "WhatsApp Number",
      },
      placeholders: {
        name: "Enter your name",
        age: "e.g. 28",
        country: "Select Country",
        city: "e.g. Cairo",
        whatsapp: "+20 1XX XXX XXXX",
      },
      btn: "Request Session",
    },
    ar: {
      labels: {
        name: "الاسم الكامل",
        age: "العمر",
        country: "الدولة",
        city: "المدينة",
        whatsapp: "رقم الواتساب",
      },
      placeholders: {
        name: "أدخل اسمك",
        age: "مثال: 28",
        country: "اختر الدولة",
        city: "مثال: القاهرة",
        whatsapp: "+20 1XX XXX XXXX",
      },
      btn: "اطلب جلسة",
    },
  };

  const t = content[lang];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = lang === "en" 
      ? `Hello, I would like to book a session. Name: ${formData.name}, City: ${formData.city}`
      : `مرحباً، أود حجز جلسة. الاسم: ${formData.name}، المدينة: ${formData.city}`;
    window.open(`https://wa.me/YOUR_NUMBER?text=${encodeURIComponent(message)}`, "_blank");
  };

  const inputClasses = `w-full bg-transparent border-b ${dark ? 'border-brand-parchment/20 focus:border-brand-sage text-brand-parchment' : 'border-brand-charcoal/10 focus:border-brand-burgundy text-brand-charcoal'} py-3 focus:outline-none transition-all duration-500 placeholder:text-brand-charcoal/20`;
  const labelClasses = `text-[10px] uppercase tracking-widest font-bold ${dark ? 'text-brand-parchment/40' : 'text-brand-charcoal/40'}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <form onSubmit={handleSubmit} className="space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-3">
            <label className={labelClasses}>{t.labels.name}</label>
            <input
              type="text"
              name="name"
              required
              onChange={handleChange}
              className={inputClasses}
              placeholder={t.placeholders.name}
            />
          </div>
          <div className="space-y-3">
            <label className={labelClasses}>{t.labels.age}</label>
            <input
              type="number"
              name="age"
              required
              onChange={handleChange}
              className={inputClasses}
              placeholder={t.placeholders.age}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-3">
            <label className={labelClasses}>{t.labels.country}</label>
            <select
              name="country"
              required
              onChange={handleChange}
              className={inputClasses}
            >
              <option value="">{t.placeholders.country}</option>
              <option value="Egypt">Egypt</option>
              <option value="UAE">UAE</option>
              <option value="KSA">KSA</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="space-y-3">
            <label className={labelClasses}>{t.labels.city}</label>
            <input
              type="text"
              name="city"
              required
              onChange={handleChange}
              className={inputClasses}
              placeholder={t.placeholders.city}
            />
          </div>
        </div>

        <div className="space-y-3">
          <label className={labelClasses}>{t.labels.whatsapp}</label>
          <input
            type="tel"
            name="whatsapp"
            required
            onChange={handleChange}
            className={inputClasses}
            placeholder={t.placeholders.whatsapp}
          />
        </div>

        <button
          type="submit"
          className={`btn-primary w-full group mt-12 py-5 text-sm ${dark ? 'bg-brand-sage text-brand-charcoal hover:bg-brand-parchment' : 'bg-brand-charcoal text-brand-parchment hover:bg-brand-burgundy'}`}
        >
          {t.btn}
          <ArrowRight size={20} className={`group-hover:translate-x-2 transition-transform ${lang === "ar" ? "rotate-180 group-hover:-translate-x-2" : ""}`} />
        </button>
      </form>
    </motion.div>
  );
};
