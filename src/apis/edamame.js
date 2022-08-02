import axios from 'axios';

// const API_KEY = '10831f7af4aee8e9009805b88a5c5379';//movie tmdb
const API_KEY = '7c3e61ec02b38c6ed88f42a8119c36bc';
// const baseUrl = 'https://api.themoviedb.org/3';
const baseUrl = 'https://api.edamam.com/api/';

const APP_ID = 'aab674ab';

const edamame = axios.create({
    baseURL: baseUrl,
    params:{
        app_id: APP_ID,
        app_key: API_KEY
    },
});


export default edamame;