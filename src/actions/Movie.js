import api from '../api';

export const getUpcoming = (date) => api.Movie.getUpcoming(date);

export const getTopRatedMovies = () => api.Movie.getTopRated();

export const getMostPopularMovies = () => api.Movie.getMostPopular();

export const getMovieDetails = (id) => api.Movie.getDetails(id);

export const getSearchMovies = (query) => api.Movie.getSearch(query);