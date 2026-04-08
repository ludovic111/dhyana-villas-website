"use client";

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

export default function ExperienceSection() {
  const t = useTranslations("experience");

  return (
    <section id="experience" className="section-shell">
      <div className="site-frame">
        <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <div className="space-y-8">
            <SectionIntro label={t("title")} title={t("title")} body={t("subtitle")} />

            <AnimatedSection className="surface-dark overflow-hidden rounded-[2.2rem] p-4">
              <p className="px-2 text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-gold/76">
                Island map
              </p>
              <div className="relative mt-4 overflow-hidden rounded-[1.7rem] border border-coconut/10">
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

          <AnimatedSection className="surface-panel-strong overflow-hidden rounded-[2.3rem]" delay={0.1}>
            <div className="divide-y divide-jungle/8">
              {attractions.map((attraction, index) => (
                <article
                  key={attraction.id}
                  className="grid gap-4 px-5 py-5 sm:grid-cols-[auto_1fr_auto] sm:items-start"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-[1rem] bg-jungle/[0.06] text-jungle-light">
                    <FeatureGlyph
                      name={
                        attractionGlyphs[
                          attraction.id as keyof typeof attractionGlyphs
                        ]
                      }
                      className="h-5 w-5"
                    />
                  </div>

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
                </article>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
