import http from "../utils/http";

declare interface Credentials {
    email: string;
    password: string
}

declare interface User{
    token: string
}

export const login = (credentials: Credentials) => {
    http.post<User>('/auth/user/login', credentials)
    .then(res => res.data)
}