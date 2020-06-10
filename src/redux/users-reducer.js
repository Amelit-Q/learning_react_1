import { userAPI } from "../api/api"

let initialState = {
    usersData: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    toggleFollowingProgress: [],
}


const usersReducer = (state = initialState, action) => {

    if (action.type === 'FOLLOW') {
        return {
            ...state,
            usersData: state.usersData.map(ud => {
                if (ud.id === action.userId) {
                    return { ...ud, isFollowing: true }
                }
                return ud
            })
        }

    } else if (action.type === 'UNFOLLOW') {
        return {
            ...state,
            usersData: state.usersData.map(ud => {
                if (ud.id === action.userId) {
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

    } else if (action.type === 'TOGGLE_IS_FOLLOWING_IN_PROGRESS') {

        return {
            ...state,
            toggleFollowingProgress: action.isFetching ? [...state.toggleFollowingProgress, action.userId]
                : state.toggleFollowingProgress.filter(id => id !== action.userId)
        }
    }

    return state
}

export const followSuccess = (userId) => {
    return { type: 'FOLLOW', userId }
}

export const unFollowSuccess = (userId) => {
    return { type: 'UNFOLLOW', userId }
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

export const toggleFollowingProgress = (isFetching, userId) => {
    return { type: 'TOGGLE_IS_FOLLOWING_IN_PROGRESS', isFetching, userId }
}

export const getUsers = (currentPage, pageSize) => {

    return (dispatch) => {
        dispatch(toggleIsFetching(true))
        userAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalUsersCount(data.totalCount))
        })
    }

}

export const follow = (userId) => {

    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId))
        userAPI.follow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(followSuccess(userId))
                }
                dispatch(toggleFollowingProgress(false, userId))
            })
    }

}

export const unFollow = (userId) => {

    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId))
        userAPI.unFollow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(unFollowSuccess(userId))
                }
                dispatch(toggleFollowingProgress(false, userId))
            })
    }

}
export default usersReducer