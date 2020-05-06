import React from "react";
import classes from "./Dialogues.module.css"
import {NavLink} from "react-router-dom";

const ConversationItem = (props) => {
    let path = '/conversation' + props.id;

    return <div className={`${classes.conversation} ${classes.active}`}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

const Message = (props) => {
    return <div className={classes.messages}>{props.text}</div>
}

const Dialogues = () => {
    return (
        <div className={classes.dialogues}>
            <div className={classes.dialoguesItems}>
                <ConversationItem name={'John'} id={'1'}/>
                <ConversationItem name={'John'} id={'2'}/>
                <ConversationItem name={'Mary'} id={'3'}/>
                <ConversationItem name={'Steve'} id={'4'}/>
            </div>
            <div className={classes.messages}>
                <Message text={'Heya!'} />
                <Message text={"How's it going!"} />
                <Message text={'Hey dickhead!'} />
            </div>
        </div>
    )
}

export default Dialogues;