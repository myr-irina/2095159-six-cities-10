import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../../pages/main/Main';
import Login from '../../pages/login/Login';
import Favorites from '../../pages/favorites/Favorites';
import Room from '../../pages/room/Room';
import { AppRoute, AuthorizationStatus } from '../const';
import PrivateRoute from '../../components/private-routes/private-route';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import { Offer } from '../../types/offers';

type AppScreenProps = {
  placesCount: number;
  offers: Offer[];
};

function App({ placesCount, offers }: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<Main placesCount={placesCount} offers={offers} />}
        />
        <Route path={AppRoute.Login} element={<Login />} />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <Favorites />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Room} element={<Room />} />
        <Route path={AppRoute.PageNotFound} element={<NotFoundScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
