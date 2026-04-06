"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import LightboxModal from "@/components/gallery/LightboxModal";
import { featuredImages, galleryImages, type GalleryCategory } from "@/data/gallery";
import Link from "next/link";
import { useLocale } from "next-intl";

const categories: (GalleryCategory | "all")[] = [
  "all",
  "pool",
  "rooms",
  "garden",
  "kitchen",
  "views",
];

export default function GalleryTeaser() {
  const t = useTranslations("gallery");
  const locale = useLocale();
  const [activeCategory, setActiveCategory] = useState<
    GalleryCategory | "all"
  >("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    activeCategory === "all"
      ? featuredImages
      : galleryImages.filter((img) => img.category === activeCategory);

  const displayImages = filtered.slice(0, 8);

  return (
    <section id="gallery" className="bg-coconut py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <AnimatedSection className="text-center">
          <h2 className="font-heading text-3xl font-bold text-volcanic sm:text-4xl md:text-5xl">
            {t("title")}
          </h2>
          <p className="mt-4 font-accent text-xl text-drift">{t("subtitle")}</p>
          <div className="mx-auto mt-6 h-px w-16 bg-gold" />
        </AnimatedSection>

        {/* Category filter */}
        <AnimatedSection delay={0.15} className="mt-10 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                activeCategory === cat
                  ? "bg-jungle-light text-coconut shadow-md"
                  : "bg-sand text-drift hover:bg-jungle-light/10"
              }`}
            >
              {t(`categories.${cat}`)}
            </button>
          ))}
        </AnimatedSection>

        {/* Image grid */}
        <motion.div
          className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          layout
        >
          <AnimatePresence mode="popLayout">
            {displayImages.map((image, i) => (
              <motion.button
                key={image.id}
                type="button"
                layoutId={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className={`group relative block w-full cursor-pointer overflow-hidden rounded-xl bg-transparent p-0 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-coconut ${
                  i === 0 ? "sm:col-span-2 sm:row-span-2" : ""
                }`}
                onClick={() => setLightboxIndex(i)}
                aria-label={image.alt}
                aria-haspopup="dialog"
              >
                <div
                  className={`relative ${
                    i === 0 ? "h-64 sm:h-full min-h-[300px]" : "h-48 sm:h-56"
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes={
                      i === 0
                        ? "(max-width: 640px) 100vw, 50vw"
                        : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    }
                  />
                  <div className="absolute inset-0 bg-jungle/0 transition-colors duration-300 group-hover:bg-jungle/30" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="rounded-full bg-coconut/90 px-4 py-2 text-sm font-medium text-jungle">
                      View
                    </span>
                  </div>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View all link */}
        <AnimatedSection delay={0.3} className="mt-10 text-center">
          <Link
            href={`/${locale}/gallery`}
            className="inline-flex items-center gap-2 rounded-full border-2 border-gold px-8 py-3 font-body text-base font-semibold text-gold transition-all hover:bg-gold hover:text-coconut"
          >
            {t("viewAll")}
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </AnimatedSection>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <LightboxModal
          images={displayImages}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </section>
  );
}
