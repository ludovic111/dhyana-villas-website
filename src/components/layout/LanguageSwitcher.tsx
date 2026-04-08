"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { locales } from "@/i18n/config";

const localeLabels: Record<string, string> = {
  en: "English",
  fr: "Francais",
  th: "Thai",
};

function GlobeIcon() {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c2.6 2.8 4 5.8 4 9s-1.4 6.2-4 9c-2.6-2.8-4-5.8-4-9s1.4-6.2 4-9Z" />
    </svg>
  );
}

export default function LanguageSwitcher({
  variant = "light",
}: {
  variant?: "light" | "dark";
}) {
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

  const buttonClass =
    variant === "light"
      ? "border-coconut/14 bg-coconut/8 text-coconut hover:bg-coconut/14"
      : "border-jungle/10 bg-coconut/74 text-volcanic hover:bg-coconut";

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.18em] backdrop-blur-md ${buttonClass}`}
        aria-expanded={open}
        aria-label="Change language"
      >
        <GlobeIcon />
        <span>{locale.toUpperCase()}</span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="surface-panel absolute right-0 top-full mt-3 min-w-40 overflow-hidden rounded-[1.35rem] p-1"
          >
            {locales.map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => switchLocale(l)}
                className={`flex w-full items-center justify-between rounded-[1rem] px-3 py-2.5 text-left transition-colors ${
                  l === locale
                    ? "bg-jungle text-coconut"
                    : "text-drift hover:bg-sand/60"
                }`}
              >
                <span className="text-sm font-medium">{localeLabels[l]}</span>
                <span className="text-[0.64rem] font-semibold uppercase tracking-[0.18em]">
                  {l}
                </span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
