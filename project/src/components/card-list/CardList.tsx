import Card from '../card/Card';
import { Offer } from '../../types/offers';

type CardListScreenProps = {
  offers: Offer[];
};

function CardList({ offers }: CardListScreenProps): JSX.Element {
  return (
    <ul className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <li key={offer.id}>
          <Card offer={offer} />
        </li>
      ))}
    </ul>
  );
}

export default CardList;
