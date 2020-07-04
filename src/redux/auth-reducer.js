import { authAPI } from "../api/api"
import { stopSubmit } from "redux-form"

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
            ...action.payload,
            isAuth: true,
        }

    }
    return state
}


export const setAuthUserData = (userId, email, login, isAuth) => {
    return {
        type: 'SET-USER-DATA', payload: { userId, email, login, isAuth }
    }
}

export const getAuthUserData = () => (dispatch) => {
    authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let { id, login, email } = response.data.data
                dispatch(setAuthUserData(id, email, login, true))
            }
        })
}

export const login = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData())
            } else {
                let message = response.data.messages.length > 0 ? response.data.messages[0] : "Error"
                dispatch(stopSubmit("login", { _error: message }))
            }
        })

}

export const logout = () => (dispatch) => {
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        })
}

export default authReducer