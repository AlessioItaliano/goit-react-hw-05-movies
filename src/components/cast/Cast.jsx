import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Notiflix from 'notiflix';

import { Item, List, Name, Character } from './Cast.styled';
import { getMovieCredits } from 'services/fetchMovies';

const Cast = () => {
  const [casts, setCasts] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieCredits(movieId)
      .then(data => setCasts(data))
      .catch(() => {
        Notiflix.Notify.failure(
          'Упс, щось пішло не так...Спробуйте перезагрузити сторінку ще раз.'
        );
      });
  }, [movieId]);

  if (!casts) return null;

  return (
    <>
      <List>
        {casts.map(cast => (
          <Item key={cast.id}>
            {cast.profile_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`}
                alt={cast.name}
                width="150px"
                height="200px"
              />
            ) : (
              <img
                src="https://via.placeholder.com/150x150/CCCCCC/FFFFFF?text=No+Image"
                alt="No Available Foto"
                width="150px"
                height="200px"
              />
            )}
            <Name>{cast.name}</Name>
            <Character>Character: {cast.character}</Character>
          </Item>
        ))}
      </List>
    </>
  );
};

export default Cast;
