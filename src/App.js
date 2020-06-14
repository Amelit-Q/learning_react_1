import React from "react";
import "./App.css";
import HeaderStateful from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import { Route } from "react-router-dom";
import DialoguesStateful from "./components/Dialogues/DialoguesStateful";
import UsersStateful from "./components/Users/UsersStateful";
import ProfileStateful from "./components/Profile/ProfileStateful";
import Login from "./components/Login/Login";


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
                <Route path='/login' render={() =>
                    <Login />} />
            </div>

        </div>
    );
}


export default App;
