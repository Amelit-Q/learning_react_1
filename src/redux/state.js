let rerenderEntireTree = () => {

}

let state = {
    profilePage: {
        posts: [
            {id: 1, post: "Heya! how's it going ?", likesCount: 2},
            {id: 2, post: "Fine! how about you bro?", likesCount: 23},
            {id: 3, post: "What the hell are you doing here?", likesCount: 228},
            {id: 4, post: "Hey dickhead!", likesCount: 322},
        ],
        newPostText: "ADHD"

    },
    dialoguesPage: {
        messagesData: [
            {id: 1, message: "Heya"},
            {id: 2, message: "How's it going?"},
            {id: 3, message: "Awesome! Better than you as usual"},
            {id: 4, message: "Hey dickhead!"},
        ],
        conversationData: [
            {id: 1, name: "John"},
            {id: 2, name: "Adam"},
            {id: 3, name: "Scott"},
            {id: 4, name: "Steve"},
        ],
    }

}

window.state = state

export const addPost = () => {
    let newPost = {
        id: 5,
        post: state.profilePage.newPostText,
        likesCount: 0,
    }


    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireTree(state)
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state)
    }


export const subscribe = (observer) => {
    rerenderEntireTree = observer
}


export default state