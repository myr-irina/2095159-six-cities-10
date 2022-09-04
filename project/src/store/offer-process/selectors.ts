import { createSelector } from '@reduxjs/toolkit';
import { NameSpace } from '../../components/const';
import { State } from '../../types/state';

const getStore = (store: State) => store[NameSpace.Offer];

export const getOffersNearby = createSelector(getStore, ({ nearby }) => nearby);
export const getComments = createSelector(getStore, ({ comments }) => comments);
export const getOffer = createSelector(getStore, ({ offer }) => offer);

