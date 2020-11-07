import profileAPI from "../controllers/ProfileController/ProfileController"

export const SET_PROFILE = "SET_PROFILE"
export const TOGGLE_LOADING = "TOGGLE_LOADING"

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