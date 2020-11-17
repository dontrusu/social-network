import React from "react"
import s from "./FormControlls.module.css"

export const InputField = (props) => {

    const { label, input, type, meta, placeholder } = props

    const showError = meta.error && meta.touched

    return(
        <div className={s.inputContainer}>
            <label>
                {label}
                <input {...input} 
                    placeholder={placeholder} 
                    type={type} 
                    className={`${s.inputField} ${showError ? s.inputError : ""}`}
                />
            </label>
                {showError && <span className={s.error}>{meta.error}</span>}
        </div>
    )
}
