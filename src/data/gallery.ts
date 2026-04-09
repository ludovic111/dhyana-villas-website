export type GalleryCategory = "pool" | "rooms" | "garden" | "kitchen" | "living" | "details";

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: GalleryCategory;
  width: number;
  height: number;
  featured?: boolean;
}

export const galleryImages: GalleryImage[] = [
  // Pool
  { id: "pool-1", src: "/images/hero-pool.jpg", alt: "Pool with open-air living pavilion", category: "pool", width: 800, height: 600, featured: true },
  { id: "pool-2", src: "/images/pool-tropical.jpg", alt: "Turquoise pool surrounded by tropical plants", category: "pool", width: 600, height: 800 },
  { id: "pool-3", src: "/images/pool-loungers.jpg", alt: "Poolside loungers with parasol", category: "pool", width: 600, height: 800 },
  { id: "pool-4", src: "/images/pool-garden-overview.jpg", alt: "Garden lounge and pool overview", category: "pool", width: 800, height: 600 },
  { id: "pool-5", src: "/images/pool-from-living.jpg", alt: "Pool view from the living area", category: "pool", width: 800, height: 600 },

  // Rooms
  { id: "room-1", src: "/images/villa-lotus.jpg", alt: "Villa Lotus master bedroom", category: "rooms", width: 800, height: 600, featured: true },
  { id: "room-2", src: "/images/villa-bamboo.jpg", alt: "Villa Bamboo master bedroom", category: "rooms", width: 800, height: 600 },
  { id: "room-3", src: "/images/room-lotus-wardrobe.jpg", alt: "Villa Lotus bedroom with wardrobe", category: "rooms", width: 800, height: 600 },
  { id: "room-4", src: "/images/room-bamboo-ensuite.jpg", alt: "Villa Bamboo bedroom with en-suite", category: "rooms", width: 800, height: 600 },
  { id: "room-5", src: "/images/room-coral-accents.jpg", alt: "Colorful bedroom with coral accents", category: "rooms", width: 800, height: 600 },
  { id: "room-6", src: "/images/room-pillows-pendants.jpg", alt: "Bed with artisan pillows and pendant lights", category: "rooms", width: 800, height: 600 },
  { id: "room-7", src: "/images/bathroom-openair.jpg", alt: "Open-air bathroom with tropical plants", category: "rooms", width: 800, height: 600, featured: true },
  { id: "room-8", src: "/images/bathroom-tadelakt.jpg", alt: "Blue tadelakt rainfall shower", category: "rooms", width: 800, height: 600 },
  { id: "room-9", src: "/images/bathroom-vanity.jpg", alt: "Concrete vanity with backlit mirror", category: "rooms", width: 800, height: 600 },
  { id: "room-10", src: "/images/bathroom-bedroom-view.jpg", alt: "Bathroom with view into bedroom", category: "rooms", width: 800, height: 600 },

  // Garden
  { id: "garden-1", src: "/images/garden-mandala.jpg", alt: "Mandala entrance with garden path", category: "garden", width: 800, height: 600, featured: true },
  { id: "garden-2", src: "/images/garden-stepping-stones.jpg", alt: "Stepping stone path through tropical garden", category: "garden", width: 600, height: 800 },
  { id: "garden-3", src: "/images/garden-palms.jpg", alt: "Lush garden with palm trees", category: "garden", width: 600, height: 800 },
  { id: "garden-4", src: "/images/garden-lounge.jpg", alt: "Garden lounge with stepping stones", category: "garden", width: 800, height: 600 },
  { id: "garden-5", src: "/images/garden-canopy.jpg", alt: "Shaded loungers under tropical canopy", category: "garden", width: 600, height: 800 },

  // Kitchen
  { id: "kitchen-1", src: "/images/kitchen-island.jpg", alt: "Concrete kitchen island with wooden accents", category: "kitchen", width: 800, height: 600, featured: true },
  { id: "kitchen-2", src: "/images/kitchen-garden-view.jpg", alt: "Open kitchen with garden view", category: "kitchen", width: 800, height: 600 },
  { id: "kitchen-3", src: "/images/kitchen-counter.jpg", alt: "Kitchen counter with fresh fruits", category: "kitchen", width: 800, height: 600 },
  { id: "kitchen-4", src: "/images/kitchen-overview.jpg", alt: "Fully equipped kitchen overview", category: "kitchen", width: 800, height: 600 },

  // Living
  { id: "living-1", src: "/images/living-colorful-sofa.jpg", alt: "Bamboo sofa with colorful African-print cushions", category: "living", width: 800, height: 600, featured: true },
  { id: "living-2", src: "/images/living-indigo-lounge.jpg", alt: "Indigo shibori lounge with orchids", category: "living", width: 800, height: 600 },
  { id: "living-3", src: "/images/living-terrace.jpg", alt: "Covered terrace overlooking the garden", category: "living", width: 800, height: 600 },
  { id: "living-4", src: "/images/living-cozy.jpg", alt: "Cozy lounge with wine and snacks", category: "living", width: 800, height: 600 },

  // Details
  { id: "details-1", src: "/images/detail-arch-window.jpg", alt: "Garden view through arch window with candles", category: "details", width: 800, height: 600 },
  { id: "details-2", src: "/images/detail-porthole.jpg", alt: "Round porthole window with zen decor", category: "details", width: 800, height: 600 },
  { id: "details-3", src: "/images/detail-halfmoon.jpg", alt: "Half-moon window with tropical plants and candles", category: "details", width: 800, height: 600 },
];

export const featuredImages = galleryImages.filter((img) => img.featured);
