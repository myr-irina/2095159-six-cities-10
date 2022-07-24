import { Link } from 'react-router-dom';
import { Offer } from '../../types/offer';

type CardScreenProps = {
  offer: Offer;
  onMouseOver: () => void;
  isActive: boolean;
};

function Card({ offer, onMouseOver, isActive }: CardScreenProps) {
  if (isActive) {
    // eslint-disable-next-line no-console
    console.log(offer.id);
  }

  return (
    <article className="cities__card place-card" onMouseOver={onMouseOver}>
      <div className="place-card__mark">
        <span>Premium {offer.isPremium}</span>
      </div>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${offer.id}`}>
          <img
            className="place-card__image"
            src={offer.images as string}
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
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark">{offer.isFavorite}</use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: '80%' }}></span>
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
