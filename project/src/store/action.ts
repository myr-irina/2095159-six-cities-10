import { createAction } from '@reduxjs/toolkit';
import { AppRoute, AuthorizationStatus } from '../components/const';
import {Offer} from '../types/offer';
import { UserData } from '../types/user-data';

export const setActiveCity = createAction<string>('offers/setActiveCity');
export const setOffers = createAction<Offer[]>('data/setOffers');
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const setError = createAction<string | null>('offers/setError');
export const setDataLoadedStatus = createAction<boolean>('data/setDataLoadedStatus');
export const setFavoriteOffers = createAction<Offer[]>('data/setFavoriteOffers');
export const setOffer = createAction<Offer>('data/setOffer');
export const redirectToRoute = createAction<AppRoute>('offer/redirectToRoute');
export const setUser = createAction<UserData | null>('data/setUser');


