import instance from "../instance"

const getProfile = (userId) => {
    return instance.get(`/profile/${userId}`)
    .then(response => response.data)
}

const profileAPI = {
    getProfile
}

export default profileAPI