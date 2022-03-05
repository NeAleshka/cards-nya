import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {registerReducers} from "./reducers/registerReducers";


export const rootReducer = combineReducers({
    register: registerReducers
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type rootReducerType = ReturnType<typeof rootReducer>