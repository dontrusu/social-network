import React from "react"
import { NavLink } from "react-router-dom"
import s from "../Users.module.css"
import { followUser, unFollowUser } from "../../../controllers/Users/UserController"

const User = ({ data, follow, unfollow }) => {

    const handleFollowUnfollow = () => {
        if(data.followed){
            onUnfollow(data.id)
        }else{
            onFollow(data.id)
        }
    }

    const onFollow = (id) => {
        followUser(id)
        .then(data => {
            if(data.resultCode === 0){
                follow(id)
            }
        })
        .catch(error => console.log(error.response))
        .finally()
    }

    const onUnfollow = (id) => {
        unFollowUser(id)
        .then(data => {
            if(data.resultCode === 0){
                unfollow(id)
            }
        })
        .catch(error => console.log(error.response))
        .finally()
    }

    return(
        <div className={s.user}>
            <div className={s.userActions}>
                <NavLink to={`profile/${data.id}`}>
                    <div className={s.userAvatar}>
                        <img src={data.photos.small || `https://robohash.org/${data.id}?bgset=bg1`} alt=""/>
                    </div>
                </NavLink>
                <button className={s.follow} onClick={handleFollowUnfollow}>
                    {data.followed ? "Unfollow" : "Follow"}
                </button>
            </div>
            <div className={s.userInfo}>
                <div className={`${s.name} ${s.infoItem}`}>{data.name}</div>
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