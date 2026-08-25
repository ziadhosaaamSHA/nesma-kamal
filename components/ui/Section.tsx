import type { ReactNode } from "react";
import { cn } from "./utils";

interface SectionProps {
  background?: "primary" | "secondary" | "transparent" | "surface" | string;
  children: ReactNode;
  className?: string;
  id?: string;
}

const BG_MAP: Record<string, string> = {
  primary: "bg-primary",
  secondary: "bg-secondary",
  transparent: "bg-transparent",
  surface: "bg-surface",
  white: "bg-white",
};

export default function Section({
  children,
  className,
  id,
  background = "primary",
}: SectionProps) {
  const bgClass = BG_MAP[background] || (background.startsWith("bg-") ? background : `bg-${background}`);

  return (
    <section
      id={id}
      className={cn(
        "relative w-full overflow-hidden rounded-lg page-x section-y margin-section-x margin-section-y",
        bgClass,
        className
      )}
    >
      {children}
    </section>
  );
}
