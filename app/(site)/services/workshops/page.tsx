"use client";

import React from "react";
import SectionReveal from "@/components/SectionReveal";

const WorkshopsPage = () => {
  return (
    <div className="relative">
      <section className="py-24 bg-brand-parchment relative overflow-hidden">
        <SectionReveal graphic="grass" placement="sides-middle">
          <div className="max-w-[1000px] mx-auto px-6">
            <h2 className="text-3xl md:text-5xl font-display mb-8 text-center">Group Healing Journeys</h2>
            <p className="text-lg text-brand-charcoal/70 leading-relaxed text-center mb-16">
              Our interactive workshops provide a safe community where individuals can share experiences and learn practical tools for emotional regulation.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-sm shadow-xl">
                <h3 className="text-2xl font-display mb-4">CBT for Daily Life</h3>
                <p className="text-brand-charcoal/60 mb-6">Learn how to manage intrusive thoughts and build healthier behavioral patterns.</p>
                <button className="btn-primary w-full">Join Waiting List</button>
              </div>
              <div className="bg-white p-8 rounded-sm shadow-xl">
                <h3 className="text-2xl font-display mb-4">DBT Essentials</h3>
                <p className="text-brand-charcoal/60 mb-6">Master the art of emotional regulation and interpersonal effectiveness.</p>
                <button className="btn-primary w-full">Join Waiting List</button>
              </div>
            </div>
          </div>
        </SectionReveal>
      </section>
    </div>
  );
};

export default WorkshopsPage;
