"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { TransitionLink } from "../transitions/TransitionLink";
import { motion, AnimatePresence } from "framer-motion";
import {
  List,
  X,
  Globe,
  InstagramLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";
import { useLanguage } from "@/context/LanguageContext";
import NavItem from "./NavItem";
import { navigationItems } from "./navigationData";
import type { NavigationItem } from "@/app/types/navigation";
import Container from "../ui/Container";
import NesmaLogo from "../transitions/NesmaLogo";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isInBookSection, setIsInBookSection] = useState(false);
  const { lang, setLang } = useLanguage();

  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [expandedMobileItem, setExpandedMobileItem] =
    useState<string | null>(null);

  const pathname = usePathname?.() ?? "";

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);
  useEffect(() => {
    if (pathname !== "/") return;

    const bookSection = document.getElementById("book-section");
    if (!bookSection) return;
    const isMobile = window.matchMedia("(max-width: 1023px)").matches;

    if (isMobile) {
      const mobileStartOffset = 260;
      const mobileEndOffset = 110;

      const handleMobileScroll = () => {
        const sectionRect = bookSection.getBoundingClientRect();
        const isInMobileBookRange =
          sectionRect.top <= window.innerHeight - mobileStartOffset &&
          sectionRect.bottom >= mobileEndOffset;
        setIsInBookSection(isInMobileBookRange);
      };

      handleMobileScroll();
      window.addEventListener("scroll", handleMobileScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleMobileScroll);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInBookSection(entry.isIntersecting);
      },
      { threshold: 0.25 }
    );

    observer.observe(bookSection);
    return () => observer.disconnect();
  }, [pathname]);

  
  const leftNav = navigationItems.slice(0, 3);
  const rightNav = navigationItems.slice(3);

  
  const useBurgundyTone = pathname === "/" && isInBookSection;

  const isItemCurrent = (item: NavigationItem) =>
    !!item.href && pathname === item.href;

  return (
    <Container className="fixed top-0 left-0 z-50 w-full bg-transparent" size="header">
    <motion.header
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {/* =====================================================
          FLOATING NAVIGATION CARD
          ===================================================== */}

      <div
        className={`
          w-full
          rounded-xl
          ${
        useBurgundyTone ? "bg-secondary" : "bg-primary"
      }
          shadow-nav
          backdrop-blur-md
          transition-all duration-500
        `}
      >
<div
  className="
    grid
    h-16
    grid-cols-2
    lg:grid-cols-[1fr_auto_1fr]
    items-center
    px-4
    sm:px-5
    md:px-6
    lg:px-7
  "
>
{/* LEFT */}
<nav className="hidden lg:flex items-center justify-start gap-1">
  {leftNav.map((item) => (
    <div
      key={item.label}
      className="relative"
      onMouseEnter={() =>
        item.dropdown && setActiveDropdown(item.label)
      }
      onMouseLeave={() => setActiveDropdown(null)}
    >
      <NavItem
        item={item}
        lang={lang}
        isActive={activeDropdown === item.label}
        isCurrentPage={isItemCurrent(item)}
        useBurgundyTone={useBurgundyTone}
        align="left"
      />
    </div>
  ))}
</nav>


{/* CENTER LOGO */}
<div className="flex items-center lg:justify-center px-4">
  <TransitionLink href="/">
    <NesmaLogo className="h-8 w-40" />
  </TransitionLink>
</div>


{/* RIGHT */}
<div className="hidden lg:flex items-center justify-end gap-1">
  {rightNav.map((item) => (
    <div
      key={item.label}
      className="relative"
      onMouseEnter={() =>
        item.dropdown && setActiveDropdown(item.label)
      }
      onMouseLeave={() => setActiveDropdown(null)}
    >
      <NavItem
        item={item}
        lang={lang}
        isActive={activeDropdown === item.label}
        isCurrentPage={isItemCurrent(item)}
        useBurgundyTone={useBurgundyTone}
        align="right"
      />
    </div>
  ))}

  <button
    onClick={() => setLang(lang === "en" ? "ar" : "en")}
    className="
      ml-2
      flex
      items-center
      gap-1.5
      rounded-full
      border
      border-surface
      px-3
      py-2
      text-[0.6875rem]
      font-medium
      uppercase
      tracking-wide
      text-surface
      transition-all
      duration-200
      hover:border-moss-400
      hover:bg-moss-50
      hover:text-moss-900

      active:scale-[0.96]

      focus-visible:outline-none
      focus-visible:ring-2
      focus-visible:ring-moss-400/40
      focus-visible:ring-offset-2
    "
  >
    <Globe size="1rem" />
    {lang === "en" ? "AR" : "EN"}
  </button>
</div>
          {/* =================================================
              MOBILE MENU BUTTON
              ================================================= */}

          <div className="lg:hidden justify-end flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className={`
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-md
                ${useBurgundyTone ? "bg-surface text-moss-900" : "bg-surface text-moss-700"}
                transition-all
                duration-200

                hover:bg-moss-50
                hover:text-moss-900
                text-cream
                shadow-card
                transition-all
                duration-200

                hover:bg-moss-500
                active:scale-95

                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-moss-400/40
                focus-visible:ring-offset-2
              `}
              aria-label="Open menu"
            >
              <List size="1.5rem" weight="regular" />
            </button>
          </div>
        </div>
      </div>

      {/* =====================================================
          MOBILE MENU
          ===================================================== */}

      <AnimatePresence mode="wait">
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-1rem" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-1rem" }}
            transition={{
              duration: 0.45,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              fixed
              inset-4
              z-[60]
              flex
              flex-col
              overflow-y-auto
              rounded-xl
              bg-moss-700
              p-5
              shadow-modal

              sm:inset-6
              sm:p-8
            "
          >
            {/* MOBILE HEADER */}

            <div className="flex items-center justify-between">
              <TransitionLink href="/">
                <NesmaLogo className="h-8 w-40" />
              </TransitionLink>

              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-md
                  border
                  border-cream/20
                  text-cream
                  transition-all

                  hover:bg-cream
                  hover:text-moss-900

                  active:scale-95
                "
                aria-label="Close menu"
              >
                <X size="1.375rem" />
              </button>
            </div>

            {/* MOBILE NAV */}

            <nav className="mt-12 flex flex-col gap-3 sm:mt-16">
              {navigationItems.map((item, index) => (
                <motion.div
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.1 + index * 0.05,
                    duration: 0.35,
                  }}
                  key={item.label}
                >
                  <NavItem
                    item={item}
                    lang={lang}
                    isMobile
                    isCurrentPage={isItemCurrent(item)}
                    expandedMobileItem={expandedMobileItem}
                    setExpandedMobileItem={setExpandedMobileItem}
                    setIsMobileMenuOpen={setIsMobileMenuOpen}
                  />
                </motion.div>
              ))}
            </nav>

            {/* MOBILE FOOTER */}

            <div
              className="
                mt-auto
                flex
                flex-col
                gap-6
                border-t
                border-cream/10
                pt-8

                sm:flex-row
                sm:items-center
                sm:justify-between
              "
            >
              <p className="text-[0.625rem] uppercase tracking-wide text-cream/60">
                © 2026 Nesma Kamal
              </p>

              <div className="flex items-center gap-5">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    text-cream/60
                    transition-colors
                    hover:text-cream
                    active:scale-90
                  "
                  aria-label="Instagram"
                >
                  <InstagramLogo size="1.375rem" />
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    text-cream/60
                    transition-colors
                    hover:text-cream
                    active:scale-90
                  "
                  aria-label="LinkedIn"
                >
                  <LinkedinLogo size="1.375rem" />
                </a>

                <button
                  onClick={() => setLang(lang === "en" ? "ar" : "en")}
                  className="
                    flex
                    items-center
                    gap-1.5
                    rounded-full
                    border
                    border-cream/20
                    px-3
                    py-1.5
                    text-[0.6875rem]
                    uppercase
                    text-cream/75
                    transition-all

                    hover:border-cream/40
                    hover:text-cream

                    active:scale-95
                  "
                >
                  <Globe size="1rem" />

                  {lang === "en" ? "Arabic" : "English"}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
    </Container>
  );
};

export default Header;