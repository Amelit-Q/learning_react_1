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

const Dialogues = (props) => {

    let dialoguesData = [
        {id: 1, name: "John"},
        {id: 2, name: "Adam"},
        {id: 3, name: "John"},
        {id: 4, name: "John"},
    ];

    let messagesData = [
        {id: 1, message: "Heya"},
        {id: 2, message: "How's it going?"},
        {id: 3, message: "Awesome! Better than you as usual"},
        {id: 4, message: "Hey dickhead!"},
    ];

    return (
        <div className={classes.dialogues}>
            <div className={classes.dialoguesItems}>
                <ConversationItem name={dialoguesData[0].name} id={dialoguesData[0].id}/>
                <ConversationItem name={dialoguesData[1].name} id={dialoguesData[1].id}/>
                <ConversationItem name={dialoguesData[2].name} id={dialoguesData[2].id}/>
                <ConversationItem name={dialoguesData[3].name} id={dialoguesData[3].id}/>

            </div>
            <div className={classes.messages}>
                <Message text={messagesData[0].message}/>
                <Message text={messagesData[1].message}/>
                <Message text={messagesData[2].message}/>
                <Message text={messagesData[3].message}/>
            </div>
        </div>
    )
}

export default Dialogues;