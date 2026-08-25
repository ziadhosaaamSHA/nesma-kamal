interface SlideDotsProps {
  count: number;
  activeIndex: number;
  onChange?: (index: number) => void;
}

export default function SlideDots({
  count,
  activeIndex,
  onChange,
}: SlideDotsProps) {
  return (
    <div
      className="
        inline-flex
        h-max
        w-max
        items-center
        justify-center
        gap-2
        rounded-full
        bg-moss-300
        px-3
        py-2
      "
    >
      {Array.from({ length: count }).map((_, index) => (
        <button
          key={index}
          type="button"
          onClick={() => onChange?.(index)}
          aria-label={`Go to slide ${index + 1}`}
          aria-current={activeIndex === index ? "true" : undefined}
          className={`
            h-3
            w-3
            rounded-full
            transition-all
            duration-[400ms]
            ease-in-out

            focus-visible:outline-2
            focus-visible:outline-offset-2
            focus-visible:outline-moss-700

            ${
              activeIndex === index
                ? "bg-moss-800"
                : "bg-lime-soft hover:bg-cream"
            }
          `}
        />
      ))}
    </div>
  );
}