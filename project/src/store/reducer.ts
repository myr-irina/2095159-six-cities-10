import { createReducer } from '@reduxjs/toolkit';
import { offers } from '../mocks/offers';
import { fillOfferList, setActiveCity, setOffersQuantity } from './action';

const initialState = {
  city: 'Paris',
  offers,
  countOffers: 0,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setActiveCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(fillOfferList, (state) => {
      state.offers = offers.filter(
        (offer) => offer.city.name === state.city
      );
    })
    .addCase(setOffersQuantity, (state, action) => {
      state.countOffers = action.payload;
    });
});

export { reducer };
