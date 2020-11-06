import { ADD_USER, FOLLOW, UNFOLLOW, SET_USERS, CHANGE_PAGE, TOGGLE_IS_FETCHING } from "../actions/usersActions"

const defaultState = {
    users: [
        // {
        //     FirstName: "Kat",
        //     LastName: "Zvarich", 
        //     location: {
        //         Country: "Kazakhstan",
        //         City: "Pavlodar",
        //     },
        //     Status: "I am a cutie",
        //     follow: false,
        //     id: 1,
        // },
        // {
        //     FirstName: "Evgeniy",
        //     LastName: "Shaparenko", 
        //     location: {
        //         Country: "Ukraine",
        //         City: "Poltava",
        //     },
        //     Status: "I like to smoke weed",
        //     follow: false,
        //     id: 2
        // },
        // {
        //     FirstName: "Sasha",
        //     LastName: "Tesla", 
        //     location: {
        //         Country: "Ukraine",
        //         City: "Poltava",
        //     },
        //     Status: "I love pedra",
        //     follow: false,
        //     id: 3
        // },
        // {
        //     FirstName: "Maksim",
        //     LastName: "Kaban", 
        //     location: {
        //         Country: "Ukraine",
        //         City: "Poltava",
        //     },
        //     Status: "I like to smoke weed",
        //     follow: false,
        //     id: 4
        // },
        // {
        //     FirstName: "Miroslav",
        //     LastName: "Vasiliev", 
        //     location: {
        //         Country: "Ukraine",
        //         City: "Poltava",
        //     },
        //     Status: "Slav",
        //     follow: false,
        //     id: 5
        // },
    ],
    page: 1,
    count: 10,
    totalCount: 0,
    isFetching: false,
}

export const usersReducer = (state = defaultState, action) => {
    switch(action.type){
        case ADD_USER:
            return {
                ...state,
                users: [ { ...action.payload }, state.users ]
            }
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if(user.id === action.payload){
                        return { ...user, followed: true }
                    }
                    return user
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if(user.id === action.payload){
                        return { ...user, followed: false }
                    }
                    return user
                })
            }
        case SET_USERS: 
            return {
                ...state,
                users: [ ...action.payload.items],
                totalCount: action.payload.totalCount
            }
        case CHANGE_PAGE: 
            return {
                ...state,
                page: action.payload
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.payload
            }
        default: 
            return state
    }
}