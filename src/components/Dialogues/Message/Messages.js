import React from "react";
import classes from "./../Dialogues.module.css"

const Messages = (props) => {
    return <div className={classes.messages}>{props.text}</div>
}

export default Messages;