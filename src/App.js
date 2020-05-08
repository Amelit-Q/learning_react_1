import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import MyPosts from "./components/Profile/MyPosts/MyPosts";
import Profile from "./components/Profile/Profile";
import Dialogues from "./components/Dialogues/Dialogues";
import classes from "./App.css"
import {BrowserRouter, Route} from "react-router-dom";


const App = (props) => {


    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <NavBar/>
                <div className={'app-wrapper-content'}>
                    <Route path={'/messages'} render={() =>
                        <Dialogues conversationData={props.conversationData} messagesData={props.messagesData}/>}/>
                    <Route path={'/profile'} render={() => <Profile posts={props.posts}/>}/>
                </div>

            </div>
        </BrowserRouter>
    );
}


export default App;
