import http from "../utils/http";

declare interface Credentials {
    email: string;
    password: string
}

declare interface User{
    id: string
    username: string
}

type Token = string

export const login = async(credentials: Credentials) => {
    const response = await http.post('/auth/user/login', credentials)
    return response.data;
}

export const storeToken = (token: Token) => {
    window.localStorage.setItem('token', token)
}

export const getToken = () => {
    return window.localStorage.getItem('token')
}

export const storeUserId = (id: string) => {
    window.localStorage.setItem('id', id)
}

