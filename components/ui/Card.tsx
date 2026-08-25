import type { HTMLAttributes, ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "./utils";
import Button, { type ButtonVariant } from "./Button";
import Headings from "./Headings";

type CardVariant = "default" | "colored-container";
type CardTheme = "primary" | "secondary" | "tertiary";
type lang = "en" | "ar";

export interface CardReviews {
  /** Out of 5. Rounded to the nearest whole star when rendered. */
  rating: number;
  count?: number;
}

/**
 * Per-theme colours. Every class is written out in full because Tailwind
 * discovers utilities by scanning source text — an interpolated `bg-${theme}`
 * would never generate CSS.
 */
const THEME_CLASSES: Record<
  CardTheme,
  { background: string; panel: string; accent: string; bullet: string; button: ButtonVariant }
> = {
  primary: {
    background:"bg-moss-200",
    panel: "bg-moss-400",
    accent: "text-moss-700",
    bullet: "border-moss-200 bg-moss-50 text-moss-700",
    button: "primary",
  },
  secondary: {
    background:"bg-burgundy-200",
    panel: "bg-burgundy-500",
    accent: "text-burgundy-700",
    bullet: "border-burgundy-200 bg-burgundy-50 text-burgundy-700",
    button: "secondary",
  },
  tertiary: {
    background: "bg-navy-200",
    panel: "bg-navy-400",
    accent: "text-navy-700",
    bullet: "border-navy-200 bg-navy-50 text-navy-700",
    button: "navy",
  },
};

/**
 * `title` is omitted from the inherited HTML attributes because it collides with
 * the tooltip attribute of the same name — here it is the card's heading text.
 */
interface CardProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  variant?: CardVariant;
  /** Colour theme for the panel, price, bullets and CTA. */
  theme?: CardTheme;
  /** Suffix for the `card-details-*` styling hook, e.g. "testimonials". */
  section?: string;
  title?: string;
  subtitle?: string;
  caption?: string;
  /** Pre-formatted, so it can carry any currency or locale, e.g. "$120". */
  price?: string;
  /** Rendered as pill-shaped bullets. */
  list?: string[];
  reviews?: CardReviews;
  buttonText?: string;
  /** Optional custom CSS classes for the CTA button's background/style. */
  buttonBg?: string;
  href?: string;
  buttonOnClick?: () => void;
  /** Optional image URL or component rendered in the decorative panel. */
  image?: string | ReactNode;
  imageAlt?: string;
  /** Optional icon rendered in the decorative panel. */
  icon?: ReactNode;
  lang?: lang;
  children?: ReactNode;
}

/**
 * Inline SVG rather than a Phosphor import so that Card stays renderable as a
 * server component.
 */
function Stars({ rating }: { rating: number }) {
  const filled = Math.round(rating);

  return (
    <span className="card-stars flex items-center gap-0.5">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          aria-hidden="true"
          className={cn("h-4 w-4 fill-current", i >= filled && "opacity-25")}
        >
          <path d="M10 15.27 16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z" />
        </svg>
      ))}
    </span>
  );
}

/** The structured content block, shared by every variant. */
function CardBody({
  title,
  subtitle,
  caption,
  price,
  list,
  reviews,
  buttonText,
  buttonBg,
  href,
  buttonOnClick,
  theme,
  lang
}: Pick<
  CardProps,
  "title" | "subtitle" | "caption" | "price" | "list" | "reviews" | "buttonText" | "buttonBg" | "href" | "buttonOnClick"
> & { theme: CardTheme; lang: lang }) {
  const t = THEME_CLASSES[theme];

  return (
    <div className="card-content flex h-full flex-col items-start justify-between gap-6">
      <div className="card-body flex flex-col gap-4">
        {(title || subtitle) && (
          <div className="card-headings flex flex-col">
            {title && (
              <Headings variant="h3" color="black" lang={lang}>
                {title}
              </Headings>
            )}
            {subtitle && (
              <Headings variant="h6" color="neutral" lang={lang}>
                {subtitle}
              </Headings>
            )}
          </div>
        )}

        {caption && (
          <p className="card-caption text-start text-gray-600">{caption}</p>
        )}

        {reviews && (
          <div
            className="card-reviews flex items-center gap-2 text-sm font-medium"
          >
            <Stars rating={reviews.rating} />
            <span className="sr-only">{reviews.rating} out of 5</span>
            <span className="font-bold text-gray-900">{reviews.rating}</span>
            {reviews.count !== undefined && (
              <span className="text-gray-500">
                ({reviews.count} {reviews.count === 1 ? "review" : "reviews"})
              </span>
            )}
          </div>
        )}

        {list && list.length > 0 && (
          <ul className="card-list flex flex-wrap gap-2">
            {list.map((item) => (
              <li
                key={item}
                className={cn(
                  "card-bullet rounded-full border px-3 py-1 text-xs font-medium",
                  t.bullet
                )}
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>

      {(price || buttonText) && (
        <div className="card-footer flex w-full flex-col items-start gap-3">
          {price && (
            <p className={cn("card-price text-2xl font-bold", t.accent)}>
              {price}
            </p>
          )}
          {buttonText && (
            <div className="card-cta flex items-center justify-start">
              {href ? (
                <Link href={href} className="inline-block">
                  <Button variant={t.button} className={buttonBg} onClick={buttonOnClick}>
                    {buttonText}
                  </Button>
                </Link>
              ) : (
                <Button variant={t.button} className={buttonBg} onClick={buttonOnClick}>
                  {buttonText}
                </Button>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function Card({
  variant = "default",
  theme = "primary",
  section,
  title,
  subtitle,
  caption,
  price,
  list,
  reviews,
  buttonText,
  buttonBg,
  href,
  buttonOnClick,
  image,
  imageAlt,
  icon,
  lang = "en",
  children,
  className,
  ...props
}: CardProps) {
  const hasContent = Boolean(
    title || subtitle || caption || price || list?.length || reviews || buttonText
  );

  if (variant === "colored-container") {
    return (
      <div
        className={cn(
          "flex flex-col lg:flex-row gap-4 sm:gap-6 rounded-[28px] sm:rounded-[36px] md:rounded-[40px] overflow-hidden transition-all duration-300",
          THEME_CLASSES[theme].background,
          className
        )}
        {...props}
      >
        {/*
          Image panel / placeholder.
          On mobile/tablet: stacks vertically with responsive height and rounded arch corners.
          On desktop: side panel with deep curves supporting RTL/LTR.
        */}
        <div
          className={cn(
            "card-colored relative flex items-center justify-center shrink-0 overflow-hidden transition-all duration-300",
            "w-full h-48 sm:h-56 md:h-64 lg:h-auto lg:w-[42%] min-h-[180px] lg:min-h-[380px]",
            "rounded-t-[24px] sm:rounded-t-[32px] md:rounded-t-[36px] rounded-b-[2rem] lg:rounded-b-none lg:rounded-t-none lg:rounded-e-full lg:rounded-s-[20rem]",
            THEME_CLASSES[theme].panel
          )}
        >
          {typeof image === "string" ? (
            <Image
              src={image}
              alt={imageAlt || title || "Card image"}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            image || (icon && <div className="text-white/90 transform scale-125 md:scale-150">{icon}</div>)
          )}
        </div>

        <div
          className={cn(
            "flex flex-1 flex-col p-5 sm:p-6 md:p-8 lg:py-8 lg:px-6 justify-between gap-6",
            section && `card-details-${section}`
          )}
        >
          {/* This variant is content-driven, so it falls back to placeholders. */}
          <CardBody
            title={title ?? "Headline"}
            subtitle={subtitle}
            caption={caption}
            price={price}
            list={list}
            reviews={reviews}
            buttonText={buttonText ?? "Learn More"}
            buttonBg={buttonBg ? THEME_CLASSES[theme].panel : undefined}
            href={href}
            lang={lang}
            buttonOnClick={buttonOnClick}
            theme={theme}
          />
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "group flex flex-col justify-between overflow-hidden rounded-[24px] sm:rounded-[32px] bg-white border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300",
        className
      )}
      {...props}
    >
      {/* Product Image Header if image is passed */}
      {image && (
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-50 shrink-0">
          {typeof image === "string" ? (
            <Image
              src={image}
              alt={imageAlt || title || "Product image"}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            image
          )}
        </div>
      )}

      {/* Structured content block */}
      {hasContent && (
        <div className="flex flex-1 flex-col p-6 sm:p-7 justify-between gap-6">
          <CardBody
            title={title}
            subtitle={subtitle}
            caption={caption}
            price={price}
            list={list}
            reviews={reviews}
            buttonText={buttonText}
            buttonBg={buttonBg}
            href={href}
            lang={lang}
            buttonOnClick={buttonOnClick}
            theme={theme}
          />
        </div>
      )}
      {children}
    </div>
  );
}
