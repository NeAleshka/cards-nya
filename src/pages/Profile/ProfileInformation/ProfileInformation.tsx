import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useFormik} from "formik";
import {updateNickNameTC} from "../../../redux/reducers/profileReducer";

type FormikErrorType = {
    name?: string,
    avatar?: string,
}

const ProfileInformation = () => {
    const [error, setError] = useState(false)
    const profile = useSelector<any, any>(state => state.profile)
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            name: profile.name,
            avatar: '',
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
            dispatch(updateNickNameTC(values.name, values.avatar));

        },
    });
    return (

        <div>
            <h2>Personal Information</h2>
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
                    <div>
                        <label htmlFor="avatar">avatar</label>
                    </div>
                    <input
                        id="avatar"
                        name="avatar"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.avatar}
                    />
                    {formik.touched.name && formik.errors && <div>{formik.errors.name}</div>}
                </div>
                <button type="submit">Save</button>
            </form>

        </div>
    )
}

export default ProfileInformation;