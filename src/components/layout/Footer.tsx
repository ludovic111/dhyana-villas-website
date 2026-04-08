"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import Logo from "@/components/ui/Logo";
import FeatureGlyph from "@/components/ui/FeatureGlyph";
import LanguageSwitcher from "./LanguageSwitcher";
import { EXTERNAL_LINKS } from "@/lib/constants";

const externalDestinations = [
  { label: "Booking.com", href: EXTERNAL_LINKS.bookingCom },
  { label: "Agoda", href: EXTERNAL_LINKS.agoda },
  { label: "WhatsApp", href: EXTERNAL_LINKS.whatsapp },
  { label: "Facebook", href: EXTERNAL_LINKS.facebook },
] as const;

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] },
  },
};

export default function Footer() {
  const t = useTranslations("footer");
  const locale = useLocale();

  return (
    <motion.footer
      className="section-shell pb-8 pt-0"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-5% 0px" }}
      transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
    >
      <div className="site-frame">
        <div className="surface-dark overflow-hidden rounded-[2.4rem] px-6 py-8 text-coconut shadow-[0_34px_100px_rgba(0,0,0,0.28)] sm:px-8 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div className="space-y-6">
              <Logo variant="light" />
              <p className="max-w-xl font-accent text-3xl italic leading-relaxed text-gold/92 sm:text-4xl">
                {t("tagline")}
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-[1.5rem] border border-coconut/10 bg-coconut/[0.05] p-4">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-gold/78">
                    Address
                  </p>
                  <p className="mt-3 text-sm leading-7 text-coconut/70">{t("address")}</p>
                </div>
                <div className="rounded-[1.5rem] border border-coconut/10 bg-coconut/[0.05] p-4">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-gold/78">
                    Explore
                  </p>
                  <div className="mt-3 flex flex-col gap-3 text-sm text-coconut/76">
                    <Link href={`/${locale}`} className="inline-flex items-center gap-2 hover:text-coconut">
                      <FeatureGlyph name="spark" className="h-4 w-4" />
                      <span>Home</span>
                    </Link>
                    <Link
                      href={`/${locale}/gallery`}
                      className="inline-flex items-center gap-2 hover:text-coconut"
                    >
                      <FeatureGlyph name="arrow" className="h-4 w-4" />
                      <span>Gallery</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              className="grid gap-3 sm:grid-cols-2"
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {externalDestinations.map((destination) => (
                <motion.a
                  key={destination.label}
                  variants={fadeUp}
                  href={destination.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-[1.7rem] border border-coconut/10 bg-coconut/[0.05] p-4 transition-colors duration-300 hover:bg-coconut/[0.08]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-gold/72">
                        Direct
                      </p>
                      <p className="mt-3 font-heading text-2xl text-coconut">
                        {destination.label}
                      </p>
                    </div>
                    <span className="mt-1 rounded-full border border-coconut/10 bg-coconut/8 p-2 text-coconut/68 transition-transform duration-300 group-hover:-rotate-45 group-hover:text-coconut">
                      <FeatureGlyph name="arrow" className="h-4 w-4" />
                    </span>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </div>

          <div className="mt-8 flex flex-col gap-4 border-t border-coconut/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3 text-[0.68rem] uppercase tracking-[0.18em] text-coconut/38">
              <span>&copy; {new Date().getFullYear()} Dhyana Villas</span>
              <span className="hidden sm:inline">&middot;</span>
              <span>{t("rights")}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-coconut/10 bg-coconut/[0.05] px-3 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-coconut/58">
                <FeatureGlyph name="location" className="h-3.5 w-3.5" />
                Hin Kong, Koh Phangan
              </span>
              <LanguageSwitcher variant="light" />
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
