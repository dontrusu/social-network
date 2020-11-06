import React from "react"
import s from "./Header.module.css"

const Header = props => {

    const { auth } = props

    return(
       <header className={`${s.header}`}>
           <img src="https://static.rfstat.com/renderforest/images/v2/logo-homepage/gradient_2.png" alt=""/>
           <div className={s.login}>
               {auth.isAuth ? auth.login : "Login"}
           </div>
       </header> 
    )
}

export default Header