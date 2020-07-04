import React from "react";
import classes from "./Dialogues.module.css"
import ConversationItem from "./ConversationItem/ConversationItem"
import Messages from "./Message/Messages"
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../Common/ControlForms/ControlForms";
import { maxLengthCreator, required } from "../../utilities/validators";


const maxLength40 = maxLengthCreator(40)

const DialoguesStateless = (props) => {

    let state = props.dialoguesPage
    let dialoguesElements = state.conversationData.map(c => <ConversationItem name={c.name} id={c.id} key={c.id} />);
    let messagesElements = state.messagesData.map(m => <Messages text={m.message} key={m.id} />)
    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody)
    }


    return (
        <div className={classes.dialogues}>
            <div className={classes.dialoguesItems}>
                {dialoguesElements}

            </div>
            <div className={classes.messages}>
                <div>{messagesElements}</div>
            </div>
            <AddMessageFormRedux onSubmit={addNewMessage} />
        </div>
    )
}

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                    validate={[required, maxLength40]}
                    name='newMessageBody'
                    placeholder='Enter your message here' />

                <div><button>send</button></div>
            </div>
        </form >
    )
}

const AddMessageFormRedux = reduxForm({ form: "dialogueAddMessageForm" })(AddMessageForm)

export default DialoguesStateless