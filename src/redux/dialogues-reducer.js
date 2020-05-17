const dialoguesReducer = (state, action) => {

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