import React from 'react';
import { useSelector } from 'react-redux';
import { getAllMovies } from '../../features/movies/movieSlice';
import MovieCard from '../MovieCard/MovieCard';
import './MovieListing.scss';

const MovieListing = () => {
  const movies = useSelector(getAllMovies);

  console.log(movies);

  let renderMovies =
    movies.Response == 'True' ? (
      movies.Search.map((movie, index) => {
        return <MovieCard key={index} data={movie} />;
      })
    ) : (
      <div className="movies-error">
        <h3>{movies.error}</h3>
      </div>
    );

  const renderMovies2 = () => {
    if (movies.Response) {
      return movies.Search.map((movie, index) => {
        <MovieCard key={index} data={movie} />;
      });
    }

    return (
      <div className="movies-error">
        <h3>{movies.error}</h3>
      </div>
    );
  };

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">{renderMovies}</div>
      </div>
    </div>
  );
};

export default MovieListing;
