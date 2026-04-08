"use client";

import { motion } from "framer-motion";
import FeatureGlyph from "@/components/ui/FeatureGlyph";

interface RatingBadgeProps {
  rating: string;
  label: string;
  source: string;
  className?: string;
}

export default function RatingBadge({
  rating,
  label,
  source,
  className = "",
}: RatingBadgeProps) {
  return (
    <motion.div
      className={`surface-panel inline-flex items-center gap-4 rounded-[1.8rem] px-5 py-4 ${className}`}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.72, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-[1.2rem] bg-jungle text-coconut shadow-[inset_0_1px_0_rgba(255,255,255,0.14)]">
        <span className="font-heading text-xl font-semibold">{rating}</span>
      </div>
      <div className="space-y-1 text-left">
        <p className="font-body text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-gold-deep">
          {label}
        </p>
        <p className="font-heading text-lg font-semibold text-volcanic">{source}</p>
      </div>
      <div className="hidden h-10 w-px bg-jungle/10 sm:block" />
      <div className="hidden items-center gap-2 rounded-full border border-jungle/8 bg-jungle/[0.03] px-3 py-2 text-jungle-light sm:inline-flex">
        <FeatureGlyph name="score" className="h-4 w-4" />
        <span className="text-[0.68rem] font-semibold uppercase tracking-[0.24em]">
          Guest score
        </span>
      </div>
    </motion.div>
  );
}
