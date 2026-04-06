"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslations } from "next-intl";
import { useRef } from "react";
import Image from "next/image";
import ScrollIndicator from "@/components/ui/ScrollIndicator";

export default function HeroSection() {
  const t = useTranslations("hero");
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const tagline = t("tagline");

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden">
      {/* Background image with parallax */}
      <motion.div className="absolute inset-0" style={{ y, scale }}>
        <Image
          src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1920&h=1080&fit=crop&q=80"
          alt="Dhyana Villas tropical pool"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-jungle/40 via-jungle/20 to-jungle/60" />
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
        style={{ opacity }}
      >
        {/* Animated tagline */}
        <motion.h1
          className="font-heading text-4xl font-bold leading-tight text-coconut sm:text-5xl md:text-6xl lg:text-7xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {tagline.split("").map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: 0.5 + i * 0.03,
                ease: "easeOut",
              }}
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          className="mt-6 max-w-lg font-accent text-xl text-coconut/80 sm:text-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          {t("subtitle")}
        </motion.p>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
        >
          <button
            onClick={() =>
              document
                .getElementById("booking")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="rounded-full bg-gold px-8 py-4 font-body text-lg font-semibold text-white transition-all hover:bg-gold-deep hover:shadow-xl hover:shadow-gold/30 animate-pulse-gold"
          >
            {t("subtitle").includes("piscine") ? "Réserver" : t("subtitle").includes("สระ") ? "จองเลย" : "Book Now"}
          </button>
        </motion.div>
      </motion.div>

      <ScrollIndicator />
    </section>
  );
}
