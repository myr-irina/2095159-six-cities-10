import { createAction } from '@reduxjs/toolkit';
import {Offer} from '../types/offer';

export const setActiveCity = createAction<string>('offers/setActiveCity');
export const fillOfferList = createAction('offers/fillOfferList');
export const loadOffers = createAction<Offer[]>('data/loadOffers');
