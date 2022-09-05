import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state.js';
import {
  redirectToRoute,
} from './action';
import {setFavoriteOffers, setFavoriteOffer, updateFavoriteOffers } from './offers-process/offers-process';
import {setOffers} from './offers-process/offers-process';
import { setOffer, setComments, setOffersNearby} from './offer-process/offer-process';
import { setError, setDataLoadedStatus, setLoadingStatus } from './app-process/app-process';
import { saveToken, dropToken } from '../components/services/token';
import {
  APIRoute,
  AppRoute,
  AuthorizationStatus,
  TIMEOUT_SHOW_ERROR,
} from '../components/const';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { Offer } from '../types/offer';
import { store } from './';
import { CommentsData } from '../types/comments-data';
import { CommentData } from '../types/comment-data';
import { requireAuthorization, setUser } from './user-process/user-process';
import { processErrorHandle } from '../components/services/process-error-handle';


export const clearErrorAction = createAsyncThunk('data/clearError', () => {
  setTimeout(() => store.dispatch(setError(null)), TIMEOUT_SHOW_ERROR);
});

export const fetchOffersAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchOffers', async (_arg, { dispatch, extra: api }) => {
  dispatch(setDataLoadedStatus(true));
  const { data } = await api.get<Offer[]>(APIRoute.Offers);
  dispatch(setOffers(data));
  dispatch(setDataLoadedStatus(false));
});

export const fetchOfferAction = createAsyncThunk<
  void,
  string | undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchOffer', async (id, { dispatch, extra: api }) => {
  dispatch(setDataLoadedStatus(true));
  const { data } = await api.get<Offer>(`${APIRoute.Offers}/${id}`);
  dispatch(setOffer(data));
  dispatch(setDataLoadedStatus(false));
});


export const checkAuthAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/checkAuth', async (_arg, { dispatch, extra: api }) => {
  dispatch(setLoadingStatus(true));
  try {
    const { data } = await api.get(APIRoute.Login);
    dispatch(setUser(data));
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  } catch {
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  }
  dispatch(setLoadingStatus(false));
});

export const loginAction = createAsyncThunk<
  void,
  AuthData,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/login', async ({ email, password }, { dispatch, extra: api }) => {
  const { data } = await api.post<UserData>(APIRoute.Login, {
    email,
    password,
  });
  saveToken(data.token);
  dispatch(setUser(data));
  dispatch(requireAuthorization(AuthorizationStatus.Auth));
  dispatch(redirectToRoute(AppRoute.Main));
});

export const logoutAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/logout', async (_arg, { dispatch, extra: api }) => {
  await api.delete(APIRoute.Logout);
  dropToken();
  dispatch(setUser(null));
  dispatch(setFavoriteOffers([]));
  dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  dispatch(redirectToRoute(AppRoute.Login));
});

export const fetchCommentsAction = createAsyncThunk<
  void,
  string | undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchComments', async (id, { dispatch, extra: api }) => {

  const { data } = await api.get<CommentsData[]>(`${APIRoute.Comments}/${id}`);
  dispatch(setDataLoadedStatus(true));
  dispatch(setComments(data));
  dispatch(setDataLoadedStatus(false));
});

export const addCommentAction = createAsyncThunk<
  void,
  CommentData & { id: string },
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  'data/addComment',
  async ({ id, comment, rating }, { dispatch, extra: api }) => {
    try {
      const { data } = await api.post<CommentsData[]>(
        `${APIRoute.Comments}/${id}`,
        { comment, rating }
      );
      dispatch(setComments(data));
    } catch(err) {
      processErrorHandle('Не получилось добавить отзыв.');
    }
  }
);

export const fetchOffersNearbyAction = createAsyncThunk<
  void,
  string | undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchOffersNearby', async (id, { dispatch, extra: api }) => {
  dispatch(setDataLoadedStatus(true));
  const { data } = await api.get<Offer[]>(`${APIRoute.Offers}/${id}/nearby`);
  dispatch(setOffersNearby(data));
  dispatch(setDataLoadedStatus(false));
});

export const fetchFavoriteOffersAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchFavoriteOffers', async (_arg, { dispatch, extra: api }) => {
  dispatch(setDataLoadedStatus(true));
  const { data } = await api.get<Offer[]>(APIRoute.Favorite);
  dispatch(setFavoriteOffers(data));
  dispatch(setDataLoadedStatus(false));
});

export const changeFavoriteStatusAction = createAsyncThunk<
void,
{
  hotelId: number;
  isFavorite?: boolean;
},
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/changeFavoriteStatusAction', async ({ hotelId , isFavorite }, { dispatch, extra: api }) => {
  try {
    const isFavoriteStatus = isFavorite ? 1 : 0;
    const { data } = await api.post<Offer>(
      `${APIRoute.Favorite}/${hotelId}/${isFavoriteStatus}`
    );

    dispatch(setDataLoadedStatus(true));
    dispatch(setFavoriteOffer(data));
    dispatch(updateFavoriteOffers({offer: data, isFavorite}));
    dispatch(setDataLoadedStatus(false));
  } catch {
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    dispatch(redirectToRoute(AppRoute.Login));
  }

});
