export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorite',
  Room = '/offer/:hotelId',
  PageNotFound = '*',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum APIRoute {
  Offers = '/hotels',
  Offer = '/hotels/{hotelId}',
  OffersNearBy = '/hotels/{hotelId}/nearby',
  Favorite = '/favorite',
  Comments = '/comments',
  Login = '/login',
  Logout = '/logout',
}

export const URL_MARKER_DEFAULT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

export const tabs = [
  { title: 'Paris' },
  { title: 'Cologne' },
  { title: 'Brussels' },
  { title: 'Amsterdam' },
  { title: 'Hamburg' },
  { title: 'Dusseldorf' },
];

export const TIMEOUT_SHOW_ERROR = 5000;

export enum NameSpace {
  User = 'USER',
  App = 'APP',
  Offer = 'OFFER',
  Offers = 'OFFERS',
}
