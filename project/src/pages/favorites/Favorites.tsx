import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import CardListFavorites from '../../components/card-list-favorites/CardListFavorites';
import Header from '../../components/header/Header';
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
    </li>));

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {favoriteList}
            </ul>
          </section>
        </div>
      </main>

      <footer className="footer container">
        <div style={{ width: '64px', height: '33px' }}>
          <Logo />
        </div>
      </footer>
    </div>
  );
}

export default Favorites;
