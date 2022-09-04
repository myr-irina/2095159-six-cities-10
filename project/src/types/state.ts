import { AuthorizationStatus } from '../components/const';
import { store } from '../store';
import { CommentsData } from './comments-data';
import { Offer } from './offer';
import { SortType } from './sort-type';
import { UserData } from './user-data';

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


export type UserProcess = {
  user: UserData | null;
  authorizationStatus: AuthorizationStatus;
};

export type AppProcess = {
 isDataLoaded: boolean;
 isLoading: boolean;
 city: string;
 error: string | null;
 sort: SortType;
};

export type OfferProcess = {
  offer: Offer | null;
  comments: CommentsData[];
  nearby: Offer[];
 };


export type OffersProcess = {
  offers: Offer[];
  favoriteOffers: Offer[];
 };
