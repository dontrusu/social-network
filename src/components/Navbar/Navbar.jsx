import React from "react"
import s from "./Navbar.module.css"
import { NavLink } from "react-router-dom"

const Navbar = props => {

    return(
        <nav className={s.nav}>
            <NavLink to="/profile" activeClassName={s.active}>
                <div className={s.navItem}>
                    Profile
                </div>
            </NavLink>
            <NavLink to="/dialogs" activeClassName={s.active}>
                <div className={s.navItem}>
                    Messages
                </div>
            </NavLink>
            <NavLink to="/news" activeClassName={s.active}>
                <div className={s.navItem}>
                    News
                </div>
            </NavLink>
            <NavLink to="/music" activeClassName={s.active}>
                <div className={s.navItem}>
                    Music
                </div>
            </NavLink>
            <NavLink to="/settings" activeClassName={s.active}>
                <div className={s.navItem}>
                    Settings
                </div>
            </NavLink>
        </nav>
    )
}

export default Navbar