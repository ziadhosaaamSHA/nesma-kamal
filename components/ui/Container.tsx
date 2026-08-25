import type { ReactNode } from "react";
import { cn } from "./utils";

type ContainerSize = "site" | "content" | "narrow" | "header";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: ContainerSize;
}

const sizeClasses: Record<ContainerSize, string> = {
  site: "max-w-[1440px] mx-2 lg:mx-16",
  content: "w-full max-w-[1200px] mx-auto px--4 sm:px-6 lg:px-8",
  narrow: "w-full max-w-[960px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20",
  header: "w-full mx-auto px-3 lg:px-18 py-3",
};

export default function Container({ children, className, size = "site" }: ContainerProps) {
  return <div className={cn(sizeClasses[size], className)}>{children}</div>;
}
