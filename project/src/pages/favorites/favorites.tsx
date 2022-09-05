import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import CardListFavorites from '../../components/card-list-favorites/card-list-favorites';
import Header from '../../components/header/header';
import Logo from '../../components/logo/logo';
import { useAppSelector } from '../../hooks';
import { fetchFavoriteOffersAction } from '../../store/api-actions';
import { getGrouppedFavoriteOffers } from '../../store/offers-process/selectors';
import { AppDispatch } from '../../types/state';

function Favorites() {
  const favoriteOffers = useAppSelector(getGrouppedFavoriteOffers);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchFavoriteOffersAction());
  }, [dispatch]);

  const favoriteList = Object.keys(favoriteOffers).map((city) => (
    <li className="favorites__locations-items" key={city}>
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="/">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        <CardListFavorites offers={favoriteOffers[city]} />
      </div>
    </li>
  ));

  return (
    <div className="page">
      <Header />
      {favoriteList.length > 0 ? (
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">{favoriteList}</ul>
            </section>
          </div>
        </main>
      ) : (
        <main className="page__main page__main--favorites page__main--favorites-empty" style={{height: '100vh'}}>
          <div className="page__favorites-container container">
            <section className="favorites favorites--empty">
              <h1 className="visually-hidden">Favorites (empty)</h1>
              <div className="favorites__status-wrapper">
                <b className="favorites__status">Nothing yet saved.</b>
                <p className="favorites__status-description">
                  Save properties to narrow down search or plan your future
                  trips.
                </p>
              </div>
            </section>
          </div>
        </main>
      )}

      <footer className="footer container">
        <div style={{ width: '64px', height: '33px' }}>
          <Logo />
        </div>
      </footer>
    </div>
  );
}

export default Favorites;
