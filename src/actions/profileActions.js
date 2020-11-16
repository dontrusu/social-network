import profileAPI from "../controllers/ProfileController/ProfileController"

export const SET_PROFILE = "SET_PROFILE"
export const TOGGLE_LOADING = "TOGGLE_LOADING"
export const SET_STATUS = "SET_STATUS"
export const TOGGLE_STATUS_LOADING = "TOGGLE_STATUS_LOADING"

const setProfile = (profile) => {
    return {
        type: SET_PROFILE,
        payload: profile
    }
}

const setLoading = (value) => {
    return {
        type: TOGGLE_LOADING,
        payload: value
    }
}

const setStatus = (status) => {
    return {
        type: SET_STATUS,
        payload: status,
    }
}

const toggleStatusLoading = (status) => {
    return {
        type: TOGGLE_STATUS_LOADING,
        payload: status,
    }
}

export const getProfile = id => dispatch => {
    dispatch(setLoading(true))
    profileAPI.getProfile(id)
    .then(data => {
        dispatch(setProfile(data))
    })
    .catch(error => console.log(error.response))
    .finally(() => {
        dispatch(setLoading(false))
    })
}

export const getStatus = userId => dispatch => {
    dispatch(toggleStatusLoading(true))
    profileAPI.getStatus(userId)
    .then((data) => {
        dispatch(setStatus(data))
    })
    .catch(error => console.log(error.response))
    .finally(() => {
        dispatch(toggleStatusLoading(false))
    })
}

export const changeStatus = status => dispatch => {
    dispatch(toggleStatusLoading(true))
    profileAPI.setStatus(status)
    .then((data) => {
        if(data.resultCode === 0){
            dispatch(setStatus(status))
        }
    })
    .catch(error => console.log(error.response))
    .finally(() => {
        dispatch(toggleStatusLoading(false))
    })
}