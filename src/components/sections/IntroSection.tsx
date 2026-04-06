"use client";

import { useTranslations } from "next-intl";
import AnimatedSection from "@/components/ui/AnimatedSection";
import RatingBadge from "@/components/ui/RatingBadge";

export default function IntroSection() {
  const t = useTranslations("intro");

  return (
    <section id="about" className="bg-silk py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <AnimatedSection>
          <h2 className="font-heading text-3xl font-bold text-volcanic sm:text-4xl md:text-5xl">
            {t("title")}
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="mx-auto mt-6 h-px w-16 bg-gold" />
        </AnimatedSection>

        <AnimatedSection delay={0.25}>
          <p className="mt-8 font-body text-lg leading-relaxed text-drift md:text-xl">
            {t("body")}
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.35}>
          <p className="mt-6 font-accent text-lg italic text-jungle-light">
            {t("hosts")}
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.45}>
          <div className="mt-10 flex justify-center">
            <RatingBadge
              rating={t("rating") === "Superb" || t("rating") === "Superbe" || t("rating") === "ยอดเยี่ยม" ? "9.4" : "9.4"}
              label={t("rating")}
              source={t("ratingSource")}
            />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
