"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "gold" | "green" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  className?: string;
  external?: boolean;
  icon?: ReactNode;
}

const variants = {
  gold: "bg-gold text-white hover:bg-gold-deep shadow-lg shadow-gold/20",
  green: "bg-jungle-light text-white hover:bg-jungle shadow-lg shadow-jungle-light/20",
  outline: "border-2 border-gold text-gold hover:bg-gold hover:text-white",
  ghost: "text-drift hover:text-jungle-light hover:bg-sand/50",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export default function Button({
  children,
  variant = "gold",
  size = "md",
  href,
  onClick,
  className = "",
  external = false,
  icon,
}: ButtonProps) {
  const baseClasses = `inline-flex items-center justify-center gap-2 rounded-full font-body font-medium transition-colors duration-300 ${variants[variant]} ${sizes[size]} ${className}`;

  const motionProps = {
    whileHover: { scale: 1.03 },
    whileTap: { scale: 0.97 },
  };

  if (href) {
    return (
      <motion.a
        href={href}
        className={baseClasses}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        {...motionProps}
      >
        {icon}
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button className={baseClasses} onClick={onClick} {...motionProps}>
      {icon}
      {children}
    </motion.button>
  );
}
