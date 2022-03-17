import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import style from '../Button/Button.module.css'

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>


type ButtonTestType=DefaultButtonPropsType &{
    name?:string
    disabled?:boolean
}

const Button = ({name,disabled,...restProps}:ButtonTestType) => {
    return (
        <div className={style.buttonContainer}>
            <button style={disabled?{backgroundColor:"gray"}:{backgroundColor:"",cursor:'pointer'}}>
                {name??'Button'}
            </button>
        </div>

    )
}

export default Button