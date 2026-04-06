import { setRequestLocale } from "next-intl/server";
import HeroSection from "@/components/sections/HeroSection";
import IntroSection from "@/components/sections/IntroSection";
import VillasSection from "@/components/sections/VillasSection";
import GalleryTeaser from "@/components/sections/GalleryTeaser";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ReviewsSection from "@/components/sections/ReviewsSection";
import BookingSection from "@/components/sections/BookingSection";

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
      <IntroSection />
      <VillasSection />
      <GalleryTeaser />
      <ExperienceSection />
      <ReviewsSection />
      <BookingSection />
    </>
  );
}
