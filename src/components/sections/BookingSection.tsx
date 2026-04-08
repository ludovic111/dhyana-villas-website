"use client";

import { useTranslations } from "next-intl";
import AnimatedSection from "@/components/ui/AnimatedSection";
import FeatureGlyph from "@/components/ui/FeatureGlyph";
import { EXTERNAL_LINKS } from "@/lib/constants";

const platforms = [
  { key: "bookingCom", url: EXTERNAL_LINKS.bookingCom },
  { key: "agoda", url: EXTERNAL_LINKS.agoda },
  { key: "whatsapp", url: EXTERNAL_LINKS.whatsapp },
  { key: "facebook", url: EXTERNAL_LINKS.facebook },
] as const;

export default function BookingSection() {
  const t = useTranslations("booking");

  return (
    <section id="booking" className="section-shell pt-6">
      <div className="site-frame">
        <div className="surface-dark overflow-hidden rounded-[2.7rem] px-6 py-8 text-coconut shadow-[0_34px_100px_rgba(0,0,0,0.28)] sm:px-8 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <AnimatedSection className="max-w-2xl">
              <span className="eyebrow border-coconut/12 bg-coconut/8 text-coconut/74">
                {t("title")}
              </span>
              <h2 className="section-title mt-6 text-coconut">{t("title")}</h2>
              <p className="section-copy mt-6 text-coconut/72">{t("subtitle")}</p>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                <div className="rounded-[1.5rem] border border-coconut/10 bg-coconut/[0.05] p-4">
                  <p className="text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-gold/76">
                    Direct
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-coconut/66">
                    Fast access to live availability and your preferred booking channel.
                  </p>
                </div>
                <div className="rounded-[1.5rem] border border-coconut/10 bg-coconut/[0.05] p-4">
                  <p className="text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-gold/76">
                    Flexible
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-coconut/66">
                    Compare platforms or contact the hosts directly before you reserve.
                  </p>
                </div>
                <div className="rounded-[1.5rem] border border-coconut/10 bg-coconut/[0.05] p-4">
                  <p className="text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-gold/76">
                    Personal
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-coconut/66">
                    Reach out for special requests, arrival details, or local recommendations.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <div className="grid gap-3 sm:grid-cols-2">
              {platforms.map((platform, index) => (
                <AnimatedSection key={platform.key} delay={index * 0.05}>
                  <a
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-full flex-col justify-between rounded-[1.9rem] border border-coconut/10 bg-coconut/[0.05] p-5 hover:bg-coconut/[0.08]"
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
                      <span className="rounded-full border border-coconut/10 bg-coconut/8 p-2 text-coconut/68">
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
                  </a>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
