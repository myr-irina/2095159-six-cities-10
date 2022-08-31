import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../components/const';
import { CommentsData } from '../types/comments-data';
import { Offer } from '../types/offer';
import { SortType } from '../types/sort-type';
import { UserData } from '../types/user-data';
import {
  setComments,
  requireAuthorization,
  setActiveCity,
  setDataLoadedStatus,
  setError,
  setFavoriteOffers,
  setOffer,
  setOffers,
  setUser,
  setOffersNearby,
  setSort,
  setFavoriteOffer,
  updateFavoriteOffers,
} from './action';

type InitialState = {
  id: number;
  city: string;
  offers: Offer[];
  offer: Offer;
  favoriteOffers: Offer[];
  authorizationStatus: AuthorizationStatus;
  error: string | null;
  isDataLoaded: boolean;
  user: UserData | null;
  comments: CommentsData[];
  sort: SortType;
};

const initialState: InitialState = {
  id: 1,
  city: 'Paris',
  offers: [],
  offer: {
    id: 1,
    bedrooms: 0,
    city: {
      location: {
        latitude: 0,
        longitude: 0,
        zoom: 0,
      },
      name: '',
    },
    description: '',
    goods: [],
    location: {
      latitude: 0,
      longitude: 0,
      zoom: 0,
    },
    images: [],
    isFavorite: false,
    isPremium: false,
    previewImage: '',
    maxAdults: 0,
    host: {
      avatarUrl: '',
      id: 1,
      isPro: false,
      name: '',
    },
    price: 0,
    rating: 0,
    title: '',
    type: '',
  },
  favoriteOffers: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
  isDataLoaded: false,
  user: null,
  comments: [],
  sort: SortType.Popular,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setActiveCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setDataLoadedStatus, (state, action) => {
      state.isDataLoaded = action.payload;
    })
    .addCase(setFavoriteOffers, (state, action) => {
      state.favoriteOffers = action.payload;
    })
    .addCase(setOffer, (state, action) => {
      state.offer = action.payload;
    })
    .addCase(setUser, (state, action) => {
      state.user = action.payload;
    })
    .addCase(setComments, (state, action) => {
      state.comments = action.payload;
    })
    .addCase(setOffersNearby, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setSort, (state, action) => {
      state.sort = action.payload;
    })
    .addCase(setFavoriteOffer, (state, action) => {
      state.offers = state.offers.map((offer)=> {
        if(offer.id === action.payload.id) {
          offer.isFavorite = action.payload.isFavorite;
        }
        return offer;
      });
    })
    .addCase(updateFavoriteOffers, (state, action) => {
      const {offer, isFavorite} = action.payload;
      if(isFavorite) {
        state.favoriteOffers.push(offer);
      } else {
        state.favoriteOffers = state.favoriteOffers.filter((item)=> item.id !== offer.id);
      }
    });
});

export { reducer };

