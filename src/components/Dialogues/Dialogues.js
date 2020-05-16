import React from "react";
import classes from "./Dialogues.module.css"
import ConversationItem from "./ConversationItem/ConversationItem"
import Messages from "./Message/Messages"
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/state";


const Dialogues = (props) => {

    let state = props.store.getState().dialoguesPage
    let dialoguesElements = state.conversationData.map(c => <ConversationItem name={c.name} id={c.id}/>);
    let messagesElements = state.messagesData.map(m => <Messages text={m.message}/>)
    let newMessageBody = state.newMessageBody

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageActionCreator())
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value
        props.store.dispatch(updateNewMessageBodyActionCreator(body))
    }

    return (
        <div className={classes.dialogues}>
            <div className={classes.dialoguesItems}>
                {dialoguesElements}

            </div>
            <div className={classes.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea value={newMessageBody}
                                   onChange={onNewMessageChange}
                                   placeholder='Enter your message here'></textarea></div>
                    <div>
                        <button onClick={onSendMessageClick}>send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogues