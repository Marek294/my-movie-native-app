import api from '../api';

export const getTopRatedTV = () => api.TV.getTopRated();

export const getMostPopularTV = () => api.TV.getMostPopular();

export const getTVDetails = (id) => api.TV.getDetails(id);

export const getSearchTV = (query) => api.TV.getSearch(query);