import type { Metadata } from "next";
import {
  cormorant,
  manrope,
  marcellus,
  notoSansThai,
  notoSerifThai,
} from "@/styles/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dhyana Villas | Luxury Boutique Villas in Koh Phangan, Thailand",
  description:
    "Discover tranquility at Dhyana Villas — 3 private pool villas nestled in tropical gardens, steps from Hin Kong Beach, Koh Phangan.",
  openGraph: {
    title: "Dhyana Villas | Luxury Boutique Villas in Koh Phangan",
    description:
      "3 private pool villas nestled in tropical gardens, steps from Hin Kong Beach.",
    type: "website",
    locale: "en",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${marcellus.variable} ${manrope.variable} ${cormorant.variable} ${notoSansThai.variable} ${notoSerifThai.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-[100dvh] bg-silk text-drift antialiased">
        {children}
      </body>
    </html>
  );
}
