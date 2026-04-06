"use client";

import { useTranslations } from "next-intl";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { attractions } from "@/data/attractions";
import { motion } from "framer-motion";

export default function ExperienceSection() {
  const t = useTranslations("experience");

  return (
    <section id="experience" className="bg-silk py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <AnimatedSection className="text-center">
          <h2 className="font-heading text-3xl font-bold text-volcanic sm:text-4xl md:text-5xl">
            {t("title")}
          </h2>
          <p className="mt-4 font-accent text-xl text-drift">{t("subtitle")}</p>
          <div className="mx-auto mt-6 h-px w-16 bg-gold" />
        </AnimatedSection>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {attractions.map((attraction, i) => (
            <AnimatedSection key={attraction.id} delay={0.1 * i}>
              <motion.div
                className="group rounded-2xl bg-coconut p-6 shadow-md transition-shadow hover:shadow-xl"
                whileHover={{ y: -4 }}
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{attraction.icon}</span>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-volcanic">
                      {t(attraction.nameKey)}
                    </h3>
                    <p className="mt-1 text-sm text-drift">
                      {t(attraction.descKey)}
                    </p>
                    <p className="mt-2 text-xs font-medium text-jungle-light">
                      {attraction.distance}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Map embed */}
        <AnimatedSection delay={0.4} className="mt-12">
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=99.97%2C9.72%2C100.05%2C9.76&layer=mapnik&marker=9.7418%2C100.0000"
              width="100%"
              height="400"
              className="border-0"
              loading="lazy"
              title="Dhyana Villas Location"
            />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
