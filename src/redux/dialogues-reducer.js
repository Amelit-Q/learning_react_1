let initialState = {
    messagesData: [
        { id: 1, message: "Heya" },
        { id: 2, message: "How's it going?" },
        { id: 3, message: "Awesome! Better than you as usual" },
        { id: 4, message: "Hey dickhead!" },
    ],
    conversationData: [
        { id: 1, name: "John" },
        { id: 2, name: "Adam" },
        { id: 3, name: "Scott" },
        { id: 4, name: "Steve" },
    ]
}


const dialoguesReducer = (state = initialState, action) => {

    if (action.type === 'SEND-MESSAGE') {
        let body = action.newMessageBody
        return {
            ...state,
            messagesData: [...state.messagesData, { message: body }]
        }

    }
    return state


}

export const sendMessageActionCreator = (newMessageBody) => {
    return { type: 'SEND-MESSAGE', newMessageBody }
}

export default dialoguesReducer