"use client";

import { motion } from "framer-motion";

export default function ScrollIndicator() {
  return (
    <motion.div
      className="absolute bottom-7 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-3 lg:flex"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.3, duration: 0.7 }}
    >
      <span className="text-[0.62rem] font-semibold uppercase tracking-[0.32em] text-coconut/50">
        Scroll
      </span>
      <motion.div
        className="flex h-14 w-8 items-start justify-center rounded-full border border-coconut/18 bg-coconut/8 p-1.5 backdrop-blur-md"
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.div
          className="h-2 w-2 rounded-full bg-gold shadow-[0_0_20px_rgba(199,162,99,0.45)]"
          animate={{ y: [0, 26, 0], opacity: [1, 0.18, 1], scale: [1, 0.82, 1] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </motion.div>
  );
}
