import React, { useEffect, useRef } from "react"
import s from "./Messages.module.css"
import Message from "./Message/Message"
import NewMessage from "./NewMessage/NewMessage"


const Messages = props => {

    const { addMessage, messages } = props

    const chatRef = useRef()

    useEffect(() => {
        chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }, [messages])

    return(
        <div className={s.messages}>
            <div className={s.chat} ref={chatRef} >
                {messages.map(message => <Message message={message} />)}
            </div>
            <NewMessage onSave={addMessage} />
        </div>
    )
}

export default Messages