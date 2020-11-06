import instance from "../instance"

export const getUsers = (page) => {
    return instance.get(`/users?page=${page}`)
    .then(response => response.data)
}

export const followUser = (id) => {
    return instance.post(`/follow/${id}`, {})
    .then(response => response.data)
}

export const unFollowUser = (id) => {
    return instance.delete(`/follow/${id}`, {})
    .then(response => response.data)
}