import instance from "../instance"

const getProfile = (userId) => {
    return instance.get(`/profile/${userId}`)
    .then(response => response.data)
}

const getStatus = userId => {
    return instance.get(`/profile/status/${userId}`)
    .then(response => response.data)
}

const setStatus = status => {
    return instance.put(`/profile/status`, { status })
    .then(response => response.data)
}

const profileAPI = {
    getProfile,
    getStatus,
    setStatus,
}

export default profileAPI