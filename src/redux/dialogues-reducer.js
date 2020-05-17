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
    newMessageBody: " "
}


const dialoguesReducer = (state = initialState, action) => {

    if (action.type === 'NEW-MESSAGE-BODY') {
        state.newMessageBody = action.body
    } else if (action.type === 'SEND-MESSAGE') {
        let body = state.newMessageBody
        state.newMessageBody = ''
        state.messagesData.push({id: 5, message: body})

    }

    return state
}


export const updateNewMessageBodyActionCreator = (body) => {
    return {type: 'NEW-MESSAGE-BODY', body: body}
}

export const sendMessageActionCreator = () => {
    return {type: 'SEND-MESSAGE'}
}

export default dialoguesReducer