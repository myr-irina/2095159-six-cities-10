import { AuthorizationStatus, AppRoute } from '../../components/const';
import { Navigate } from 'react-router-dom';

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
};

function PrivateRoute(props: PrivateRouteProps) {
  const { authorizationStatus, children } = props;
  // eslint-disable-next-line no-console
  console.log({authorizationStatus});
  return authorizationStatus === AuthorizationStatus.Auth ? (
    children
  ) : (
    <Navigate to={AppRoute.Login} />
  );
}

export default PrivateRoute;
