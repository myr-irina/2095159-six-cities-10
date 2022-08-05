import { createSelector } from '@reduxjs/toolkit';
import { State } from '../types/state';
const getStore = (store: State) => store;

export const getActiveCity = createSelector(getStore, ({city})=> city );
export const getOffers = createSelector(getStore, ({offers})=> offers );

export const getFilteredOffers = createSelector(getStore, ({offers, city}) => offers.filter((offer) => offer.city.name === city));

// export const sortItemsByCategory = createSelector(
//   [
//     // Usual first input - extract value from `state`
//     getOffers,
//     // Take the second arg, `category`, and forward to the output selector
//     (offers, category) => category
//   ],
//   // Output selector gets (`items, category)` as args
//   (items, category) => items.sort((item) => item.price === category)
// );
