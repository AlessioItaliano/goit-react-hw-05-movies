import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from 'components/header';
import Loader from 'components/loader';

const Home = lazy(() => import('pages/home'));
const Movies = lazy(() => import('pages/movies'));
const MovieDetails = lazy(() => import('pages/movieDetails'));
const NotFoundPage = lazy(() => import('pages/notFoundPage'));

const Cast = lazy(() => import('components/cast'));
const Reviews = lazy(() => import('components/reviews'));

export const App = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
};
