import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'db1d869ed5ade03c76087b14b8b94d47';
// const SEARCH = '/trending/movie/week';

export const getTrendingMovies = async () => {
  const options = new URLSearchParams({
    api_key: API_KEY,
    page: 1,
  });
  const movies = await axios.get(`${BASE_URL}/trending/movie/week?${options}`);

  return movies.data.results;
};

export const getMovieDetails = async movieId => {
  const options = new URLSearchParams({
    api_key: API_KEY,
  });
  const movie = await axios.get(`${BASE_URL}/movie/${movieId}?${options}`);
  console.log(movie.data);

  return movie.data;
};

export const getMovieCredits = async movieId => {
  const options = new URLSearchParams({
    api_key: API_KEY,
  });
  const movie = await axios.get(
    `${BASE_URL}/movie/${movieId}/credits?${options}`
  );
  console.log(movie.data);

  return movie.data.cast;
};

export const getMovieReviews = async movieId => {
  const options = new URLSearchParams({
    api_key: API_KEY,
  });
  const movie = await axios.get(
    `${BASE_URL}/movie/${movieId}/reviews?${options}`
  );
  console.log(movie.data.results);

  return movie.data.results;
};

// async function fetchMovies(searchParams, page = 1) {
//   const options = new URLSearchParams({
//     api_key: API_KEY,
//     page,
//   });
//   const movies = await axios.get(`${BASE_URL}${searchParams}?${options}`);
//   //   console.log(movies.data.results);
//   return movies.data.results;
// }

// export default fetchMovies;

// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer db1d869ed5ade03c76087b14b8b94d47',
//   },
// };

// async function fetchMovies(query, page = 1) {
//   fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));
// }

// export default fetchMovies;
