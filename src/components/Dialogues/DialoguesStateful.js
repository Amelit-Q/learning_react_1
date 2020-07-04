import React from "react";
import { sendMessageActionCreator } from "../../redux/dialogues-reducer";
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
        sendMessage: (newMessageBody) => {
            dispatch(sendMessageActionCreator(newMessageBody))
        },

    }
}


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    //withAuthRedirect
)(DialoguesStateless)



