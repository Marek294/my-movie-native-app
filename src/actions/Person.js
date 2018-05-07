import api from '../api';

export const getPersonDetails = (id) => () => api.Person.getPersonDetails(id);

export const getSearchPersons = (query) => () => api.Person.getSearchPersons(query);
