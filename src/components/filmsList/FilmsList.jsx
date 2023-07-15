import { useLocation } from 'react-router-dom';
import { List, Item, LinkInfo } from './FilmsList.styled';
import PropTypes from 'prop-types';

const FilmsList = ({ movies }) => {
  const location = useLocation();
  return (
    <List>
      {movies.map(movie => (
        <Item key={movie.id}>
          <LinkInfo to={`/movies/${movie.id}`} state={{ from: location }}>
            {movie.title}
          </LinkInfo>
        </Item>
      ))}
    </List>
  );
};
FilmsList.prototype = {
  movies: PropTypes.array.isRequired,
};

export default FilmsList;
