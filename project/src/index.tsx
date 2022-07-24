import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { offers } from './mocks/offers';

const Places = {
  PLACES_COUNT: 312,
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App placesCount={Places.PLACES_COUNT} offers={offers} />
  </React.StrictMode>
);
