import React, { Fragment } from "react"
import s from "../Messages.module.css"

const Message = props => {

    const { message } = props

    return(
        <div className={`${s.message} ${message.type === "incoming" ? s.messageIncoming : s.messageOutcoming}`}>
            <div className={s.messageText}>{message.text}</div>
        </div>
    )
}

export default Message