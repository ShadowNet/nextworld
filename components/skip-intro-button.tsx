"use client";

import { motion } from "framer-motion";

export function SkipIntroButton({ onSkip }: { onSkip: () => void }) {
  return (
    <motion.button
      type="button"
      onClick={onSkip}
      className="min-h-11 rounded-md border border-white/40 bg-[#11161b]/35 px-4 py-2.5 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-white shadow-[0_8px_28px_rgba(0,0,0,.18)] backdrop-blur-md transition hover:border-[#e6c17d]/70 hover:bg-[#b4863d]/30 hover:text-[#f2d18f] active:bg-[#b4863d]/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ebc77f]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25, delay: 0.35 }}
    >
      Skip intro
    </motion.button>
  );
}
