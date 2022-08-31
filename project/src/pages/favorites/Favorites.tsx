import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import CardListFavorites from '../../components/card-list-favorites/CardListFavorites';
import Header from '../../components/header/Header';
import Logo from '../../components/logo/logo';
import { useAppSelector } from '../../hooks';
import { fetchFavoriteOffersAction } from '../../store/api-actions';
import { getFavoriteOffers } from '../../store/selectors';
import { AppDispatch } from '../../types/state';

function Favorites() {
  const favoriteOffers = useAppSelector(getFavoriteOffers);
  // eslint-disable-next-line no-console
  console.log({ favoriteOffers });

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchFavoriteOffersAction());
  }, [dispatch]);

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="/">
                      <span>Amsterdam</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  <CardListFavorites offers={favoriteOffers} />
                </div>
              </li>
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
