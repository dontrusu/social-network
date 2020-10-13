import React, { Fragment } from "react"
import s from "./Dialogs.module.css"
import Chat from "./Chat/Chat"
import Messages from "./Messages/Messages"


const Dialogs = props => {

    const { chats, messages, addMessage } = props

    return(
        <div className={s.dialogs}>
            <div className={s.chats}>
                {chats.map(chat => <Chat name={chat.name} id={chat.id} />)}
            </div>
            <Messages messages={messages} addMessage={addMessage} />
        </div>
    )
}

export default Dialogs