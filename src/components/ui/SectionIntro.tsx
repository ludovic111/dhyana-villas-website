"use client";

import { motion, type Variants } from "framer-motion";

interface SectionIntroProps {
  label: string;
  title: string;
  body: string;
  dark?: boolean;
  align?: "left" | "center";
  className?: string;
}

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.72, ease: [0.23, 1, 0.32, 1] },
  },
};

const ruleVariant: Variants = {
  hidden: { scaleX: 0 },
  show: {
    scaleX: 1,
    transition: { duration: 0.8, delay: 0.12, ease: [0.23, 1, 0.32, 1] },
  },
};

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
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-15% 0px" }}
    >
      <motion.span
        variants={item}
        className={`eyebrow ${
          dark ? "border-coconut/14 bg-coconut/8 text-coconut/78" : ""
        }`}
      >
        {label}
      </motion.span>
      <motion.h2
        variants={item}
        className={`section-title ${dark ? "text-coconut" : ""}`}
      >
        {title}
      </motion.h2>
      <motion.p
        variants={item}
        className={`section-copy ${dark ? "text-coconut/72" : ""}`}
      >
        {body}
      </motion.p>
      <motion.div
        variants={ruleVariant}
        className="section-rule origin-center"
      />
    </motion.div>
  );
}
