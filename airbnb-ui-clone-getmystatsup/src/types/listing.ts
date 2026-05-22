export type Host = {
  name: string;
  yearsHosting: number;
  isSuperhost: boolean;
};

export type Listing = {
  id: string;
  title: string;
  location: string;
  distance: string;
  pricePerNight: number;
  rating: number;
  reviews: number;
  guestFavorite?: boolean;
  imagePalette: [string, string];
  description: string;
  amenities: string[];
  host: Host;
};

export type ListingSection = {
  id: string;
  title: string;
  subtitle: string;
  listings: Listing[];
};
