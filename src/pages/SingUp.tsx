import React, {useState} from 'react'
import {useFormik} from "formik";
import {useDispatch} from "react-redux";
import {registerTC} from "../redux/reducers/registerReducers";
import {cardsApi} from "../CardsApi/Api";
import {Navigate, NavLink} from "react-router-dom";

type FormikErrorType = {
    email?: string
    password?: string
}


const SingUp = () => {
    const [error, setError] = useState(false)
    const formik = useFormik({
            initialValues: {
                email: '',
                password: '',
            },
            validate: (values) => {
                setError(false)
                const errors: FormikErrorType = {}
                if (!values.email) {
                    errors.email = 'Required field'
                } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                    errors.email = 'Invalid email address'
                }
                if (!values.password) {
                    errors.password = 'Required field'
                } else if (values.password.length < 7) {
                    errors.password = 'Minimal length is 7'
                }
                return errors
            },
            onSubmit: values => {
                cardsApi.register(values.email, values.password).then(res => {
                    setError(!error)
                    formik.resetForm()
                }).catch(error => {
                    setError(error.response.data.error)
                    formik.resetForm()
                })

            }
        }
    )
    return (
        <div>
            <h2>Sing Up</h2>
            <form onSubmit={formik.handleSubmit}>
                <div style={{display: 'flex', flexDirection: 'column', width: '400px', margin: '0 auto'}}>
                    <input placeholder={'Email'} type={"email"} {...formik.getFieldProps('email')}/>
                    {formik.touched.email && formik.errors && <div>{formik.errors.email}</div>}
                    <input placeholder={'Password'} type={'password'} {...formik.getFieldProps('password')}/>
                    {formik.touched.password && formik.errors && <div>{formik.errors.password}</div>}
                    <button type={"submit"} disabled={!!Object.keys(formik.errors).length || !formik.getFieldProps('email').value||error}>
                       Sing Up
                    </button>
                    {error&&<div>{error}</div>}
                </div>
            </form>
        </div>

    )
}

export default SingUp