import CardListFavorites from '../../components/card-list-favorites/CardListFavorites';
import Logo from '../../components/logo/logo';
import { Offer } from '../../types/offer';

type FavoriteScreenProps = {
  offers: Offer[];
};

function Favorites({ offers }: FavoriteScreenProps) {
  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a
                    className="header__nav-link header__nav-link--profile"
                    href="/"
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">
                      Oliver.conner@gmail.com
                    </span>
                    <span className="header__favorite-count">3</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="/">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

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
                  <CardListFavorites offers={offers} />
                </div>
              </li>

              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="/">
                      <span>Cologne</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  <CardListFavorites offers={offers} />
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
