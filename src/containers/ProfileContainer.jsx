import React from "react"
import Profile from "../components/Profile/Profile"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProfile } from "../actions/profileActions";
import { withRouter } from "react-router-dom";
import Loader from "../components/common/Loader/Loader";

const ProfileContainer = props => {

    const profile = useSelector(state => state.profile.profile)
    const loading = useSelector(state => state.profile.loading)
    const logedUser = useSelector(state => state.auth)

    const dispatch = useDispatch()

    useEffect(() => {
        let userId = props.match.params.userId ? props.match.params.userId : logedUser.id
        if(!userId){
            return
        }
        dispatch(getProfile(userId))
    }, [dispatch, props.match.params.userId, logedUser.id])

    return(
        <>
            {loading && <Loader className="loader" />}
            {!loading && <Profile profile={profile} />}
        </>
    )
}


export default withRouter(ProfileContainer)