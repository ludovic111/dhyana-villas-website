"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionIntro from "@/components/ui/SectionIntro";
import FeatureGlyph from "@/components/ui/FeatureGlyph";
import { reviews } from "@/data/reviews";
import type { Locale } from "@/i18n/config";

export default function ReviewsSection() {
  const t = useTranslations("reviews");
  const locale = useLocale() as Locale;
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrent((value) => (value + 1) % reviews.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, []);

  const review = reviews[current];

  return (
    <section id="reviews" className="section-shell overflow-hidden bg-nocturne">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(199,162,99,0.18),transparent_24%),radial-gradient(circle_at_80%_12%,rgba(120,168,146,0.1),transparent_24%)]" />

      <div className="site-frame relative">
        <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
          <div className="space-y-8">
            <SectionIntro
              label={t("title")}
              title={t("title")}
              body={t("subtitle")}
              dark
            />

            <AnimatedSection className="surface-dark rounded-[2rem] p-6">
              <p className="text-[0.66rem] font-semibold uppercase tracking-[0.24em] text-gold/74">
                {t("source")}
              </p>
              <div className="mt-5 flex items-end gap-4">
                <span className="font-heading text-7xl leading-none text-gold">
                  {t("rating")}
                </span>
                <div className="pb-2">
                  <p className="font-heading text-2xl text-coconut">{t("ratingLabel")}</p>
                  <p className="mt-1 text-sm text-coconut/58">78 reviews</p>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <div className="space-y-4">
            <AnimatePresence mode="wait">
              <motion.article
                key={review.id}
                initial={{ opacity: 0, y: 24, scale: 0.985 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -16, scale: 0.985 }}
                transition={{ duration: 0.36, ease: [0.23, 1, 0.32, 1] }}
                className="surface-panel rounded-[2.4rem] p-8"
              >
                <div className="flex items-center gap-3 text-gold">
                  <FeatureGlyph name="spark" className="h-5 w-5" />
                  <span className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-gold-deep">
                    {t("source")}
                  </span>
                </div>

                <p className="mt-8 font-accent text-[2rem] italic leading-[1.35] text-volcanic sm:text-[2.4rem]">
                  &ldquo;{review.text[locale]}&rdquo;
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <div>
                    <p className="font-heading text-2xl text-volcanic">{review.name}</p>
                    <p className="mt-1 text-sm text-drift/72">{review.country}</p>
                  </div>
                  <span className="pill-chip px-4 py-2">
                    {review.rating}/10
                  </span>
                </div>
              </motion.article>
            </AnimatePresence>

            <div className="grid gap-3 sm:grid-cols-2">
              {reviews.map((item, index) => {
                const active = current === index;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setCurrent(index)}
                    className={`rounded-[1.4rem] border p-4 text-left transition-all ${
                      active
                        ? "border-gold/30 bg-gold/10 text-coconut"
                        : "border-coconut/10 bg-coconut/[0.04] text-coconut/74 hover:bg-coconut/[0.08]"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="font-heading text-xl">{item.name}</p>
                        <p className="mt-1 text-xs uppercase tracking-[0.18em] text-coconut/58">
                          {item.country}
                        </p>
                      </div>
                      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gold/80">
                        {item.rating}/10
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
