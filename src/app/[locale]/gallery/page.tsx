"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useLocale } from "next-intl";
import { galleryImages, type GalleryCategory } from "@/data/gallery";
import LightboxModal from "@/components/gallery/LightboxModal";

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
    <div className="min-h-screen bg-silk pt-24">
      <div className="mx-auto max-w-7xl px-6 py-12">
        {/* Back link */}
        <Link
          href={`/${locale}`}
          className="inline-flex items-center gap-2 text-sm font-medium text-drift hover:text-jungle-light transition-colors"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          Back
        </Link>

        <h1 className="mt-8 font-heading text-4xl font-bold text-volcanic md:text-5xl">
          {t("title")}
        </h1>
        <p className="mt-3 font-accent text-xl text-drift">{t("subtitle")}</p>
        <div className="mt-4 h-px w-16 bg-gold" />

        {/* Filter */}
        <div className="mt-8 flex flex-wrap gap-2">
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
        </div>

        {/* Grid */}
        <motion.div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3" layout>
          <AnimatePresence mode="popLayout">
            {filtered.map((image, i) => (
              <motion.div
                key={image.id}
                layoutId={`gallery-${image.id}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.03 }}
                className="group relative mb-4 cursor-pointer overflow-hidden rounded-xl break-inside-avoid"
                onClick={() => setLightboxIndex(i)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  className="w-full transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-jungle/0 transition-colors duration-300 group-hover:bg-jungle/20" />
              </motion.div>
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
