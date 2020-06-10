import * as axios from "axios"


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "9ce669e1-363f-4888-81dc-d72fdcf6878d"
    },
})

export const userAPI = {
    getUsers(currentPage = 1, pageSize = 10) {

        return instance.get(`users?page=${currentPage} &count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)

    },
    unFollow(userId) {

        return instance.delete(`follow/${userId}`)
    }
}

