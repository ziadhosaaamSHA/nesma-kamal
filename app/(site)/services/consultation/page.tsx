"use client";

import React from "react";
import SectionReveal from "@/components/SectionReveal";
import { BookingForm } from "@/components/BookingForm";

const ConsultationPage = () => {
  return (
    <div className="relative">
      <section className="py-24 bg-white relative overflow-hidden">
        <SectionReveal graphic="sun" placement="sides-middle">
          <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-display mb-8">Personalized Therapy</h2>
              <p className="text-lg text-brand-charcoal/70 leading-relaxed mb-8">
                Private sessions tailored to your unique emotional landscape. We use evidence-based CBT and DBT techniques to help you navigate life&apos;s transitions.
              </p>
              <ul className="space-y-4 text-brand-charcoal/80 mb-12">
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-olive" />
                  <span>50-minute private sessions</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-olive" />
                  <span>Cognitive Behavioral Therapy (CBT)</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-olive" />
                  <span>Dialectical Behavior Therapy (DBT)</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-brand-parchment p-10 md:p-16 shadow-2xl rounded-sm border border-brand-charcoal/5">
              <BookingForm />
            </div>
          </div>
        </SectionReveal>
      </section>
    </div>
  );
};

export default ConsultationPage;
