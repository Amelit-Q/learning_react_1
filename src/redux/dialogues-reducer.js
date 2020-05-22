let initialState = {
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
    newMessageBody: ""
}


const dialoguesReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'NEW-MESSAGE-BODY':
            return {
                ...state,
                newMessageBody: action.body
            }
        case 'SEND-MESSAGE':
            let body = state.newMessageBody
            return {
                ...state,
                newMessageBody: '',
                messagesData: [...state.messagesData, {message: body}],
            }
        default:
            return state
    }

}


export const updateNewMessageBodyActionCreator = (body) => {
    return {type: 'NEW-MESSAGE-BODY', body: body}
}

export const sendMessageActionCreator = () => {
    return {type: 'SEND-MESSAGE'}
}

export default dialoguesReducer