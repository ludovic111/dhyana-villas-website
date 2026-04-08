"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionIntro from "@/components/ui/SectionIntro";
import FeatureGlyph from "@/components/ui/FeatureGlyph";
import { villas } from "@/data/villas";

const villaSpecs = [
  ["area", "bedrooms", "pool"],
  ["bathrooms", "kitchen", "wifi"],
  ["garden", "ac", "pool"],
] as const;

const glyphs = {
  area: "area",
  bedrooms: "bedrooms",
  bathrooms: "bathrooms",
  pool: "pool",
  kitchen: "kitchen",
  wifi: "wifi",
  ac: "ac",
  garden: "garden",
} as const;

export default function VillasSection() {
  const t = useTranslations("villas");
  const locale = useLocale() as "en" | "fr" | "th";

  return (
    <section id="villas" className="section-shell">
      <div className="site-frame">
        <SectionIntro label={t("title")} title={t("title")} body={t("subtitle")} />

        <div className="mt-12 grid gap-16">
          {villas.map((villa, index) => {
            const reverse = index % 2 === 1;

            return (
              <article
                key={villa.id}
                className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center"
              >
                <AnimatedSection
                  className={reverse ? "lg:order-2" : ""}
                  direction={reverse ? "right" : "left"}
                  distance={50}
                  blur
                >
                  <div className="surface-panel-strong overflow-hidden rounded-[2.3rem] p-3">
                    <div className="group relative aspect-[16/11] overflow-hidden rounded-[1.8rem]">
                      <motion.div
                        className="absolute inset-0"
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                      >
                        <Image
                          src={villa.image}
                          alt={villa.name}
                          fill
                          sizes="(max-width: 1024px) 100vw, 48vw"
                          className="object-cover"
                        />
                      </motion.div>
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,20,17,0.03)_0%,rgba(12,20,17,0.1)_48%,rgba(12,20,17,0.62)_100%)]" />
                      <motion.div
                        className="absolute left-4 top-4 rounded-full border border-coconut/12 bg-nocturne/70 px-3 py-2 text-[0.66rem] font-semibold uppercase tracking-[0.24em] text-gold/78 backdrop-blur-xl"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </motion.div>
                    </div>
                  </div>
                </AnimatedSection>

                <AnimatedSection
                  className={`flex flex-col justify-center ${reverse ? "lg:order-1" : ""}`}
                  delay={0.1}
                >
                  <p className="text-[0.66rem] font-semibold uppercase tracking-[0.24em] text-gold-deep">
                    Residence {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-4 font-heading text-5xl leading-none text-volcanic">
                    {villa.name}
                  </h3>
                  <p className="mt-5 max-w-2xl text-lg leading-relaxed text-drift">
                    {villa.description[locale]}
                  </p>

                  <div className="mt-8 grid gap-3 sm:grid-cols-3">
                    {villaSpecs[index].map((spec) => (
                      <div
                        key={spec}
                        className="group/pill pill-chip justify-start rounded-[1.25rem] px-4 py-3 transition-colors duration-300"
                      >
                        <FeatureGlyph
                          name={glyphs[spec]}
                          className="h-4 w-4 text-jungle-light transition-colors duration-300 group-hover/pill:text-gold"
                        />
                        <span>{t(`specs.${spec}`)}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    type="button"
                    className="ghost-link mt-8"
                    onClick={() =>
                      document
                        .getElementById("booking")
                        ?.scrollIntoView({ behavior: "smooth", block: "start" })
                    }
                  >
                    <span>{t("cta")}</span>
                    <FeatureGlyph name="arrow" className="ghost-arrow h-4 w-4" />
                  </button>
                </AnimatedSection>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
