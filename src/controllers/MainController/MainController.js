import instance from "../instance"

export const getAuth = () => {
    return instance.get(`/auth/me`)
    .then(response => response.data)
}

const mainAPI = {
    getAuth
}

export default mainAPI