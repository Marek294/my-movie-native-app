import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        'api_key': '3e85db7ef753fb8345cc8be646827745',
        'language': 'pl',
    },
})

instance.interceptors.request.use(function (config) {
    delete config.headers.common['AuthorizationToken'];
    return config;
});

const backend = axios.create({
    baseURL: process.env.NODE_ENV ==='production' ? 'https://my-movie-server.herokuapp.com' : 'http://localhost:5000',
})

export default {
    TV: {
        getTopRated: () => instance.get('discover/tv?sort_by=vote_average.desc&page=1&vote_count.gte=500').then(res => res.data.results),
        getMostPopular: () => instance.get('tv/popular?page=1').then(res => res.data.results),
        getDetails: (id) => instance.get(`/tv/${id}?append_to_response=credits%2Csimilar%2Crecommendations%2Ckeywords`).then(res => res.data),
        getSearch: (query) => instance.get(`/search/tv?query=${query}`).then(res => res.data.results)
    },
    Movie: {
        getUpcoming: (date) => instance.get(`discover/movie?sort_by=popularity.desc&include_adult=true&include_video=false&page=1&primary_release_date.gte=${date}`).then(res => res.data.results),
        getTopRated: () => instance.get('discover/movie?sort_by=vote_average.desc&page=1&vote_count.gte=5000').then(res => res.data.results),
        getMostPopular: () => instance.get('movie/popular?page=1').then(res => res.data.results),
        getDetails: (id) => instance.get(`/movie/${id}?append_to_response=credits%2Csimilar%2Crecommendations%2Ckeywords`).then(res => res.data),
        getSearch: (query) => instance.get(`/search/movie?query=${query}`).then(res => res.data.results)
    },
    Person: {
        getPersonDetails: (id) => instance.get(`/person/${id}?append_to_response=movie_credits%2Ctv_credits%2Cimages`).then(res => res.data),
        getSearchPersons: (query) => instance.get(`/search/person?query=${query}`).then(res => res.data.results)
    },
    User: {
        login: (data) => backend.post('/auth', data).then(res => res.data),
        signup: (data) => backend.post('/users', data).then(res => res.data),
        sendConfirmationEmail: () => backend.post('/auth/sendConfirmationEmail').then(res => res.data),
        confirmEmail: (confirmationToken) => backend.post('/auth/confirmation', { confirmationToken }).then(res => res.data),
        resetPasswordRequest: (data) => backend.post('/auth/resetPasswordRequest', data).then(res => res.data),
        resetPassword: (data) => backend.post('/auth/resetPassword', data).then(res => res.data)
    }
}