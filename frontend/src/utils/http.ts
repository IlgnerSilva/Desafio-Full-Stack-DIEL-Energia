import axios from 'axios';

const http = axios.create({
    baseURL: 'http://localhost:3000'
});

const token: string | null | any = window.localStorage.getItem('token');

if(token){
    http.defaults.headers.common['Authorization'] = token 
}


export default http;