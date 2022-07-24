export type Offer = {
  id: number;
  bedrooms: number;
  description: string;
  images: [string] | string;
  isFavorite: boolean;
  isPremium: boolean;
  previewImage: string;
  price: number;
  rating: number;
  title: string;
  type: string;
};
