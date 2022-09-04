import { createSelector } from '@reduxjs/toolkit';
import { NameSpace } from '../../components/const';
import { Offer } from '../../types/offer';
import { SortType } from '../../types/sort-type';
import { State } from '../../types/state';
import { getSort, getActiveCity } from '../app-process/selectors';

const SORT_METHOD: { [key: string]: (a: Offer, b: Offer) => number } = {
  [SortType.Price_high_to_low]: (a: Offer, b: Offer) => b.price - a.price,
  [SortType.Price_low_to_high]: (a: Offer, b: Offer) => a.price - b.price,
  [SortType.Top_rated_first]: (a: Offer, b: Offer) => b.rating - a.rating,
};
const getStore = (store: State) => store[NameSpace.Offers];

export const getOffers = createSelector(getStore, ({ offers }) => offers);
export const getFilteredOffers = createSelector(getStore, getActiveCity, ({ offers = [] }, city) =>
  offers.filter((offer) => offer.city.name === city)
);
export const getFavoriteOffers = createSelector(
  getStore,
  ({ favoriteOffers }) => favoriteOffers
);

export const getSortedOffers = createSelector(
  getFilteredOffers,
  getSort,
  (offers, sortType) =>
    SORT_METHOD[sortType] ? offers.sort(SORT_METHOD[sortType]) : offers
);

export const getGrouppedFavoriteOffers = createSelector(
  getFavoriteOffers,
  (favoriteOffers) =>
    favoriteOffers.reduce((acc: { [x: string]: Offer[] }, offer: Offer) => {
      const city = offer.city.name;
      if (!acc[city]) {
        acc[city] = [];
      }
      acc[city].push(offer);
      return acc;
    }, {})
);
