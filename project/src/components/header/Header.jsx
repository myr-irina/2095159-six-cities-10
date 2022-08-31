import Logo from '../logo/logo';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { Link } from 'react-router-dom';
import { logoutAction } from '../../store/api-actions';
import {
  getUser,
  getAuthStatus,
  getFavoriteOffers,
} from './../../store/selectors';
import { APIRoute, AuthorizationStatus } from '../const';


function Header() {
  const dispatch = useAppDispatch();

  const authStatus = useAppSelector(getAuthStatus);
  const isAuth = authStatus === AuthorizationStatus.Auth;
  const user = useAppSelector(getUser);

  const favoriteOffers = useAppSelector(getFavoriteOffers);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo />
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <div
                  className="header__nav-link header__nav-link--profile"
                  href="/"
                >
                  <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                  <Link
                    style={{ cursor: 'pointer' }}
                    to={APIRoute.Favorite}
                  >
                    <span className="header__user-name user__name">
                      {isAuth ? user.email : ''}
                    </span>
                  </Link>
                  <span className="header__favorite-count">
                    {isAuth ? favoriteOffers.length : ''}
                  </span>
                </div>
              </li>
              <li className="header__nav-item">
                <Link
                  className="header__nav-link"
                  onClick={(evt) => {
                    evt.preventDefault();
                    dispatch(logoutAction());
                  }}
                  to="#"
                >
                  <span className="header__signout" style={{padding: '0'}}>
                    {isAuth ? 'Sign out' : 'Sign in'}
                  </span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
