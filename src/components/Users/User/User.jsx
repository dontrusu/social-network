import React from "react"
import { NavLink } from "react-router-dom"
import s from "../Users.module.css"

const User = props => {

    const { data, follow, unfollow, loadingFollow, auth } = props

    const handleFollowUnfollow = () => {
        if(data.followed){
            unfollow(data.id)
        }else{
            follow(data.id)
        }
    }

    return(
        <div className={s.user}>
            <div className={s.userActions}>
                <NavLink to={`profile/${data.id}`}>
                    <div className={s.userAvatar}>
                        <img src={data.photos.small || `https://robohash.org/${data.id}?bgset=bg1`} alt=""/>
                    </div>
                </NavLink>
                <button 
                    className={s.follow} 
                    onClick={handleFollowUnfollow}
                    disabled={!auth.isAuth || loadingFollow.includes(data.id)}
                >
                    {data.followed ? "Unfollow" : "Follow"}
                </button>
            </div>
            <div className={s.userInfo}>
                <NavLink to={`profile/${data.id}`}>
                    <div className={`${s.name} ${s.infoItem}`}>{data.name}</div>
                </NavLink>
                <div className={`${s.status} ${s.infoItem}`}>{data.status || "No status..."}</div>
                <div className={`${s.location} ${s.infoItem}`}>
                    <div>{data.location?.Country || "Ukraine"},</div>
                    <div>{data.location?.City || "Poltava"}</div>
                </div>
            </div>
        </div>
    )
}

export default User