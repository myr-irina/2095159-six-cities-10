import { createAction } from '@reduxjs/toolkit';

export const setActiveCity = createAction<string>('offers/setActiveCity');
export const fillOfferList = createAction('offers/fillOfferList');
export const filterOffers = createAction('offers/filterOffers');
export const setOffersQuantity = createAction<number>('offers/setOffersQuantity');
