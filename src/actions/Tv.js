import api from '../api';

export const getTopRatedTV = () => () => api.TV.getTopRated();

export const getMostPopularTV = () => () => api.TV.getMostPopular();

export const getTvDetails = (id) => () => api.TV.getTvDetails(id);

export const getSearchTV = (query) => () => api.TV.getSearchTV(query);