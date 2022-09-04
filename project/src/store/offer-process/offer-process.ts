import {createSlice} from '@reduxjs/toolkit';
import { NameSpace } from '../../components/const';
import { OfferProcess } from '../../types/state';


const initialState: OfferProcess = {
  offer: null,
  comments: [],
  nearby: [],
};

export const offerProcess = createSlice({
  name: NameSpace.Offer,
  initialState,
  reducers: {
    setOffer: (state, action) => {
      state.offer = action.payload;
    },
    setComments: (state, action) => {
      state.comments = action.payload;
    },
    setOffersNearby: (state, action) => {
      state.nearby = action.payload;
    }
  },
});

export const {setOffer, setComments, setOffersNearby } = offerProcess.actions;
