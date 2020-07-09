import React from "react"
import styles from "./Header.module.css"

const Header = props => {

    return(
       <header className={`${styles.header}`}>
           <img src="https://static.rfstat.com/renderforest/images/v2/logo-homepage/gradient_2.png" alt=""/>
       </header> 
    )
}

export default Header