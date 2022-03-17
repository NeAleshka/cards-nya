import React, {useState} from 'react'
import {useFormik} from "formik";
import {cardsApi} from "../CardsApi/Api";
import {useNavigate} from "react-router-dom";
import style from '../style/Login.module.css';
import Button from '../components/Button/Button';

type FormikErrorType = {
    email?: string
    password?: string
    confirmPassword?:string
}


const SingUp = () => {
    const navigate=useNavigate()
    const [error, setError] = useState('')
    const formik = useFormik({
            initialValues: {
                email: '',
                password: '',
                confirmPassword:'',
            },
            validate: (values) => {

                setError('')
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
                if(values.confirmPassword!==values.password){
                    errors.confirmPassword='Пароли не совпадают'
                }
                return errors
            },
            onSubmit: values => {
                cardsApi.register(values.email, values.password).then(res => {
                    navigate('/login')
                    setError('')
                    formik.resetForm()
                }).catch(error => {
                    setError(error.response.data.error)
                    formik.resetForm()
                })

            }
        }
    )

    return (

        <div className={style.loginContainer}>
           <div>
               <h2>It-Incubator</h2>
               <h2>Sing Up</h2>
           </div>
            <form onSubmit={formik.handleSubmit}>
                <div className={style.inputContainer}>
                    <input className={style.input} placeholder={'Email'} type={"email"} {...formik.getFieldProps('email')}/>
                    {formik.touched.email && formik.errors && <div>{formik.errors.email}</div>}
                    <input className={style.input} placeholder={'Password'} type={'password'} {...formik.getFieldProps('password')}/>
                    {formik.touched.password && formik.errors && <div>{formik.errors.password}</div>}
                    <input className={style.input} placeholder={'Confirm Password'} type={'password'} {...formik.getFieldProps('confirmPassword')}/>
                    {formik.touched.confirmPassword && formik.errors && <div>{formik.errors.confirmPassword}</div>}
                    <Button name={'Sing Up'} type={"submit"} disabled={!!Object.keys(formik.errors).length || !formik.getFieldProps('email').value}/>
                    {error&&<div>{error}</div>}
                </div>
            </form>
        </div>

    )
}

export default SingUp