import React from "react";
import "./App.css";
import HeaderStateful from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import { Route } from "react-router-dom";
import DialoguesStateful from "./components/Dialogues/DialoguesStateful";
import UsersStateful from "./components/Users/UsersStateful";
import ProfileStateful from "./components/Profile/ProfileStateful";


const App = (props) => {

    return (
        <div className={'app-wrapper'}>
            <HeaderStateful />
            <NavBar />
            <div className='app-wrapper-content'>
                <Route path='/messages' render={() =>
                    <DialoguesStateful />} />
                <Route path='/profile/:userId?' render={() =>
                    <ProfileStateful />} />
                <Route path='/users' render={() =>
                    <UsersStateful />} />
            </div>

        </div>
    );
}


export default App;
