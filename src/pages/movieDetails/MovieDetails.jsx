import { useState, useEffect, Suspense } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

import Loader from 'components/loader';

import Notiflix from 'notiflix';
import { FiArrowLeft } from 'react-icons/fi';
import { getMovieDetails } from 'services/fetchMovies';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();

  const backLinkHref = location.state?.from ?? '/movies';

  useEffect(() => {
    getMovieDetails(movieId)
      .then(data => setMovie(data))
      .catch(() => {
        Notiflix.Notify.failure(
          'Упс, щось пішло не так...Спробуйте перезагрузити сторінку ще раз.'
        );
      });
  }, [movieId]);

  if (!movie) return;

  const { title, poster_path, vote_average, overview, genres, release_date } =
    movie;
  const score = Math.floor(vote_average * 10);
  const year = release_date.slice(0, 4);

  return (
    <>
      <Link to={backLinkHref}>
        <FiArrowLeft size="20px" />
        Back
      </Link>
      <div>
        <h1>
          {title} ({year})
        </h1>
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
        <span>User score: {score}%</span>
        <div>
          <h2>Overview</h2>
          {overview.length > 0 ? (
            <p>{overview}</p>
          ) : (
            <p>We don't have any overview for this movie</p>
          )}
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
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};

export default MovieDetails;
