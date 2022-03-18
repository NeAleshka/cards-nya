import React, {ChangeEvent, useState} from 'react'
import style from '../style/Login.module.css';
import {cardsApi} from "../CardsApi/Api";
import {useNavigate, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {rootReducerType} from "../redux/store";


const CreateNewPass = () => {
    const [newPass, setNewPass] = useState<string>('')
    const auth = useSelector<any, rootReducerType>(state => state.auth.isAuth);
    const navigate=useNavigate()
    if(!auth){
        navigate('/login')
    }
    const onChange = (event:ChangeEvent<HTMLInputElement>) => {
      setNewPass(event.currentTarget.value)
    }
    const {token}=useParams()
    console.log(token)
    const click = () => {
    cardsApi.changePassword(newPass,token??'').then(res=>{
        navigate('/login')
    })
    }
    return (
        <div className={style.loginContainer}>
            <input type={'text'} onChange={onChange}/>
        <button onClick={click}>Create</button>
        </div>
    )
}

export default CreateNewPass