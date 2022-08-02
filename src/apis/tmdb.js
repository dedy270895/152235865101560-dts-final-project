import axios from 'axios';

// const API_KEY = '10831f7af4aee8e9009805b88a5c5379';//movie tmdb
const API_KEY = '7apZkSbroRs8AaTSuBNYnBwJNEVKxmRSS0E6NHHS';
//'7fNcX2mmX6l19Ldbq95HiDut1rLRiAuFYzvcnEuM'
//7apZkSbroRs8AaTSuBNYnBwJNEVKxmRSS0E6NHHS
// const baseUrl = 'https://api.themoviedb.org/3';
const baseUrl = 'https://api.thenewsapi.com/v1';

const tmdb = axios.create({
    baseURL: baseUrl,
    params:{
        api_token: API_KEY,
        
    },
});


export default tmdb;