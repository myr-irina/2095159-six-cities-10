import {createSlice} from '@reduxjs/toolkit';
import { AuthorizationStatus, NameSpace } from '../../components/const';
import { UserProcess } from '../../types/state';


const initialState: UserProcess = {
  user: null,
  authorizationStatus: AuthorizationStatus.Unknown,
};

export const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {
    requireAuthorization: (state, action) => {
      state.authorizationStatus = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    }
  },
});

export const {requireAuthorization, setUser} = userProcess.actions;
