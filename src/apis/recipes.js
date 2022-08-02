import axios from 'axios';

// const API_KEY = '10831f7af4aee8e9009805b88a5c5379';//movie tmdb
// const baseUrl = 'https://api.themoviedb.org/3';
const baseUrl = 'https://api-mobilespecs.azharimm.site/v2';

const recipes = axios.create({
    baseURL: baseUrl,
    params:{
        
    },
    headers: {'X-Custom-Header': 'foobar'}
});


export default recipes;