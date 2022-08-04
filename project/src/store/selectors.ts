import { createSelector } from '@reduxjs/toolkit';
import { State } from '../types/state';
const getStore = (store: State) => store;

export const getActiveCity = createSelector(getStore, ({city})=> city );
export const getOffers = createSelector(getStore, ({offers})=> offers );
// export const getFilteredOffers = createSelector(getOffers, ({offers, city})=> offers );
