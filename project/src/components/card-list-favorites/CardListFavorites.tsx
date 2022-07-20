import { Offer } from '../../types/offer';
import CardWithReviews from '../card-with-reviews/CardWithReviews';

type CardListFavoritesScreenProps = {
  offers: Offer[];
};

function CardListFavorites({
  offers,
}: CardListFavoritesScreenProps): JSX.Element {
  return (
    <ul style={{ padding: '0' }}>
      {offers.slice(0, 2).map((offer) => (
        <li
          className="favorites__card place-card"
          key={offer.id}
          style={{ listStyleType: 'none', margin: '0' }}
        >
          <CardWithReviews offer={offer} />
        </li>
      ))}
    </ul>
  );
}

export default CardListFavorites;
