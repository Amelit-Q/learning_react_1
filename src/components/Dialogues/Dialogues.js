import React from "react";
import classes from "./Dialogues.module.css"

const Dialogues = () => {
    return (
        <div className={classes.dialogues}>
            <div className={classes.dialoguesItems}>
                <div className={`${classes.conversation} ${classes.active}`}>
                    First person
                </div>
                <div className={classes.conversation}>
                    Second person
                </div>
                <div className={classes.conversation}>
                    Third person
                </div>
                <div className={classes.conversation}>
                    Fourth person
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