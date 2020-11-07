import { SET_USER_DATA, SET_LOADING } from "../actions/authActions"

const initialState = {
    id: null,
    email: "",
    login: "",
    isAuth: false,
    loading: true,
}

export const authReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_USER_DATA:
            return { 
                ...state, 
                ...action.payload,
                isAuth: true,
            }
        case SET_LOADING: 
            return {
                ...state,
                loading: action.payload
            }
        default: 
            return state
    }
}