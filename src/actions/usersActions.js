import usersAPI from "../controllers/Users/UserController"

export const ADD_USER = "ADD_USER"
export const FOLLOW = "FOLLOW"
export const UNFOLLOW = "UNFOLLOW"
export const SET_USERS = "SET_USERS"
export const CHANGE_PAGE = "CHANGE_PAGE"
export const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"
export const LOADING_FOLLOW = "LOADING_FOLLOW"

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

export const toggleLoadingFollow = ids => {
    return {
        type: LOADING_FOLLOW,
        payload: ids
    }
}

export const getUsers = (page) => dispatch => {
    dispatch(toggleIsFetching(true))
    usersAPI.getUsers(page)
    .then(data => {
        dispatch(setUsers(data))
    })
    .catch(error => console.log(error.response))
    .finally(() => {dispatch(toggleIsFetching(false))})
} 

export const followUser = id => dispatch => {
    dispatch(toggleLoadingFollow({ id, fetching: true }))
    usersAPI.followUser(id).then(data => {
        if(data.resultCode === 0){
            dispatch(follow(id))
        }
    })
    .catch(error => console.log(error.response))
    .finally(() => {
        dispatch(toggleLoadingFollow({ id, fetching: false }))
    })
}

export const unfollowUser = id => dispatch => {
    dispatch(toggleLoadingFollow({ id, fetching: true }))
    usersAPI.unFollowUser(id).then(data => {
        if(data.resultCode === 0){
            dispatch(unfollow(id))
        }
    })
    .catch(error => console.log(error.response))
    .finally(() => {
        dispatch(toggleLoadingFollow({ id, fetching: false }))
    })
}