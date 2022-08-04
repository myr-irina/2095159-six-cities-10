import { createReducer } from '@reduxjs/toolkit';
import { offers } from '../mocks/offers';
import { setActiveCity } from './action';

const initialState = {
  city: 'Paris',
  offers
};

const reducer = createReducer(initialState, (builder) => {
  builder
    // .addCase(fillOfferList, (state) => {
    //   state.offersFiltered = offers.filter(
    //     (offer) => offer.city.name === state.city
    //   );
    // });
    .addCase(setActiveCity, (state, action) => {
      state.city = action.payload;
    });
});

export { reducer };
