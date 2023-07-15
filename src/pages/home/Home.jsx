import { useState, useEffect } from 'react';
import Notiflix from 'notiflix';

import { getTrendingMovies } from 'services/fetchMovies';
import FilmsList from 'components/filmsList/FilmsList';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies()
      .then(data => setMovies(data))
      .catch(() => {
        Notiflix.Notify.failure(
          'Вибачте, уже підбираємо найкращі фільми. Спробуйте перезагрузити сторінку ще раз.'
        );
      });
  }, []);

  return (
    <>
      <h2>Trending today</h2>
      <FilmsList movies={movies} />
    </>
  );
};

export default Home;
