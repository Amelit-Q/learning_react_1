import React from "react";
import classes from "./../Dialogues.module.css"

const Messages = (props) => {

    let newMessageElement = React.createRef()

    let addPost = (props) => {
        let text = newMessageElement.current.value
        alert(text)
    }

    return (
        <div>
            <div className={classes.messages}>
                {props.text}
            </div>
            <div>
                <textarea ref={newMessageElement}></textarea>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>

        </div>
    )
}

export default Messages