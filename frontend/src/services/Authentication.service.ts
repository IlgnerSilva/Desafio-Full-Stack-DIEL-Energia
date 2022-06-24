import http from "../utils/http";

declare interface Credentials {
    email: string;
    password: string
}

declare interface RegisterCredentials {
    registerUsername: string;
    registerEmail: string;
    registerPassword: string
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

export const register = async(registerCredential: RegisterCredentials) => {
    const response = await http.post('/auth/register/user', {
        username: registerCredential.registerUsername, 
        email: registerCredential.registerEmail, 
        password: registerCredential.registerPassword
    });
    return response.data;
}

export const storeToken = (token: Token) => {
    window.localStorage.setItem('token', token)
}

export const getToken = () => {
    return window.localStorage.getItem('token')
}

export const storeUser = (username: string) => {
    return window.localStorage.setItem('username', username)
}

export const storeUserId = (id: string) => {
    window.localStorage.setItem('id', id)
}

