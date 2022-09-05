import { useEffect, useState } from 'react';
import CardList from '../../components/card-list/card-list';
import Map from '../../components/map/map';
import Header from '../../components/header/header';
import { useAppSelector } from '../../hooks';
import {
  getOffers,
  getSortedOffers,
} from '../../store/offers-process/selectors';

import { getActiveCity } from '../../store/app-process/selectors';
import CityList from '../../components/city-list/city-list';
import { useDispatch } from 'react-redux';
import {
  fetchOffersAction,
  fetchFavoriteOffersAction,
} from '../../store/api-actions';
import LoadingScreen from '../loading-screen/loading-screen';
import { AppDispatch } from '../../types/state';
import SortPopup from '../../components/sort-popup/sort-popup';

function Main(): JSX.Element {
  const [selectedOfferId, setSelectedOfferId] = useState<number | undefined>(
    undefined
  );
  const dispatch = useDispatch<AppDispatch>();

  const filteredOffers = useAppSelector(getSortedOffers);
  const activeCity = useAppSelector(getActiveCity);
  const offers = useAppSelector(getOffers);

  useEffect(() => {
    dispatch(fetchOffersAction());
    dispatch(fetchFavoriteOffersAction());
  }, [dispatch]);

  function onListItemHover(listItemId: number) {
    const currentOffer = offers.find((offer) => offer.id === listItemId);
    setSelectedOfferId(currentOffer?.id);
  }

  if (!filteredOffers.length) {
    return <LoadingScreen />;
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
                {filteredOffers.length > 0
                  ? `${filteredOffers.length} places to stay in ${activeCity}`
                  : 'No places to stay available'}
              </p>
              <SortPopup />
              {filteredOffers.length > 0 && (
                <CardList
                  offers={filteredOffers}
                  onListItemHover={onListItemHover}
                />
              )}
            </section>
            <div className="cities__right-section">
              {filteredOffers.length > 0 && (
                <Map
                  offers={filteredOffers}
                  selectedOfferId={selectedOfferId}
                />
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
export default Main;
