import {createSlice} from '@reduxjs/toolkit';
import { NameSpace } from '../../components/const';
import { OffersProcess } from '../../types/state';


const initialState: OffersProcess = {
  offers: [],
  favoriteOffers: [],
};

export const offersProcess = createSlice({
  name: NameSpace.Offer,
  initialState,
  reducers: {
    setOffers: (state, action) => {
      state.offers = action.payload;
    },
    setFavoriteOffers: (state, action) => {
      state.favoriteOffers = action.payload;
    },
    setFavoriteOffer: (state, action) => {
      state.offers = state.offers.map((offer)=> {
        if(offer.id === action.payload.id) {
          offer.isFavorite = action.payload.isFavorite;
        }
        return offer;
      });
    },
    updateFavoriteOffers: (state, action) => {
      const {offer, isFavorite} = action.payload;
      if(isFavorite) {
        state.favoriteOffers.push(offer);
      } else {
        state.favoriteOffers = state.favoriteOffers.filter((item)=> item.id !== offer.id);
      }
    },
  },
});

export const {setOffers, setFavoriteOffers, setFavoriteOffer, updateFavoriteOffers } = offersProcess.actions;
