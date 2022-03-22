import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {fetchUser} from "../redux/reducers/profileReducer";
import {rootReducerType} from "../redux/store";
import {Link, NavLink, useNavigate} from "react-router-dom";
import {authLogOut} from "../redux/reducers/authReducer";
import Button from "../components/Button/Button";
import {AiTwotoneSetting} from "react-icons/all";


type propsProfileType = {}
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
                <img style={{width: '200px', height: '200px',borderRadius:'15px'}} src={profile.avatar} alt="avatar"/>
            </div>
            <div style={{display:"flex",justifyContent:"center",fontSize:'20px'}}>
                {profile.name}
                <AiTwotoneSetting onClick={()=>navigate('/profile/change-data')} style={{marginLeft:'7px',cursor:'pointer'}} size={15} />
            </div>


            <Button callback={() => dispatch(authLogOut())} name={'Log Out'}>logOut</Button>


        </div>
    )
}

export default Profile