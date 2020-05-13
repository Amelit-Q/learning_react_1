let store = {
    _state: {
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

    },
    getState() {
        return this._state
    },
    _callSubscriber() {
        console.log('State changed')
    },
    addPost() {
        let newPost = {
            id: 5,
            post: this._state.profilePage.newPostText,
            likesCount: 0,
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber(this._state)
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber(this._state)
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

}


window.store = store
export default store