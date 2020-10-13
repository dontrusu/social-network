import React from "react"
import s from "./NewPost.module.css"
import { useState } from "react"

const NewPost = props => {

    const [text, setText] = useState("")

    const handleSend = () => {
        if(text){
            props.adNewPost({text, id: new Date().valueOf()})
            setText("")
        }
    }

    return(
        <div className={s.newPost}>
            <textarea 
                className={s.textField} 
                onChange={(e) => {setText(e.target.value)}} 
                value={text}
            />
            <div>
                <button onClick={handleSend}>Send</button>
            </div>
        </div>
    )
}

export default NewPost