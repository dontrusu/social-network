export const ADD_USER = "ADD_USER"
export const FOLLOW = "FOLLOW"
export const UNFOLLOW = "UNFOLLOW"
export const SET_USERS = "SET_USERS"
export const CHANGE_PAGE = "CHANGE_PAGE"
export const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"

export const addUser = (post) => {
    return {
        type: ADD_USER,
        payload: post
    }
}

export const follow = (id) => {
    return {
        type: FOLLOW,
        payload: id,
    }
}

export const unfollow = (id) => {
    return {
        type: UNFOLLOW,
        payload: id,
    }
}

export const setUsers = (users) => {
    return {
        type: SET_USERS,
        payload: users,
    }
}

export const changePage = (index) => {
    return {
        type: CHANGE_PAGE,
        payload: index,
    }
}

export const toggleIsFetching = value => {
    return {
        type: TOGGLE_IS_FETCHING,
        payload: value
    }
}