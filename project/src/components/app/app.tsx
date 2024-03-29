import { Route, Routes } from 'react-router-dom';
import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import Favorites from '../../pages/favorites/favorites';
import Room from '../../pages/room/room';
import { AppRoute } from '../const';
import PrivateRoute from '../../components/private-routes/private-route';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import browserHistory from '../../browser-history';
import HistoryRouter from '../history-route/history-route';
import { useAppSelector } from '../../hooks';
import { getAuthStatus } from '../../store/user-process/selectors';
import {getLoadingStatus} from '../../store/app-process/selectors';
import LoadingScreen from '../../pages/loading-screen/loading-screen';

function App(): JSX.Element {
  const authStatus = useAppSelector(getAuthStatus);
  const isLoading = useAppSelector(getLoadingStatus);

  if(isLoading) {
    return <LoadingScreen/>;
  }


  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route path={AppRoute.Main} element={<Main />} />
        <Route path={AppRoute.Login} element={<Login />} />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={authStatus}>
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
