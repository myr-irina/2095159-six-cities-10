import Card from '../card/Card';
import { Offer } from '../../types/offer';
import { useState } from 'react';

type CardListScreenProps = {
  offers: Offer[];
};

function CardList({ offers }: CardListScreenProps): JSX.Element {
  const [isActiveCard, setIsActiveCard] = useState<number>(1);

  return (
    <ul className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <Card
          offer={offer}
          key={offer.id}
          onMouseOver={() => setIsActiveCard(offer.id)}
          isActive={isActiveCard === offer.id}
        />
      ))}
    </ul>
  );
}

export default CardList;
