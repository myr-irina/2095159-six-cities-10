import Card from '../card/Card';
import { Offer } from '../../types/offer';
// import { useState } from 'react';
// import classNames from 'classnames';

type CardListScreenProps = {
  offers: Offer[];
};

function CardList({ offers }: CardListScreenProps): JSX.Element {
  // const [activeCard, setActiveCard] = useState('id');

  return (
    <ul className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <li key={offer.id} style={{listStyleType: 'none'}}>
          <Card offer={offer} />
        </li>
      ))}
    </ul>
  );
}

export default CardList;
