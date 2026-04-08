"use client";

import { motion, type Variants } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionIntro from "@/components/ui/SectionIntro";
import FeatureGlyph from "@/components/ui/FeatureGlyph";
import { attractions } from "@/data/attractions";
import { useTranslations } from "next-intl";

const attractionGlyphs = {
  "hin-kong-beach": "beach",
  "phaeng-waterfall": "waterfall",
  yoga: "yoga",
  diving: "diving",
  temples: "temple",
  markets: "market",
} as const;

const listContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const listItem: Variants = {
  hidden: { opacity: 0, x: 20 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] },
  },
};

const iconVariant: Variants = {
  hidden: { opacity: 0, rotate: -8 },
  show: {
    opacity: 1,
    rotate: 0,
    transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] },
  },
};

export default function ExperienceSection() {
  const t = useTranslations("experience");

  return (
    <section id="experience" className="section-shell section-fade-to-dark">
      <div className="site-frame relative z-10">
        <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <div className="space-y-8">
            <SectionIntro label={t("title")} title={t("title")} body={t("subtitle")} />

            <AnimatedSection className="surface-dark overflow-hidden rounded-[2.2rem] p-4" direction="left" distance={30}>
              <p className="px-2 text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-gold/76">
                Island map
              </p>
              <div className="relative mt-4 overflow-hidden rounded-[1.7rem] border-2 border-gold/20">
                <iframe
                  src="https://www.openstreetmap.org/export/embed.html?bbox=99.97%2C9.72%2C100.05%2C9.76&layer=mapnik&marker=9.7418%2C100.0000"
                  width="100%"
                  height="520"
                  className="block border-0 saturate-[0.88]"
                  loading="lazy"
                  title="Dhyana Villas location"
                />
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(12,20,17,0.04),rgba(12,20,17,0.22))]" />
              </div>
            </AnimatedSection>
          </div>

          <motion.div
            className="surface-panel-strong overflow-hidden rounded-[2.3rem]"
            variants={listContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-10% 0px" }}
          >
            <div className="divide-y divide-jungle/8">
              {attractions.map((attraction, index) => (
                <motion.article
                  key={attraction.id}
                  variants={listItem}
                  className="group grid gap-4 px-5 py-5 transition-colors duration-300 hover:bg-jungle/[0.03] sm:grid-cols-[auto_1fr_auto] sm:items-start"
                >
                  <motion.div
                    variants={iconVariant}
                    className="flex h-12 w-12 items-center justify-center rounded-[1rem] bg-jungle/[0.06] text-jungle-light transition-all duration-300 group-hover:scale-110 group-hover:bg-jungle/[0.1]"
                  >
                    <FeatureGlyph
                      name={
                        attractionGlyphs[
                          attraction.id as keyof typeof attractionGlyphs
                        ]
                      }
                      className="h-5 w-5"
                    />
                  </motion.div>

                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <p className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-gold-deep">
                        {String(index + 1).padStart(2, "0")}
                      </p>
                      <h3 className="font-heading text-2xl text-volcanic">
                        {t(attraction.nameKey)}
                      </h3>
                    </div>
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-drift">
                      {t(attraction.descKey)}
                    </p>
                  </div>

                  <div className="pill-chip h-fit justify-start px-4 py-2 text-[0.72rem]">
                    {attraction.distance}
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
