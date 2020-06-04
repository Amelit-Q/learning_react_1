let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: null,
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

export default authReducer