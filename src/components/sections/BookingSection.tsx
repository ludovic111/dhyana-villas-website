"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { EXTERNAL_LINKS } from "@/lib/constants";

const platforms = [
  {
    key: "bookingCom",
    url: EXTERNAL_LINKS.bookingCom,
    color: "bg-[#003580]",
    hoverColor: "hover:bg-[#00264d]",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M2.01 2H7.1c2.67 0 4.38 1.41 4.38 3.82 0 1.6-.83 2.79-2.15 3.38v.05c1.75.39 2.8 1.84 2.8 3.65 0 2.8-1.93 4.5-5.09 4.5H2.01V2zm3.62 6.13h.89c1.16 0 1.82-.59 1.82-1.57 0-.93-.57-1.51-1.69-1.51h-1.02v3.08zm0 6.3h1.14c1.29 0 2-.67 2-1.75 0-1.12-.76-1.73-2.12-1.73H5.63v3.48zM14.97 13.53c.15 1.27 1.19 2.01 2.69 2.01 1.15 0 2.06-.41 2.06-1.17 0-.65-.53-.96-1.8-1.24l-1.48-.33c-2.17-.47-3.21-1.47-3.21-3.14 0-2.14 1.81-3.55 4.34-3.55 2.67 0 4.25 1.41 4.34 3.55h-3.1c-.1-1.09-.96-1.72-2.19-1.72-.99 0-1.72.49-1.72 1.18 0 .6.53.89 1.64 1.14l1.59.35c2.34.52 3.26 1.43 3.26 3.12 0 2.29-1.89 3.67-4.58 3.67-2.73 0-4.56-1.31-4.69-3.87h3.85z" />
      </svg>
    ),
  },
  {
    key: "agoda",
    url: EXTERNAL_LINKS.agoda,
    color: "bg-[#5542F6]",
    hoverColor: "hover:bg-[#4030d0]",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="12" r="10" />
      </svg>
    ),
  },
  {
    key: "whatsapp",
    url: EXTERNAL_LINKS.whatsapp,
    color: "bg-[#25D366]",
    hoverColor: "hover:bg-[#1da851]",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
  {
    key: "facebook",
    url: EXTERNAL_LINKS.facebook,
    color: "bg-[#1877F2]",
    hoverColor: "hover:bg-[#0d5bbf]",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
];

export default function BookingSection() {
  const t = useTranslations("booking");

  return (
    <section id="booking" className="relative overflow-hidden bg-sand/40 py-24 md:py-32">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute -left-20 -top-20 h-96 w-96 rounded-full bg-gold" />
        <div className="absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-jungle-light" />
      </div>

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <AnimatedSection>
          <h2 className="font-heading text-3xl font-bold text-volcanic sm:text-4xl md:text-5xl">
            {t("title")}
          </h2>
          <p className="mt-4 font-accent text-xl text-drift">{t("subtitle")}</p>
          <div className="mx-auto mt-6 h-px w-16 bg-gold" />
        </AnimatedSection>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {platforms.map((platform, i) => (
            <AnimatedSection key={platform.key} delay={0.1 * i}>
              <motion.a
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center gap-3 rounded-xl ${platform.color} ${platform.hoverColor} px-6 py-4 font-body text-base font-semibold text-white shadow-lg transition-all`}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                {platform.icon}
                {t(platform.key)}
              </motion.a>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
