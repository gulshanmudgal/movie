import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { APIKey } from '../../common/apis/MovieApiKey';
import movieApi from '../../common/apis/movieApi';

const movieName = 'Harry';
const showName = 'Friends';

export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async () => {
  const response = await movieApi.get(`?apiKey=${APIKey}&s=${movieName}&t=movie`);
  return response.data;
});

export const fetchAsyncShows = createAsyncThunk('movies/fetchAsyncShows', async () => {
  const response = await movieApi.get(`?apiKey=${APIKey}&s=${showName}&t=show`);
  return response.data;
});

const initialState = {
  movies: {},
  shows: {},
};

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload;
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log('Pending');
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      return { ...state, movies: payload };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log('Rejected');
    },
    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
      return { ...state, shows: payload };
    },
  },
});

export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export default movieSlice.reducer;
