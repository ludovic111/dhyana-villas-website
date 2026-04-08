"use client";

import { motion } from "framer-motion";

interface SectionIntroProps {
  label: string;
  title: string;
  body: string;
  dark?: boolean;
  align?: "left" | "center";
  className?: string;
}

export default function SectionIntro({
  label,
  title,
  body,
  dark = false,
  align = "left",
  className = "",
}: SectionIntroProps) {
  const alignment = align === "center" ? "items-center text-center" : "items-start";

  return (
    <motion.div
      className={`flex max-w-3xl flex-col gap-6 ${alignment} ${className}`}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-15% 0px" }}
      transition={{ duration: 0.82, ease: [0.23, 1, 0.32, 1] }}
    >
      <span
        className={`eyebrow ${
          dark
            ? "border-coconut/14 bg-coconut/8 text-coconut/78"
            : ""
        }`}
      >
        {label}
      </span>
      <h2 className={`section-title ${dark ? "text-coconut" : ""}`}>{title}</h2>
      <p className={`section-copy ${dark ? "text-coconut/72" : ""}`}>{body}</p>
      <div className="section-rule" />
    </motion.div>
  );
}
