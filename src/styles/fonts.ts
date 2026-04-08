import {
  Cormorant_Garamond,
  Manrope,
  Marcellus,
  Noto_Sans_Thai,
  Noto_Serif_Thai,
} from "next/font/google";

export const marcellus = Marcellus({
  weight: "400",
  subsets: ["latin", "latin-ext"],
  variable: "--font-heading-latin",
  display: "swap",
});

export const manrope = Manrope({
  subsets: ["latin", "latin-ext"],
  variable: "--font-body-latin",
  display: "swap",
});

export const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-accent-latin",
  display: "swap",
});

export const notoSansThai = Noto_Sans_Thai({
  subsets: ["latin", "latin-ext", "thai"],
  variable: "--font-body-thai",
  display: "swap",
});

export const notoSerifThai = Noto_Serif_Thai({
  subsets: ["latin", "latin-ext", "thai"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading-thai",
  display: "swap",
});
