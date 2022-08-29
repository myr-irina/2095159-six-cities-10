import { createSelector } from '@reduxjs/toolkit';
import { Offer } from '../types/offer';
import { SortType } from '../types/sort-type';
import { State } from '../types/state';
const getStore = (store: State) => store;


const SORT_METHOD: {[key: string] : (a: Offer, b: Offer)=>number} = {
  [SortType.Price_high_to_low] : (a: Offer, b: Offer) => b.price - a.price,
  [SortType.Price_low_to_high] : (a: Offer, b: Offer) => a.price - b.price,
  [SortType.Top_rated_first] : (a: Offer, b: Offer) => b.rating - a.rating,
};

export const getActiveCity = createSelector(getStore, ({ city }) => city);
export const getOffers = createSelector(getStore, ({ offers }) => offers);
export const getFilteredOffers = createSelector(getStore, ({ offers, city }) =>
  offers.filter((offer) => offer.city.name === city));
export const getFavoriteOffers = createSelector(getStore, ({ favoriteOffers }) => favoriteOffers);
export const getOffer = createSelector(getStore, ({ offer }) => offer);
export const getUser = createSelector(getStore, ({ user }) => user);
export const getAuthStatus = createSelector(getStore, ({authorizationStatus})=> authorizationStatus);
export const getLoadedData = createSelector(getStore, ({isDataLoaded}) => isDataLoaded);
export const getComments = createSelector(getStore, ({ comments }) => comments);
export const getOffersNearby = createSelector(getStore, ({ offers }) => offers);
export const getSort = createSelector(getStore, ({ sort }) => sort);
export const getSortedOffers = createSelector(getFilteredOffers, getSort, (offers, sortType) => {
  // eslint-disable-next-line no-console
  console.log({offers, sortType});
  return SORT_METHOD[sortType] ? offers.sort(SORT_METHOD[sortType]) : offers;
});


