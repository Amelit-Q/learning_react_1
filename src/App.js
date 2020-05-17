import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import Dialogues from "./components/Dialogues/Dialogues";
import {Route} from "react-router-dom";


const App = (props) => {
debugger

    return (
        <div className={'app-wrapper'}>
            <Header/>
            <NavBar/>
            <div className={'app-wrapper-content'}>
                <Route path={'/messages'} render={() =>
                    <Dialogues store={props.store}/>}/>
                <Route path={'/profile'} render={() =>
                    <Profile profilePage={props.state.profilePage}
                             dispatch={props.dispatch}/>}/>
            </div>

        </div>
    );
}


export default App;
