import axios from "axios";


const instance = axios.create({
    baseURL: process.env.REACT_APP_BACK_URL || 'http://localhost:7542/2.0/',
    withCredentials: true,
})

export const cardsApi = {
    register(email: string, password: string) {
        return instance.post<registerResponseType>('/auth/register', {email, password})
    }
}


export type registerResponseType = {
    email: string
    password: string
}