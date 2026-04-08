"use client";

import { motion, type TargetAndTransition } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  blur?: boolean;
  distance?: number;
}

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  direction = "up",
  blur = false,
  distance,
}: AnimatedSectionProps) {
  const d = distance ?? (direction === "left" || direction === "right" ? 32 : 28);

  const directionOffset = {
    up: { y: d },
    down: { y: -d },
    left: { x: d },
    right: { x: -d },
  };

  const initial: TargetAndTransition = {
    opacity: 0,
    ...directionOffset[direction],
    scale: 0.985,
    ...(blur ? { filter: "blur(8px)" } : {}),
  };

  const animate: TargetAndTransition = {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    ...(blur ? { filter: "blur(0px)" } : {}),
  };

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, margin: "-12% 0px" }}
      transition={{
        duration: 0.82,
        delay,
        ease: [0.23, 1, 0.32, 1],
      }}
      {...(blur ? { style: { willChange: "transform, opacity, filter" } } : {})}
    >
      {children}
    </motion.div>
  );
}
