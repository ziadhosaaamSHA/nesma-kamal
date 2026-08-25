interface BurgerMenuProps {
  onClick?: () => void;
  open?: boolean;
}

export default function BurgerMenu({
  onClick,
  open = false,
}: BurgerMenuProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={open ? "Close menu" : "Open menu"}
      aria-expanded={open}
      className="
        inline-flex
        h-10
        w-10
        items-center
        justify-center
        rounded-md
        bg-cream
        transition-colors
        hover:bg-moss-50
        active:bg-moss-100
        focus-visible:outline-2
        focus-visible:outline-offset-2
        focus-visible:outline-moss-400
      "
    >
      <span className="flex w-5 flex-col gap-1">
        <span className="h-0.5 w-full rounded-full bg-moss-700" />
        <span className="h-0.5 w-full rounded-full bg-moss-700" />
        <span className="h-0.5 w-full rounded-full bg-moss-700" />
      </span>
    </button>
  );
}