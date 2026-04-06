"use client";

import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { villas } from "@/data/villas";
import type { Locale } from "@/i18n/config";

const specIcons: Record<string, string> = {
  area: "📐",
  bedrooms: "🛏️",
  bathrooms: "🚿",
  pool: "🏊",
  kitchen: "🍳",
  wifi: "📶",
  ac: "❄️",
  garden: "🌿",
};

export default function VillasSection() {
  const t = useTranslations("villas");
  const locale = useLocale() as Locale;

  return (
    <section id="villas" className="bg-sand/30 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <AnimatedSection className="text-center">
          <h2 className="font-heading text-3xl font-bold text-volcanic sm:text-4xl md:text-5xl">
            {t("title")}
          </h2>
          <p className="mt-4 font-accent text-xl text-drift">{t("subtitle")}</p>
          <div className="mx-auto mt-6 h-px w-16 bg-gold" />
        </AnimatedSection>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {villas.map((villa, i) => (
            <AnimatedSection key={villa.id} delay={0.15 * i}>
              <motion.div
                className="group overflow-hidden rounded-2xl bg-coconut shadow-lg transition-shadow hover:shadow-2xl"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={villa.image}
                    alt={villa.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-volcanic/40 to-transparent" />
                  <h3 className="absolute bottom-4 left-6 font-heading text-2xl font-bold text-coconut">
                    {villa.name}
                  </h3>
                </div>

                <div className="p-6">
                  <p className="text-sm leading-relaxed text-drift">
                    {villa.description[locale]}
                  </p>

                  <div className="mt-6 grid grid-cols-4 gap-2">
                    {(["area", "bedrooms", "bathrooms", "pool"] as const).map(
                      (spec) => (
                        <div
                          key={spec}
                          className="flex flex-col items-center gap-1 rounded-lg bg-silk p-2 text-center"
                        >
                          <span className="text-lg">{specIcons[spec]}</span>
                          <span className="text-[0.65rem] font-medium text-drift">
                            {t(`specs.${spec}`)}
                          </span>
                        </div>
                      )
                    )}
                  </div>

                  <motion.button
                    className="mt-6 w-full rounded-full bg-jungle-light py-3 font-body text-sm font-semibold text-coconut transition-colors hover:bg-jungle"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() =>
                      document
                        .getElementById("booking")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    {t("cta")}
                  </motion.button>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
