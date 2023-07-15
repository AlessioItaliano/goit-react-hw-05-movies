import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Notiflix from 'notiflix';

import { getMovieReviews } from 'services/fetchMovies';
import { List, Item, Author, Review } from './Reviews.styled';

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
      <List>
        {reviews.length > 0 ? (
          reviews.map(review => (
            <Item key={review.id}>
              <div>
                <Author>Author: {review.author}</Author>
                <Review>{review.content}</Review>
              </div>
            </Item>
          ))
        ) : (
          <p>We don't have any reviews for this movie</p>
        )}
      </List>
    </>
  );
};

export default Reviews;
