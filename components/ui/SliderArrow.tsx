import { cn } from "./utils";

interface SliderArrowsProps {
  variant?: "filled" | "outline";
  onPrevious?: () => void;
  onNext?: () => void;
  nextClassName?: string;
  previousClassName?: string;
  previousDisabled?: boolean;
  nextDisabled?: boolean;
  className?: string;
  lang?: "en" | "ar";
}

export default function SliderArrows({
  variant = "filled",
  onPrevious,
  onNext,
  nextClassName,
  previousClassName,
  previousDisabled = false,
  nextDisabled = false,
  lang = "en",
  className,
  ...props
}: SliderArrowsProps) {
  return (
    <div
      className={cn(`
        inline-flex
        items-center
        justify-center
        gap-5
        rounded-full
        p-3

        ${
          variant === "filled"
            ? "bg-moss-300"
            : "border border-moss-800 bg-white"
        }
      `, className)}
    >
      <button
        type="button"
        onClick={onPrevious}
        disabled={previousDisabled}
        aria-label="Previous slide"
        className={cn(
          "flex h-content w-content items-center justify-center rounded-full bg-lime-soft text-black transition-colors duration-[400ms] hover:bg-cream active:bg-moss-100 disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-moss-400",
          previousClassName
        )}
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M22 14H6M6 14L13 7M6 14L13 21"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <button
        type="button"
        onClick={onNext}
        disabled={nextDisabled}
        aria-label="Next slide"
        className={cn(
          "flex h-content w-content items-center justify-center rounded-full bg-lime-soft text-black transition-colors duration-[400ms] hover:bg-cream active:bg-moss-100 disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-moss-400",
          nextClassName
        )}
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M6 14H22M22 14L15 7M22 14L15 21"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}