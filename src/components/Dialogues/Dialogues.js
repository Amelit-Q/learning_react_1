import React from "react";
import classes from "./Dialogues.module.css"
import ConversationItem from "./ConversationItem/ConversationItem"
import Messages from "./Message/Messages"


const Dialogues = (props) => {


    let dialoguesElements =
        props.state.conversationData.map(c => <ConversationItem name={c.name} id={c.id}/>);

    let messagesElements =
        props.state.messagesData.map(m => <Messages text={m.message}/>)

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

export default Dialogues