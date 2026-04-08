"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { PROPERTY } from "@/lib/constants";
import { villas } from "@/data/villas";
import ScrollIndicator from "@/components/ui/ScrollIndicator";
import FeatureGlyph from "@/components/ui/FeatureGlyph";

export default function HeroSection() {
  const tHero = useTranslations("hero");
  const tIntro = useTranslations("intro");
  const tNav = useTranslations("nav");
  const locale = useLocale();
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const mediaY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const copyY = useTransform(scrollYProgress, [0, 1], [0, 70]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <section
      ref={ref}
      className="relative min-h-[100dvh] overflow-hidden bg-nocturne text-coconut"
    >
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0"
          style={prefersReducedMotion ? undefined : { y: mediaY, scale: imageScale }}
        >
          <Image
            src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1920&h=1280&fit=crop&q=80"
            alt="Dhyana Villas private pool framed by tropical greenery"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(112deg,rgba(8,18,14,0.88)_0%,rgba(8,18,14,0.48)_48%,rgba(8,18,14,0.82)_100%)]" />
        </motion.div>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(199,162,99,0.26),transparent_22%),radial-gradient(circle_at_78%_18%,rgba(120,168,146,0.14),transparent_24%)]" />
        <div className="absolute inset-0 opacity-35">
          <div className="hairline-grid h-full w-full" />
        </div>
        <div className="absolute -left-24 bottom-16 h-72 w-72 rounded-full bg-gold/12 blur-3xl" />
        <div className="absolute right-0 top-14 h-80 w-80 rounded-full bg-palm/10 blur-3xl" />
      </div>

      <div className="site-frame relative flex min-h-[100dvh] items-center py-28 md:py-32">
        <div className="grid w-full gap-12 lg:grid-cols-[1.04fr_0.96fr] lg:items-end">
          <motion.div
            className="relative z-10 max-w-3xl"
            style={prefersReducedMotion ? undefined : { y: copyY }}
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.88, ease: [0.23, 1, 0.32, 1] }}
          >
            <span className="eyebrow border-coconut/14 bg-coconut/8 text-coconut/78">
              {PROPERTY.name}
            </span>

            <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-coconut/12 bg-coconut/8 px-3 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-coconut/60">
              <FeatureGlyph name="location" className="h-3.5 w-3.5" />
              <span>Hin Kong, Koh Phangan</span>
            </div>

            <h1 className="display-title mt-6 max-w-4xl text-gradient">
              {tHero("tagline")}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-coconut/74 sm:text-xl">
              {tHero("subtitle")}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={() =>
                  document
                    .getElementById("booking")
                    ?.scrollIntoView({ behavior: "smooth", block: "start" })
                }
                className="cta-primary metal-button"
              >
                <span>{tNav("book")}</span>
                <FeatureGlyph name="arrow" className="h-4 w-4" />
              </button>
              <Link href={`/${locale}/gallery`} className="cta-secondary">
                <span>{tNav("gallery")}</span>
                <FeatureGlyph name="arrow" className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-12 grid gap-3 sm:grid-cols-3">
              <div className="surface-dark rounded-[1.6rem] p-4">
                <p className="text-[0.66rem] font-semibold uppercase tracking-[0.24em] text-gold/76">
                  {tIntro("rating")}
                </p>
                <p className="mt-4 font-heading text-4xl text-coconut">{PROPERTY.rating}</p>
              </div>
              <div className="surface-dark rounded-[1.6rem] p-4">
                <p className="text-[0.66rem] font-semibold uppercase tracking-[0.24em] text-gold/76">
                  {tNav("villas")}
                </p>
                <p className="mt-4 font-heading text-4xl text-coconut">
                  {String(villas.length).padStart(2, "0")}
                </p>
              </div>
              <div className="surface-dark rounded-[1.6rem] p-4">
                <p className="text-[0.66rem] font-semibold uppercase tracking-[0.24em] text-gold/76">
                  Reviews
                </p>
                <p className="mt-4 font-heading text-4xl text-coconut">
                  {PROPERTY.reviewCount}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="relative lg:pl-12"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.92, delay: 0.12, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className="relative mx-auto max-w-[34rem]">
              <div className="surface-panel overflow-hidden rounded-[2.5rem] p-3 shadow-[0_36px_120px_rgba(0,0,0,0.32)]">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
                  <Image
                    src={villas[1].image}
                    alt={villas[1].name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 44vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,20,17,0.08)_0%,rgba(12,20,17,0.12)_42%,rgba(12,20,17,0.84)_100%)]" />
                  <div className="absolute inset-x-5 bottom-5 rounded-[1.7rem] border border-coconut/10 bg-nocturne/74 p-5 backdrop-blur-xl">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-[0.66rem] font-semibold uppercase tracking-[0.26em] text-gold/76">
                          Signature stay
                        </p>
                        <h2 className="mt-2 font-heading text-3xl text-coconut">
                          {villas[1].name}
                        </h2>
                      </div>
                      <span className="rounded-full border border-coconut/10 bg-coconut/8 px-3 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-coconut/70">
                        Pool villa
                      </span>
                    </div>
                    <p className="mt-4 max-w-md text-sm leading-relaxed text-coconut/68">
                      {villas[1].description[locale as "en" | "fr" | "th"]}
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute -left-6 top-8 hidden w-48 rounded-[1.6rem] border border-coconut/12 bg-nocturne/74 p-4 shadow-[0_24px_70px_rgba(0,0,0,0.26)] backdrop-blur-xl lg:block">
                <p className="text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-gold/76">
                  Quiet address
                </p>
                <p className="mt-3 font-heading text-2xl text-coconut">4 min</p>
                <p className="mt-1 text-sm leading-relaxed text-coconut/64">
                  Walk from the villas to Hin Kong Beach and sunset cafes.
                </p>
              </div>

              <div className="absolute -right-4 bottom-10 hidden w-56 rounded-[1.7rem] border border-coconut/12 bg-coconut/92 p-3 text-volcanic shadow-[0_24px_70px_rgba(0,0,0,0.2)] lg:block">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[1.2rem]">
                  <Image
                    src={villas[2].image}
                    alt={villas[2].name}
                    fill
                    sizes="224px"
                    className="object-cover"
                  />
                </div>
                <div className="mt-3 flex items-center justify-between gap-3">
                  <div>
                    <p className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-gold-deep">
                      Garden retreat
                    </p>
                    <p className="mt-1 font-heading text-xl">{villas[2].name}</p>
                  </div>
                  <FeatureGlyph name="spark" className="h-4 w-4 text-jungle-light" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <ScrollIndicator />
    </section>
  );
}
