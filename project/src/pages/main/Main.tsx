import { useEffect, useRef, useState } from 'react';
import CardList from '../../components/card-list/CardList';
import Map from '../../components/map/Map';
import Header from '../../components/header/Header';
import { useAppSelector } from '../../hooks';
import { getActiveCity, getOffers, getSortedOffers } from '../../store/selectors';
import CityList from '../../components/city-list/cityList';
import { useDispatch } from 'react-redux';
import { fetchOffersAction } from '../../store/api-actions';
import LoadingScreen from '../loading-screen/loading-screen';
import { AppDispatch } from '../../types/state';
import SortPopup from '../../components/sort-popup/sort-popup';


function Main(): JSX.Element {
  const [selectedOfferId, setSelectedOfferId] = useState<number | undefined>(undefined);
  const ref = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch<AppDispatch>();

  const filteredOffers = useAppSelector(getSortedOffers);
  const activeCity = useAppSelector(getActiveCity);
  const offers = useAppSelector(getOffers);


  useEffect(()=> {
    dispatch(fetchOffersAction());
  },[dispatch]);


  function onListItemHover(listItemId: number) {
    const currentOffer = offers.find((offer) => offer.id === listItemId);
    setSelectedOfferId(currentOffer?.id);
  }

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
              <SortPopup parentRef={ref}/>
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
