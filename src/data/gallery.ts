export type GalleryCategory = "pool" | "rooms" | "garden" | "kitchen" | "views";

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
  { id: "pool-1", src: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&h=600&fit=crop", alt: "Private pool with tropical garden", category: "pool", width: 800, height: 600, featured: true },
  { id: "pool-2", src: "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=800&h=600&fit=crop", alt: "Pool loungers at sunset", category: "pool", width: 800, height: 600 },
  { id: "pool-3", src: "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&h=600&fit=crop", alt: "Crystal clear pool water", category: "pool", width: 800, height: 600 },
  { id: "pool-4", src: "https://images.unsplash.com/photo-1573052905904-34ad8c27f0cc?w=600&h=800&fit=crop", alt: "Pool at night", category: "pool", width: 600, height: 800 },

  // Rooms
  { id: "room-1", src: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&h=600&fit=crop", alt: "Master bedroom with king bed", category: "rooms", width: 800, height: 600, featured: true },
  { id: "room-2", src: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&h=600&fit=crop", alt: "Elegant bedroom interior", category: "rooms", width: 800, height: 600 },
  { id: "room-3", src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop", alt: "Spacious living room", category: "rooms", width: 800, height: 600 },
  { id: "room-4", src: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&h=800&fit=crop", alt: "Bathroom with walk-in shower", category: "rooms", width: 600, height: 800 },

  // Garden
  { id: "garden-1", src: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&h=600&fit=crop", alt: "Lush tropical garden", category: "garden", width: 800, height: 600, featured: true },
  { id: "garden-2", src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop", alt: "Garden path with tropical plants", category: "garden", width: 800, height: 600 },
  { id: "garden-3", src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=800&fit=crop", alt: "Tropical flowers", category: "garden", width: 600, height: 800 },

  // Kitchen
  { id: "kitchen-1", src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop", alt: "Fully equipped modern kitchen", category: "kitchen", width: 800, height: 600, featured: true },
  { id: "kitchen-2", src: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=800&h=600&fit=crop", alt: "Kitchen dining area", category: "kitchen", width: 800, height: 600 },

  // Views
  { id: "views-1", src: "https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?w=800&h=600&fit=crop", alt: "Mountain view from terrace", category: "views", width: 800, height: 600, featured: true },
  { id: "views-2", src: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&h=600&fit=crop", alt: "Sunset over the ocean", category: "views", width: 800, height: 600 },
  { id: "views-3", src: "https://images.unsplash.com/photo-1468413253725-0d5181091126?w=800&h=600&fit=crop", alt: "Tropical beach nearby", category: "views", width: 800, height: 600 },
];

export const featuredImages = galleryImages.filter((img) => img.featured);
