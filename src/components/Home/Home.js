import React, { useEffect } from 'react';
import MovieListing from '../MovieListing/MovieListing';
import { APIKey } from '../../common/apis/MovieApiKey';
import movieApi from '../../common/apis/movieApi';
import { useDispatch } from 'react-redux';
import { addMovies } from '../../features/movies/movieSlice';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const movieName = 'Harry';

    const fetchMovies = async () => {
      const response = await movieApi.get(`?apiKey=${APIKey}&s=${movieName}&t=movie`).catch((err) => console.log(err));
      console.log(response);
      dispatch(addMovies(response.data));
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
};

export default Home;
