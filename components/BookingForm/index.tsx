"use client";

import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { ArrowRight, WhatsappLogo, Check } from "@phosphor-icons/react";
import { useLanguage } from "@/context/LanguageContext";
import type { BookingFormData, BookingFormProps } from "./types";
import Button from "@/components/ui/Button";
import { FormField, FormInput, FormSelect } from "@/components/ui/FormField";
import StatusModal from "@/components/ui/StatusModal";
import { useGoogleSheetsLead } from "@/lib/integrations/google-sheets";

interface FormErrors {
  name?: string;
  age?: string;
  country?: string;
  city?: string;
  whatsapp?: string;
}

interface FormTouched {
  name?: boolean;
  age?: boolean;
  country?: boolean;
  city?: boolean;
  whatsapp?: boolean;
}

export const BookingForm = ({ dark = false }: BookingFormProps) => {
  const { lang } = useLanguage();
  const isAr = lang === "ar";

  const [formData, setFormData] = useState<BookingFormData>({
    name: "",
    age: "",
    country: "",
    city: "",
    whatsapp: "",
  });

  const [touched, setTouched] = useState<FormTouched>({});
  const [showSuccessModal, setShowSuccessModal] = useState(false);

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
        name: "e.g. Sara Ahmed",
        age: "e.g. 28",
        country: "Select Country",
        city: "e.g. Cairo",
        whatsapp: "e.g. +20 100 123 4567",
      },
      hints: {
        whatsapp: "Include your international country code",
      },
      errors: {
        nameRequired: "Please enter your full name",
        nameMin: "Name must be at least 2 characters",
        ageRequired: "Please enter your age",
        ageInvalid: "Please enter a valid age (14 - 100)",
        countryRequired: "Please select your country",
        cityRequired: "Please enter your city",
        whatsappRequired: "Please enter your WhatsApp number",
        whatsappInvalid: "Please enter a valid phone number (minimum 8 digits)",
      },
      btn: "Request Session via WhatsApp",
      btnDisabled: "Fill all fields to proceed",
      modalTitle: "Booking Request Prepared!",
      modalMessage: "Click below to proceed to WhatsApp and connect directly with Nesma Kamal's team to confirm your session date and intake details.",
      modalAction: "Open WhatsApp Chat",
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
        name: "مثال: سارة أحمد",
        age: "مثال: 28",
        country: "اختر الدولة",
        city: "مثال: القاهرة",
        whatsapp: "مثال: 01001234567 20+",
      },
      hints: {
        whatsapp: "يرجى كتابة الرقم مع كود الدولة",
      },
      errors: {
        nameRequired: "يرجى إدخال الاسم الكامل",
        nameMin: "يجب ألا يقل الاسم عن حرفين",
        ageRequired: "يرجى إدخال العمر",
        ageInvalid: "يرجى إدخال عمر صحيح (بين ١٤ و ١٠٠)",
        countryRequired: "يرجى اختيار الدولة",
        cityRequired: "يرجى إدخال المدينة",
        whatsappRequired: "يرجى إدخال رقم الواتساب",
        whatsappInvalid: "يرجى إدخال رقم هاتف صحيح (على الأقل ٨ أرقام)",
      },
      btn: "طلب جلسة عبر الواتساب",
      btnDisabled: "يرجى ملء جميع الحقول للمتابعة",
      modalTitle: "تم تجهيز طلب الحجز!",
      modalMessage: "اضغط أدناه للانتقال إلى محادثة الواتساب للتواصل مباشرة مع فريق د. نسمة كمال وتأكيد موعد الجلسة.",
      modalAction: "فتح محادثة الواتساب",
    },
  };

  const t = content[lang] || content.en;

  // Validation function for individual fields
  const validateField = (name: keyof BookingFormData, value: string): string | undefined => {
    const trimmed = value.trim();

    switch (name) {
      case "name":
        if (!trimmed) return t.errors.nameRequired;
        if (trimmed.length < 2) return t.errors.nameMin;
        return undefined;

      case "age":
        if (!trimmed) return t.errors.ageRequired;
        const num = parseInt(trimmed, 10);
        if (isNaN(num) || num < 14 || num > 100) return t.errors.ageInvalid;
        return undefined;

      case "country":
        if (!trimmed) return t.errors.countryRequired;
        return undefined;

      case "city":
        if (!trimmed) return t.errors.cityRequired;
        if (trimmed.length < 2) return t.errors.cityRequired;
        return undefined;

      case "whatsapp":
        if (!trimmed) return t.errors.whatsappRequired;
        // Clean non-digit characters for length check
        const digits = trimmed.replace(/\D/g, "");
        if (digits.length < 8) return t.errors.whatsappInvalid;
        return undefined;

      default:
        return undefined;
    }
  };

  // Compute all errors
  const errors: FormErrors = useMemo(() => {
    const errs: FormErrors = {};
    (Object.keys(formData) as Array<keyof BookingFormData>).forEach((field) => {
      const err = validateField(field, formData[field]);
      if (err) errs[field] = err;
    });
    return errs;
  }, [formData, lang]);

  // Form is valid if no errors and all fields are filled
  const isFormValid = useMemo(() => {
    return (
      Object.keys(errors).length === 0 &&
      Object.values(formData).every((v) => v.trim().length > 0)
    );
  }, [errors, formData]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const { submitLead, isSubmitting } = useGoogleSheetsLead();

  const executeWhatsAppRedirect = () => {
    const message = isAr
      ? `مرحباً، أود حجز جلسة استشارة مع د. نسمة كمال.\nالاسم: ${formData.name}\nالعمر: ${formData.age}\nالدولة: ${formData.country}\nالمدينة: ${formData.city}\nرقم الواتساب: ${formData.whatsapp}`
      : `Hello, I would like to book a consultation session with Dr. Nesma Kamal.\nName: ${formData.name}\nAge: ${formData.age}\nCountry: ${formData.country}\nCity: ${formData.city}\nWhatsApp: ${formData.whatsapp}`;

    window.open(`https://wa.me/YOUR_NUMBER?text=${encodeURIComponent(message)}`, "_blank");
    setShowSuccessModal(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Mark all as touched to display errors if any
    const allTouched: FormTouched = {
      name: true,
      age: true,
      country: true,
      city: true,
      whatsapp: true,
    };
    setTouched(allTouched);

    if (isFormValid) {
      // Send lead to Google Sheets
      await submitLead({
        name: formData.name,
        age: formData.age,
        country: formData.country,
        city: formData.city,
        whatsapp: formData.whatsapp,
        source: "Booking Consultation Form",
        locale: lang,
      });

      setShowSuccessModal(true);
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8" noValidate>
          {/* Row 1: Full Name & Age */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            <FormField
              label={t.labels.name}
              required
              error={touched.name ? errors.name : undefined}
              dark={dark}
              lang={lang}
            >
              <FormInput
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                hasError={touched.name && !!errors.name}
                dark={dark}
                placeholder={t.placeholders.name}
                autoComplete="name"
              />
            </FormField>

            <FormField
              label={t.labels.age}
              required
              error={touched.age ? errors.age : undefined}
              dark={dark}
              lang={lang}
            >
              <FormInput
                type="number"
                name="age"
                min="14"
                max="100"
                value={formData.age}
                onChange={handleChange}
                onBlur={handleBlur}
                hasError={touched.age && !!errors.age}
                dark={dark}
                placeholder={t.placeholders.age}
              />
            </FormField>
          </div>

          {/* Row 2: Country & City */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            <FormField
              label={t.labels.country}
              required
              error={touched.country ? errors.country : undefined}
              dark={dark}
              lang={lang}
            >
              <FormSelect
                name="country"
                value={formData.country}
                onChange={handleChange}
                onBlur={handleBlur}
                hasError={touched.country && !!errors.country}
                dark={dark}
              >
                <option value="">{t.placeholders.country}</option>
                <option value="Egypt">{isAr ? "مصر" : "Egypt"}</option>
                <option value="UAE">{isAr ? "الإمارات" : "UAE"}</option>
                <option value="KSA">{isAr ? "السعودية" : "Saudi Arabia"}</option>
                <option value="Kuwait">{isAr ? "الكويت" : "Kuwait"}</option>
                <option value="Qatar">{isAr ? "قطر" : "Qatar"}</option>
                <option value="Jordan">{isAr ? "الأردن" : "Jordan"}</option>
                <option value="United States">{isAr ? "الولايات المتحدة" : "United States"}</option>
                <option value="United Kingdom">{isAr ? "المملكة المتحدة" : "United Kingdom"}</option>
                <option value="Other">{isAr ? "دولة أخرى" : "Other"}</option>
              </FormSelect>
            </FormField>

            <FormField
              label={t.labels.city}
              required
              error={touched.city ? errors.city : undefined}
              dark={dark}
              lang={lang}
            >
              <FormInput
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                onBlur={handleBlur}
                hasError={touched.city && !!errors.city}
                dark={dark}
                placeholder={t.placeholders.city}
                autoComplete="address-level2"
              />
            </FormField>
          </div>

          {/* Row 3: WhatsApp Number */}
          <FormField
            label={t.labels.whatsapp}
            required
            error={touched.whatsapp ? errors.whatsapp : undefined}
            hint={t.hints.whatsapp}
            dark={dark}
            lang={lang}
          >
            <FormInput
              type="tel"
              name="whatsapp"
              value={formData.whatsapp}
              onChange={handleChange}
              onBlur={handleBlur}
              hasError={touched.whatsapp && !!errors.whatsapp}
              dark={dark}
              placeholder={t.placeholders.whatsapp}
              autoComplete="tel"
            />
          </FormField>

          {/* Submit CTA Button - Disabled until valid */}
          <div className="pt-2">
            <Button
              type="submit"
              disabled={!isFormValid}
              fullWidth
              variant={dark ? "primary" : "secondary"}
              className="flex items-center justify-center gap-2.5 py-4 text-base shadow-md transition-all disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:shadow-none"
            >
              <WhatsappLogo size={22} weight="fill" />
              <span>{isFormValid ? t.btn : t.btnDisabled}</span>
              {isFormValid && (
                <ArrowRight
                  size={18}
                  weight="bold"
                  className={isAr ? "rotate-180" : ""}
                />
              )}
            </Button>
          </div>
        </form>
      </motion.div>

      {/* Confirmation Status Modal */}
      <StatusModal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        status="success"
        title={t.modalTitle}
        message={t.modalMessage}
        actionText={t.modalAction}
        onAction={executeWhatsAppRedirect}
        lang={lang}
      />
    </>
  );
};
