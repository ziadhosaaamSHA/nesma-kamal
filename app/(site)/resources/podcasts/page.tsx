"use client";

import React from "react";
import SectionReveal from "@/components/SectionReveal";

const PodcastsPage = () => {
  return (
    <div className="relative">
      <section className="py-24 bg-brand-parchment relative overflow-hidden">
        <SectionReveal graphic="waves" placement="sides-middle">
          <div className="max-w-[1000px] mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-display mb-6">Conversations on Healing</h2>
              <p className="text-lg text-brand-charcoal/70">Join Nesma as she explores deep psychological concepts and shares practical wisdom for your mental health journey.</p>
            </div>
            
            <div className="space-y-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white p-8 rounded-sm shadow-lg flex flex-col md:flex-row items-center gap-8 border-l-4 border-brand-burgundy">
                  <div className="w-20 h-20 bg-brand-sage rounded-full flex items-center justify-center text-brand-olive shrink-0">
                    <span className="text-2xl">🎙️</span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-display mb-2">Episode {i}: The Power of Vulnerability</h3>
                    <p className="text-sm text-brand-charcoal/60 mb-4">Exploring how embracing our imperfections can lead to profound emotional growth and resilience.</p>
                    <div className="flex items-center gap-6">
                      <button className="text-xs uppercase tracking-widest font-bold text-brand-burgundy hover:underline">Listen on Spotify</button>
                      <button className="text-xs uppercase tracking-widest font-bold text-brand-burgundy hover:underline">Apple Podcasts</button>
                    </div>
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

export default PodcastsPage;
