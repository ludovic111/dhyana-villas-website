"use client";

import { useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import FeatureGlyph from "@/components/ui/FeatureGlyph";
import type { GalleryImage } from "@/data/gallery";

interface LightboxProps {
  images: GalleryImage[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function LightboxModal({
  images,
  currentIndex,
  onClose,
  onNavigate,
}: LightboxProps) {
  const image = images[currentIndex];
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousActiveElementRef = useRef<HTMLElement | null>(null);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft" && currentIndex > 0) onNavigate(currentIndex - 1);
      if (event.key === "ArrowRight" && currentIndex < images.length - 1) {
        onNavigate(currentIndex + 1);
      }

      if (event.key === "Tab" && dialogRef.current) {
        const focusable = Array.from(
          dialogRef.current.querySelectorAll<HTMLElement>(
            'button:not([disabled]), [href], [tabindex]:not([tabindex="-1"])'
          )
        ).filter((element) => element.offsetParent !== null);

        if (focusable.length === 0) {
          event.preventDefault();
          return;
        }

        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        const active = document.activeElement as HTMLElement | null;

        if (event.shiftKey && active === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && active === last) {
          event.preventDefault();
          first.focus();
        }
      }
    },
    [currentIndex, images.length, onClose, onNavigate]
  );

  useEffect(() => {
    previousActiveElementRef.current = document.activeElement as HTMLElement | null;
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
      previousActiveElementRef.current?.focus?.();
    };
  }, [handleKeyDown]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] flex items-center justify-center bg-[linear-gradient(180deg,rgba(7,18,13,0.88),rgba(7,18,13,0.96))] px-4 py-6 backdrop-blur-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        role="presentation"
      >
        <motion.div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label={image.alt}
          key={image.id}
          className="relative w-full max-w-[min(96vw,1180px)]"
          initial={{ opacity: 0, y: 18, scale: 0.985 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.985 }}
          transition={{ duration: 0.28, ease: [0.23, 1, 0.32, 1] }}
          onClick={(event) => event.stopPropagation()}
        >
          <div className="surface-dark overflow-hidden rounded-[2.2rem] p-3">
            <div className="flex items-center justify-between gap-3 pb-3">
              <span className="rounded-full border border-coconut/10 bg-coconut/8 px-3 py-2 text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-coconut/64">
                {currentIndex + 1} / {images.length}
              </span>

              <div className="flex items-center gap-2">
                {currentIndex > 0 && (
                  <button
                    type="button"
                    className="rounded-full border border-coconut/10 bg-coconut/8 p-3 text-coconut hover:bg-coconut/14"
                    onClick={() => onNavigate(currentIndex - 1)}
                    aria-label="Previous"
                  >
                    <svg
                      className="h-5 w-5 rotate-180"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="M13 6l6 6-6 6" />
                    </svg>
                  </button>
                )}

                {currentIndex < images.length - 1 && (
                  <button
                    type="button"
                    className="rounded-full border border-coconut/10 bg-coconut/8 p-3 text-coconut hover:bg-coconut/14"
                    onClick={() => onNavigate(currentIndex + 1)}
                    aria-label="Next"
                  >
                    <FeatureGlyph name="arrow" className="h-5 w-5" />
                  </button>
                )}

                <button
                  ref={closeButtonRef}
                  type="button"
                  className="rounded-full border border-coconut/10 bg-coconut/8 p-3 text-coconut hover:bg-coconut/14"
                  onClick={onClose}
                  aria-label="Close"
                >
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 6l12 12M18 6 6 18" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[1.7rem] border border-coconut/10 bg-black/20">
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                sizes="96vw"
                className="max-h-[78vh] w-full object-contain"
              />
            </div>

            <div className="mt-3 rounded-[1.6rem] border border-coconut/10 bg-coconut/[0.05] px-4 py-3 text-sm leading-relaxed text-coconut/74">
              {image.alt}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
