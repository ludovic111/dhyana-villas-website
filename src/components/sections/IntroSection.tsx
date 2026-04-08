"use client";

import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import AnimatedSection from "@/components/ui/AnimatedSection";
import RatingBadge from "@/components/ui/RatingBadge";
import SectionIntro from "@/components/ui/SectionIntro";
import FeatureGlyph from "@/components/ui/FeatureGlyph";
import { PROPERTY } from "@/lib/constants";
import { villas } from "@/data/villas";

export default function IntroSection() {
  const t = useTranslations("intro");
  const locale = useLocale() as "en" | "fr" | "th";

  return (
    <section id="about" className="section-shell">
      <div className="site-frame">
        <div className="grid gap-10 lg:grid-cols-[0.94fr_1.06fr] lg:items-start">
          <SectionIntro label={PROPERTY.name} title={t("title")} body={t("body")} />

          <div className="grid gap-4 lg:grid-cols-[0.58fr_0.42fr]">
            <AnimatedSection className="surface-panel-strong overflow-hidden rounded-[2.2rem] p-3">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.7rem]">
                <Image
                  src={villas[0].image}
                  alt={villas[0].name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 34vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,20,17,0.02)_0%,rgba(12,20,17,0.1)_42%,rgba(12,20,17,0.72)_100%)]" />
                <div className="absolute inset-x-4 bottom-4 rounded-[1.5rem] border border-coconut/14 bg-nocturne/72 p-4 backdrop-blur-xl">
                  <p className="text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-gold/78">
                    {villas[0].name}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-coconut/68">
                    {villas[0].description[locale]}
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <div className="grid gap-4">
              <AnimatedSection className="surface-panel rounded-[1.9rem] p-5" delay={0.08}>
                <p className="text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-gold-deep">
                  Hosting
                </p>
                <p className="mt-4 font-accent text-2xl italic leading-relaxed text-jungle-light">
                  {t("hosts")}
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.14}>
                <RatingBadge
                  rating={String(PROPERTY.rating)}
                  label={t("rating")}
                  source={t("ratingSource")}
                />
              </AnimatedSection>

              <AnimatedSection
                className="surface-panel rounded-[1.9rem] p-5"
                delay={0.2}
              >
                <div className="flex items-center gap-3 text-jungle-light">
                  <FeatureGlyph name="location" className="h-5 w-5" />
                  <span className="text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-gold-deep">
                    Address
                  </span>
                </div>
                <p className="mt-4 text-sm leading-7 text-drift">
                  {PROPERTY.address}
                </p>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
