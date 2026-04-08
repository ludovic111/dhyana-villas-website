"use client";

import { motion, type Variants } from "framer-motion";
import { ReactNode } from "react";

interface StaggerGroupProps {
  children: ReactNode;
  className?: string;
  stagger?: number;
  direction?: "up" | "down" | "left" | "right";
}

const offsets = {
  up: { y: 28 },
  down: { y: -28 },
  left: { x: 32 },
  right: { x: -32 },
};

export default function StaggerGroup({
  children,
  className = "",
  stagger = 0.06,
  direction = "up",
}: StaggerGroupProps) {
  const container: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: stagger,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, ...offsets[direction] },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.72, ease: [0.23, 1, 0.32, 1] },
    },
  };

  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-12% 0px" }}
    >
      {Array.isArray(children)
        ? children.map((child, i) => (
            <motion.div key={i} variants={item}>
              {child}
            </motion.div>
          ))
        : <motion.div variants={item}>{children}</motion.div>}
    </motion.div>
  );
}
