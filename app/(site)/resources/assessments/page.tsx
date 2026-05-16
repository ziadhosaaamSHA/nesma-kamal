"use client";

import React from "react";
import SectionReveal from "@/components/SectionReveal";

const AssessmentsPage = () => {
  return (
    <div className="relative">
      <section className="py-24 bg-white relative overflow-hidden">
        <SectionReveal graphic="grass" placement="top-both">
          <div className="max-w-[1000px] mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-5xl font-display mb-8">Understanding Your Journey</h2>
            <p className="text-lg text-brand-charcoal/70 mb-16 max-w-[700px] mx-auto">
              These clinical screening tools are designed to help you gain insight into your current emotional state. Please note these are not diagnostic tools but guides for further exploration.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              {[
                { title: "Anxiety Screening", time: "5-7 mins", desc: "Understand your levels of worry and physiological anxiety symptoms." },
                { title: "Depression Scale", time: "8-10 mins", desc: "A clinical tool to evaluate emotional and physical indicators of low mood." },
                { title: "Attachment Style", time: "12-15 mins", desc: "Explore your patterns in close relationships and emotional dependency." },
                { title: "Resilience Score", time: "5 mins", desc: "Measure your current capacity to navigate stress and recover from adversity." }
              ].map((test, i) => (
                <div key={i} className="p-10 bg-brand-parchment rounded-sm shadow-lg hover:shadow-2xl transition-all duration-500 group">
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-2xl font-display group-hover:text-brand-burgundy transition-colors">{test.title}</h3>
                    <span className="text-[10px] uppercase tracking-widest text-brand-charcoal/40 font-bold">{test.time}</span>
                  </div>
                  <p className="text-sm text-brand-charcoal/60 mb-8 leading-relaxed">{test.desc}</p>
                  <button className="btn-primary w-full">Start Assessment</button>
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>
      </section>
    </div>
  );
};

export default AssessmentsPage;
