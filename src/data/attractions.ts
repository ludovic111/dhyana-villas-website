export interface Attraction {
  id: string;
  nameKey: string;
  descKey: string;
  icon: string;
  coordinates: { lat: number; lng: number };
  distance: string;
}

export const attractions: Attraction[] = [
  {
    id: "hin-kong-beach",
    nameKey: "beach",
    descKey: "beachDesc",
    icon: "🏖️",
    coordinates: { lat: 9.7435, lng: 99.9975 },
    distance: "4 min walk",
  },
  {
    id: "phaeng-waterfall",
    nameKey: "waterfall",
    descKey: "waterfallDesc",
    icon: "💧",
    coordinates: { lat: 9.7200, lng: 100.0300 },
    distance: "4.5 km",
  },
  {
    id: "yoga",
    nameKey: "yoga",
    descKey: "yogaDesc",
    icon: "🧘",
    coordinates: { lat: 9.7500, lng: 99.9900 },
    distance: "Nearby",
  },
  {
    id: "diving",
    nameKey: "diving",
    descKey: "divingDesc",
    icon: "🤿",
    coordinates: { lat: 9.7600, lng: 100.0100 },
    distance: "Various locations",
  },
  {
    id: "temples",
    nameKey: "temples",
    descKey: "templesDesc",
    icon: "🛕",
    coordinates: { lat: 9.7300, lng: 100.0200 },
    distance: "10 min drive",
  },
  {
    id: "markets",
    nameKey: "markets",
    descKey: "marketsDesc",
    icon: "🏮",
    coordinates: { lat: 9.7350, lng: 100.0600 },
    distance: "15 min drive",
  },
];
