import { Route, Routes } from 'react-router-dom';

import Header from 'components/header';

import Home from 'pages/home';
import Movies from 'pages/movies';
import MovieDetails from 'pages/movieDetails';

// import Cast from 'components/cast';
// import Reviews from 'components/reviews';

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          {/* <Route path="/movies/:movieId/cast" element={<Cast />} />
          <Route path="//movies/:movieId/reviews" element={<Reviews />} /> */}
        </Route>
        <Route path="*" element={<div>Page not found</div>} />
      </Routes>
    </>
  );
};

// '/' – компонент Home, домашня сторінка зі списком популярних кінофільмів.
// '/movies' – компонент Movies, сторінка пошуку кінофільмів за ключовим словом.
// '/movies/:movieId' – компонент MovieDetails, сторінка з детальною інформацією про кінофільм.
// /movies/:movieId/cast – компонент Cast, інформація про акторський склад. Рендериться на сторінці MovieDetails.
// /movies/:movieId/reviews – компонент Reviews, інформація про огляди. Рендериться на сторінці MovieDetails.
