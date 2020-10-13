import React from "react"
import s from "./Post.module.css"

const Post = ({ data }) => {

    return(
        <div className={s.item}>
            <img src={`https://robohash.org/${data.id}?bgset=bg1`} alt=""/>
            <div className={s.text}>{data.text}</div>
        </div>
    )
}

export default Post