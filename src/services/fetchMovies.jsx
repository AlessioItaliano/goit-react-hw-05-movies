import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'db1d869ed5ade03c76087b14b8b94d47';

export const getTrendingMovies = async () => {
  const movies = await axios.get(
    `${BASE_URL}/trending/movie/week?api_key=${API_KEY}&language=en-US&page=1`
  );

  return movies.data.results;
};

export const getSearchMovie = async query => {
  const movies = await axios.get(
    `${BASE_URL}/search/movie?query=${query}&api_key=${API_KEY}&language=en-US&include_adult=false&page=1`
  );

  return movies.data.results;
};

export const getMovieDetails = async movieId => {
  const movie = await axios.get(
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );

  return movie.data;
};

export const getMovieCredits = async movieId => {
  const movie = await axios.get(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );

  return movie.data.cast;
};

export const getMovieReviews = async movieId => {
  const movie = await axios.get(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );

  return movie.data.results;
};
