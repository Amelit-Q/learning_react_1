import messagesData from "./MessageData";
import Messages from "../Message/Messages";
import React from "react";

let messagesElements = messagesData.map(m => <Messages text={m.message}/>)

export default messagesElements