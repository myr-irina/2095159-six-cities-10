/* eslint-disable jsx-a11y/anchor-is-valid */
import { useRef, useState } from 'react';
import CardList from '../../components/card-list/CardList';
import { Offer } from '../../types/offer';
import Map from '../../components/map/Map';
import Header from '../../components/header/Header';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import { useAppSelector } from '../../hooks';
import { getFilteredOffers } from '../../store/selectors';
import CityList from '../../components/city-list/cityList';


type MainScreenProps = {
  placesCount: number;
  offers: Offer[];
};

function Main({ placesCount, offers }: MainScreenProps): JSX.Element {
  const [popupIsVisible, setPopupIsVisible] = useState(false);
  const [selectedOfferId, setSelectedOfferId] = useState<number | undefined>(
    undefined
  );
  const ref = useRef(null);

  // const params = [
  //   { title: 'Popular' },
  //   { title: 'Price: low to high' },
  //   { title: 'Price: high to low' },
  //   { title: 'Top rated first' },
  // ];


  // const filteredOffers = offers.filter((offer) => {
  //   if (activeCity === null) {
  //     return true;
  //   } else if (activeCity === offer.city.name) {
  //     return true;
  //   }
  //   return false;
  // });
  // const { city, offers } = useAppSelector((state) => state);

  // const offersList = useAppSelector(getOffers);
  const filteredOffers = useAppSelector(getFilteredOffers);


  function onListItemHover(listItemId: number) {
    const currentOffer = offers.find((offer) => offer.id === listItemId);
    setSelectedOfferId(currentOffer?.id);
  }

  function handlePopupClick() {
    setPopupIsVisible((current) => !current);
  }
  useOnClickOutside(ref, () => setPopupIsVisible(false));

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CityList />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">
                {placesCount} places to stay in Amsterdam
              </b>
              <form
                className="places__sorting"
                action="#"
                method="get"
                ref={ref}
              >
                <span className="places__sorting-caption">Sort by</span>
                <span
                  className="places__sorting-type"
                  tabIndex="0"
                  onClick={handlePopupClick}
                >
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul
                  className={`places__options places__options--custom ${
                    popupIsVisible ? 'places__options--opened' : ''
                  }`}
                >
                  <li
                    className="places__option places__option--active"
                    tabIndex="0"
                  >
                    Popular
                  </li>
                  <li className="places__option" tabIndex="0">
                    Price: low to high
                  </li>
                  <li className="places__option" tabIndex="0">
                    Price: high to low
                  </li>
                  <li className="places__option" tabIndex="0">
                    Top rated first
                  </li>
                </ul>
              </form>
              <CardList
                offers={filteredOffers}
                onListItemHover={onListItemHover}
              />
            </section>
            <div className="cities__right-section">
              <Map offers={filteredOffers} selectedOfferId={selectedOfferId} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
export default Main;
