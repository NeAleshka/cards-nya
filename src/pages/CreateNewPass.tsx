import React, {ChangeEvent, useState} from 'react'
import {useSelector} from "react-redux";
import style from '../style/Login.module.css';
import {cardsApi} from "../CardsApi/Api";


const CreateNewPass = () => {
    const profile = useSelector<any, any>(state => state.profile)
    const [newPass, setNewPass] = useState<string>('')
    const onChange = (event:ChangeEvent<HTMLInputElement>) => {
      setNewPass(event.currentTarget.value)
    }
    const click = () => {
    cardsApi.changePassword(newPass,profile.token).then(res=>{
        console.log(res)
    })
    }
    console.log(profile.token)
    return (
        <div className={style.loginContainer}>
            <input type={'text'} onChange={onChange}/>
        <button onClick={click}>Create</button>
        </div>
    )
}

export default CreateNewPass