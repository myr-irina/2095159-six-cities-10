import { Route, Routes } from 'react-router-dom';
import Main from '../../pages/main/Main';
import Login from '../../pages/login/Login';
import Favorites from '../../pages/favorites/Favorites';
import Room from '../../pages/room/Room';
import { AppRoute, AuthorizationStatus } from '../const';
import PrivateRoute from '../../components/private-routes/private-route';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import browserHistory from '../../browser-history';
import HistoryRouter from '../history-route/history-route';

function App(): JSX.Element {
  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route path={AppRoute.Main} element={<Main />} />
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
    </HistoryRouter>
  );
}

export default App;
