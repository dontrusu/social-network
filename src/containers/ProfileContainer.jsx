import React from "react"
import Profile from "../components/Profile/Profile"
import { toggleIsFetching } from "../actions/usersActions"
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useCallback } from "react";
import { setProfile } from "../actions/profileActions";
import { withRouter } from "react-router-dom";
import { getProfile } from "../controllers/ProfileController/ProfileController";

const ProfileContainer = props => {
    console.log(props)

    const profile = useSelector(state => state.profile.profile)
    const logedUser = useSelector(state => state.auth)

    const dispatch = useDispatch()

    const setIsFetching = useCallback(value => dispatch(toggleIsFetching(value)), [dispatch])
    const setProfileInfo = useCallback(profile => dispatch(setProfile(profile)), [dispatch])

    useEffect(() => {
        let userId = props.match.params.userId ? props.match.params.userId : logedUser.id
        if(!userId){
            return
        }
        setIsFetching(true)
        getProfile(userId)
        .then(data => {
            setProfileInfo(data)
        })
        .catch(error => console.log(error.response))
        .finally(() => {setIsFetching(false)})
    }, [setIsFetching, setProfileInfo, props.match.params.userId, logedUser.id])

    return(
        <Profile profile={profile} />
    )
}


export default withRouter(ProfileContainer)