import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeFavoriteStatusAction } from '../../store/api-actions';
import { getAuthStatus } from '../../store/user-process/selectors';
import { Offer } from '../../types/offer';
import { AuthorizationStatus } from '../const';

type CardScreenProps = {
  offer: Offer;
  onListItemHover: (listItemName: number) => void;
};

function Card({ offer, onListItemHover }: CardScreenProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  const listItemHoverHandler = (event: React.MouseEvent<HTMLInputElement>) => {
    event.preventDefault();
    onListItemHover(offer.id);
  };
  const dispatch = useAppDispatch();

  const changeFavoriteHandler = () => {
    dispatch(changeFavoriteStatusAction({hotelId: offer.id, isFavorite: !offer.isFavorite}));
    setIsFavorite((prev)=>!prev);
  };

  const authStatus = useAppSelector(getAuthStatus);
  const isAuth = authStatus === AuthorizationStatus.Auth;

  return (
    <article className="cities__card place-card" onMouseEnter={listItemHoverHandler}>
      {offer.isPremium &&
      <div className='place-card__mark'>
        <span>Premium</span>
      </div> }
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${offer.id}`}>
          <img
            className="place-card__image"
            src={offer.images[0]}
            width="260"
            height="200"
            alt="Place"
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button ${isFavorite && isAuth ? 'place-card__bookmark-button--active' : 'place-card__bookmark-button'}  button`} type="button" onClick={changeFavoriteHandler}>
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark">{offer.isFavorite}</use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${Math.round(offer.rating) * 20}%` }}></span>
            <span className="visually-hidden">Rating{offer.rating}</span>
          </div>
        </div>
        <Link to={`/offer/${offer.id}`}>
          <h2 className="place-card__name">{offer.title}</h2>
        </Link>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}

export default Card;
