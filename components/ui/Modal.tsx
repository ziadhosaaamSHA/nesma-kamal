"use client";

import React, { useEffect, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "@phosphor-icons/react";
import { cn } from "./utils";

export type ModalTheme = "default" | "primary" | "secondary" | "tertiary" | "surface";
export type ModalSize = "sm" | "md" | "lg" | "xl" | "full";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: ReactNode;
  description?: ReactNode;
  theme?: ModalTheme;
  size?: ModalSize;
  showCloseButton?: boolean;
  closeOnBackdropClick?: boolean;
  closeOnEscape?: boolean;
  children?: ReactNode;
  footer?: ReactNode;
  className?: string;
  lang?: "en" | "ar";
}

const THEME_STYLES: Record<
  ModalTheme,
  {
    bg: string;
    text: string;
    border: string;
    closeBtn: string;
    headerBorder: string;
  }
> = {
  default: {
    bg: "bg-brand-parchment text-brand-charcoal",
    text: "text-brand-charcoal",
    border: "border-black/10",
    closeBtn: "text-black/60 hover:text-black hover:bg-black/5",
    headerBorder: "border-black/10",
  },
  surface: {
    bg: "bg-white text-gray-900",
    text: "text-gray-900",
    border: "border-gray-100",
    closeBtn: "text-gray-500 hover:text-gray-900 hover:bg-gray-100",
    headerBorder: "border-gray-100",
  },
  primary: {
    bg: "bg-moss-200 text-moss-950",
    text: "text-moss-950",
    border: "border-moss-300/50",
    closeBtn: "text-moss-800 hover:text-moss-950 hover:bg-moss-300/50",
    headerBorder: "border-moss-300/40",
  },
  secondary: {
    bg: "bg-burgundy-200 text-burgundy-950",
    text: "text-burgundy-950",
    border: "border-burgundy-300/50",
    closeBtn: "text-burgundy-800 hover:text-burgundy-950 hover:bg-burgundy-300/50",
    headerBorder: "border-burgundy-300/40",
  },
  tertiary: {
    bg: "bg-navy-200 text-navy-950",
    text: "text-navy-950",
    border: "border-navy-300/50",
    closeBtn: "text-navy-800 hover:text-navy-950 hover:bg-navy-300/50",
    headerBorder: "border-navy-300/40",
  },
};

const SIZE_CLASSES: Record<ModalSize, string> = {
  sm: "max-w-md",
  md: "max-w-lg",
  lg: "max-w-2xl",
  xl: "max-w-4xl",
  full: "max-w-[95vw] sm:max-w-6xl",
};

export default function Modal({
  isOpen,
  onClose,
  title,
  description,
  theme = "default",
  size = "md",
  showCloseButton = true,
  closeOnBackdropClick = true,
  closeOnEscape = true,
  children,
  footer,
  className,
  lang = "en",
}: ModalProps) {
  const [mounted, setMounted] = React.useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    // Lock body scroll
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";

    // Escape listener
    const handleKeyDown = (e: KeyboardEvent) => {
      if (closeOnEscape && e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalStyle;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, closeOnEscape, onClose]);

  if (!mounted) return null;

  const t = THEME_STYLES[theme] || THEME_STYLES.default;
  const isAr = lang === "ar";

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <div
          className={cn(
            "fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto",
            isAr ? "font-arabic text-right" : "font-sans text-left"
          )}
          dir={isAr ? "rtl" : "ltr"}
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={closeOnBackdropClick ? onClose : undefined}
            className="fixed inset-0 bg-moss-950/60 backdrop-blur-sm"
          />

          {/* Modal Dialog Card */}
          <motion.div
            role="dialog"
            aria-modal="true"
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ type: "spring", duration: 0.4, bounce: 0.15 }}
            className={cn(
              "relative w-full rounded-[28px] sm:rounded-[36px] shadow-2xl overflow-hidden border p-6 sm:p-8 z-10 my-auto",
              t.bg,
              t.border,
              SIZE_CLASSES[size],
              className
            )}
          >
            {/* Header Area */}
            {(title || showCloseButton) && (
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex-1">
                  {title && (
                    <h2 className="text-xl sm:text-2xl font-bold font-display leading-snug">
                      {title}
                    </h2>
                  )}
                  {description && (
                    <p className="text-xs sm:text-sm opacity-75 mt-1 leading-relaxed">
                      {description}
                    </p>
                  )}
                </div>

                {showCloseButton && (
                  <button
                    type="button"
                    onClick={onClose}
                    aria-label="Close modal"
                    className={cn(
                      "p-2 rounded-full transition-colors shrink-0 -mt-1 -mr-1 focus-visible:outline-2 focus-visible:outline-offset-2",
                      t.closeBtn
                    )}
                  >
                    <X size={20} weight="bold" />
                  </button>
                )}
              </div>
            )}

            {/* Body */}
            <div className="py-2">{children}</div>

            {/* Footer */}
            {footer && (
              <div className={cn("mt-6 pt-4 border-t flex items-center justify-end gap-3", t.headerBorder)}>
                {footer}
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );

  return createPortal(modalContent, document.body);
}
