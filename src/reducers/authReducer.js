import { SET_USER_DATA } from "../actions/authActions"

const initialState = {
    id: null,
    email: "",
    login: "",
    isAuth: false,
}

export const authReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_USER_DATA:
            return { 
                ...state, 
                ...action.payload,
                isAuth: true,
            }
        default: 
            return state
    }
}