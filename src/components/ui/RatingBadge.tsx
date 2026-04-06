"use client";

import { motion } from "framer-motion";

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
      className={`inline-flex items-center gap-3 rounded-2xl bg-coconut px-5 py-3 shadow-md ${className}`}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-jungle-light text-white font-heading text-lg font-bold">
        {rating}
      </div>
      <div>
        <p className="font-heading text-sm font-semibold text-volcanic">
          {label}
        </p>
        <p className="text-xs text-drift">{source}</p>
      </div>
    </motion.div>
  );
}
