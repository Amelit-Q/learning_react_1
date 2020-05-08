import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
    {id: 1, post: "Heya! how's it going ?", likesCount: 2},
    {id: 2, post: "Fine! how about you bro?", likesCount: 23},
    {id: 3, post: "What the hell are you doing here?", likesCount: 228},
    {id: 4, post: "Hey dickhead!", likesCount: 322},
];
let conversationData = [
    {id: 1, name: "John"},
    {id: 2, name: "Adam"},
    {id: 3, name: "Scott"},
    {id: 4, name: "Steve"},
];

let messagesData = [
    {id: 1, message: "Heya"},
    {id: 2, message: "How's it going?"},
    {id: 3, message: "Awesome! Better than you as usual"},
    {id: 4, message: "Hey dickhead!"},
];

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} conversationData={conversationData} messagesData={messagesData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
