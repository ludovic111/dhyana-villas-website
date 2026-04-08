"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import FeatureGlyph from "@/components/ui/FeatureGlyph";
import LightboxModal from "@/components/gallery/LightboxModal";
import { galleryImages, type GalleryCategory } from "@/data/gallery";

const categories: (GalleryCategory | "all")[] = [
  "all",
  "pool",
  "rooms",
  "garden",
  "kitchen",
  "views",
];

export default function GalleryPage() {
  const t = useTranslations("gallery");
  const locale = useLocale();
  const [activeCategory, setActiveCategory] = useState<GalleryCategory | "all">("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    activeCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <div className="section-shell pt-28">
      <div className="site-frame">
        <Link href={`/${locale}`} className="ghost-link">
          <svg
            className="h-4 w-4 rotate-180"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M5 12h14" />
            <path d="M13 6l6 6-6 6" />
          </svg>
          <span>Back</span>
        </Link>

        <div className="mt-8 grid gap-10 xl:grid-cols-[0.86fr_1.14fr] xl:items-end">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, ease: [0.23, 1, 0.32, 1] }}
          >
            <span className="eyebrow">{t("title")}</span>
            <h1 className="section-title mt-6">{t("title")}</h1>
            <p className="section-copy mt-6">{t("subtitle")}</p>
          </motion.div>

          <motion.div
            className="surface-panel rounded-[2rem] p-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((category) => {
                const active = activeCategory === category;
                return (
                  <button
                    key={category}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setActiveCategory(category)}
                    className={`relative rounded-full px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.18em] ${
                      active
                        ? "text-coconut"
                        : "bg-sand/70 text-drift hover:bg-jungle-light/10 hover:text-jungle"
                    }`}
                  >
                    {active && (
                      <motion.span
                        layoutId="gallery-page-tab"
                        className="absolute inset-0 rounded-full bg-jungle"
                        transition={{ type: "spring", stiffness: 380, damping: 28 }}
                      />
                    )}
                    <span className="relative z-10">{t(`categories.${category}`)}</span>
                  </button>
                );
              })}

              <span className="ml-auto hidden items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-drift/58 sm:inline-flex">
                <FeatureGlyph name="spark" className="h-3.5 w-3.5" />
                {filtered.length} photos
              </span>
            </div>
          </motion.div>
        </div>

        <motion.div className="mt-12 columns-1 gap-5 md:columns-2 xl:columns-3" layout>
          <AnimatePresence mode="popLayout">
            {filtered.map((image, index) => (
              <motion.button
                key={image.id}
                type="button"
                layout
                initial={{ opacity: 0, y: 20, scale: 0.985 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.98, filter: "blur(4px)" }}
                transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
                whileHover={{ y: -3, scale: 1.005 }}
                whileTap={{ scale: 0.99 }}
                className="glow-ring group relative mb-5 block w-full overflow-hidden rounded-[2rem] border border-white/60 bg-coconut text-left shadow-[0_22px_70px_rgba(17,26,23,0.12)]"
                onClick={() => setLightboxIndex(index)}
              >
                <div className="relative min-h-[18rem] overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-all duration-1000 group-hover:scale-[1.03] group-hover:brightness-105"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,20,17,0.04)_0%,rgba(12,20,17,0.18)_60%,rgba(12,20,17,0.74)_100%)]" />
                  <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-3">
                    <div className="max-w-[80%]">
                      <span className="inline-flex rounded-full border border-coconut/10 bg-coconut/84 px-3 py-1 text-[0.64rem] font-semibold uppercase tracking-[0.2em] text-jungle-light">
                        {t(`categories.${image.category}`)}
                      </span>
                      <p className="mt-3 text-sm leading-relaxed text-coconut">
                        {image.alt}
                      </p>
                    </div>
                    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-coconut/12 bg-coconut/12 text-coconut backdrop-blur-md">
                      <FeatureGlyph name="arrow" className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {lightboxIndex !== null && (
        <LightboxModal
          images={filtered}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </div>
  );
}
