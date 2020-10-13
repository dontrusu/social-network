import React from "react"
import Dialogs from "../components/Dialogs/Dialogs"
import { addMessage } from "../actions/dialogsActions"
import { useDispatch, useSelector } from "react-redux";

const DialogsContainer = props => {

    const chats = useSelector(state => state.dialogs.chats)
    const messages = useSelector(state => state.messages)
    const dispatch = useDispatch();

    return(
        <Dialogs 
            chats={chats}
            messages={messages}
            addMessage={(message) => dispatch(addMessage(message))}
        />
    )
}

export default DialogsContainer