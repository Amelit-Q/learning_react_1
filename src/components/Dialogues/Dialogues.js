import React from "react";
import classes from "./Dialogues.module.css"
import dialoguesElements from "./ConversationData/DialoguesElementsData";
import messagesElements from "./ConversationData/MessagesElementsData";


const Dialogues = (props) => {


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