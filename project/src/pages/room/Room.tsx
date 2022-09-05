import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import {
  getOffer,
  getOffersNearby,
} from '../../store/offer-process/selectors';
import {getLoadedData} from '../../store/app-process/selectors';
import {getAuthStatus} from '../../store/user-process/selectors';
import {
  fetchCommentsAction,
  fetchOfferAction,
  fetchOffersNearbyAction,
} from '../../store/api-actions';
import { AppDispatch } from '../../types/state';
import { AuthorizationStatus } from '../../components/const';
import Map from '../../components/map/map-app';
import Header from '../../components/header/header';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import LoadingScreen from '../loading-screen/loading-screen';
import Reviews from '../../components/reviews/reviews';


function Room(): JSX.Element {
  const { hotelId } = useParams();

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchOfferAction(hotelId));
    dispatch(fetchCommentsAction(hotelId));
    dispatch(fetchOffersNearbyAction(hotelId));
  }, [dispatch, hotelId]);

  const offer = useAppSelector(getOffer);
  const offersNearby = useAppSelector(getOffersNearby);
  const authStatus = useAppSelector(getAuthStatus);
  const isAuth = authStatus === AuthorizationStatus.Auth;
  const isLoading = useAppSelector(getLoadedData);

  if(isLoading || !offer) {
    return <LoadingScreen/>;
  }

  if(Number(hotelId) !== offer.id) {
    return <NotFoundScreen/>;
  }

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {offer.images.slice(0,6).map((image) => (
                <li className="property__image-wrapper" key={image}>
                  <img
                    className="property__image"
                    src={image}
                    alt={offer.type}
                  />
                </li>
              ))}
            </div>
          </div>

          <div className="property__container container">
            <div className="property__wrapper" style={{position: 'relative'}}>
              <div className="property__mark">
                <span>Premium {offer.isPremium}</span>
              </div>
              <div className="property__name-wrapper">
                <h1 className="property__name">{offer.title}</h1>

                <button
                  className="property__bookmark-button button"
                  type="button"
                  style={{right: '60px'}}
                >
                  <svg
                    className="property__bookmark-icon"
                    width="31"
                    height="33"
                  >
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">
                    To bookmarks{offer.isFavorite}
                  </span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{ width: `${Math.round(offer.rating) * 20}%` }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">
                  {Math.round(offer.rating)}
                </span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {offer?.type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {offer?.bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {offer?.maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{offer?.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {offer.goods.map((item) => (
                    <li className="property__inside-item" key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className={`property__avatar-wrapper ${offer.host.isPro ? 'property__avatar-wrapper--pro' : ''} user__avatar-wrapper`}>
                    <img
                      className="property__avatar user__avatar"
                      src={`/${offer.host.avatarUrl}`}
                      width="100%"
                      height="100%"
                      alt="Host avatar"
                    />
                  </div>
                  <span className="property__user-name">
                    {offer.host.name}
                  </span>
                  <span className="property__user-status">
                    {offer.host.isPro ? 'Pro' : ''}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">{offer.description}</p>
                </div>
              </div>

              <Reviews/>
            </div>
          </div>
          <section className="property__map map">
            <Map offers={[offer, ...offersNearby]} selectedOfferId={Number(hotelId)}/>
          </section>
        </section>

        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighbourhood
            </h2>
            <div className="near-places__list places__list">
              {offersNearby.map((offerNearby) => (
                <article
                  className="near-places__card place-card"
                  key={offerNearby.id}
                >
                  <div className="near-places__image-wrapper place-card__image-wrapper">
                    <Link to="/">
                      <img
                        className="place-card__image"
                        src={offerNearby.images[0]}
                        width="260"
                        height="200"
                        alt={offerNearby.title}
                      />
                    </Link>
                  </div>
                  <div className="place-card__info">
                    <div className="place-card__price-wrapper">
                      <div className="place-card__price">
                        <b className="place-card__price-value">&euro;{offerNearby.price}</b>
                        <span className="place-card__price-text">
                          &#47;&nbsp;night
                        </span>
                      </div>
                      <button
                        className={`place-card__bookmark-button ${isAuth ? 'place-card__bookmark-button--active' : ''}  button`}
                        type="button"
                      >
                        <svg
                          className="place-card__bookmark-icon"
                          width="18"
                          height="19"
                        >
                          <use xlinkHref="#icon-bookmark"></use>
                        </svg>
                        <span className="visually-hidden">In bookmarks</span>
                      </button>
                    </div>
                    <div className="place-card__rating rating">
                      <div className="place-card__stars rating__stars">
                        <span style={{ width: '80%' }}></span>
                        <span className="visually-hidden">Rating {offerNearby.rating}</span>
                      </div>
                    </div>
                    <h2 className="place-card__name">
                      <Link to={`/offer/${offerNearby.id}`}>{offerNearby.title}</Link>
                    </h2>
                    <p className="place-card__type">{offerNearby.type}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Room;
