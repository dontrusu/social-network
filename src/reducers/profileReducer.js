import { SET_PROFILE, TOGGLE_LOADING } from "../actions/profileActions"

const initialState = {
    profile: {},
    loading: false,
}

export const profileReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_PROFILE:
            return { ...state, profile: { ...action.payload } }
        case TOGGLE_LOADING: 
            return { ...state, loading: action.payload }
        default: 
            return state
    }
}