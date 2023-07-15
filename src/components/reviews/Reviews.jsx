import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Notiflix from 'notiflix';

import { getMovieReviews } from 'services/fetchMovies';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieReviews(movieId)
      .then(data => setReviews(data))
      .catch(() => {
        Notiflix.Notify.failure(
          'Упс, щось пішло не так...Спробуйте перезагрузити сторінку ще раз.'
        );
      });
  }, [movieId]);

  if (!reviews) return null;

  return (
    <>
      <ul>
        {reviews.length > 0 ? (
          reviews.map(review => (
            <li key={review.id}>
              <div>
                <h2>Author: {review.author}</h2>
                <p>{review.content}</p>
              </div>
            </li>
          ))
        ) : (
          <p>We don't have any reviews for this movie</p>
        )}
      </ul>
    </>
  );
};

export default Reviews;
