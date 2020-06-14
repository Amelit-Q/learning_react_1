import { authAPI } from "../api/api"

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
}


const authReducer = (state = initialState, action) => {

    if (action.type === 'SET-USER-DATA') {
        return {
            ...state,
            ...action.data,
            isAuth: true,
        }

    }
    return state
}


export const setAuthUserData = (userId, email, login) => {
    return {
        type: 'SET-USER-DATA', data: { userId, email, login }
    }
}

export const getAuthUserData = () => (dispatch) => {
    authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let { id, login, email } = response.data.data
                dispatch(setAuthUserData(id, email, login))
            }
        })
}
export default authReducer