import React, { useState } from "react"
import s from "../Messages.module.css"

const NewMessage = props => {

    const { onSave } = props

    const [value, setValue] = useState("")

    const handleChange = e => {
        setValue(e.target.value)
    }

    const handleSend = () => {
        if(value){
            onSave( {text: value, type: "outcoming"} )
            setValue("")
        }
    }

    return(
        <div className={s.newMessage}>
            <textarea onChange={handleChange} value={value} />
            <div>
                <button onClick={handleSend}>Send</button>
            </div>
        </div>
    )
}

export default NewMessage