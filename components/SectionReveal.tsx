"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

// ─── SHARED ANIMATION HELPER ─────────────────────────────────────────────────
const draw = (delay = 0, duration = 1.6) => ({
  initial: { pathLength: 0, opacity: 0 },
  whileInView: { pathLength: 1, opacity: 1 },
  viewport: { once: true },
  transition: { duration, ease: "easeInOut" as const, delay },
});

// ─── GRAPHIC 1: Botanical Sprig ──────────────────────────────────────────────
const BotanicalSprig = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 120 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <motion.g initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.2 }}>
      <motion.path d="M60 190 C60 140 60 90 60 30" stroke="currentColor" strokeWidth="1" strokeLinecap="round" {...draw(0, 1.8)} />
      <motion.path d="M60 155 C38 150 28 130 38 118 C50 128 58 145 60 155Z" stroke="currentColor" strokeWidth="0.9" fill="currentColor" fillOpacity="0.10" {...draw(0.30)} />
      <motion.path d="M60 155 C82 150 92 130 82 118 C70 128 62 145 60 155Z" stroke="currentColor" strokeWidth="0.9" fill="currentColor" fillOpacity="0.10" {...draw(0.42)} />
      <motion.path d="M60 110 C35 102 22 78 35 64 C50 78 58 98 60 110Z"    stroke="currentColor" strokeWidth="0.9" fill="currentColor" fillOpacity="0.08" {...draw(0.56)} />
      <motion.path d="M60 110 C85 102 98 78 85 64 C70 78 62 98 60 110Z"    stroke="currentColor" strokeWidth="0.9" fill="currentColor" fillOpacity="0.08" {...draw(0.68)} />
      <motion.path d="M60 60 C48 50 44 34 60 28 C76 34 72 50 60 60Z"       stroke="currentColor" strokeWidth="0.9" fill="currentColor" fillOpacity="0.14" {...draw(0.82)} />
    </motion.g>
  </svg>
);

// ─── GRAPHIC 2: Wild Daisy ───────────────────────────────────────────────────
// 7 narrow petals (odd = more natural), two-layer center, stem + one leaf
const WildDaisy = ({ className = "" }: { className?: string }) => {
  const angles = [0, 51.4, 102.8, 154.2, 205.7, 257.1, 308.5];
  const petal = "M75 80 C67 71 65 56 75 44 C85 56 83 71 75 80Z";
  return (
    <svg viewBox="0 0 150 190" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <motion.g initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.2 }}>
        {angles.map((angle, i) => (
          <motion.path
            key={angle}
            d={petal}
            stroke="currentColor" strokeWidth="0.8"
            fill="currentColor" fillOpacity="0.10"
            transform={`rotate(${angle} 75 80)`}
            {...draw(i * 0.11)}
          />
        ))}
        <motion.circle cx="75" cy="80" r="10" stroke="currentColor" strokeWidth="0.75" fill="currentColor" fillOpacity="0.08" {...draw(0.78)} />
        <motion.circle cx="75" cy="80" r="6"  stroke="currentColor" strokeWidth="0.60" fill="currentColor" fillOpacity="0.20" {...draw(0.88)} />
        <motion.path d="M75 90 C74 112 73 138 74 168" stroke="currentColor" strokeWidth="1" strokeLinecap="round" {...draw(0.92)} />
        <motion.path d="M74 130 C62 122 50 118 44 124 C48 134 62 136 74 132Z" stroke="currentColor" strokeWidth="0.75" fill="currentColor" fillOpacity="0.10" {...draw(1.02)} />
      </motion.g>
    </svg>
  );
};

// ─── GRAPHIC 3: Sun ──────────────────────────────────────────────────────────
// Soft double-circle with 4 long cardinal rays + 4 shorter diagonal rays
const Sun = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <motion.g initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.2 }}>
      <motion.circle cx="80" cy="80" r="22" stroke="currentColor" strokeWidth="0.9" fill="currentColor" fillOpacity="0.08" {...draw(0)} />
      <motion.circle cx="80" cy="80" r="14" stroke="currentColor" strokeWidth="0.6" fill="currentColor" fillOpacity="0.12" {...draw(0.14)} />
      {[0, 90, 180, 270].map((angle, i) => (
        <motion.line
          key={`long-${angle}`}
          x1="80" y1="52" x2="80" y2="26"
          stroke="currentColor" strokeWidth="0.85" strokeLinecap="round"
          transform={`rotate(${angle} 80 80)`}
          {...draw(0.24 + i * 0.08, 1.2)}
        />
      ))}
      {[45, 135, 225, 315].map((angle, i) => (
        <motion.line
          key={`short-${angle}`}
          x1="80" y1="54" x2="80" y2="34"
          stroke="currentColor" strokeWidth="0.7" strokeLinecap="round"
          transform={`rotate(${angle} 80 80)`}
          {...draw(0.56 + i * 0.08, 1.0)}
        />
      ))}
    </motion.g>
  </svg>
);

// ─── GRAPHIC 4: Meadow Grass ─────────────────────────────────────────────────
// 5 blades with gentle S-curves and soft tapered tips
const MeadowGrass = ({ className = "" }: { className?: string }) => {
  const blades = [
    { stem: "M55 172 C50 148 38 118 28 88",     tip: "M28 88 C24 76 22 66 26 56",    w: 1.1, d: 0.10 },
    { stem: "M70 174 C68 148 62 116 58 80",     tip: "M58 80 C56 68 56 56 60 44",    w: 1.2, d: 0.00 },
    { stem: "M85 176 C84 148 82 112 88 68",     tip: "M88 68 C88 56 90 42 92 30",    w: 1.3, d: 0.05 },
    { stem: "M100 174 C102 148 108 116 112 78", tip: "M112 78 C116 66 120 54 122 42", w: 1.2, d: 0.00 },
    { stem: "M114 172 C118 148 128 118 136 90", tip: "M136 90 C140 78 144 66 144 56", w: 1.0, d: 0.10 },
  ];
  return (
    <svg viewBox="0 0 160 190" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <motion.g initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.2 }}>
        {blades.map((b, i) => (
          <g key={i}>
            <motion.path d={b.stem} stroke="currentColor" strokeWidth={b.w} strokeLinecap="round" {...draw(b.d)} />
            <motion.path
              d={b.tip}
              stroke="currentColor" strokeWidth="0.7" strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.7 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeInOut", delay: b.d + 0.55 }}
            />
          </g>
        ))}
      </motion.g>
    </svg>
  );
};

// ─── GRAPHIC 5: Waves ────────────────────────────────────────────────────────
// 4 stacked sine-wave arcs, increasing amplitude toward the bottom
const Waves = ({ className = "" }: { className?: string }) => {
  const waves = [
    { d: "M10 38 C30 28 50 48 70 38 C90 28 110 48 130 38 C150 28 165 42 174 38",           w: 1.5, op: 1.00, delay: 0.00 },
    { d: "M6 58 C28 44 52 72 74 58 C96 44 118 72 140 58 C158 46 168 60 176 56",            w: 1.8, op: 1.00, delay: 0.16 },
    { d: "M4 80 C26 62 54 98 78 80 C102 62 128 98 152 80 C164 70 172 82 178 78",           w: 2.0, op: 1.00, delay: 0.30 },
    { d: "M8 102 C30 88 56 116 80 102 C104 88 130 116 154 102 C166 94 174 104 178 100",    w: 1.6, op: 0.65, delay: 0.44 },
  ];
  return (
    <svg viewBox="0 0 180 130" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <motion.g initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.2 }}>
        {waves.map((wave, i) => (
          <motion.path
            key={i}
            d={wave.d}
            stroke="currentColor" strokeWidth={wave.w} strokeLinecap="round" fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: wave.op }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeInOut", delay: wave.delay }}
          />
        ))}
      </motion.g>
    </svg>
  );
};

// ─── TYPES ───────────────────────────────────────────────────────────────────
type Placement = "corners" | "sides-middle" | "sides-middle-rev" | "sides-small" | "top-right" | "bottom-left" | "top-both" | "waves-bottom";
type GraphicType = "botanical" | "daisy" | "sun" | "grass" | "waves";

const GRAPHICS: Record<GraphicType, React.FC<{ className?: string }>> = {
  botanical: BotanicalSprig,
  daisy:     WildDaisy,
  sun:       Sun,
  grass:     MeadowGrass,
  waves:     Waves,
};

// ─── SECTION REVEAL ──────────────────────────────────────────────────────────
const SectionReveal = ({
  children,
  iconClassName = "text-brand-olive/30",
  graphic = "botanical",
  placement = "corners",
}: {
  children: React.ReactNode;
  iconClassName?: string;
  graphic?: GraphicType;
  placement?: Placement;
}) => {
  const { lang } = useLanguage();
  const GraphicComponent = GRAPHICS[graphic] ?? BotanicalSprig;
  const base = `absolute ${iconClassName} pointer-events-none z-0`;
  const isRTL = lang === "ar";

  const getElements = () => {
    const isDaisy = graphic === "daisy";
    const scale = isDaisy ? 1 : 1.2;

    switch (placement) {
      case "corners":
        return [
          {
            cls: `${base} ${isDaisy ? "w-28 h-28 md:w-56 md:h-56" : "w-32 h-32 md:w-64 md:h-64"} opacity-25 md:opacity-100 ${isRTL ? "-right-10 md:-right-14 top-6" : "-left-10 md:-left-14 top-6"}`,
            anim: { initial: { x: isRTL ? 20 : -20, y: -20 }, whileInView: { x: 0, y: 0 } },
          },
          {
            cls: `${base} ${isDaisy ? "w-28 h-28 md:w-56 md:h-56" : "w-32 h-32 md:w-64 md:h-64"} opacity-25 md:opacity-100 hidden sm:block ${isRTL ? "-left-10 md:-left-14 bottom-6" : "-right-10 md:-right-14 bottom-6"}`,
            anim: { initial: { x: isRTL ? -20 : 20, y: 20 }, whileInView: { x: 0, y: 0 } },
            flipX: true,
          },
        ];
      case "sides-middle":
        return [
          {
            cls: `${base} ${isDaisy ? "w-56 h-56 md:w-96 md:h-96" : "w-64 h-64 md:w-[28rem] md:h-[28rem]"} opacity-25 md:opacity-100 top-1/2 -translate-y-1/2 ${isRTL ? "-right-24 md:-right-32" : "-left-24 md:-left-32"}`,
            anim: { initial: { x: isRTL ? 20 : -20 }, whileInView: { x: 0 } },
          },
          {
            cls: `${base} ${isDaisy ? "w-56 h-56 md:w-96 md:h-96" : "w-64 h-64 md:w-[28rem] md:h-[28rem]"} opacity-25 md:opacity-100 hidden sm:block top-1/2 -translate-y-1/2 ${isRTL ? "-left-24 md:-left-32" : "-right-24 md:-right-32"}`,
            anim: { initial: { x: isRTL ? -20 : 20 }, whileInView: { x: 0 } },
            flipX: true,
          },
        ];
      case "sides-middle-rev":
        return [
          {
            cls: `${base} ${isDaisy ? "w-56 h-56 md:w-96 md:h-96" : "w-64 h-64 md:w-[28rem] md:h-[28rem]"} opacity-25 md:opacity-100 hidden sm:block top-1/2 -translate-y-1/2 ${isRTL ? "-right-24 md:-right-32" : "-left-24 md:-left-32"}`,
            anim: { initial: { x: isRTL ? 20 : -20 }, whileInView: { x: 0 } },
          },
          {
            cls: `${base} ${isDaisy ? "w-56 h-56 md:w-96 md:h-96" : "w-64 h-64 md:w-[28rem] md:h-[28rem]"} opacity-25 md:opacity-100 top-1/2 -translate-y-1/2 ${isRTL ? "-left-24 md:-left-32" : "-right-24 md:-left-32"}`,
            anim: { initial: { x: isRTL ? -20 : 20 }, whileInView: { x: 0 } },
            flipX: true,
          },
        ];
      case "sides-small":
        return [
          {
            cls: `${base} ${isDaisy ? "w-24 h-24 md:w-52 md:h-52" : "w-32 h-32 md:w-64 md:h-64"} opacity-25 md:opacity-100 top-1/2 -translate-y-1/2 ${isRTL ? "-right-10 md:-right-14" : "-left-10 md:-left-14"}`,
            anim: { initial: { x: isRTL ? 20 : -20 }, whileInView: { x: 0 } },
          },
          {
            cls: `${base} ${isDaisy ? "w-24 h-24 md:w-52 md:h-52" : "w-32 h-32 md:w-64 md:h-64"} opacity-25 md:opacity-100 hidden sm:block top-1/2 -translate-y-1/2 ${isRTL ? "-left-10 md:-left-14" : "-right-10 md:-right-14"}`,
            anim: { initial: { x: isRTL ? -20 : 20 }, whileInView: { x: 0 } },
            flipX: true,
          },
        ];
      case "top-right":
        return [
          {
            cls: `${base} ${isDaisy ? "w-36 h-36 md:w-80 md:h-80" : "w-44 h-44 md:w-96 md:h-96"} opacity-30 md:opacity-100 ${isRTL ? "-left-12 md:-left-20 top-0" : "-right-12 md:-right-20 top-0"}`,
            anim: { initial: { x: isRTL ? -24 : 24, y: -24 }, whileInView: { x: 0, y: 0 } },
          },
        ];
      case "bottom-left":
        return [
          {
            cls: `${base} ${isDaisy ? "w-36 h-36 md:w-72 md:h-72" : "w-44 h-44 md:w-80 md:h-80"} opacity-30 md:opacity-100 ${isRTL ? "-right-12 md:-right-20 bottom-0" : "-left-12 md:-left-20 bottom-0"}`,
            anim: { initial: { x: isRTL ? 24 : -24, y: 24 }, whileInView: { x: 0, y: 0 } },
          },
        ];
      case "top-both":
        return [
          {
            cls: `${base} ${isDaisy ? "w-28 h-28 md:w-56 md:h-56" : "w-36 h-36 md:w-64 md:h-64"} opacity-25 md:opacity-100 ${isRTL ? "-right-10 md:-right-14 top-0" : "-left-10 md:-left-14 top-0"}`,
            anim: { initial: { y: -20 }, whileInView: { y: 0 } },
          },
          {
            cls: `${base} ${isDaisy ? "w-28 h-28 md:w-56 md:h-56" : "w-36 h-36 md:w-64 md:h-64"} opacity-25 md:opacity-100 hidden sm:block ${isRTL ? "-left-10 md:-left-14 top-0" : "-right-10 md:-right-14 top-0"}`,
            anim: { initial: { y: -20 }, whileInView: { y: 0 } },
            flipX: true,
          },
        ];
      case "waves-bottom":
        return [
          {
            cls: `${base} w-[100vw] h-48 md:h-96 opacity-30 bottom-[-10%] left-1/2 -translate-x-1/2`,
            anim: { initial: { y: 60, opacity: 0 }, whileInView: { y: 0, opacity: 0.3 } },
          },
          {
            cls: `${base} w-[100vw] h-48 md:h-96 opacity-20 bottom-[-15%] left-1/2 -translate-x-1/2`,
            anim: { initial: { y: 80, opacity: 0 }, whileInView: { y: 0, opacity: 0.2 } },
            flipX: true,
          },
        ];
      default:
        return [];
    }
  };

  return (
    <div className="relative w-full">
      <div className="absolute inset-0 pointer-events-none z-0">
        {getElements().map((el, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, ...el.anim.initial }}
            whileInView={{ opacity: 1, ...el.anim.whileInView }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1], delay: idx * 0.18 }}
            className={el.cls}
            style={"flipX" in el && el.flipX ? { scaleX: -1 } : undefined}
          >
            <GraphicComponent className="w-full h-full" />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default SectionReveal;