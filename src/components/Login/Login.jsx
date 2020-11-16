import React from "react"
import s from "./Login.module.css"
import { Field, reduxForm } from 'redux-form'

let LoginForm = props => {

    const { handleSubmit } = props

    console.log(props)

    return(
        <form onSubmit={handleSubmit}>
            <div className={s.loginField} >
                <Field component="input" type="email" name="email" placeholder="Email"/>
            </div>
            <div className={s.loginField} >
                <Field component="input" type="password" name="password" placeholder="Password"/>
            </div>
            <div className={s.rememberMe}>
                <label>
                    <Field component="input" type="checkbox" name="rememberMe" />
                    Remember Me
                </label>
            </div>
            <button type="submit" className={s.loginBtn}>Login</button>
        </form>
    )
}

LoginForm = reduxForm({form: 'login'})(LoginForm)

const Login = props => {

    const onSubmit = values => {
        console.log(values)
    }

    return(
        <div className={s.login}>
            <div className={s.loginLabel}>Login</div>
            <LoginForm onSubmit={onSubmit} />
        </div>
    )
}

export default Login