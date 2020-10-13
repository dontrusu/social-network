export const SET_DIALOGS = "SET_DIALOGS"
export const ADD_MESSAGE = "ADD_MESSAGE"

export const setDialogs = (dialogs) => {
    return {
        type: SET_DIALOGS,
        payload: dialogs
    }
}

export const addMessage = (message) => {
    return {
        type: ADD_MESSAGE,
        payload: message
    }
}