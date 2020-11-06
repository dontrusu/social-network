import React from "react"
import s from "./Login.module.css"

const Login = props => {

    return(
        <div className={s.login}>
            <div className={s.loginLabel}>Login</div>
            <div className={s.loginField} >
                <input type="email" name="email"/>
            </div>
            <div className={s.loginField} >
                <input type="password" name="password"/>
            </div>
            <button>Login</button>
        </div>
    )
}

export default Login