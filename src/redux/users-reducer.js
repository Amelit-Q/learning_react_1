let initialState = {
    usersData: '',

}


const usersReducer = (state = initialState, action) => {

    if (action.type === 'FOLLOW') {
        return {
            ...state,
            usersData: state.usersData.map(ud => {
                if (ud.id === action.userID) {
                    return {...ud, isFollowing: true}
                }
                return ud
            })
        }

    } else if (action.type === 'UNFOLLOW') {
        return {
            ...state,
            usersData: state.usersData.map(ud => {
                if (ud === action.userID) {
                    return {...ud, isFollowing: false}
                }
                return ud
            })
        }
    } else if (action.type === 'SET_USERS') {
        return {...state, usersData: [...state.usersData, ...action.usersData]}
    }
    return state
}

export const followActionCreator = (userID) => {
    return {type: 'FOLLOW', userID}
}

export const unFollowActionCreator = (userID) => {
    return {type: 'UNFOLLOW', userID}
}

export const setUsersActionCreator = (users) => {
    return {type: 'SET_USERS', users}
}

export default usersReducer