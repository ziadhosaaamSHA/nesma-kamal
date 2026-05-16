"use client";

import React from "react";
import SectionReveal from "@/components/SectionReveal";

const CoursesPage = () => {
  return (
    <div className="relative">
      <section className="py-24 bg-brand-parchment relative overflow-hidden">
        <SectionReveal graphic="botanical" placement="sides-middle">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-display mb-6">Self-Paced Learning</h2>
              <p className="text-lg text-brand-charcoal/70 max-w-[700px] mx-auto">
                Access professional therapeutic tools and insights anytime, anywhere. Our courses are designed to provide clinical knowledge in an accessible format.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white group overflow-hidden rounded-sm shadow-lg hover:shadow-2xl transition-all duration-500">
                  <div className="aspect-video bg-brand-sage relative">
                    <div className="absolute inset-0 flex items-center justify-center text-brand-olive opacity-20 group-hover:opacity-40 transition-opacity">
                      <span className="text-6xl">▶</span>
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-display mb-4">Mastering Emotional Regulation {i}</h3>
                    <p className="text-sm text-brand-charcoal/60 mb-6">A deep dive into DBT techniques for managing intense emotions and finding stability.</p>
                    <button className="btn-primary w-full">Enroll Now</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>
      </section>
    </div>
  );
};

export default CoursesPage;
