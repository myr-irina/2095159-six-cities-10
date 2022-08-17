import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../components/const';
import { Offer } from '../types/offer';
import {
  fillOfferList,
  loadOffers,
  requireAuthorization,
  setActiveCity,
  setError,
} from './action';

type InitialState = {
  city: string;
  offers: Offer[];
  authorizationStatus: AuthorizationStatus;
  error: string | null,
};

const initialState: InitialState = {
  city: 'Paris',
  offers: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
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
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

export { reducer };
