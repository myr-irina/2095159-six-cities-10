import Card from '../card/Card';
import { Offer } from '../../types/offers';

type CardListScreenProps = {
  offers: Offer[];
};

function CardList({ offers }: CardListScreenProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <Card offer={offer} key={offer.id} />
      ))}
    </div>
  );
}

export default CardList;
