import { useAppDispatch, useAppSelector } from '../../hooks';
import { setActiveCity } from '../../store/action';
import { getActiveCity } from '../../store/selectors';

function CityList() {
  const tabs = [
    { title: 'Paris' },
    { title: 'Cologne' },
    { title: 'Brussels' },
    { title: 'Amsterdam' },
    { title: 'Hamburg' },
    { title: 'Dusseldorf' },
  ];
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
              <a
                className="locations__item-link tabs__item"
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(setActiveCity(tab.title));
                }}
                href="#"
              >
                <span>{tab.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default CityList;
