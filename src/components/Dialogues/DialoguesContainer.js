import React from "react";
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/dialogues-reducer";
import Dialogues from "./Dialogues";
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

const DialoguesContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogues)

export default DialoguesContainer


