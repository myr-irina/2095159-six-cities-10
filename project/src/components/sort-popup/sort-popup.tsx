import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../hooks';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import { setSort } from '../../store/action';
import { getSort } from '../../store/selectors';
import { SortType } from '../../types/sort-type';

const SORT_MAP: {id: SortType, value: string}[] = [
  {
    id: SortType.Popular,
    value: 'Popular'
  },
  {
    id: SortType.Price_high_to_low,
    value: 'Price: high to low'
  },
  {
    id: SortType.Price_low_to_high,
    value: 'Price: low to high'
  },
  {
    id: SortType.Top_rated_first,
    value: 'Top rated first'
  },
];


function SortPopup({parentRef}: any){
  const dispatch = useDispatch();
  const [popupIsVisible, setPopupIsVisible] = useState(false);
  useOnClickOutside(parentRef, () => setPopupIsVisible(false));

  function handlePopupClick() {
    setPopupIsVisible((current) => !current);
  }

  const handleSort = (sortType: SortType) => {
    setPopupIsVisible((current) => !current);
    dispatch(setSort(sortType));
  };

  const currentSort = useAppSelector(getSort);

  return (
    <form
      className="places__sorting"
      action="#"
      method="get"
    >
      <span className="places__sorting-caption" >Sort by </span>
      <span
        className="places__sorting-type"
        style={{paddingLeft: '5px'}}
        tabIndex="0"
        onClick={handlePopupClick}
      >
        {SORT_MAP.find(({id}) => currentSort === id)?.value}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul
        className={`places__options places__options--custom ${
          popupIsVisible ? 'places__options--opened' : ''
        }`}
      >
        {SORT_MAP.map(({id, value}) => (
          <li
            key={id}
            className={`places__option ${currentSort === id ? 'places__option--active' : ''}`}
            tabIndex="0"
            onClick={()=> handleSort(id)}
          >
            {value}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default SortPopup;
