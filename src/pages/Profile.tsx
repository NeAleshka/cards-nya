import React, {useEffect, useState} from 'react'
import {useFormik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {fetchUser, updateNickNameTC} from "../redux/reducers/profileReducer";
import {rootReducerType} from "../redux/store";
import {useNavigate} from "react-router-dom";

type propsProfileType = {}
type FormikErrorType = {
    name?: string
}

const Profile = (props: propsProfileType) => {
    const [error, setError] = useState(false)
    const auth = useSelector<any, rootReducerType>(state => state.auth.isAuth)
    const name = useSelector<any, rootReducerType>(state => state.profile.name)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
        },
        validate: (values) => {
            setError(false)
            const errors: FormikErrorType = {}
            if (!values.name) {
                errors.name = 'Required field'
            } else if (values.name.length < 3) {
                errors.name = 'Minimal length is 3'
            }
            return errors
        },
        onSubmit: values => {
            dispatch(updateNickNameTC(values.name, 'https://i.pinimg.com/originals/09/05/42/0905428c0a76192d282606a5e84ebe90.png'))
        },
    });
    useEffect(() => {
        if (auth) {
            debugger
            dispatch(fetchUser())
        } else {
            navigate('/login')
        }
    }, [auth])
    return (

        <div>
            <h2>Personal Information</h2>
            {name}
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <div>
                        <label htmlFor="name">NickName</label>
                    </div>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.name}
                    />
                    {formik.touched.name && formik.errors && <div>{formik.errors.name}</div>}
                </div>
                <button type="submit">Save</button>
            </form>
        </div>
    )
}

export default Profile