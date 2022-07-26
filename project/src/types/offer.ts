export type Offer = {
  id: number;
  bedrooms: number;
  city: {
    location: {
      latitude: number;
      longitude: number;
      zoom: number;
    };
    name: string;
  };
  description: string;
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
  images: string[];
  isFavorite: boolean;
  isPremium: boolean;
  previewImage: string;
  maxAdults?: number;
  host?: {
    avatarUrl: string;
    id: number;
    isPro: boolean;
    name: string;
  };
  price: number;
  rating: number;
  title: string;
  type: string;
};
