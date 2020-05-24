import React from "react";
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/dialogues-reducer";
import DialoguesStateless from "./DialoguesStateless";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialoguesPage: state.dialoguesPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyActionCreator(body))
        },
        sendMessage: () => {
            dispatch(sendMessageActionCreator())
        },

    }
}

const DialoguesStateful = connect(mapStateToProps, mapDispatchToProps)(DialoguesStateless)

export default DialoguesStateful


