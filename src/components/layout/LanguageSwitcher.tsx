"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { locales } from "@/i18n/config";

const localeLabels: Record<string, string> = {
  en: "EN",
  fr: "FR",
  th: "TH",
};

const localeFlags: Record<string, string> = {
  en: "🇬🇧",
  fr: "🇫🇷",
  th: "🇹🇭",
};

export default function LanguageSwitcher({ variant = "light" }: { variant?: "light" | "dark" }) {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function switchLocale(newLocale: string) {
    const segments = pathname.split("/");
    segments[1] = newLocale;
    router.push(segments.join("/"));
    setOpen(false);
  }

  const textColor = variant === "light" ? "text-coconut" : "text-volcanic";

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${textColor} hover:bg-white/10`}
      >
        <span>{localeFlags[locale]}</span>
        <span>{localeLabels[locale]}</span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 top-full mt-2 overflow-hidden rounded-xl bg-coconut shadow-xl ring-1 ring-sand"
          >
            {locales.map((l) => (
              <button
                key={l}
                onClick={() => switchLocale(l)}
                className={`flex w-full items-center gap-2 px-4 py-2.5 text-sm transition-colors hover:bg-sand ${
                  l === locale ? "bg-sand font-semibold text-jungle" : "text-drift"
                }`}
              >
                <span>{localeFlags[l]}</span>
                <span>{localeLabels[l]}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
