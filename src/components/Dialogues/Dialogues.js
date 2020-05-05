import React from "react";
import classes from "./Dialogues.module.css"
import {NavLink} from "react-router-dom";

const Dialogues = () => {
    return (
        <div className={classes.dialogues}>
            <div className={classes.dialoguesItems}>
                <div className={`${classes.conversation} ${classes.active}`}>
                    <NavLink to={'conversation/1'}>First person</NavLink>
                </div>
                <div className={classes.conversation}>
                    <NavLink to={'conversation/2'}>Second person</NavLink>
                </div>
                <div className={classes.conversation}>
                    <NavLink to={'conversation/3'}>Third person</NavLink>
                </div>
                <div className={classes.conversation}>
                    <NavLink to={'conversation/4'}>Fourth person</NavLink>
                </div>
            </div>
            <div className={classes.messages}>
                <div className={classes.messages}>Heya</div>
                <div className={classes.messages}>How's it going?</div>
                <div className={classes.messages}>Fine! How about you?</div>
            </div>
        </div>
    )
}

export default Dialogues;