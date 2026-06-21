"use client";

import { motion } from "framer-motion";

export function SkipIntroButton({ onSkip }: { onSkip: () => void }) {
  return (
    <motion.button
      type="button"
      onClick={onSkip}
      className="rounded-md border border-white/35 bg-[#11161b]/25 px-4 py-3 text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-white shadow-[0_8px_28px_rgba(0,0,0,.12)] backdrop-blur-md transition hover:border-[#e6c17d]/70 hover:bg-[#b4863d]/25 hover:text-[#f2d18f] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ebc77f]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25, delay: 0.35 }}
    >
      Skip intro
    </motion.button>
  );
}
