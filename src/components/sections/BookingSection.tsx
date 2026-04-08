"use client";

import { motion, type Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import AnimatedSection from "@/components/ui/AnimatedSection";
import FeatureGlyph from "@/components/ui/FeatureGlyph";
import { EXTERNAL_LINKS } from "@/lib/constants";

const platforms = [
  { key: "bookingCom", url: EXTERNAL_LINKS.bookingCom, hoverBorder: "hover:border-[rgba(255,180,60,0.3)]" },
  { key: "agoda", url: EXTERNAL_LINKS.agoda, hoverBorder: "hover:border-[rgba(100,160,255,0.3)]" },
  { key: "whatsapp", url: EXTERNAL_LINKS.whatsapp, hoverBorder: "hover:border-[rgba(80,200,120,0.3)]" },
  { key: "facebook", url: EXTERNAL_LINKS.facebook, hoverBorder: "hover:border-[rgba(100,140,255,0.3)]" },
] as const;

const cardStagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const cardItem: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] },
  },
};

const infoStagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const infoItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] },
  },
};

export default function BookingSection() {
  const t = useTranslations("booking");

  return (
    <section id="booking" className="section-shell pt-6">
      <div className="site-frame">
        <motion.div
          className="surface-dark hairline-grid overflow-hidden rounded-[2.7rem] px-6 py-8 text-coconut shadow-[0_34px_100px_rgba(0,0,0,0.28)] sm:px-8 lg:px-10"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
        >
          <div className="relative z-10 grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <div className="max-w-2xl">
              <AnimatedSection>
                <span className="eyebrow border-coconut/12 bg-coconut/8 text-coconut/74">
                  {t("title")}
                </span>
                <h2 className="section-title mt-6 text-coconut">{t("title")}</h2>
                <p className="section-copy mt-6 text-coconut/72">{t("subtitle")}</p>
              </AnimatedSection>

              <motion.div
                className="mt-8 grid gap-3 sm:grid-cols-3"
                variants={infoStagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-10% 0px" }}
              >
                {[
                  { label: "Direct", desc: "Fast access to live availability and your preferred booking channel." },
                  { label: "Flexible", desc: "Compare platforms or contact the hosts directly before you reserve." },
                  { label: "Personal", desc: "Reach out for special requests, arrival details, or local recommendations." },
                ].map((card) => (
                  <motion.div
                    key={card.label}
                    variants={infoItem}
                    className="rounded-[1.5rem] border border-coconut/10 bg-coconut/[0.05] p-4"
                  >
                    <p className="text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-gold/76">
                      {card.label}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-coconut/66">
                      {card.desc}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <motion.div
              className="grid gap-3 sm:grid-cols-2"
              variants={cardStagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-10% 0px" }}
            >
              {platforms.map((platform) => (
                <motion.a
                  key={platform.key}
                  variants={cardItem}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex h-full flex-col justify-between rounded-[1.9rem] border border-coconut/10 bg-coconut/[0.05] p-5 transition-colors duration-300 hover:bg-coconut/[0.08] ${platform.hoverBorder}`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-gold/72">
                        Reserve
                      </p>
                      <h3 className="mt-3 font-heading text-3xl text-coconut">
                        {t(platform.key)}
                      </h3>
                    </div>
                    <span className="rounded-full border border-coconut/10 bg-coconut/8 p-2 text-coconut/68 transition-transform duration-300 group-hover:-rotate-45">
                      <FeatureGlyph name="arrow" className="h-4 w-4" />
                    </span>
                  </div>

                  <p className="mt-8 text-sm leading-relaxed text-coconut/64">
                    {platform.key === "whatsapp"
                      ? "Message the hosts directly."
                      : platform.key === "facebook"
                        ? "See updates and speak with the team."
                        : "Check rates and confirm your stay."}
                  </p>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
