import { userAPI, profileAPI } from "../api/api"

let initialState = {
    posts: [
        { id: 1, post: "Heya! how's it going ?", likesCount: 2 },
        { id: 2, post: "Fine! how about you bro?", likesCount: 23 },
        { id: 3, post: "What the hell are you doing here?", likesCount: 228 },
        { id: 4, post: "Hey dickhead!", likesCount: 322 },
    ],
    newPostText: "ADHD",
    profile: null,
    status: "",
}

const profileReducer = (state = initialState, action) => {

    let newPost = {
        id: 5,
        post: state.newPostText,
        likesCount: 0,
    }

    if (action.type === 'ADD-POST') {
        return {
            ...state,
            newPostText: '',
            posts: [...state.posts, newPost]
        }

    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
        return {
            ...state,
            newPostText: action.newText,
        }
    } else if (action.type === 'SET-USER-PROFILE') {
        return {
            ...state,
            profile: action.profile,
        }
    } else if (action.type === 'SET_STATUS') {
        return {
            ...state,
            status: action.status
        }
    }

    return state


}


export const addPostActionCreator = () => {
    return {
        type: 'ADD-POST'
    }
}

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT', newText: text
    }
}

export const setUserProfile = (profile) => {
    return {
        type: 'SET-USER-PROFILE', profile
    }
}

export const setStatus = (status) => {
    return {
        type: 'SET_STATUS', status
    }
}

export const getUserProfile = (userId) => (dispatch) => {
    userAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data))
        })
}

export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data))
        })
}

export const updateStatus = (status) => (dispatch) => {
    userAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        })
}





export default profileReducer