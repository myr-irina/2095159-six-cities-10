import { createSelector } from '@reduxjs/toolkit';
import { NameSpace } from '../../components/const';
import { State } from '../../types/state';

const getUserStore = (store: State) => store[NameSpace.User];


export const getUser = createSelector(getUserStore, ({ user }) => user);
export const getAuthStatus = createSelector(
  getUserStore,
  ({ authorizationStatus }) => authorizationStatus
);

