"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionIntro from "@/components/ui/SectionIntro";
import FeatureGlyph from "@/components/ui/FeatureGlyph";
import LightboxModal from "@/components/gallery/LightboxModal";
import {
  featuredImages,
  galleryImages,
  type GalleryCategory,
} from "@/data/gallery";

const categories: (GalleryCategory | "all")[] = [
  "all",
  "pool",
  "rooms",
  "garden",
  "kitchen",
  "views",
];

const galleryLayout = [
  "md:col-span-7 md:row-span-2",
  "md:col-span-5",
  "md:col-span-5",
  "md:col-span-7",
  "md:col-span-4",
  "md:col-span-8",
];

export default function GalleryTeaser() {
  const t = useTranslations("gallery");
  const locale = useLocale();
  const [activeCategory, setActiveCategory] = useState<GalleryCategory | "all">("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    activeCategory === "all"
      ? featuredImages
      : galleryImages.filter((img) => img.category === activeCategory);

  const displayImages = filtered.slice(0, 6);

  return (
    <section id="gallery" className="section-shell">
      <div className="site-frame">
        <div className="grid gap-10 xl:grid-cols-[0.84fr_1.16fr] xl:items-end">
          <SectionIntro label={t("title")} title={t("title")} body={t("subtitle")} />

          <AnimatedSection className="surface-panel rounded-[2rem] p-4" delay={0.08}>
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
                        layoutId="gallery-tab"
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
                Open any frame
              </span>
            </div>
          </AnimatedSection>
        </div>

        <motion.div
          className="mt-12 grid auto-rows-[15rem] gap-4 md:grid-cols-12 md:auto-rows-[13rem]"
          layout
        >
          <AnimatePresence mode="popLayout">
            {displayImages.map((image, index) => (
              <motion.button
                key={image.id}
                type="button"
                layout
                initial={{ opacity: 0, y: 24, scale: 0.985 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 14, scale: 0.98, filter: "blur(4px)" }}
                transition={{ duration: 0.28, ease: [0.23, 1, 0.32, 1] }}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.99 }}
                onClick={() => setLightboxIndex(index)}
                className={`glow-ring group relative overflow-hidden rounded-[2rem] border border-white/60 bg-coconut shadow-[0_22px_70px_rgba(17,26,23,0.12)] ${
                  galleryLayout[index] ?? "md:col-span-6"
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-all duration-1000 group-hover:scale-[1.03] group-hover:brightness-105"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,20,17,0.04)_0%,rgba(12,20,17,0.16)_55%,rgba(12,20,17,0.72)_100%)]" />
                <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-3">
                  <div className="max-w-[80%]">
                    <span className="inline-flex rounded-full border border-coconut/10 bg-coconut/82 px-3 py-1 text-[0.64rem] font-semibold uppercase tracking-[0.2em] text-jungle-light">
                      {t(`categories.${image.category}`)}
                    </span>
                    <p className="mt-3 text-left text-sm leading-relaxed text-coconut">
                      {image.alt}
                    </p>
                  </div>
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-coconut/12 bg-coconut/12 text-coconut backdrop-blur-md">
                    <FeatureGlyph name="arrow" className="h-4 w-4" />
                  </span>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>

        <AnimatedSection className="mt-10 flex justify-center" delay={0.16}>
          <Link href={`/${locale}/gallery`} className="ghost-link">
            <span>{t("viewAll")}</span>
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <FeatureGlyph name="arrow" className="h-4 w-4" />
            </motion.span>
          </Link>
        </AnimatedSection>
      </div>

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
