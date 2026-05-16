"use client";

import React from "react";
import SectionReveal from "@/components/SectionReveal";

const BlogPage = () => {
  return (
    <div className="relative">
      <section className="py-24 bg-brand-parchment relative overflow-hidden">
        <SectionReveal graphic="botanical" placement="sides-middle">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid grid-cols-1 gap-16">
              {[1, 2, 3].map((i) => (
                <article key={i} className="flex flex-col md:flex-row gap-12 items-center">
                  <div className="w-full md:w-1/3 aspect-[4/3] bg-brand-sage relative rounded-sm overflow-hidden shrink-0">
                    {/* Image Placeholder */}
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-[10px] uppercase tracking-widest text-brand-olive font-bold">Mental Health</span>
                      <span className="text-[10px] uppercase tracking-widest text-brand-charcoal/40">May 15, 2026</span>
                    </div>
                    <h3 className="text-3xl font-display mb-6 hover:text-brand-burgundy transition-colors cursor-pointer">
                      Navigating the Internal Breeze: A Guide to CBT
                    </h3>
                    <p className="text-brand-charcoal/70 leading-relaxed mb-8">
                      In our latest exploration, we dive deep into the fundamental principles of Cognitive Behavioral Therapy and how they can be applied to achieve lasting emotional stability...
                    </p>
                    <button className="text-xs uppercase tracking-widest font-bold text-brand-olive border-b border-brand-olive pb-1 hover:text-brand-burgundy hover:border-brand-burgundy transition-all">
                      Read Full Article
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </SectionReveal>
      </section>
    </div>
  );
};

export default BlogPage;
