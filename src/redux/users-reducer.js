let initialState = {
    usersData: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
}


const usersReducer = (state = initialState, action) => {

    if (action.type === 'FOLLOW') {
        return {
            ...state,
            usersData: state.usersData.map(ud => {
                if (ud.id === action.userID) {
                    return { ...ud, isFollowing: true }
                }
                return ud
            })
        }

    } else if (action.type === 'UNFOLLOW') {
        return {
            ...state,
            usersData: state.usersData.map(ud => {
                if (ud.id === action.userID) {
                    return { ...ud, isFollowing: false }
                }
                return ud
            })
        }
    } else if (action.type === 'SET_USERS') {

        return { ...state, usersData: action.users }

    } else if (action.type === 'SET_CURRENT_PAGE') {

        return { ...state, currentPage: action.currentPage }

    } else if (action.type === 'SET_TOTAL_USERS_COUNT') {

        return { ...state, totalUsersCount: action.count }

    } else if (action.type === 'TOGGLE_IS_FETCHING') {
        return { ...state, isFetching: action.isFetching }
    }

    return state
}

export const follow = (userID) => {
    return { type: 'FOLLOW', userID }
}

export const unFollow = (userID) => {
    return { type: 'UNFOLLOW', userID }
}

export const setUsers = (users) => {
    return { type: 'SET_USERS', users }
}

export const setCurrentPage = (currentPage) => {
    return { type: 'SET_CURRENT_PAGE', currentPage }
}

export const setTotalUsersCount = (totalUsersCount) => {
    return { type: 'SET_TOTAL_USERS_COUNT', count: totalUsersCount }
}

export const toggleIsFetching = (isFetching) => {
    return { type: 'TOGGLE_IS_FETCHING', isFetching }
}

export default usersReducer