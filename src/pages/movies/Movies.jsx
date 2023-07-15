import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Notiflix from 'notiflix';

import { getSearchMovie } from 'services/fetchMovies';

import FilmsList from 'components/filmsList';
import SearchForm from 'components/searchForm';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) {
      return;
    }

    getSearchMovie(query)
      .then(data => {
        if (data.length === 0) {
          Notiflix.Notify.failure(
            'Немає результатів пошуку. Спробуйте інший запит.'
          );
        } else {
          setMovies(data);
        }
      })
      .catch(() => {
        Notiflix.Notify.failure(
          'Упс, щось пішло не так... Спробуйте перезавантажити сторінку ще раз.'
        );
      });
  }, [query]);

  function onSubmit(value) {
    setSearchParams({ query: `${value}` });
  }

  return (
    <>
      <SearchForm onSubmit={onSubmit} />
      {movies.length > 0 && <FilmsList movies={movies} />}
    </>
  );
};

export default Movies;
