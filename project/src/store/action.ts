import { createAction } from '@reduxjs/toolkit';

export const setActiveCity = createAction<string>('offers/setActiveCity');
export const fillOfferList = createAction('offers/fillOfferList');
