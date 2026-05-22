import type { Listing, ListingSection } from "@/types/listing";

export const categories = [
  "Homes",
  "Experiences",
  "Services",
  "Cabins",
  "Beachfront",
  "Design",
  "Countryside",
];

export const listings: Listing[] = [
  {
    id: "lake-canvas-retreat",
    title: "Lake Canvas Retreat",
    location: "Kings Island, Ohio",
    distance: "11 miles away",
    pricePerNight: 238,
    rating: 4.93,
    reviews: 187,
    guestFavorite: true,
    imagePalette: ["#ffd7b3", "#ef6a4f"],
    description:
      "A bright timber home with floor-to-ceiling windows, two terraces, and warm evening light over the lake.",
    amenities: ["Lake view", "Wifi", "Indoor fireplace", "Self check-in", "Free parking"],
    host: {
      name: "Nora",
      yearsHosting: 6,
      isSuperhost: true,
    },
  },
  {
    id: "brick-loft-downtown",
    title: "Brick Loft Downtown",
    location: "Covington, Kentucky",
    distance: "2 miles away",
    pricePerNight: 179,
    rating: 4.81,
    reviews: 102,
    imagePalette: ["#f3dfb2", "#af7e3e"],
    description:
      "Industrial loft with curated artwork, oversized kitchen island, and walkable access to local food halls.",
    amenities: ["City skyline view", "Air conditioning", "Washer", "Workspace", "Gym"],
    host: {
      name: "Marcus",
      yearsHosting: 4,
      isSuperhost: false,
    },
  },
  {
    id: "cedar-hill-hideout",
    title: "Cedar Hill Hideout",
    location: "Yellow Springs, Ohio",
    distance: "48 miles away",
    pricePerNight: 261,
    rating: 4.98,
    reviews: 246,
    guestFavorite: true,
    imagePalette: ["#cde6cb", "#3d7f4a"],
    description:
      "Surrounded by cedar trees with a private sauna, oversized hammock deck, and a stargazing firepit.",
    amenities: ["Mountain view", "Hot tub", "Firepit", "Kitchen", "EV charger"],
    host: {
      name: "Elliot",
      yearsHosting: 8,
      isSuperhost: true,
    },
  },
  {
    id: "riverfront-glass-home",
    title: "Riverfront Glass Home",
    location: "Milford, Ohio",
    distance: "19 miles away",
    pricePerNight: 312,
    rating: 4.88,
    reviews: 91,
    imagePalette: ["#d6ecf6", "#2d6a8b"],
    description:
      "Architectural stay with panoramic river views, indoor olive tree garden, and sunken living room.",
    amenities: ["River view", "Pool", "Wifi", "Smart TV", "Outdoor dining"],
    host: {
      name: "Priya",
      yearsHosting: 5,
      isSuperhost: true,
    },
  },
  {
    id: "meadow-cottage",
    title: "Meadow Cottage",
    location: "Lexington, Kentucky",
    distance: "71 miles away",
    pricePerNight: 199,
    rating: 4.74,
    reviews: 58,
    imagePalette: ["#f9eac7", "#ca9841"],
    description:
      "Soft-toned cottage with vaulted ceilings, herb garden patio, and weekend farmers market nearby.",
    amenities: ["Garden", "Wifi", "Kitchen", "Dedicated workspace", "Pets allowed"],
    host: {
      name: "Amelia",
      yearsHosting: 3,
      isSuperhost: false,
    },
  },
  {
    id: "atelier-townhouse",
    title: "Atelier Townhouse",
    location: "Cincinnati, Ohio",
    distance: "6 miles away",
    pricePerNight: 287,
    rating: 4.95,
    reviews: 143,
    imagePalette: ["#fcd4cc", "#c14f3b"],
    description:
      "Designer townhouse with moody library wall, chef kitchen, and private courtyard for evening dinners.",
    amenities: ["City view", "Kitchen", "Wifi", "Washer", "Backyard"],
    host: {
      name: "Darren",
      yearsHosting: 7,
      isSuperhost: true,
    },
  },
];

export const listingSections: ListingSection[] = [
  {
    id: "near-kings-island",
    title: "Stay near Kings Island",
    subtitle: "High-rated places for weekend resets",
    listings: listings.slice(0, 4),
  },
  {
    id: "in-covington",
    title: "Stay in Covington",
    subtitle: "Walkable, central, and full of character",
    listings: [listings[1], listings[5], listings[4], listings[3]],
  },
];

export const findListingById = (id: string) => listings.find((listing) => listing.id === id);
