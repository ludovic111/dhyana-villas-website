"use client";

import type { ReactNode } from "react";

type GlyphName =
  | "pool"
  | "garden"
  | "area"
  | "bedrooms"
  | "bathrooms"
  | "kitchen"
  | "wifi"
  | "ac"
  | "beach"
  | "waterfall"
  | "yoga"
  | "diving"
  | "temple"
  | "market"
  | "arrow"
  | "spark"
  | "location"
  | "score";

interface FeatureGlyphProps {
  name: GlyphName;
  className?: string;
}

const baseProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export default function FeatureGlyph({
  name,
  className = "h-4 w-4",
}: FeatureGlyphProps) {
  const paths: Record<GlyphName, ReactNode> = {
    pool: (
      <>
        <path {...baseProps} d="M3 14c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2 2-2 4-2" />
        <path {...baseProps} d="M4 10a6 6 0 0 1 12 0" />
        <path {...baseProps} d="M7 17v3m10-3v3" />
      </>
    ),
    garden: (
      <>
        <path {...baseProps} d="M12 21V9" />
        <path {...baseProps} d="M12 14c0-3 2-5 5-5 0 3-2 5-5 5Z" />
        <path {...baseProps} d="M12 12c0-3-2-5-5-5 0 3 2 5 5 5Z" />
      </>
    ),
    area: (
      <>
        <path {...baseProps} d="M5 5h5M5 5v5M19 5h-5M19 5v5M5 19h5M5 19v-5M19 19h-5M19 19v-5" />
      </>
    ),
    bedrooms: (
      <>
        <path {...baseProps} d="M4 12h16v6H4z" />
        <path {...baseProps} d="M6 12V9a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3" />
        <path {...baseProps} d="M4 18v2m16-2v2" />
      </>
    ),
    bathrooms: (
      <>
        <path {...baseProps} d="M7 4h10" />
        <path {...baseProps} d="M9 4v6a3 3 0 1 0 6 0V4" />
        <path {...baseProps} d="M5 16h14M8 16l-1 4m10-4 1 4" />
      </>
    ),
    kitchen: (
      <>
        <path {...baseProps} d="M6 4v16M10 4v6a2 2 0 0 0 4 0V4" />
        <path {...baseProps} d="M18 4v16m0-7h-4" />
      </>
    ),
    wifi: (
      <>
        <path {...baseProps} d="M4 9a12 12 0 0 1 16 0" />
        <path {...baseProps} d="M7 12a8 8 0 0 1 10 0" />
        <path {...baseProps} d="M10 15a4 4 0 0 1 4 0" />
        <circle cx="12" cy="18" r="1.2" fill="currentColor" />
      </>
    ),
    ac: (
      <>
        <path {...baseProps} d="M4 8h16v5H4z" />
        <path {...baseProps} d="M8 16c0 1.5-1 2-1 3.5S8 22 8 22" />
        <path {...baseProps} d="M12 16c0 1.5-1 2-1 3.5S12 22 12 22" />
        <path {...baseProps} d="M16 16c0 1.5-1 2-1 3.5S16 22 16 22" />
      </>
    ),
    beach: (
      <>
        <path {...baseProps} d="M5 18c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2" />
        <path {...baseProps} d="M8 13V5m0 0 5 3M8 5 5 7" />
        <path {...baseProps} d="M15 6a3 3 0 0 1 3 3" />
      </>
    ),
    waterfall: (
      <>
        <path {...baseProps} d="M7 4c4 0 4 4 8 4" />
        <path {...baseProps} d="M10 8c0 4-3 4-3 8" />
        <path {...baseProps} d="M14 10c0 4 3 4 3 8" />
        <path {...baseProps} d="M5 20h14" />
      </>
    ),
    yoga: (
      <>
        <circle cx="12" cy="6" r="2" fill="currentColor" />
        <path {...baseProps} d="M12 8v5m0 0-4 3m4-3 4 3m-7 4 3-3 3 3" />
      </>
    ),
    diving: (
      <>
        <path {...baseProps} d="M4 10c4 0 4-3 8-3s4 3 8 3" />
        <path {...baseProps} d="M12 7v7" />
        <path {...baseProps} d="M9 18c1 1 2 1.5 3 1.5s2-.5 3-1.5" />
      </>
    ),
    temple: (
      <>
        <path {...baseProps} d="M4 10h16M6 10l6-5 6 5M7 10v8m5-8v8m5-8v8M4 18h16" />
      </>
    ),
    market: (
      <>
        <path {...baseProps} d="M5 8h14l-1 4H6z" />
        <path {...baseProps} d="M7 12v7m10-7v7M4 19h16" />
        <path {...baseProps} d="M9 4h6" />
      </>
    ),
    arrow: (
      <>
        <path {...baseProps} d="M5 12h14" />
        <path {...baseProps} d="M13 6l6 6-6 6" />
      </>
    ),
    spark: (
      <>
        <path {...baseProps} d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8Z" />
      </>
    ),
    location: (
      <>
        <path {...baseProps} d="M12 21s6-5.4 6-10a6 6 0 1 0-12 0c0 4.6 6 10 6 10Z" />
        <circle cx="12" cy="11" r="2.2" fill="currentColor" />
      </>
    ),
    score: (
      <>
        <path {...baseProps} d="M7 4h10v16l-5-3-5 3z" />
        <path {...baseProps} d="m10 10 1.5 1.5L15 8" />
      </>
    ),
  };

  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      {paths[name]}
    </svg>
  );
}
