import { createSelector } from '@reduxjs/toolkit';
import { NameSpace } from '../../components/const';
import { State } from '../../types/state';

const getStore = (store: State) => store[NameSpace.App];

export const getActiveCity = createSelector(getStore, ({ city }) => city);
export const getLoadedData = createSelector(
  getStore,
  ({ isDataLoaded }) => isDataLoaded
);
export const getSort = createSelector(getStore, ({ sort }) => sort);
export const getLoadingStatus = createSelector(
  getStore,
  ({ isLoading }) => isLoading
);
export const getError = createSelector(getStore, ({ error }) => error);

