"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { TransitionLink } from "./TransitionLink";
import { motion, AnimatePresence } from "framer-motion";
import { List, X, Globe, CaretDown, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react";
import { useLanguage } from "@/context/LanguageContext";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { lang, setLang } = useLanguage();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [expandedMobileItem, setExpandedMobileItem] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const navigation = [
    { label: "About", labelAr: "عن نسمة", href: "/about" },
    {
      label: "Services",
      labelAr: "الخدمات",
      dropdown: [
        { name: "Live Workshops", nameAr: "ورش عمل مباشرة", href: "/services/workshops" },
        { name: "1:1 Consultation", nameAr: "استشارة فردية", href: "/services/consultation" },
        { name: "Recorded Courses", nameAr: "دورات مسجلة", href: "/services/courses" },
      ],
    },
    { label: "Gallery", labelAr: "المعرض", href: "/gallery" },
    { label: "Testimonials", labelAr: "آراء العملاء", href: "/testimonials" },
    {
      label: "Resources",
      labelAr: "المصادر",
      dropdown: [
        { name: "Podcasts", nameAr: "بودكاست", href: "/resources/podcasts" },
        { name: "Videos", nameAr: "فيديوهات", href: "/resources/videos" },
        { name: "Blog", nameAr: "المدونة", href: "/resources/blog" },
        { name: "Assessments", nameAr: "اختبارات", href: "/resources/assessments" },
      ],
    },
    { label: "Connect", labelAr: "تواصل", href: "/contact" },
  ];

  const leftNav = navigation.slice(0, 3);
  const rightNav = navigation.slice(3);

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className={`sticky md:fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? "bg-brand-parchment py-4 shadow-md" : "bg-brand-parchment md:bg-transparent py-4 md:py-8"}`}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-3 items-center">
          
          {/* Left Nav (Desktop) */}
          <nav className="hidden lg:flex items-center gap-4">
            {leftNav.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.dropdown ? (
                  <button className={`bg-transparent hover:bg-brand-primary px-5 py-2 rounded text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 transition-all duration-300 min-w-[140px] ${isScrolled ? 'text-brand-primary hover:bg-brand-primary hover:text-brand-parchment' : 'text-brand-primary md:text-white hover:bg-brand-primary'} `}>
                    {lang === "en" ? item.label : item.labelAr}
                    <CaretDown size={12} weight="bold" />
                  </button>
                ) : (
                  <TransitionLink href={item.href} className={`bg-transparent hover:bg-brand-primary px-5 py-2 rounded text-[10px] uppercase tracking-widest transition-all duration-300 min-w-[140px] text-center inline-block ${isScrolled ? 'text-brand-primary hover:bg-brand-primary hover:text-brand-parchment' : 'text-brand-primary md:text-white hover:bg-brand-primary'} `}>
                    {lang === "en" ? item.label : item.labelAr}
                  </TransitionLink>
                )}
                
                {item.dropdown && (
                  <AnimatePresence>
                    {activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className={`absolute top-full ${lang === 'ar' ? 'right-0' : 'left-0'} mt-2 bg-white shadow-xl rounded-xl p-4 min-w-[200px] border border-brand-charcoal/5`}
                      >
                        <div className="flex flex-col gap-3">
                          {item.dropdown.map((sub) => (
                            <TransitionLink key={sub.name} href={sub.href} className="text-xs hover:text-brand-burgundy transition-colors px-2 py-1">
                              {lang === "en" ? sub.name : sub.nameAr}
                            </TransitionLink>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* Center: Logo */}
          <div className="flex justify-center">
            <TransitionLink href="/">
              <div className="relative transition-all duration-500">
                <h1 className={`text-xl md:text-3xl font-display logo-spacing ${isScrolled ? "text-brand-charcoal" : "text-brand-primary md:text-white"}`}>
                  nesma
                </h1>
                {/* 
                <div className="relative w-48 h-16">
                  <img 
                    src="/images/logo.png" 
                    alt="Nesma Kamal" 
                    className="w-full h-full object-contain"
                  />
                </div> 
                */}
              </div>
            </TransitionLink>
          </div>

          {/* Right Nav (Desktop) */}
          <div className="hidden lg:flex items-center justify-end gap-4">
            {rightNav.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.dropdown ? (
                  <button className={`bg-transparent hover:bg-brand-primary px-5 py-2 rounded text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 transition-all duration-300 min-w-[140px] ${isScrolled ? 'text-brand-primary hover:bg-brand-primary hover:text-brand-parchment' : 'text-white hover:bg-brand-primary'} `}>
                    {lang === "en" ? item.label : item.labelAr}
                    <CaretDown size={12} weight="bold" />
                  </button>
                ) : (
                  <TransitionLink href={item.href} className={`bg-transparent hover:bg-brand-primary px-5 py-2 rounded text-[10px] uppercase tracking-widest transition-all duration-300 min-w-[140px] text-center inline-block ${isScrolled ? 'text-brand-primary hover:bg-brand-primary hover:text-brand-parchment' : 'text-white hover:bg-brand-primary'} `}>
                    {lang === "en" ? item.label : item.labelAr}
                  </TransitionLink>
                )}
                
                {item.dropdown && (
                  <AnimatePresence>
                    {activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className={`absolute top-full ${lang === 'ar' ? 'left-0' : 'right-0'} mt-2 bg-white shadow-xl rounded-xl p-4 min-w-[200px] border border-brand-charcoal/5`}
                      >
                        <div className="flex flex-col gap-3">
                          {item.dropdown.map((sub) => (
                            <TransitionLink key={sub.name} href={sub.href} className="text-xs hover:text-brand-burgundy transition-colors px-2 py-1">
                              {lang === "en" ? sub.name : sub.nameAr}
                            </TransitionLink>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
            
            <button
              onClick={() => setLang(lang === "en" ? "ar" : "en")}
              className={`flex items-center gap-2 text-[10px] uppercase tracking-widest transition-colors ml-4 ${isScrolled ? "text-brand-charcoal" : "text-brand-primary md:text-white"}`}
            >
              <Globe size={16} />
              {lang === "en" ? "AR" : "EN"}
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex justify-end col-start-3">
            <button onClick={() => setIsMobileMenuOpen(true)} className="p-2">
              <List size={28} className={isScrolled ? "text-brand-charcoal" : "text-brand-primary"} />
            </button>
          </div>
        </div>
      </div>

      {/* 2026 Professional Minimal Mobile Menu */}
      <AnimatePresence mode="wait">
        {isMobileMenuOpen && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
            className="fixed inset-0 z-[60] bg-brand-charcoal flex flex-col p-8 md:p-16 overflow-y-auto"
          >
            {/* Mobile Menu Header */}
            <div className="flex justify-between items-center mb-20">
              <div className="relative">
                <h1 className="text-2xl font-display logo-spacing text-brand-parchment">nesma</h1>
                {/* 
                <div className="relative w-32 h-14">
                  <img 
                    src="/images/logo.png" 
                    alt="Nesma Kamal" 
                    className="w-full h-full object-contain"
                  />
                </div> 
                */}
              </div>
              <button 
                onClick={() => setIsMobileMenuOpen(false)} 
                className="w-12 h-12 rounded border border-brand-parchment/20 flex items-center justify-center text-brand-parchment hover:bg-brand-parchment hover:text-brand-charcoal transition-all duration-500"
              >
                <X size={24} />
              </button>
            </div>

            {/* Mobile Menu Navigation */}
            <nav className="flex flex-col gap-8 flex-grow">
              {navigation.map((item, index) => (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.05 }}
                  key={item.label}
                  className="group"
                >
                  <div className="flex flex-col">
                    <div className="flex items-center justify-between group">
                      {item.dropdown ? (
                        <button 
                          onClick={() => setExpandedMobileItem(expandedMobileItem === item.label ? null : item.label)}
                          className="text-4xl md:text-6xl font-display text-brand-parchment hover:text-brand-sage transition-colors flex items-center justify-between w-full py-2"
                        >
                          {lang === "en" ? item.label : item.labelAr}
                          <motion.div
                            animate={{ rotate: expandedMobileItem === item.label ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <CaretDown size={24} className="opacity-40" />
                          </motion.div>
                        </button>
                      ) : (
                        <TransitionLink 
                          href={item.href || "#"} 
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="text-4xl md:text-6xl font-display text-brand-parchment hover:text-brand-sage transition-colors py-2"
                        >
                          {lang === "en" ? item.label : item.labelAr}
                        </TransitionLink>
                      )}
                    </div>
                    
                    {item.dropdown && (
                      <AnimatePresence>
                        {expandedMobileItem === item.label && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                            className="overflow-hidden"
                          >
                            <div className="flex flex-col gap-4 py-4 pl-6 border-l border-brand-parchment/10 ml-2 mt-2">
                              {item.dropdown.map((sub) => (
                                <TransitionLink 
                                  key={sub.name} 
                                  href={sub.href} 
                                  onClick={() => setIsMobileMenuOpen(false)}
                                  className="text-sm uppercase tracking-[0.2em] text-brand-parchment/60 hover:text-brand-parchment transition-colors"
                                >
                                  {lang === "en" ? sub.name : sub.nameAr}
                                </TransitionLink>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </div>
                </motion.div>
              ))}
            </nav>

            {/* Mobile Menu Footer */}
            <div className="pt-12 border-t border-brand-parchment/10 flex flex-col md:flex-row justify-between items-end md:items-center gap-8">
              <div className="flex gap-6">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-brand-parchment/40 hover:text-brand-parchment transition-colors"><InstagramLogo size={24} /></a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-brand-parchment/40 hover:text-brand-parchment transition-colors"><LinkedinLogo size={24} /></a>
                <button 
                  onClick={() => setLang(lang === "en" ? "ar" : "en")}
                  className="text-brand-parchment/40 hover:text-brand-parchment transition-colors uppercase text-xs tracking-widest flex items-center gap-2"
                >
                  <Globe size={18} />
                  {lang === "en" ? "Arabic" : "English"}
                </button>
              </div>
              <p className="text-[10px] uppercase tracking-widest text-brand-parchment/20">
                &copy; 2026 Nesma Kamal
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
