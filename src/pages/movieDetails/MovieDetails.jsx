import { useState, useEffect } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import Notiflix from 'notiflix';

import { getMovieDetails } from 'services/fetchMovies';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieDetails(movieId)
      .then(data => setMovie(data))
      // .then(data => console.log(data))
      .catch(() => {
        Notiflix.Notify.failure(
          'Упс, щось пішло не так...Спробуйте перезагрузити сторінку ще раз.'
        );
      });
  }, [movieId]);

  if (!movie) return;

  const { title, poster_path, vote_average, overview, genres } = movie;

  return (
    <>
      <div>
        <h1>{title}</h1>
        {poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt={title}
          />
        ) : (
          <img
            src="https://via.placeholder.com/150x150/CCCCCC/FFFFFF?text=No+Image"
            alt="No Available Foto"
          />
        )}
        <span>User score: {(vote_average * 10).toFixed(1)}%</span>
        <div>
          <h2>Overview</h2>
          <p>{overview}</p>
        </div>
        <div>
          <h2>Genres</h2>
          <p>{genres.map(genre => genre.name).join(' ')}</p>
        </div>
      </div>

      <div>
        <h2>Additional information</h2>
        <ul>
          <Link to={`/movies/${movieId}/cast`}>Cast</Link>
          <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
        </ul>
        <Outlet></Outlet>
      </div>
    </>
  );
};

export default MovieDetails;
