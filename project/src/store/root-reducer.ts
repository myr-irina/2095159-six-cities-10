import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../components/const';
import { appProcess } from './app-process/app-process';
import { offerProcess } from './offer-process/offer-process';
import { offersProcess } from './offers-process/offers-process';
import {userProcess} from './user-process/user-process';


export const rootReducer = combineReducers({
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.App]: appProcess.reducer,
  [NameSpace.Offer]: offerProcess.reducer,
  [NameSpace.Offers]: offersProcess.reducer,
});
