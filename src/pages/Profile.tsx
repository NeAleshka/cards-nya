import React, {useEffect, useState} from 'react'
import {useFormik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {fetchUser, updateNickNameTC} from "../redux/reducers/profileReducer";
import {rootReducerType} from "../redux/store";
import {NavLink, useNavigate} from "react-router-dom";

type propsProfileType = {}
type FormikErrorType = {
    name?: string
}
const Profile = (props: propsProfileType) => {
    const profile = useSelector<any, any>(state => state.profile)
    const auth = useSelector<any, rootReducerType>(state => state.auth.isAuth)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        if (auth) {
            dispatch(fetchUser())
        } else {
            navigate('/login')
        }
    }, [auth])
    return (
        <div>
            <div>
                <img style={{width: '200px', height: '200px'}} src={profile.avatar} alt="avatar"/>
            </div>
            {profile.name}
            <div>
                <NavLink style={{marginRight: '30px'}} to={'/profile/information'}>Information</NavLink>
            </div>
        </div>
    )
}

export default Profile