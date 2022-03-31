import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {fetchUser} from "../redux/reducers/profileReducer";
import {RootReducerType} from "../redux/store";
import {NavLink, useNavigate} from "react-router-dom";
import {authLogOut} from "../redux/reducers/authReducer";
import {setCards} from "../redux/reducers/cardReducer";
import Cards from "./Profile/Cards";
import style from "./Profile.module.css";

type propsProfileType = {}
const Profile = (props: propsProfileType) => {
    const profile = useSelector<any, any>(state => state.profile)
    const auth = useSelector<any, RootReducerType>(state => state.auth.isAuth)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        if (auth) {
            dispatch(fetchUser())
        } else {
            navigate('/login')
        }
    }, [auth])
    useEffect(() => {
        dispatch(setCards())
    }, [])
    return (
        <div className={style.container}>
            <div className={style.profile}>
                <div>
                    <img style={{width: '200px', height: '200px'}} src={profile.avatar} alt="avatar"/>
                </div>
                {profile.name}
                <div>
                    <NavLink style={{marginRight: '30px'}} to={`/profile/information/`}>Information</NavLink>
                </div>
                <button onClick={() => dispatch(authLogOut())}>logOut</button>
            </div>

            <div className={style.cards}>
                <Cards/>
            </div>

        </div>
    )
}

export default Profile