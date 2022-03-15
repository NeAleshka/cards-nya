import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import style from '../../style/Login.module.css'

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>


type ButtonTestType=DefaultButtonPropsType &{
    name?:string
}

const Button = ({name,...restProps}:ButtonTestType) => {
    return (
        <div className={style.buttonContainer}>
            <button>
                {name??'Button'}
            </button>
        </div>

    )
}

export default Button