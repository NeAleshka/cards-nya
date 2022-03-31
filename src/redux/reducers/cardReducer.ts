import {cardsApi} from "../../CardsApi/Api";

type ActionType = SetCardsType
type InitialStateType = typeof initialState
export type CardsType = {
    cardsCount: number
    created: string
    grade: number
    more_id: string
    name: string
    path: string
    private: false
    rating: number
    shots: number
    type: string
    updated: string
    user_id: string
    user_name: string
    __v: number
    _id: string
}
type DataType = {
    cardPacks: CardsType[]
    cardPacksTotalCount: number
    maxCardsCount: number
    minCardsCount: number
    page: number
    pageCount: number
    token: string
    tokenDeathTime: number
}
const initialState = {
    cardPacks: null as null | CardsType[],
    cardPacksTotalCount: null as number | null,
    maxCardsCount: null as number | null,
    minCardsCount: null as number | null,
    page: null as number | null,
    pageCount: null as number | null,
    token: null as string | null,
    tokenDeathTime: null as number | null,
}
export const cardsReducer = (state: InitialStateType = initialState, action: ActionType) => {
    switch (action.type) {
        case "SET_CARDS":
            return {...state, ...action.data}
        default:
            return state
    }
}
type SetCardsType = ReturnType<typeof setCardsAC>
const setCardsAC = (data: DataType) => ({
    type: 'SET_CARDS',
    data
})
export const setCards = () => async (dispatch: any) => {
    try {
        const res = await cardsApi.getCards()
        dispatch(setCardsAC(res.data))
    } catch (e) {

    }
}