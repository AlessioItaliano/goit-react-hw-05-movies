import axios from 'axios';

async function fetchMovies(query, page = 1) {
  const searchParams = new URLSearchParams({
    key: 'db1d869ed5ade03c76087b14b8b94d47',
    query,
    // q: inputData,
    // image_type: 'photo',
    // orientation: 'horizontal',
    // safesearch: 'true',
    // per_page: 12,
    page,
  });
  const movies = await axios.get(
    `https://api.themoviedb.org/3?${searchParams}`
  );

  return movies.data;
}

export default fetchMovies;
