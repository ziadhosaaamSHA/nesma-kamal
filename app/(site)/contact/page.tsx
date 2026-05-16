"use client";

import React from "react";
import SectionReveal from "@/components/SectionReveal";
import { BookingForm } from "@/components/BookingForm";

const ContactPage = () => {
  return (
    <div className="relative">
      <section className="py-24 bg-brand-parchment relative overflow-hidden">
        <SectionReveal graphic="daisy" placement="sides-middle">
          <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-5xl font-display mb-8">Get in touch</h2>
              <p className="text-lg text-brand-charcoal/70 mb-12">
                Whether you have a question about services, workshops, or just want to say hello, I&apos;d love to hear from you.
              </p>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-brand-olive font-bold mb-2">Email</h4>
                  <p className="text-xl font-display">hello@nesmakamal.com</p>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-brand-olive font-bold mb-2">Social</h4>
                  <p className="text-xl font-display">@nesmakamal</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-10 md:p-16 shadow-2xl rounded-sm">
              <BookingForm />
            </div>
          </div>
        </SectionReveal>
      </section>
    </div>
  );
};

export default ContactPage;
