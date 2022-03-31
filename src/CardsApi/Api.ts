import axios, {AxiosResponse} from "axios";


const instance = axios.create({
    baseURL: "https://neko-back.herokuapp.com/2.0",
    withCredentials: true,
})

export const cardsApi = {
    register(email: string, password: string) {
        return instance.post<registerResponseType>('/auth/register', {email, password})
    },
    updateUser(name: string, avatar: string) {
        return instance.put<updateUserType, AxiosResponse<UpdateUserResponseType>>('/auth/me', {name, avatar})
    },
    setUser() {
        return instance.post('/auth/me')
    },
    changePassword(password: string, resetPasswordToken: string) {
        return instance.post('/auth/set-new-password', {password, resetPasswordToken})
    },
    forgotPassword(email: string, from: string, message: string) {
        return instance.post('/auth/forgot', {email, from, message})
    },
    getCards() {
        return instance.get('/cards/pack')
    }
}

export const AuthApi = {
    login(email: string, password: string, rememberMe: boolean = false) {
        return instance.post<dataType, AxiosResponse<AuthResponseType>>('auth/login', {email, password, rememberMe})
    },
    logOut() {
        return instance.delete<AxiosResponse<AuthResponseType>>('/auth/me')
    },
}


export type registerResponseType = {
    email: string
    password: string
}

export type UpdateUserResponseType = {
    updatedUser: AuthResponseType,
    error?: string
}
type updateUserType = {
    name: string,
    avatar: string
}
type dataType = {
    email: string,
    password: string,
    rememberMe: boolean
}

export type AuthResponseType = {
    _id: string;
    email: string;
    name: string;
    avatar?: string;
    publicCardPacksCount: number;
    created: Date;
    updated: Date;
    isAdmin: boolean;
    verified: boolean; // подтвердил ли почту
    rememberMe: boolean;
    error?: string;
}