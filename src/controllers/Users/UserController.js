import instance from "../instance"

const getUsers = (page) => {
    return instance.get(`/users?page=${page}`)
    .then(response => response.data)
}

const followUser = (id) => {
    return instance.post(`/follow/${id}`, {})
    .then(response => response.data)
}

const unFollowUser = (id) => {
    return instance.delete(`/follow/${id}`, {})
    .then(response => response.data)
}

const usersAPI = {
    getUsers, 
    followUser,
    unFollowUser,
}

export default usersAPI