export type Offers = {
  src: string;
  price: string;
  placeName: string;
  placeType: string;
};

export type Reviews = {
  placeData: Offers[];
  review: string;
};
