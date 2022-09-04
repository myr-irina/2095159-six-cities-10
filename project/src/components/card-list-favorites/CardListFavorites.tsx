import { Offer } from '../../types/offer';
import CardFavorite from '../card-favorite/CardFavorite';

type CardListFavoritesScreenProps = {
  offers: Offer[];
};

function CardListFavorites({
  offers,
}: CardListFavoritesScreenProps): JSX.Element {

  return (
    <ul style={{ padding: '0' }}>
      {offers.map((offer) => (
        <li
          className="favorites__card place-card"
          key={offer.id}
          style={{ listStyleType: 'none', margin: '0' }}
        >
          <CardFavorite offer={offer} />
        </li>
      ))}
    </ul>
  );
}

export default CardListFavorites;
