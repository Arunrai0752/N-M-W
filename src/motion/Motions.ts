import type { Variants, Transition } from "framer-motion";

/* ------------------------------------------------
   ⚙️  GLOBAL TRANSITIONS (EASE + SPEED PRESETS)
------------------------------------------------ */
export const transitions: Record<string, Transition> = {
  fast: { duration: 0.18, ease: [0.2, 0.8, 0.2, 1] },
  normal: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  slow: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  springSoft: { type: "spring", stiffness: 220, damping: 26 },
  springSnappy: { type: "spring", stiffness: 360, damping: 28 },
};

/* ------------------------------------------------
   🎞️  PAGE + ELEMENT VARIANTS
------------------------------------------------ */

/** 🧭 Page transitions (enter/exit for route-level motion) */
export const pageVariant: Variants = {
  initial: { opacity: 0, y: 12, scale: 0.995 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: transitions.normal,
  },
  exit: { opacity: 0, y: -10, transition: transitions.fast },
};

/** 💨 Fade-up appearance (for text, headers, sections) */
export const fadeUp: Variants = {
  initial: { opacity: 0, y: 15 },
  animate: {
    opacity: 1,
    y: 0,
    transition: transitions.normal,
  },
};

/** ⚡ Subtle scale-in (for logos, hero headings) */
export const subtleScale: Variants = {
  initial: { opacity: 0, scale: 0.985 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: transitions.normal,
  },
};

/** 🪄 Staggered container for grid/list animations */
export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

/** 📦 Card animation */
export const cardVariant: Variants = {
  initial: { opacity: 0, y: 10, scale: 0.995 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: transitions.normal,
  },
};

/** 🖱️ Button hover/tap motion */
export const buttonVariants: Variants = {
  initial: { scale: 1, boxShadow: "0 0 0 rgba(0,0,0,0)" },
  hover: {
    scale: 1.05,
    y: -3,
    boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
    transition: transitions.fast,
  },
  tap: {
    scale: 0.97,
    y: 0,
    transition: transitions.fast,
  },
};

/** 🔗 Link hover */
export const linkVariants: Variants = {
  initial: { opacity: 1 },
  hover: { y: -2, transition: transitions.fast },
};

/** 🖼️ Image hover animation */
export const imageHover: Variants = {
  initial: { scale: 1, rotate: 0 },
  hover: { scale: 1.04, rotate: -0.6, transition: transitions.fast },
};

/** 🪟 Modal popup */
export const modalVariant: Variants = {
  initial: { opacity: 0, scale: 0.985 },
  animate: { opacity: 1, scale: 1, transition: transitions.normal },
  exit: { opacity: 0, scale: 0.98, transition: transitions.fast },
};

/* ------------------------------------------------
   🧩  EXPORT EVERYTHING TO REUSE ANYWHERE
------------------------------------------------ */
export default {
  transitions,
  pageVariant,
  fadeUp,
  subtleScale,
  staggerContainer,
  cardVariant,
  buttonVariants,
  linkVariants,
  imageHover,
  modalVariant,
};
