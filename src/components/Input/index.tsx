import React, { InputHTMLAttributes } from 'react'

import './styles.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string
    label: string

}

//Componenete com as propriedades tipadas
//Podemos pegar todas as propriedades passando props ou passando uma por uma(label, name ...rest)

const Input: React.FC<InputProps> = ({ label, name, ...rest }) => {
    return (
        <div className="input-block">
            <label htmlFor={name}>{label}</label>
            <input type="text" name="" id={name} {...rest} />
        </div>
    )
}

export default Input