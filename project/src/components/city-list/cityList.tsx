import { useAppDispatch, useAppSelector } from '../../hooks';
import { setActiveCity } from '../../store/action';
import { getActiveCity } from '../../store/selectors';
import { tabs } from '../const';

function CityList() {
  const activeCity = useAppSelector(getActiveCity);
  const dispatch = useAppDispatch();

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {tabs.map((tab) => (
            <li
              className={`locations__item-link tabs__item ${
                tab.title === activeCity ? 'tabs__item--active' : ''
              }`}
              key={tab.title}
            >
              <div style={{cursor: 'pointer'}}
                className="locations__item-link tabs__item"
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(setActiveCity(tab.title));
                }}
              >
                <span>{tab.title}</span>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default CityList;
