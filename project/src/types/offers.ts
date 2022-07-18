export type Offers = {
  id: number;
  src: string;
  price: string;
  placeName: string;
  placeType: string;
};

export type Reviews = {
  placeData: Offers[];
  review: string;
};
