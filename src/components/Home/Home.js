import React, { useEffect } from 'react';
import MovieListing from '../MovieListing/MovieListing';
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice';

const Home = () => {
  const movieName = 'Harry';
  const showName = 'Friends';
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncMovies(movieName));
    dispatch(fetchAsyncShows(showName));
  }, [dispatch]);

  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
};

export default Home;
