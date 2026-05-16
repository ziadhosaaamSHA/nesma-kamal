"use client";

import React from "react";
import SectionReveal from "@/components/SectionReveal";
import Image from "next/image";

const GalleryPage = () => {
  return (
    <div className="relative">
      <section className="py-24 bg-white relative overflow-hidden">
        <SectionReveal graphic="daisy" placement="top-both">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12">
            <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
              {[
                "/images/placeholder.jpg",
                "/images/placeholder.jpg",
                "/images/placeholder.jpg",
                "/images/placeholder.jpg",
                "/images/placeholder.jpg",
                "/images/placeholder.jpg",
              ].map((src, i) => (
                <div key={i} className="break-inside-avoid relative group overflow-hidden rounded-sm shadow-xl">
                  <Image 
                    src={src} 
                    alt={`Gallery ${i}`} 
                    width={1000} 
                    height={1000} 
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-brand-charcoal/0 group-hover:bg-brand-charcoal/20 transition-all duration-500" />
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>
      </section>
    </div>
  );
};

export default GalleryPage;
