"use client";

import React from "react";
import SectionReveal from "@/components/SectionReveal";

const VideosPage = () => {
  return (
    <div className="relative">
      <section className="py-24 bg-white relative overflow-hidden">
        <SectionReveal graphic="sun" placement="top-both">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="group cursor-pointer">
                  <div className="aspect-video bg-brand-charcoal relative rounded-sm overflow-hidden mb-6">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full border border-white/20 flex items-center justify-center bg-white/10 backdrop-blur-sm group-hover:scale-110 transition-transform duration-500">
                        <span className="text-white ml-1 text-2xl">▶</span>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-display mb-4">Therapeutic Insight {i}: Understanding DBT</h3>
                  <p className="text-brand-charcoal/60 leading-relaxed">A visual exploration of Dialectical Behavior Therapy and how it can help regulate intense emotions in daily life.</p>
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>
      </section>
    </div>
  );
};

export default VideosPage;
