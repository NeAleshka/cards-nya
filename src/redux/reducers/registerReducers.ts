import {cardsApi} from "../../CardsApi/Api";
import {Dispatch} from "redux";


const initialState={
  registerRequest:false
}

export const registerReducers = (state=initialState, action:any) => {
  return state
}


export const registerTC = (email:string,password:string)=>(dispatch:Dispatch) => {
  cardsApi.register(email, password).then(res=>{
    // console.log(res.data)
  }).catch(error=>{
    // console.log(error.response.data.error)
  })
}