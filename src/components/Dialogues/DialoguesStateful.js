import React from "react";
import { sendMessageActionCreator, updateNewMessageBodyActionCreator } from "../../redux/dialogues-reducer";
import { withAuthRedirect } from './../../HOC/withAuthRedirect'
import DialoguesStateless from "./DialoguesStateless";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

let mapStateToProps = (state) => {
    return {
        dialoguesPage: state.dialoguesPage,
        isAuth: state.auth.isAuth
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

let AuthRedirectComponent = withAuthRedirect(DialoguesStateless)

const DialoguesStateful = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)

export default DialoguesStateful


