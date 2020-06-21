import React from "react";
import { sendMessageActionCreator, updateNewMessageBodyActionCreator } from "../../redux/dialogues-reducer";
import { withAuthRedirect } from './../../HOC/withAuthRedirect'
import DialoguesStateless from "./DialoguesStateless";
import { connect } from "react-redux";
import { compose } from "redux";

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


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(DialoguesStateless)



