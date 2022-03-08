import {Dispatch} from "redux";
import {cardsApi} from "../../CardsApi/Api";

export type ProfileUserType = {
    name: string,
    avatar: string
}
const initialState: ProfileUserType = {
    name: '',
    avatar: '',
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
                name: action.payload.name,
                avatar: action.payload.avatar

            }
        case "UPDATE_AVATAR":
            return {
                ...state,
                avatar: action.payload.avatar
            }
        default:
            return state
    }
}

export const setUser = (name: string, avatar: string) => ({type: 'SET_USER', payload: {name, avatar}} as const)

const updateHickNameAC = (name: string) => ({
    type: 'UPDATE_NICK_NAME',
    payload: {
        name
    }
} as const)

const updateAvatar = (avatar: string) => ({type: 'UPDATE_AVATAR', payload: {avatar}} as const)

type UpdateAvatarType = ReturnType<typeof updateAvatar>
type UpdateNickNameType = ReturnType<typeof updateHickNameAC>
type SetUser = ReturnType<typeof setUser>
type ActionType = UpdateNickNameType | SetUser | UpdateAvatarType

export const fetchUser = () => (dispatch: Dispatch) => {
    cardsApi.setUser()
        .then((res) => {
            if (res.data._id) {
                dispatch(setUser(res.data.name, res.data.avatar))
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
                debugger
                dispatch(updateHickNameAC(res.data.updatedUser.name))
                dispatch(updateAvatar(res.data.updatedUser.avatar))
            })
            .catch((e) => {
                const error = e.response
                    ? e.response.data.error
                    : (e.message + ', more details in the console');
            })
    }
}