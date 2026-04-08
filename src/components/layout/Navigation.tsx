"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import Logo from "@/components/ui/Logo";
import FeatureGlyph from "@/components/ui/FeatureGlyph";
import LanguageSwitcher from "./LanguageSwitcher";

const navSections = [
  "about",
  "villas",
  "gallery",
  "experience",
  "reviews",
] as const;

export default function Navigation() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [pendingScrollTarget, setPendingScrollTarget] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<string>("about");
  const { scrollY } = useScroll();

  const homePath = `/${locale}`;
  const isHomePage = pathname === homePath;
  const isGalleryPage = pathname === `/${locale}/gallery`;

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 40);
  });

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (!pendingScrollTarget || !isHomePage) {
      return;
    }

    const raf = window.requestAnimationFrame(() => {
      if (pendingScrollTarget === "top") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        document
          .getElementById(pendingScrollTarget)
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      setPendingScrollTarget(null);
    });

    return () => window.cancelAnimationFrame(raf);
  }, [isHomePage, pendingScrollTarget]);

  useEffect(() => {
    if (!isHomePage) {
      return;
    }

    const sectionElements = navSections
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: "-30% 0px -45% 0px",
        threshold: [0.2, 0.35, 0.5, 0.65],
      }
    );

    sectionElements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [isHomePage]);

  const selectedSection = isGalleryPage ? "gallery" : activeSection;

  function scrollToSection(id: string) {
    const el = document.getElementById(id);
    if (isHomePage && el) {
      setActiveSection(id);
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setMobileOpen(false);
      return;
    }

    setMobileOpen(false);
    setPendingScrollTarget(id);
    router.push(`${homePath}#${id}`, { scroll: false });
  }

  function goHome() {
    if (isHomePage) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActiveSection("about");
      return;
    }

    setMobileOpen(false);
    setPendingScrollTarget("top");
    router.push(homePath, { scroll: false });
  }

  const navTone = useMemo(
    () =>
      scrolled || mobileOpen || !isHomePage
        ? "border-coconut/14 bg-nocturne/78 shadow-[0_24px_80px_rgba(0,0,0,0.28)]"
        : "border-coconut/10 bg-nocturne/48 shadow-[0_18px_45px_rgba(0,0,0,0.18)]",
    [isHomePage, mobileOpen, scrolled]
  );

  return (
    <>
      <motion.header
        className="fixed inset-x-0 top-0 z-50 pt-4"
        initial={{ y: -96 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.65, ease: [0.23, 1, 0.32, 1] }}
      >
        <div className="site-frame">
          <motion.div
            className={`mx-auto flex items-center gap-4 border px-4 backdrop-blur-2xl md:px-5 ${navTone}`}
            animate={{
              borderRadius: scrolled ? "1.4rem" : "1.7rem",
              paddingTop: scrolled ? "0.55rem" : "0.75rem",
              paddingBottom: scrolled ? "0.55rem" : "0.75rem",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <button
              type="button"
              onClick={goHome}
              className="rounded-full p-1 text-left"
              aria-label="Go to homepage"
            >
              <Logo variant="light" />
            </button>

            <nav className="hidden flex-1 items-center justify-center gap-1 lg:flex">
              {navSections.map((section) => {
                const active = selectedSection === section;
                return (
                  <button
                    key={section}
                    type="button"
                    onClick={() => scrollToSection(section)}
                    className={`relative rounded-full px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.2em] ${
                      active
                        ? "text-coconut"
                        : "text-coconut/58 hover:text-coconut"
                    }`}
                  >
                    {t(section)}
                    {active && (
                      <motion.span
                        layoutId="nav-dot"
                        className="absolute -bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-gold"
                        transition={{ type: "spring", stiffness: 380, damping: 28 }}
                      />
                    )}
                    {!active && (
                      <span className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-coconut/30 transition-all duration-300 ease-out group-hover:w-4" />
                    )}
                  </button>
                );
              })}
            </nav>

            <div className="ml-auto hidden items-center gap-3 lg:flex">
              <span className="inline-flex items-center gap-2 rounded-full border border-coconut/12 bg-coconut/8 px-3 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-coconut/62">
                <FeatureGlyph name="location" className="h-3.5 w-3.5" />
                <span>{isGalleryPage ? "Photo journal" : "Hin Kong"}</span>
              </span>
              <LanguageSwitcher variant="light" />
              <button
                type="button"
                onClick={() => scrollToSection("booking")}
                className="cta-primary metal-button book-pulse px-5 py-3 text-[0.7rem]"
              >
                {t("book")}
              </button>
            </div>

            <button
              type="button"
              className="ml-auto flex h-12 w-12 items-center justify-center rounded-full border border-coconut/14 bg-coconut/8 text-coconut md:hidden"
              onClick={() => setMobileOpen((open) => !open)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              <div className="flex flex-col gap-1.5">
                <motion.span
                  className="block h-0.5 w-5 bg-current"
                  animate={mobileOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                />
                <motion.span
                  className="block h-0.5 w-5 bg-current"
                  animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                />
                <motion.span
                  className="block h-0.5 w-5 bg-current"
                  animate={mobileOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                />
              </div>
            </button>

            {/* Gold accent line on scroll */}
            <motion.div
              className="absolute bottom-0 left-4 right-4 h-px"
              style={{
                background: "linear-gradient(90deg, transparent, rgba(199, 162, 99, 0.3), transparent)",
              }}
              animate={{ opacity: scrolled ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </div>
      </motion.header>

      <motion.div
        className="fixed inset-0 z-40 md:hidden"
        initial={{ opacity: 0, pointerEvents: "none" }}
        animate={
          mobileOpen
            ? { opacity: 1, pointerEvents: "auto" }
            : { opacity: 0, pointerEvents: "none" }
        }
      >
        <div
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,18,13,0.9),rgba(7,18,13,0.96))]"
          onClick={() => setMobileOpen(false)}
        />
        <motion.div
          className="absolute inset-x-4 top-[5.5rem] overflow-hidden rounded-[2rem] border border-coconut/14 bg-nocturne/92 p-5 shadow-[0_28px_90px_rgba(0,0,0,0.3)] backdrop-blur-2xl"
          initial={{ y: -24, opacity: 0, scale: 0.98 }}
          animate={mobileOpen ? { y: 0, opacity: 1, scale: 1 } : { y: -24, opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.28, ease: [0.23, 1, 0.32, 1] }}
        >
          <div className="flex items-center justify-between border-b border-coconut/10 pb-4">
            <Logo variant="light" />
            <LanguageSwitcher variant="light" />
          </div>

          <div className="mt-5 flex flex-col gap-2">
            {navSections.map((section, index) => {
              const active = selectedSection === section;

              return (
                <motion.button
                  key={section}
                  type="button"
                  onClick={() => scrollToSection(section)}
                  className={`flex items-center justify-between rounded-[1.35rem] px-4 py-4 text-left ${
                    active
                      ? "bg-coconut/10 text-coconut"
                      : "text-coconut/72 hover:bg-coconut/6 hover:text-coconut"
                  }`}
                  initial={{ opacity: 0, x: -12, y: 18 }}
                  animate={mobileOpen ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: -12, y: 18 }}
                  transition={{ delay: 0.06 + index * 0.06 }}
                >
                  <span className="font-heading text-2xl">{t(section)}</span>
                  <FeatureGlyph name="arrow" className="h-4 w-4" />
                </motion.button>
              );
            })}
          </div>

          <motion.button
            type="button"
            onClick={() => scrollToSection("booking")}
            className="cta-primary metal-button mt-6 w-full justify-between px-5 py-4 text-[0.72rem]"
            initial={{ opacity: 0, y: 18 }}
            animate={mobileOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
            transition={{ delay: 0.32 }}
          >
            <span>{t("book")}</span>
            <FeatureGlyph name="arrow" className="h-4 w-4" />
          </motion.button>
        </motion.div>
      </motion.div>
    </>
  );
}
