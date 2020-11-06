import React from "react"
import s from "./ProfileInfo.module.css"

const ProfileInfo = props => {

    const { profile } = props

    let userAvatar = profile.photos?.large || `https://robohash.org/${profile.userId}?bgset=bg1`

    return(
        <div className={s.profile}>
            <div>{profile.fullName}</div>
            <div>
                <img src={userAvatar} alt="img"/>
            </div>
            <div className={s.profileDescription}>
                {profile.aboutMe}
            </div>
        </div>
    )
}

export default ProfileInfo