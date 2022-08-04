import Card from '../card/Card';
import { Offer } from '../../types/offer';
// import { renderOfferList } from "../../store/action";
// import { useAppDispatch } from "../../hooks";

type CardListScreenProps = {
  offers: Offer[];
  onListItemHover: (listItemName: number) => void;
};

function CardList({
  offers,
  onListItemHover,
}: CardListScreenProps): JSX.Element {
  // const dispatch = useAppDispatch();

  return (
    <ul className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <li key={offer.id}>
          <Card
            offer={offer}
            key={offer.id}
            onListItemHover={onListItemHover}
          />
        </li>
      ))}
    </ul>
  );
}

export default CardList;
