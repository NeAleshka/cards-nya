import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import style from '../Button/Button.module.css'

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>


type ButtonTestType=DefaultButtonPropsType &{
    name?:string
    disabled?:boolean
    callback?:()=>void
}

const Button = ({name,disabled,callback,...restProps}:ButtonTestType) => {
    return (
        <div className={style.buttonContainer}>
            <button style={disabled?{backgroundColor:"gray"}:{backgroundColor:"",cursor:'pointer'}} onClick={callback} >
                {name??'Button'}
            </button>
        </div>

    )
}

export default Button