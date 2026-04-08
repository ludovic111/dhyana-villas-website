"use client";

import { motion } from "framer-motion";

interface SectionDividerProps {
  variant?: "gold" | "muted";
  className?: string;
}

export default function SectionDivider({
  variant = "gold",
  className = "",
}: SectionDividerProps) {
  const gradient =
    variant === "gold"
      ? "linear-gradient(90deg, transparent, rgba(199, 162, 99, 0.7), transparent)"
      : "linear-gradient(90deg, transparent, rgba(16, 36, 29, 0.14), transparent)";

  return (
    <div className={`flex items-center justify-center py-4 ${className}`}>
      <motion.div
        className="relative flex items-center justify-center"
        style={{ width: "min(14rem, 44vw)" }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-5% 0px" }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
      >
        <div
          className="h-[1.5px] w-full"
          style={{ background: gradient }}
        />
        <div
          className="absolute h-1.5 w-1.5 rotate-45"
          style={{
            background:
              variant === "gold"
                ? "rgba(199, 162, 99, 0.6)"
                : "rgba(16, 36, 29, 0.2)",
          }}
        />
      </motion.div>
    </div>
  );
}
