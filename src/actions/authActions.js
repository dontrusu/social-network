import mainAPI from "../controllers/MainController/MainController"

export const SET_USER_DATA = "SET_USER_DATA"
export const SET_LOADING = "SET_LOADING"

const setUserData = (data) => {
    return {
        type: SET_USER_DATA,
        payload: data
    }
}

const setLoading = (value) => {
    return {
        type: SET_LOADING,
        payload: value
    }
}

export const getAuthData = () => dispatch => {
    dispatch(setLoading(true))
    mainAPI.getAuth().then(data => {
        if(data.resultCode === 0){
            dispatch(setUserData(data.data))
        }
    })
    .catch(error => console.log(error.response))
    .finally(() => {
        dispatch(setLoading(false))
    })
}