"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useTranslations } from "next-intl";
import Logo from "@/components/ui/Logo";
import LanguageSwitcher from "./LanguageSwitcher";

const navSections = ["about", "villas", "gallery", "experience", "reviews"] as const;

export default function Navigation() {
  const t = useTranslations("nav");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 80);
  });

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  function scrollToSection(id: string) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMobileOpen(false);
    }
  }

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-jungle/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <Logo variant="light" />
          </button>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 md:flex">
            {navSections.map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="font-body text-sm font-medium text-coconut/80 transition-colors hover:text-gold"
              >
                {t(section)}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("booking")}
              className="rounded-full bg-gold px-5 py-2 font-body text-sm font-semibold text-white transition-all hover:bg-gold-deep hover:shadow-lg hover:shadow-gold/20"
            >
              {t("book")}
            </button>
            <LanguageSwitcher variant="light" />
          </nav>

          {/* Mobile hamburger */}
          <button
            className="flex flex-col gap-1.5 md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <motion.span
              className="block h-0.5 w-6 bg-coconut"
              animate={mobileOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            />
            <motion.span
              className="block h-0.5 w-6 bg-coconut"
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
            />
            <motion.span
              className="block h-0.5 w-6 bg-coconut"
              animate={mobileOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            />
          </button>
        </div>
      </motion.header>

      {/* Mobile menu overlay */}
      <motion.div
        className="fixed inset-0 z-40 bg-jungle flex flex-col items-center justify-center gap-8 md:hidden"
        initial={{ opacity: 0, x: "100%" }}
        animate={mobileOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: "100%" }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        style={{ pointerEvents: mobileOpen ? "auto" : "none" }}
      >
        {navSections.map((section, i) => (
          <motion.button
            key={section}
            onClick={() => scrollToSection(section)}
            className="font-heading text-2xl text-coconut/90 hover:text-gold transition-colors"
            initial={{ opacity: 0, y: 20 }}
            animate={mobileOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.1 + i * 0.05 }}
          >
            {t(section)}
          </motion.button>
        ))}
        <motion.button
          onClick={() => scrollToSection("booking")}
          className="mt-4 rounded-full bg-gold px-8 py-3 font-body text-lg font-semibold text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={mobileOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.4 }}
        >
          {t("book")}
        </motion.button>
        <LanguageSwitcher variant="light" />
      </motion.div>
    </>
  );
}
