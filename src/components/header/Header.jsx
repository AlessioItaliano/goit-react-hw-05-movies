import { NavLink } from 'react-router-dom';

// import { HeaderNav } from './Header.styled';
import './Header.css';

const Header = () => {
  return (
    <div>
      <NavLink className="navLink" to="/">
        Home
      </NavLink>
      <NavLink className="navLink" to="/movies">
        Movies
      </NavLink>
    </div>
  );
};

export default Header;
