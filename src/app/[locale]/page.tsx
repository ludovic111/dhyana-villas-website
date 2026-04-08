import { setRequestLocale } from "next-intl/server";
import HeroSection from "@/components/sections/HeroSection";
import IntroSection from "@/components/sections/IntroSection";
import VillasSection from "@/components/sections/VillasSection";
import GalleryTeaser from "@/components/sections/GalleryTeaser";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ReviewsSection from "@/components/sections/ReviewsSection";
import BookingSection from "@/components/sections/BookingSection";
import SectionDivider from "@/components/ui/SectionDivider";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <HeroSection />
      <SectionDivider variant="muted" />
      <IntroSection />
      <SectionDivider variant="gold" />
      <VillasSection />
      <SectionDivider variant="muted" />
      <GalleryTeaser />
      <SectionDivider variant="gold" />
      <ExperienceSection />
      <ReviewsSection />
      <BookingSection />
    </>
  );
}
