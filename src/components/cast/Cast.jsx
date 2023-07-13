import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Notiflix from 'notiflix';

import { getMovieCredits } from 'services/fetchMovies';

const Cast = () => {
  const [casts, setCasts] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieCredits(movieId)
      .then(data => setCasts(data))
      .then(data => console.log(data))
      .catch(() => {
        Notiflix.Notify.failure(
          'Упс, щось пішло не так...Спробуйте перезагрузити сторінку ще раз.'
        );
      });
  }, [movieId]);

  if (!casts) return null;

  return (
    <>
      <ul>
        {casts.map(cast => (
          <li key={cast.id}>
            {cast.profile_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`}
                alt={cast.name}
              />
            ) : (
              <img
                src="https://via.placeholder.com/150x150/CCCCCC/FFFFFF?text=No+Image"
                alt="No Available Foto"
              />
            )}
            <p>{cast.name}</p>
            <p>Character: {cast.character}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Cast;
