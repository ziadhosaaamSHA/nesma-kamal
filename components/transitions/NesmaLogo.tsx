import React from "react";

/**
 * Nesma Kamal wordmark.
 *
 * Inlined rather than loaded via <img> so it inherits currentColor: set the
 * color with any text-* utility on the parent or via className.
 *
 * Traced artwork — the source file carried ~110 near-identical grays baked in
 * as per-path fills. Those are trace artifacts, not design, so they are dropped
 * in favor of a single inherited fill.
 */
const NesmaLogo = ({ className }: { className?: string }) => (
<div
  className={className}
  style={{
    maskImage: "url('/images/logo.svg')",
    WebkitMaskImage: "url('/images/logo.svg')",
    maskRepeat: "no-repeat",
    WebkitMaskRepeat: "no-repeat",
    maskSize: "contain",
    WebkitMaskSize: "contain",
    maskPosition: "center",
    WebkitMaskPosition: "center",
    backgroundColor: "white",
  }}
/>);

export default NesmaLogo;
