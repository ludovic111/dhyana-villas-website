"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { reviews } from "@/data/reviews";
import type { Locale } from "@/i18n/config";

export default function ReviewsSection() {
  const t = useTranslations("reviews");
  const locale = useLocale() as Locale;
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const review = reviews[current];

  return (
    <section id="reviews" className="bg-jungle py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <AnimatedSection className="text-center">
          <h2 className="font-heading text-3xl font-bold text-coconut sm:text-4xl md:text-5xl">
            {t("title")}
          </h2>
          <p className="mt-4 font-accent text-xl text-coconut/60">
            {t("subtitle")}
          </p>
        </AnimatedSection>

        {/* Rating display */}
        <AnimatedSection delay={0.15} className="mt-10 flex justify-center">
          <div className="flex items-center gap-4 rounded-2xl bg-coconut/10 px-8 py-4 backdrop-blur-sm">
            <span className="font-heading text-5xl font-bold text-gold">
              {t("rating")}
            </span>
            <div>
              <p className="font-heading text-lg font-semibold text-coconut">
                {t("ratingLabel")}
              </p>
              <p className="text-sm text-coconut/60">
                78 reviews &bull; {t("source")}
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Review carousel */}
        <div className="mt-12 relative min-h-[200px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={review.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="text-center"
            >
              <svg
                className="mx-auto mb-4 h-8 w-8 text-gold/60"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609L9.978 5.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H0z" />
              </svg>

              <p className="font-body text-lg leading-relaxed text-coconut/90 italic md:text-xl">
                &ldquo;{review.text[locale]}&rdquo;
              </p>

              <div className="mt-6">
                <p className="font-heading font-semibold text-gold">
                  {review.name}
                </p>
                <p className="text-sm text-coconut/50">{review.country}</p>
                <div className="mt-2 flex justify-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.round(review.rating / 2)
                          ? "text-gold"
                          : "text-coconut/20"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="mt-8 flex justify-center gap-2">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all ${
                i === current
                  ? "w-8 bg-gold"
                  : "w-2 bg-coconut/30 hover:bg-coconut/50"
              }`}
              aria-label={`Go to review ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
