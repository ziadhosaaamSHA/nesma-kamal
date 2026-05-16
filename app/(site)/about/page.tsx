"use client";

import React from "react";
import SectionReveal from "@/components/SectionReveal";
import About from "@/components/About";

const AboutPage = () => {
  return (
    <div className="relative">
      <About />
      
      <section className="py-24 bg-white relative overflow-hidden">
        <SectionReveal graphic="botanical" placement="sides-middle">
          <div className="max-w-[800px] mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-5xl font-display mb-12">My Mission</h2>
            <p className="text-lg text-brand-charcoal/70 leading-relaxed mb-8">
              To provide a safe, compassionate, and scientifically grounded space for individuals to explore their inner landscapes and cultivate resilience.
            </p>
          </div>
        </SectionReveal>
      </section>
    </div>
  );
};

export default AboutPage;
