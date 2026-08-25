"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import Button, { type ButtonVariant } from "./Button";
import Headings from "./Headings";
import { cn } from "./utils";

export type CardTheme = "primary" | "secondary" | "tertiary";

export interface BlogCardProps {
  id?: string;
  title: string;
  excerpt: string;
  date: string;
  image?: string;
  imageAlt?: string;
  href?: string;
  theme?: CardTheme;
  buttonText?: string;
  className?: string;
}

const THEME_CLASSES: Record<
  CardTheme,
  { background: string; panel: string; accent: string; button: ButtonVariant }
> = {
  primary: {
    background: "bg-moss-400",
    panel: "moss-700",
    accent: "text-moss-900",
    button: "primary",
  },
  secondary: {
    background: "bg-burgundy-400",
    panel: "burgundy-700",
    accent: "text-burgundy-900",
    button: "secondary",
  },
  tertiary: {
    background: "bg-navy-400",
    panel: "navy-700",
    accent: "text-navy-900",
    button: "navy",
  },
};

export default function BlogCard({
  title,
  excerpt,
  date,
  image,
  imageAlt,
  href = "#",
  theme = "primary",
  buttonText,
  className,
}: BlogCardProps) {
  const { lang } = useLanguage();
  const isAr = lang === "ar";
  const t = THEME_CLASSES[theme] || THEME_CLASSES.primary;

  const defaultBtnText = isAr ? "اقرأ التغطية" : "Read Press";

  return (
    <article
      className={cn(
        "flex flex-col justify-between overflow-hidden rounded-[28px] sm:rounded-[36px] md:rounded-[40px] shadow-sm transition-all duration-300 hover:shadow-xl",
        t.background,
        className
      )}
    >
      {/* Image / Panel Header */}
      <div
        className={cn(
          "relative h-48 sm:h-56 w-full shrink-0 overflow-hidden rounded-t-[24px] sm:rounded-t-[32px] md:rounded-t-[36px] rounded-b-[2rem]",
        )}
         style={{ backgroundColor: `var(--color-${t.panel})` }}
      >
        {image && (
          <Image
            src={image}
            alt={imageAlt || title}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}
      </div>

      {/* Content Area */}
      <div className="flex flex-1 flex-col justify-between p-6 sm:p-8 gap-6">
        <div className="flex flex-col gap-3">
          {/* Date */}
          <span className="text-xs font-medium uppercase tracking-wider text-black/60">
            {date}
          </span>

          {/* Title */}
          <Headings variant="h3" color="brand" lang={lang}>
            {title}
          </Headings>

          {/* Excerpt */}
          <p className="line-clamp-3 text-sm leading-relaxed text-black/80">
            {excerpt}
          </p>
        </div>

        {/* CTA Button */}
        <div className="pt-2 flex justify-center">
          <Link href={href} className="inline-block">
            <Button variant={t.button} style={{ backgroundColor: `var(--color-${t.panel})` }}>
              {buttonText || defaultBtnText}
            </Button>
          </Link>
        </div>
      </div>
    </article>
  );
}
