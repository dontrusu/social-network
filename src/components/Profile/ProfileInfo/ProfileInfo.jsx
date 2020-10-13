import React from "react"
import s from "./ProfileInfo.module.css"

const ProfileInfo = props => {

    return(
        <div className={s.profile}>
            <div>
                <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" alt="img"/>
            </div>
            <div className={s.profileDescription}>
                Father, Husband, Christian.
            </div>
        </div>
    )
}

export default ProfileInfo