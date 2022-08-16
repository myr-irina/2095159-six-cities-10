import { createReducer } from '@reduxjs/toolkit';
import { offers } from '../mocks/offers';
import { fillOfferList, loadOffers, setActiveCity } from './action';

const initialState = {
  city: 'Paris',
  offers,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setActiveCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(fillOfferList, (state) => {
      state.offers = offers.filter((offer) => offer.city.name === state.city);
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    });
});

export { reducer };
