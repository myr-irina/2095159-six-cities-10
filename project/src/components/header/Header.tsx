import Logo from '../logo/logo';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { Link } from 'react-router-dom';
import { logoutAction } from '../../store/api-actions';
import {
  getFavoriteOffers,
} from '../../store/offers-process/selectors';
import { getUser, getAuthStatus } from '../../store/user-process/selectors';
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
                >
                  <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                  <Link
                    style={{ cursor: 'pointer' }}
                    to={APIRoute.Favorite}
                  >
                    <span className="header__user-name user__name">
                      {isAuth && user ? user.email : ''}
                    </span>
                  </Link>
                  <span className="header__favorite-count">
                    {isAuth ? favoriteOffers.length : ''}
                  </span>
                </div>
              </li>
              <li className="header__nav-item">
                <button
                  className="header__nav-link"
                  style={{cursor: 'pointer', border: 'none'}}
                  onClick={(evt) => {
                    evt.preventDefault();
                    dispatch(logoutAction());
                  }}
                >
                  <span className="header__signout" style={{padding: '0', backgroundColor: 'transparent'}}>
                    {isAuth ? 'Sign out' : 'Sign in'}
                  </span>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
