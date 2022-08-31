import { useAppDispatch } from '../../hooks';
import { changeFavoriteStatusAction } from '../../store/api-actions';
import { Offer } from '../../types/offer';

type CardFavoriteScreenProps = {
  offer: Offer;
  onMouseOver: () => void;
  isActive: boolean;
};

function CardFavorite({
  offer,
  onMouseOver,
  isActive,
}: CardFavoriteScreenProps) {
  const dispatch = useAppDispatch();

  const removeFromFavorite = () => {
    dispatch(changeFavoriteStatusAction({hotelId: offer.id}));
  };


  return (
    <article
      className="favorites__card place-card"
      style={{ marginBottom: '35px' }}
      onMouseOver={onMouseOver}
    >
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <a href="/">
          <img
            className="place-card__image"
            src={offer.images[0]}
            style={{ width: '150px', height: '110px' }}
            alt="Place"
          />
        </a>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className="place-card__bookmark-button place-card__bookmark-button--active button"
            type="button"
            onClick={removeFromFavorite}
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: '100%' }}></span>
            <span className="visually-hidden">Rating {offer.rating}</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="/">{offer.description}</a>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}

export default CardFavorite;
