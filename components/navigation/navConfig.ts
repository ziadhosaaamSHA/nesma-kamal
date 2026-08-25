// Centralized style tokens for the nav system.
// Keeping these in one place means every nav surface (desktop button,
// desktop link, dropdown panel, mobile) pulls from the same brand palette
// instead of drifting into ad-hoc colors per file.

export const navStyles = {
  // Shared sizing across desktop button / link variants
  desktopBase:
    "relative flex items-center gap-1.5 rounded-full transition-all duration-300 ease-out font-bold",
  desktopPadding: "px-4 py-2",
  desktopTextSize: "text-xm uppercase",
  desktopMinWidth: "justify-center",

  dropdownMinWidth: "min-w-[13rem]",
  dropdownItemTextSize: "text-[0.8125rem]",

  mobileTitle: "text-2xl font-display font-bold uppercase",
  mobileSub: "text-base font-bold uppercase",
} as const;