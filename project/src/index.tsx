import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { offers } from './mocks/offers';
import { Provider } from 'react-redux';
import { store } from './store';

const Places = {
  PLACES_COUNT: 312,
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App placesCount={Places.PLACES_COUNT} offers={offers} />
    </Provider>
  </React.StrictMode>
);
