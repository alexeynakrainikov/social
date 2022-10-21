import axios from "axios";

const inctance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "c22eab85-f741-4044-8fa3-80dd72e2a5e8"
    },
    baseURL: "https://social-network.samuraijs.com/api/1.0/"
})

export const usersAPI = {
    getUsers (currentPage, pageSize) {
        return inctance.get(`users?page=${currentPage}&count=${pageSize}`)
    },
    follow (userID) {
        return inctance.post(`follow/${userID}`)
    },
    unFollow (userID) {
        return inctance.delete(`follow/${userID}`)
    },
    authMe () {
        return inctance.get(`auth/me`)
    }
}
