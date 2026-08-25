import React from "react";
import { Cormorant_Garamond } from "next/font/google";
import { cn } from "./utils";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

type HeadingVariant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
type HeadingAlign = "left" | "center" | "right";
type HeadingFontVariant = "display" | "cormorant";
type HeadingColor =
  | "primary"
  | "secondary"
  | "foreground"
  | "muted"
  | "white"
  | "black"
  | "neutral"
  | "brand";

/**
 * Class names must be written out in full.
 *
 * Tailwind discovers utilities by statically scanning source text — it never
 * evaluates JS — so a template literal like `text-${color}` generates no CSS.
 * These lookup maps keep every candidate literal and therefore scannable.
 */
const SIZE_CLASSES: Record<HeadingVariant, string> = {
  h1: "text-4xl md:text-5xl",
  h2: "text-3xl md:text-4xl",
  h3: "text-2xl md:text-3xl",
  h4: "text-xl md:text-2xl",
  h5: "text-lg md:text-xl",
  h6: "text-base md:text-lg",
};

const ALIGN_CLASSES: Record<HeadingAlign, string> = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

const COLOR_CLASSES: Record<HeadingColor, string> = {
  primary: "text-primary",
  secondary: "text-secondary",
  foreground: "text-foreground",
  muted: "text-foreground-muted",
  white: "text-white",
  black: "text-black",
  neutral: "text-gray-600",
  brand: "text-brand-heading",
};

const FONT_VARIANT_CLASSES: Record<HeadingFontVariant, string> = {
  display: "font-display",
  cormorant: `${cormorantGaramond.className} font-semibold`,
};

interface HeadingsProps
  extends Omit<React.HTMLAttributes<HTMLHeadingElement>, "color"> {
  variant?: HeadingVariant;
  align?: HeadingAlign;
  fontVariant?: HeadingFontVariant;
  color?: HeadingColor;
  children: React.ReactNode;
}

function Headings({
  variant = "h2",
  align = "left",
  fontVariant = "display",
  color = "brand",
  className,
  children,
  lang = "en",
  ...props
}: HeadingsProps) {
  const Tag = variant;

  return (
    <Tag
      className={cn(
        "heading tracking-tight leading-tight mb-8 font-bold",
        FONT_VARIANT_CLASSES[fontVariant],
        SIZE_CLASSES[variant],
        ALIGN_CLASSES[align],
        COLOR_CLASSES[color],
        lang === "ar" ? "heading-arabic" : "",
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}

export default Headings;
