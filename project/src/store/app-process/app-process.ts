import {createSlice} from '@reduxjs/toolkit';
import { NameSpace } from '../../components/const';
import { SortType } from '../../types/sort-type';
import { AppProcess } from '../../types/state';


const initialState: AppProcess = {
  isLoading: false,
  isDataLoaded: false,
  error: null,
  city: 'Paris',
  sort: SortType.Popular,
};

export const appProcess = createSlice({
  name: NameSpace.App,
  initialState,
  reducers: {
    setActiveCity: (state, action) => {
      state.city = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setDataLoadedStatus: (state, action) => {
      state.isDataLoaded = action.payload;
    },
    setLoadingStatus: (state, action) => {
      state.isLoading = action.payload;
    },
    setSort: (state, action) => {
      state.sort = action.payload;
    },
  },
});

export const {setActiveCity, setError, setDataLoadedStatus, setLoadingStatus, setSort} = appProcess.actions;
