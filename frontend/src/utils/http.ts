import axios from 'axios';

const http = axios.create({
    baseURL: 'http://localhost:3000'
});

http.defaults.headers.common['Authorization'] = 'batata'

export default http;