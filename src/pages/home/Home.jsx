import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import Notiflix from 'notiflix';

import { getTrendingMovies } from 'services/fetchMovies';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // const searchParams = '/trending/movie/week';

    getTrendingMovies().then(data => setMovies(data));
    // .then(data => console.log(data))
    // .catch(
    //   Notiflix.Notify.failure(
    //     'Вибачте, уже підбираємо найкращі фільми. Спробуйте перезагрузити сторінку ще раз.'
    //   )
    // );
  }, []);

  return (
    <>
      <ul>Trending today</ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </>
  );
};

export default Home;
