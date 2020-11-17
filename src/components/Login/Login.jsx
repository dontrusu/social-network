import React from "react"
import s from "./Login.module.css"
import { Field, reduxForm } from 'redux-form'
import { InputField } from "../common/FormControlls/FormControlls"
import { email, required } from "../../utils/validators"

let LoginForm = props => {

    const { handleSubmit } = props

    console.log(props)

    return(
        <form onSubmit={handleSubmit}>
            <div className={s.loginField} >
                <Field 
                    component={InputField} 
                    type="email" 
                    name="email" 
                    placeholder="Email"
                    validate={[email, required]}
                />
            </div>
            <div className={s.loginField} >
                <Field 
                    component={InputField} 
                    type="password" 
                    name="password" 
                    placeholder="Password"
                    validate={[required]}
                />
            </div>
            <div className={s.rememberMe}>
                <Field 
                    component={InputField} 
                    type="checkbox" 
                    name="rememberMe" 
                    label="Remember Me"
                />
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