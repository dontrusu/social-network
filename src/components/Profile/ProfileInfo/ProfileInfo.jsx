import React, { useState } from "react"
import { useEffect } from "react"
import s from "./ProfileInfo.module.css"

const ProfileInfo = props => {

    const { profile, logedUser } = props

    let userAvatar = profile.photos?.large || `https://robohash.org/${profile.userId}?bgset=bg1`

    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState("")

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const handleStatusClick = () => {
        if(logedUser.id !== profile.userId){
            return
        }
        setEditMode(true)
    }

    const handleStatusChange = (e) => {
        setStatus(e.target.value)
    }

    const handleStatusBlur = () => {
        setEditMode(false)
        if(status !== props.status) {
            props.setStatus(status)
        }
    }

    console.log(props.status, "and", status)

    return(
        <div className={s.profile}>
            <div className={s.name}>{profile.fullName}</div>
            {!editMode && <div 
                onClick={handleStatusClick}
                className={`${s.profileDescription} ${!status ? s.emptyStatus : ""}`}
            >
                {status ? status : (logedUser.id === profile.userId) ? "Set status" : ""}
            </div>}
            {editMode && <div className={`${s.profileDescription}`}>
                <input 
                    autoFocus={true}
                    onBlur={handleStatusBlur}
                    value={status}
                    onChange={handleStatusChange}
                />
            </div>}
            <div>
                <img src={userAvatar} alt="img"/>
            </div>
        </div>
    )
}

export default ProfileInfo