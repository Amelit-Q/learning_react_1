import React from "react";
import classes from "./Dialogues.module.css"
import ConversationItem from "./ConversationItem/ConversationItem";
import Messages from "./Message/Messages";


const Dialogues = (props) => {

    let conversationData = [
        {id: 1, name: "John"},
        {id: 2, name: "Adam"},
        {id: 3, name: "Scott"},
        {id: 4, name: "Steve"},
    ];

    let messagesData = [
        {id: 1, message: "Heya"},
        {id: 2, message: "How's it going?"},
        {id: 3, message: "Awesome! Better than you as usual"},
        {id: 4, message: "Hey dickhead!"},
    ];

    let dialoguesElements = conversationData
        .map(c => <ConversationItem name={c.name} id={c.id}/> );

    let messagesElements = messagesData.map(m => <Messages text={m.message}/>)

    return (
        <div className={classes.dialogues}>
            <div className={classes.dialoguesItems}>
                {dialoguesElements}

            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogues;