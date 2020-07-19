import profileReducer, { addPostActionCreator } from "./profile-reducer";

let state = {
    posts: [
        { id: 1, post: "Heya! how's it going ?", likesCount: 2 },
        { id: 2, post: "Fine! how about you bro?", likesCount: 23 },
        { id: 3, post: "What the hell are you doing here?", likesCount: 228 },
        { id: 4, post: "Hey dickhead!", likesCount: 322 },
    ]
}

test('length of the array will 5 points after this test', () => {
    let action = addPostActionCreator('random action')
    let newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(5)

});

test('Fifth post will be "random action" after this test', () => {
    let action = addPostActionCreator('random action')
    let newState = profileReducer(state, action)

    expect(newState.posts[4].post).toBe('random action')

});

