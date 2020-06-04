import * as axios from "axios"


const instance = axios.create({
    withCredentials: true,
    baseUrl: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "d6941dc2-59bb-479a-9c7e-6b812d8b18b7"
    },
})

export const userAPI = {
    getUsers(currentPage = 1, pageSize = 8) {

        return instance.get(`users?page=${currentPage} &count=${pageSize}`)
            .then(response => {
                return response.data
            })
    }
}

