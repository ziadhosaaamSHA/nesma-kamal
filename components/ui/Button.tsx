import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "./utils";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "navy"
  | "tertiary"
  | "outline";

type ButtonSize = "sm" | "md" | "lg";

/**
 * Height is padding-driven: `min-h-*` sets a floor for visual consistency while
 * `py-*` determines the actual height. Note this must NOT be a fixed `h-*` —
 * with border-box sizing, padding is subtracted from a fixed height instead of
 * added to it, so `h-8 py-2` collapses the content area rather than making the
 * button taller. Using min-height also lets a button grow if its label wraps.
 */
const SIZE_CLASSES: Record<ButtonSize, string> = {
  sm: "min-h-8 px-8 py-4 text-sm",
  md: "min-h-10 px-8 py-4 text-sm",
  lg: "min-h-12 px-8 py-4 text-base",
};

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary:
    "btn-primary bg-moss-400 text-white hover:bg-moss-500 active:bg-moss-600 focus-visible:outline-moss-400",
  secondary:
    "btn-secondary bg-burgundy-600 text-white hover:bg-black active:bg-burgundy-700 focus-visible:outline-burgundy-600",
  navy:
    "btn-navy bg-navy-600 text-white hover:bg-navy-500 active:bg-navy-700 focus-visible:outline-navy-600",
  tertiary:
    "btn-tertiary bg-transparent text-moss-400 hover:bg-moss-50 active:bg-moss-100 focus-visible:outline-moss-400",
  outline:
    "btn-outline bg-surface border border-moss-400 text-moss-400 hover:bg-moss-50 active:bg-moss-100 focus-visible:outline-moss-400",
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  children: ReactNode;
}

export default function Button({
  variant = "primary",
  size = "md",
  fullWidth = false,
  // A bare <button> inside a <form> defaults to type="submit"; default to
  // "button" so a Button only submits when it explicitly asks to.
  type = "button",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        /* Base */
        "inline-flex items-center justify-center gap-2",
        "rounded-full",
        "font-medium",
        "transition-colors",
        "focus-visible:outline-2",
        "focus-visible:outline-offset-2",

        SIZE_CLASSES[size],
        VARIANT_CLASSES[variant],

        /* Disabled — pointer-events-none also suppresses the hover/active
           colors, which would otherwise still fire on a disabled button. */
        "disabled:pointer-events-none",
        "disabled:opacity-50",

        /* Full width */
        fullWidth && "w-full",

        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
