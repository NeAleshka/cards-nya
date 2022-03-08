import {Dispatch} from "redux";
import {cardsApi} from "../../CardsApi/Api";

export type ProfileUserType = {
    name: string,
    error: string
}
const initialState: ProfileUserType = {
    name: '',
    error: ''
}

export const profileReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case "UPDATE_NICK_NAME":
            return {
                ...state,
                name: action.payload.name
            }
        case "SET_USER":
            return {
                ...state,
                name: action.payload.name

            }
        default:
            return state
    }
}

export const setUser = (name: string) => ({type: 'SET_USER', payload: {name}} as const)

const updateHickNameAC = (name: string) => ({
    type: 'UPDATE_NICK_NAME',
    payload: {
        name
    }
} as const)


type UpdateNickNameType = ReturnType<typeof updateHickNameAC>
type SetUser = ReturnType<typeof setUser>
type ActionType = UpdateNickNameType | SetUser

export const fetchUser = () => (dispatch: Dispatch) => {
    cardsApi.setUser()
        .then((res) => {
            if (res.data._id) {
                dispatch(setUser(res.data.name))
            }
        })
        .catch((rej) => {
            console.log('no autorize')
        })
}
export const updateNickNameTC = (name: string, avatar: string) => {
    return (dispatch: Dispatch) => {
        cardsApi.updateUser(name, avatar)
            .then((res) => {
                dispatch(updateHickNameAC(res.data.updatedUser.name))
            })
            .catch((e) => {
                const error = e.response
                    ? e.response.data.error
                    : (e.message + ', more details in the console');
            })
    }
}