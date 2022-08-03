import { createReducer } from '@reduxjs/toolkit';
import { offers } from '../mocks/offers';
import { changeCity } from './action';


const initialState = {
  city: offers[0].city.name,
  offers: offers,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state) => {
      state.offers = offers.filter((offer) => offer.city.name === state.city);
    });
});

export {reducer};
