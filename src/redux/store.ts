import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";


export const rootReducer=combineReducers({

})

export const store=createStore(rootReducer,applyMiddleware(thunk))

export type rootReducerType=ReturnType<typeof rootReducer>