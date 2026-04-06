import type { Metadata } from "next";
import { playfair, inter, cormorant } from "@/styles/fonts";
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
      className={`${playfair.variable} ${inter.variable} ${cormorant.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-silk text-drift antialiased">
        {children}
      </body>
    </html>
  );
}
