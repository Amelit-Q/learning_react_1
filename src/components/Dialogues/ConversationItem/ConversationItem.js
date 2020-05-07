import React from "react";
import classes from "./../Dialogues.module.css"
import {NavLink} from "react-router-dom";

const ConversationItem = (props) => {
    let path = '/conversation' + props.id;

    return <div className={`${classes.conversation} ${classes.active}`}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

export default ConversationItem;