let state = {
    profilePage: {
        posts: [
            {id: 1, post: "Heya! how's it going ?", likesCount: 2},
            {id: 2, post: "Fine! how about you bro?", likesCount: 23},
            {id: 3, post: "What the hell are you doing here?", likesCount: 228},
            {id: 4, post: "Hey dickhead!", likesCount: 322},
        ],

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

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0,
    }

    state.profilePage.posts.push(newPost)
}

export default state