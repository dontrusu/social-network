import React, { useCallback } from "react"
import Profile from "../components/Profile/Profile"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { changeStatus, getProfile, getStatus } from "../actions/profileActions";
import { withRouter } from "react-router-dom";
import Loader from "../components/common/Loader/Loader";

const ProfileContainer = props => {

    const profile = useSelector(state => state.profile.profile)
    const status = useSelector(state => state.profile.status)
    const loading = useSelector(state => state.profile.loading)
    const logedUser = useSelector(state => state.auth)

    const dispatch = useDispatch()

    const setStatus = useCallback((status) => dispatch(changeStatus(status)), [dispatch])

    useEffect(() => {
        let userId = props.match.params.userId ? props.match.params.userId : logedUser.id
        if(!userId){
            return
        }
        dispatch(getProfile(userId))
        dispatch(getStatus(userId))
    }, [dispatch, props.match.params.userId, logedUser.id])

    return(
        <>
            {loading && <Loader className="loader" />}
            {!loading && <Profile profile={profile} setStatus={setStatus} status={status} logedUser={logedUser} />}
        </>
    )
}


export default withRouter(ProfileContainer)