import { Link } from 'react-router-dom';

function Logo() {
  return (
    <Link to='/' className="header__logo-link">
      <img
        className="header__logo"
        src="../img/logo.svg"
        alt="6 cities logo"
        width="81"
        height="41"
      />
    </Link>
  );
}

export default Logo;
