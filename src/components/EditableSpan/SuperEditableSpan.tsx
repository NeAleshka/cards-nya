import React, {DetailedHTMLProps, InputHTMLAttributes, HTMLAttributes, useState} from 'react'
import SuperInputText from '../InputText/SuperInputText'
import s from './SuperEditableSpan.module.css'

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
// тип пропсов обычного спана
type DefaultSpanPropsType = DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>

// здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
type SuperEditableSpanType = DefaultInputPropsType & { // и + ещё пропсы которых нет в стандартном инпуте
    onChangeText?: (value: string) => void
    onEnter?: () => void
    error?: string
    spanClassName?: string

    spanProps?: DefaultSpanPropsType // пропсы для спана
}

const SuperEditableSpan: React.FC<SuperEditableSpanType> = (
    {
        autoFocus, // игнорировать изменение этого пропса
        onBlur,
        onEnter,
        spanProps,
        ...restProps// все остальные пропсы попадут в объект restProps
    }
) => {
    const [editMode, setEditMode] = useState<boolean>(false)
    const {children, onDoubleClick, className, ...restSpanProps} = spanProps || {}

    const onEnterCallback = () => {
        setEditMode(false)

        onEnter && onEnter()
    }
    const onBlurCallback = (e: React.FocusEvent<HTMLInputElement>) => {
        setEditMode(false)
        onBlur && onBlur(e)
    }
    const onDoubleClickCallBack = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        setEditMode(true)

        onDoubleClick && onDoubleClick(e)
    }

    const spanClassName = `${s.superSpanStyle} ${className}`

    return (
        <>
            {editMode
                ? (
                    <SuperInputText
                        style={{backgroundColor: 'white', color: 'black'}}
                        placeholder={'Enter some interesting'}
                        autoFocus // пропсу с булевым значением необязательно указывать true
                        onBlur={onBlurCallback}
                        onEnter={onEnterCallback}
                        {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)
                    />
                ) : (
                    <span
                        onDoubleClick={onDoubleClickCallBack}
                        className={spanClassName}
                        {...restSpanProps}
                    >
                       {/*  <BsFillPencilFill style={{
                             transform: 'scaleX(-1)',
                             marginRight: '5px',
                             color: 'cornflowerblue',
                             cursor: 'pointer'
                         }}/>*/}
                        {/*если нет захардкодженного текста для спана, то значение инпута*/}
                        {children || restProps.value}
                    </span>


                )
            }
        </>
    )
}

export default SuperEditableSpan
