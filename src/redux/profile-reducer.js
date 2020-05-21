let initialState = {
    posts: [
        {id: 1, post: "Heya! how's it going ?", likesCount: 2},
        {id: 2, post: "Fine! how about you bro?", likesCount: 23},
        {id: 3, post: "What the hell are you doing here?", likesCount: 228},
        {id: 4, post: "Hey dickhead!", likesCount: 322},
    ],
    newPostText: "ADHD"
}

const profileReducer = (state = initialState, action) => {

    if (action.type === 'ADD-POST') {
        let newPost = {
            id: 5,
            post: state.newPostText,
            likesCount: 0,
        }
        let stateCopy = {...state}
        stateCopy.posts = [...state.posts]
        stateCopy.posts.push(newPost)
        stateCopy.newPostText = ''
        return stateCopy

    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
        let stateCopy = {...state}
        stateCopy.newPostText = action.newText
        return stateCopy
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

export default profileReducer