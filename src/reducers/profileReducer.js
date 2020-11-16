import { SET_PROFILE, TOGGLE_LOADING, SET_STATUS, TOGGLE_STATUS_LOADING } from "../actions/profileActions"

const initialState = {
    profile: {},
    loading: true,
    status: "",
    statusLoading: false
}

export const profileReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_PROFILE:
            return { ...state, profile: { ...action.payload } }
        case TOGGLE_LOADING: 
            return { ...state, loading: action.payload }
        case SET_STATUS: 
            return {
                ...state,
                status: action.payload,
            }
        case TOGGLE_STATUS_LOADING: 
            return {
                ...state,
                statusLoading: action.payload,
            }
        default: 
            return state
    }
}