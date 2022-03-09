import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {authTC} from "../redux/reducers/authReducer";
import {rootReducerType} from "../redux/store";
import {useNavigate} from "react-router-dom";

type propsLoginType = {}

const Login = (props: propsLoginType) => {
    const auth = useSelector<any, rootReducerType>(state => state.auth.isAuth)
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    useEffect(() => {
        if (!auth) {
            dispatch(authTC(email, password))
        } else {
            navigate('/profile')
        }

    }, [email, password, auth])

    return (
        <div>
            <h2>Login</h2>
            <Formik
                initialValues={{email: '', password: ''}}
                validate={values => {
                    const errors: any = {};
                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }
                    if (!values.password) {
                        errors.password = 'Required field'
                    } else if (values.password.length < 7) {
                        errors.password = 'Minimal length is 7'
                    }
                    return errors;
                }}
                onSubmit={(values, {setSubmitting}) => {
                    setEmail(values.email)
                    setPassword(values.password)
                }}
            >
                {({isSubmitting}) => (
                    <Form>
                        <h5>Email</h5>
                        <Field type="email" name="email"/>
                        <ErrorMessage name="email" component="div"/>
                        <h5>Password</h5>
                        <Field type="password" name="password"/>
                        <ErrorMessage name="password" component="div"/>
                        <div>
                            <button type="submit" disabled={isSubmitting}>
                                login
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default Login