import { createAction } from '@reduxjs/toolkit';
import { AppRoute, AuthorizationStatus } from '../components/const';
import { CommentsData } from '../types/comments-data';
import {Offer} from '../types/offer';
import { SortType } from '../types/sort-type';
import { UserData } from '../types/user-data';

export const setActiveCity = createAction<string>('offers/setActiveCity');
export const setOffers = createAction<Offer[]>('data/setOffers');
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const setError = createAction<string | null>('offers/setError');
export const setDataLoadedStatus = createAction<boolean>('data/setDataLoadedStatus');
export const setLoadingStatus = createAction<boolean>('data/setLoadingStatus');
export const setFavoriteOffers = createAction<Offer[]>('data/setFavoriteOffers');
export const setOffer = createAction<Offer>('data/setOffer');
export const redirectToRoute = createAction<AppRoute>('offer/redirectToRoute');
export const setUser = createAction<UserData | null>('data/setUser');
export const setComments = createAction<CommentsData[]>('comment/setComments');
export const setOffersNearby = createAction<Offer[]>('data/setOffersNearby');
export const setSort = createAction<SortType>('data/setSort');
export const setFavoriteOffer = createAction<Offer>('data/setFavoriteOffer');
export const setOfferWithoutFavorite = createAction<Offer>('data/setOfferWithoutFavorite');
export const updateFavoriteOffers = createAction<{offer: Offer, isFavorite?: boolean}>('data/updateFavoriteOffers');


