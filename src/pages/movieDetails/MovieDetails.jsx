import { useState, useEffect, Suspense } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

import Loader from 'components/loader';

import Notiflix from 'notiflix';
import { FiArrowLeft } from 'react-icons/fi';
import { getMovieDetails } from 'services/fetchMovies';

import {
  Wrapper,
  LinkBackBtn,
  MainTitle,
  Title,
  Text,
  Score,
  MovieInfoBox,
  MovieCard,
  List,
  AdditionalInfo,
} from './MovieDetails.styled';

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
      <Wrapper>
        <LinkBackBtn to={backLinkHref}>
          <FiArrowLeft size="20px" />
          Back
        </LinkBackBtn>
        <MovieCard>
          <>
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
          </>
          <MovieInfoBox>
            <MainTitle>
              {title} ({year})
            </MainTitle>
            <Score>User score: {score}%</Score>
            <div>
              <Title>Overview</Title>
              {overview.length > 0 ? (
                <Text>{overview}</Text>
              ) : (
                <Text>We don't have any overview for this movie</Text>
              )}
            </div>
            <div>
              <Title>Genres</Title>
              <Text>{genres.map(genre => genre.name).join(' ')}</Text>
            </div>
          </MovieInfoBox>
        </MovieCard>
        <AdditionalInfo>
          <Title>Additional information</Title>
          <List>
            <Link to={`/movies/${movieId}/cast`}>Cast</Link>
            <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
          </List>
        </AdditionalInfo>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Wrapper>
    </>
  );
};

export default MovieDetails;
