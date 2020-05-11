import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import Dialogues from "./components/Dialogues/Dialogues";
import {Route} from "react-router-dom";


const App = (props) => {


    return (
            <div className={'app-wrapper'}>
                <Header/>
                <NavBar/>
                <div className={'app-wrapper-content'}>
                    <Route path={'/messages'} render={() =>
                        <Dialogues state={props.state.dialoguesPage}/>}/>
                    <Route path={'/profile'} render={() =>
                        <Profile profilePage={props.state.profilePage}
                                 addPost={props.addPost}
                                 updateNewPostText={props.updateNewPostText}/>}/>
                </div>

            </div>
    );
}


export default App;
