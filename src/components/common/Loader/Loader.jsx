import React from "react"
import s from "./Loader.module.css"

const Loader = props => {

    const { className, style } = props

    return(
        <div style={style} className={`${s.loader} ${className}`}>
            <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/35771931234507.564a1d2403b3a.gif" alt=""/>
        </div>
    )
}

export default Loader