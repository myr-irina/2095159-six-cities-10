import { createAction } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../components/const';
import {Offer} from '../types/offer';

export const setActiveCity = createAction<string>('offers/setActiveCity');
export const fillOfferList = createAction('offers/fillOfferList');
export const loadOffers = createAction<Offer[]>('data/loadOffers');
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const setError = createAction<string | null>('offers/setError');
