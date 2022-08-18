import { useEffect, useRef, useState } from 'react';
import CardList from '../../components/card-list/CardList';
import Map from '../../components/map/Map';
import Header from '../../components/header/Header';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import { useAppSelector } from '../../hooks';
import { getActiveCity, getFilteredOffers, getOffers } from '../../store/selectors';
import CityList from '../../components/city-list/cityList';
import { useDispatch } from 'react-redux';
import { fetchOffersAction } from '../../store/api-actions';
import LoadingScreen from '../loading-screen/loading-screen';
import { AppDispatch } from '../../types/state';


function Main(): JSX.Element {
  const [popupIsVisible, setPopupIsVisible] = useState(false);
  const [selectedOfferId, setSelectedOfferId] = useState<number | undefined>(
    undefined
  );
  const ref = useRef(null);
  const dispatch = useDispatch<AppDispatch>();

  const filteredOffers = useAppSelector(getFilteredOffers);
  const activeCity = useAppSelector(getActiveCity);
  const offers = useAppSelector(getOffers);

  useEffect(()=> {
    dispatch(fetchOffersAction());
  },[dispatch]);


  function onListItemHover(listItemId: number) {
    const currentOffer = offers.find((offer) => offer.id === listItemId);
    setSelectedOfferId(currentOffer?.id);
  }

  function handlePopupClick() {
    setPopupIsVisible((current) => !current);
  }
  useOnClickOutside(ref, () => setPopupIsVisible(false));

  if(!filteredOffers.length) {
    return <LoadingScreen/>;
  }

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
              <p className="places__found">
                {filteredOffers.length} places to stay in {activeCity}
              </p>
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
