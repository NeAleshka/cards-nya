import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {registerReducers} from "./reducers/registerReducers";
import {profileReducer} from "./reducers/profileReducer";


export const rootReducer = combineReducers({
    register: registerReducers,
    profile: profileReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type rootReducerType = ReturnType<typeof rootReducer>