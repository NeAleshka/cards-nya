import axios from "axios";


const instance = axios.create({
    baseURL: "https://neko-back.herokuapp.com/2.0",//"https://neko-back.herokuapp.com/2.0" "http://localhost:7542/2.0/" ,
    withCredentials: true,
})

export const cardsApi = {
    register(email: string, password: string) {
        return instance.post<registerResponseType>('/auth/register', {email, password})
    },
    updateUser(name: string, avatar: string) {
        return instance.put<UpdateUserResponseType>('/auth/me', {name, avatar})
    },
    setUser () {
        return instance.post('/auth/me')
    },
    changePassword(password: string,resetPasswordToken: string){
        return instance.post('/auth/set-new-password',{password,resetPasswordToken})
    },
    forgotPassword(email:string,from:string,message:string){
        return instance.post('/auth/forgot',{email,from,message})
    },
    getCards(packName?:string, min?:number, max?:number, sortPacks?:number, page?:number, pageCount?:number){

        return instance.get<GetCardsType,any>(`/cards/pack?pageCount=${pageCount??10}&page=${page??1}`,)
    }
}

export const AuthApi = {
    login(email: string, password: string, rememberMe: boolean = false) {
        return instance.post('auth/login', {email, password, rememberMe})
    },
    logOut() {
        return instance.delete('/auth/me')
    },
}


export type registerResponseType = {
    email: string
    password: string
}

export type UpdateUserResponseType = {
    updatedUser: any,
    error?: string
}

export type GetCardsType={
    packName?:string
    min?:number
    max?:number
    sortPacks?:number
    page?:number
    pageCount?:number
}