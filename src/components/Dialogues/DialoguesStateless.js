import React from "react";
import classes from "./Dialogues.module.css"
import ConversationItem from "./ConversationItem/ConversationItem"
import Messages from "./Message/Messages"
import { Redirect } from "react-router-dom";


const DialoguesStateless = (props) => {

    let state = props.dialoguesPage
    let dialoguesElements = state.conversationData.map(c => <ConversationItem name={c.name} id={c.id} key={c.id} />);
    let messagesElements = state.messagesData.map(m => <Messages text={m.message} key={m.id} />)
    let newMessageBody = state.newMessageBody

    let onSendMessageClick = () => {
        props.sendMessage()
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value
        props.updateNewMessageBody(body)
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

export default DialoguesStateless