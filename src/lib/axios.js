import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://google-search3.p.rapidapi.com/api/v1',
  headers: {
    'x-rapidapi-host': 'google-search3.p.rapidapi.com',
    'x-rapidapi-key': process.env.REACT_APP_API_KEY,
  },
});

export default instance;
