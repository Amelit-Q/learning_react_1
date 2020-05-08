import conversationData from "./ConversationData";
import ConversationItem from "../ConversationItem/ConversationItem";
import React from "react";

let dialoguesElements = conversationData
    .map(c => <ConversationItem name={c.name} id={c.id}/>);

export default dialoguesElements