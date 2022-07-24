export type Offer = {
  id: number;
  bedrooms: number;
  description: string;
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
