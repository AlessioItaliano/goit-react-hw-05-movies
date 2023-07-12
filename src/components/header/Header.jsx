import { NavLink } from 'react-router-dom';

import { HeaderNav } from './Header.styled';

const Header = () => {
  return (
    <HeaderNav>
      <NavLink className="navLink" to="/">
        Home
      </NavLink>
      <NavLink className="navLink" to="/movies">
        Movies
      </NavLink>
    </HeaderNav>
  );
};

export default Header;
