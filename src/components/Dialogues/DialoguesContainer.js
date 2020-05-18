import React from "react";
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/dialogues-reducer";
import Dialogues from "./Dialogues";


const DialoguesContainer = (props) => {

    let state = props.store.getState().dialoguesPage


    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageActionCreator())
    }

    let onNewMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyActionCreator(body))
    }

    return <Dialogues updateNewMessageBody={onNewMessageChange}
                       sendMessage={onSendMessageClick()}
                       dialoguesPage={state}/>
}

export default DialoguesContainer


