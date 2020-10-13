import React, { Fragment } from "react"
import s from "../Dialogs.module.css"
import { NavLink } from "react-router-dom"

const Chat = props => {

    const { name, id } = props

    return(
        <NavLink to={`/dialogs/${id}`} activeClassName={s.active}>
            <div className={s.chat}>{name}</div>
        </NavLink>
    )
}

export default Chat