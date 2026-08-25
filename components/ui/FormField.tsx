"use client";

import React, {
  type InputHTMLAttributes,
  type SelectHTMLAttributes,
  type TextareaHTMLAttributes,
  type ReactNode,
  forwardRef,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WarningCircle, CaretDown } from "@phosphor-icons/react";
import { cn } from "./utils";

export interface FormFieldProps {
  label: string;
  required?: boolean;
  error?: string | null;
  hint?: string;
  dark?: boolean;
  children: ReactNode;
  className?: string;
  lang?: "en" | "ar";
}

export function FormField({
  label,
  required = false,
  error,
  hint,
  dark = false,
  children,
  className,
  lang = "en",
}: FormFieldProps) {
  const isAr = lang === "ar";

  return (
    <div className={cn("flex flex-col gap-2 w-full", className)}>
      <label
        className={cn(
          "text-xs font-bold uppercase tracking-wider flex items-center gap-1",
          dark ? "text-moss-100/80" : "text-gray-700"
        )}
      >
        <span>{label}</span>
        {required && <span className="text-burgundy-500 font-bold">*</span>}
      </label>

      <div className="relative w-full">{children}</div>

      {/* Inline Validation Error Message with smooth animation */}
      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -4, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -4, height: 0 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-1.5 text-xs text-burgundy-600 font-medium overflow-hidden pt-1"
          >
            <WarningCircle size={14} weight="fill" className="shrink-0" />
            <span>{error}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Helper text */}
      {!error && hint && (
        <p className={cn("text-[11px] leading-relaxed", dark ? "text-moss-200/60" : "text-gray-500")}>
          {hint}
        </p>
      )}
    </div>
  );
}

export interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  dark?: boolean;
  hasError?: boolean;
}

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ dark = false, hasError = false, className, disabled, ...props }, ref) => {
    return (
      <input
        ref={ref}
        disabled={disabled}
        className={cn(
          "w-full rounded-2xl px-4 py-3 text-sm font-medium transition-all duration-200 focus:outline-none",
          "border shadow-xs",
          dark
            ? "bg-moss-900/40 text-moss-50 placeholder:text-moss-300/40 border-moss-700/60 focus:border-moss-400 focus:bg-moss-900/60 focus:ring-2 focus:ring-moss-400/20"
            : "bg-gray-50/80 text-gray-900 placeholder:text-gray-400 border-gray-200 focus:border-moss-600 focus:bg-white focus:ring-2 focus:ring-moss-400/20",
          hasError &&
            (dark
              ? "!border-burgundy-400 !focus:border-burgundy-400 !focus:ring-burgundy-400/20"
              : "!border-burgundy-500 !focus:border-burgundy-500 !focus:ring-burgundy-500/20"),
          disabled && "opacity-50 cursor-not-allowed bg-gray-100/50",
          className
        )}
        {...props}
      />
    );
  }
);
FormInput.displayName = "FormInput";

export interface FormSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  dark?: boolean;
  hasError?: boolean;
}

export const FormSelect = forwardRef<HTMLSelectElement, FormSelectProps>(
  ({ dark = false, hasError = false, className, children, disabled, ...props }, ref) => {
    return (
      <div className="relative w-full">
        <select
          ref={ref}
          disabled={disabled}
          className={cn(
            "w-full appearance-none rounded-2xl px-4 py-3 pe-10 text-sm font-medium transition-all duration-200 focus:outline-none",
            "border shadow-xs cursor-pointer",
            dark
              ? "bg-moss-900/40 text-moss-50 border-moss-700/60 focus:border-moss-400 focus:bg-moss-900/60 focus:ring-2 focus:ring-moss-400/20"
              : "bg-gray-50/80 text-gray-900 border-gray-200 focus:border-moss-600 focus:bg-white focus:ring-2 focus:ring-moss-400/20",
            hasError &&
              (dark
                ? "!border-burgundy-400 !focus:border-burgundy-400 !focus:ring-burgundy-400/20"
                : "!border-burgundy-500 !focus:border-burgundy-500 !focus:ring-burgundy-500/20"),
            disabled && "opacity-50 cursor-not-allowed bg-gray-100/50",
            className
          )}
          {...props}
        >
          {children}
        </select>
        <div className="pointer-events-none absolute inset-y-0 end-0 flex items-center px-3.5 text-gray-400">
          <CaretDown size={16} weight="bold" />
        </div>
      </div>
    );
  }
);
FormSelect.displayName = "FormSelect";

export interface FormTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  dark?: boolean;
  hasError?: boolean;
}

export const FormTextarea = forwardRef<HTMLTextAreaElement, FormTextareaProps>(
  ({ dark = false, hasError = false, className, disabled, rows = 4, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        rows={rows}
        disabled={disabled}
        className={cn(
          "w-full rounded-2xl px-4 py-3 text-sm font-medium transition-all duration-200 focus:outline-none resize-y",
          "border shadow-xs",
          dark
            ? "bg-moss-900/40 text-moss-50 placeholder:text-moss-300/40 border-moss-700/60 focus:border-moss-400 focus:bg-moss-900/60 focus:ring-2 focus:ring-moss-400/20"
            : "bg-gray-50/80 text-gray-900 placeholder:text-gray-400 border-gray-200 focus:border-moss-600 focus:bg-white focus:ring-2 focus:ring-moss-400/20",
          hasError &&
            (dark
              ? "!border-burgundy-400 !focus:border-burgundy-400 !focus:ring-burgundy-400/20"
              : "!border-burgundy-500 !focus:border-burgundy-500 !focus:ring-burgundy-500/20"),
          disabled && "opacity-50 cursor-not-allowed bg-gray-100/50",
          className
        )}
        {...props}
      />
    );
  }
);
FormTextarea.displayName = "FormTextarea";
