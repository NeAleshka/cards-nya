import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {registerReducers} from "./reducers/registerReducers";
import {profileReducer} from "./reducers/profileReducer";
import {authReducer} from "./reducers/authReducer";
import {cardsReducer} from "./reducers/cardReducer";


export const rootReducer = combineReducers({
    register: registerReducers,
    profile: profileReducer,
    auth: authReducer,
    cards: cardsReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type RootReducerType = ReturnType<typeof rootReducer>