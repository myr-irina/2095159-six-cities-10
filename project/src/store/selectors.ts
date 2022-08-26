import { createSelector } from '@reduxjs/toolkit';
import { State } from '../types/state';
const getStore = (store: State) => store;


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

