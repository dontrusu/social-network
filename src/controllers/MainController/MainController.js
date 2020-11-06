import instance from "../instance"

export const getAuth = () => {
    return instance.get(`/auth/me`)
    .then(response => response.data)
}