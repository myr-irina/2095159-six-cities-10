import { Link } from 'react-router-dom';
import Header from '../../components/header/header-';

function NotFoundScreen(): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Header />

      <main className="page__main page__main--index">
        <section
          className="cities__places-container cities__places-container--empty container"
          style={{
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '150px',
          }}
        >
          <h1>404. Page not found</h1>
          <Link to="/">Вернуться на главную</Link>
        </section>
      </main>
    </div>
  );
}

export default NotFoundScreen;
