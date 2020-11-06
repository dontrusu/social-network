import React from "react"
import s from "./Navbar.module.css"
import { NavLink } from "react-router-dom"

const NavbarItem = ({ url, name }) => {
    return(
        <NavLink to={url} activeClassName={s.active}>
            <div className={s.navItem}>
                {name}
            </div>
        </NavLink>
    )
}

const Navbar = props => {

    return(
        <nav className={s.nav}>
            <NavbarItem url="/profile" name="Profile" />
            <NavbarItem url="/dialogs" name="Messages" />
            <NavbarItem url="/users" name="Users" />
            <NavbarItem url="/news" name="News" />
            <NavbarItem url="/music" name="Music" />
            <NavbarItem url="/settings" name="Settings" />
        </nav>
    )
}

export default Navbar