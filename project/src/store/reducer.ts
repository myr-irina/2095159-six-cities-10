import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../components/const';
import { offers } from '../mocks/offers';
import { fillOfferList, loadOffers, requireAuthorization, setActiveCity } from './action';

const initialState = {
  city: 'Paris',
  offers,
  authorizationStatus: AuthorizationStatus.Unknown
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
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export { reducer };
