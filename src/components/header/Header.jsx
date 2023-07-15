import { PageHeader, HeaderLink } from './Header.styled';
// import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <PageHeader>
      <nav>
        <HeaderLink to="/">Home</HeaderLink>
        <HeaderLink to="/movies">Movies</HeaderLink>
      </nav>
    </PageHeader>
  );
};

export default Header;
