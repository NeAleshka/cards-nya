import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {registerReducers} from "./reducers/registerReducers";
import {profileReducer} from "./reducers/profileReducer";
import {authReducer} from "./reducers/authReducer";


export const rootReducer = combineReducers({
    register: registerReducers,
    profile: profileReducer,
    auth: authReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type rootReducerType = ReturnType<typeof rootReducer>